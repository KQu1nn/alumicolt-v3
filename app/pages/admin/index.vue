<template>
  <div class="min-h-screen bg-gray-50">
    <!-- HEADER -->
    <header class="bg-white shadow p-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-800">Admin – Produtos</h1>
      <button @click="logout" class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
        Sair
      </button>
    </header>

    <div class="flex">
      <!-- ASIDE FIXO À ESQUERDA -->
      <div class="w-64 flex-shrink-0">
        <AdminAside />
      </div>

      <!-- CONTEÚDO PRINCIPAL -->
      <main class="flex-1 px-6 py-12">
        <!-- FORMULÁRIO -->
        <section class="bg-white p-6 rounded-xl shadow mb-12">
          <h2 class="text-xl font-semibold mb-6">Adicionar Produto</h2>

          <form @submit.prevent="addProduct" class="space-y-4">
            <input v-model="form.name" placeholder="Nome do produto" class="w-full border rounded px-4 py-2" required />

            <input v-model="form.price" placeholder="Preço" class="w-full border rounded px-4 py-2" required />

            <!-- CATEGORIA -->
            <select v-model="form.category_id" required class="w-full border rounded px-4 py-2">
              <option value="">Selecione a categoria</option>
              <option v-for="cat in categories" :key="cat.id" :value="cat.id">
                {{ cat.name }}
              </option>
            </select>

            <!-- CORES -->
            <select v-model="form.finish_id" :disabled="!form.category_id" required class="w-full border rounded px-4 py-2">
              <option value="">Selecione a cor</option>
              <option v-for="finish in finishes" :key="finish.id" :value="finish.id">
                {{ finish.name }}
              </option>
            </select>

            <!-- TAMANHO -->
            <div class="flex gap-4">
              <input v-model="form.width" type="number" placeholder="Largura (cm)" class="w-1/2 border rounded px-4 py-2" required />
              <input v-model="form.height" type="number" placeholder="Altura (cm)" class="w-1/2 border rounded px-4 py-2" required />
            </div>

            <!-- IMAGENS -->
            <div>
              <label class="block font-medium mb-1">Imagens do produto (até 4)</label>

              <button type="button" @click="triggerFileInput"
                class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Selecionar Imagens
              </button>

              <input type="file" ref="fileInput" accept="image/*" multiple @change="onFileChange" class="hidden" />

              <div v-if="imageFiles.length" class="mt-2 flex gap-2 flex-wrap">
                <div v-for="(file, index) in imageFiles" :key="index" class="border p-2 rounded flex items-center gap-2">
                  <span class="text-sm">{{ file.name }}</span>
                  <button type="button" @click="removeImage(index)" class="text-red-600 hover:underline">x</button>
                </div>
              </div>
            </div>

            <textarea v-model="form.description" placeholder="Descrição" class="w-full border rounded px-4 py-2" required />

            <button type="submit" class="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition">
              Adicionar Produto
            </button>
          </form>
        </section>

        <!-- LISTAGEM -->
        <section class="bg-white p-6 rounded-xl shadow">
          <h2 class="text-xl font-semibold mb-6">Produtos Cadastrados</h2>

          <div class="space-y-4">
            <div v-for="product in products" :key="product.id"
              class="flex justify-between items-center border p-4 rounded-lg hover:shadow-md transition">
              <div class="flex items-center gap-4">
                <img v-if="product.images?.[0]" :src="product.images[0]" class="w-16 h-16 object-cover rounded" />

                <div>
                  <strong class="block">{{ product.name }}</strong>
                  <p class="text-sm text-gray-500">
                    {{ product.categories?.name }}
                    • {{ product.finishes?.name }}
                    • {{ product.width }} x {{ product.height }} cm
                    • R$ {{ Number(product.price).toFixed(2) }}
                  </p>
                </div>
              </div>

              <button @click="removeProduct(product)" class="text-red-600 hover:underline">
                Remover
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  middleware: 'auth-admin'
})


import { useRouter } from 'vue-router'

const supabase = useSupabaseClient()
const router = useRouter()

const { products, fetchProducts } = useProducts()
const { categories, fetchCategories } = useCategories()
const { finishes, fetchFinishes } = useFinishes()

const form = reactive({
  name: '',
  description: '',
  price: '',
  category_id: '',
  finish_id: '',
  width: '',
  height: ''
})

watch(() => form.category_id, async (categoryId) => {
  form.finish_id = ''
  if (!categoryId) return
  await fetchFinishes(categoryId)
})

const imageFiles = ref<File[]>([])
const fileInput = ref<HTMLInputElement | null>(null)

/* FILES */
const triggerFileInput = () => fileInput.value?.click()

const onFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (!target.files?.length) return
  const files = Array.from(target.files).slice(0, 4) // limitar a 4 imagens
  imageFiles.value = files
}

const removeImage = (index: number) => {
  imageFiles.value.splice(index, 1)
}

/* SLUG */
const generateSlug = (name: string) => {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
}

/* ADD PRODUCT */
const addProduct = async () => {
  if (!imageFiles.value.length) {
    alert('Selecione ao menos uma imagem')
    return
  }

  if (!form.category_id) {
    alert('Selecione uma categoria')
    return
  }

  if (!form.width || !form.height) {
    alert('Informe largura e altura do produto')
    return
  }

  const uploadedUrls: string[] = []

  for (const file of imageFiles.value) {
    const fileExt = file.name.split('.').pop()
    const fileName = `${crypto.randomUUID()}.${fileExt}`

    const { error: uploadError } = await supabase.storage
      .from('products')
      .upload(fileName, file)
    if (uploadError) {
      alert('Erro ao enviar imagem: ' + uploadError.message)
      return
    }

    const { data } = supabase.storage.from('products').getPublicUrl(fileName)
    uploadedUrls.push(data.publicUrl)
  }

  const { error } = await supabase.from('products').insert([{
    name: form.name.trim(),
    slug: generateSlug(form.name),
    description: form.description.trim(),
    price: Number(form.price.toString().replace(',', '.')),
    category_id: form.category_id,
    finish_id: form.finish_id,
    width: Number(form.width),
    height: Number(form.height),
    images: uploadedUrls,
    active: true
  }])

  if (error) {
    console.error(error)
    alert('Erro ao salvar produto')
    return
  }

  await fetchProducts()
  Object.keys(form).forEach(k => form[k] = '')
  imageFiles.value = []
  finishes.value = []
}

/* REMOVE */
const removeProduct = async (product: any) => {
  if (product.images?.length) {
    const paths = product.images.map((img: string) => img.split('/').pop())
    await supabase.storage.from('products').remove(paths)
  }

  await supabase.from('products').delete().eq('id', product.id)
  await fetchProducts()
}

/* LOGOUT */
const logout = async () => {
  await supabase.auth.signOut()
  router.push('/login')
}

onMounted(async () => {
  await fetchCategories()
  await fetchProducts()
})
</script>
