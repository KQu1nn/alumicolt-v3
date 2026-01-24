<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- HEADER -->
    <header class="bg-white shadow p-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold text-gray-800">Admin – Categorias & Acabamentos</h1>
      <button
        @click="logout"
        class="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
      >
        Sair
      </button>
    </header>

    <div class="flex flex-1">
      <!-- ASIDE FIXO À ESQUERDA COM 100% ALTURA -->
      <aside class="w-64 flex-shrink-0 h-full bg-white shadow overflow-auto">
        <AdminAside />
      </aside>

      <!-- CONTEÚDO PRINCIPAL -->
      <main class="flex-1 px-6 py-12 space-y-12">
        <!-- ADICIONAR CATEGORIA -->
        <section class="bg-white p-6 rounded-xl shadow">
          <h2 class="font-semibold text-lg mb-4">Nova Categoria</h2>

          <form @submit.prevent="addCategory" class="flex gap-4">
            <input
              v-model="categoryForm.name"
              placeholder="Nome"
              class="border rounded px-4 py-2 w-full"
            />

            <button class="bg-blue-600 text-white px-4 py-2 rounded">
              Adicionar
            </button>
          </form>
        </section>

        <!-- LISTA DE CATEGORIAS -->
        <section class="bg-white p-6 rounded-xl shadow space-y-6">
          <h2 class="font-semibold text-lg">Categorias</h2>

          <div v-for="cat in categories" :key="cat.id" class="border p-4 rounded-lg">
            <div class="flex justify-between items-center">
              <strong>{{ cat.name }}</strong>

              <div class="flex gap-4 items-center">
                <button @click="selectCategory(cat)" class="text-blue-600 text-sm">
                  Gerenciar cores
                </button>

                <button @click="removeCategory(cat)" class="text-red-600 text-sm">
                  Excluir
                </button>
              </div>
            </div>

            <!-- CORES -->
            <div v-if="selectedCategory?.id === cat.id" class="mt-6 space-y-4">
              <h3 class="font-medium">Acabamentos</h3>

              <div class="flex gap-2">
                <input
                  v-model="finishForm.name"
                  placeholder="Nome da cor"
                  class="border rounded px-3 py-2 w-full"
                />

                <!-- Aqui: type="button" corrige o problema -->
                <button
                  type="button"
                  @click="addFinish"
                  class="bg-green-600 text-white px-4 rounded"
                >
                  +
                </button>
              </div>

              <ul class="space-y-2">
                <li
                  v-for="finish in finishes"
                  :key="finish.id"
                  class="flex justify-between items-center border px-3 py-2 rounded"
                >
                  {{ finish.name }}

                  <button @click="removeFinish(finish.id)" class="text-red-600 text-sm">
                    remover
                  </button>
                </li>
              </ul>
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

// Categories
const { categories, fetchCategories, createCategory, deleteCategory } = useCategories()

// Finishes
const { finishes, fetchFinishes, createFinish, deleteFinish } = useFinishes()

const selectedCategory = ref<any>(null)

const categoryForm = reactive({ name: '' })
const finishForm = reactive({ name: '' })

const slugify = (v: string) => v.toLowerCase().trim().replace(/\s+/g, '-')

// Adicionar categoria
const addCategory = async () => {
  if (!categoryForm.name.trim()) return
  await createCategory({ name: categoryForm.name, slug: slugify(categoryForm.name) })
  categoryForm.name = ''
  await fetchCategories()
}

// Selecionar categoria e carregar cores
const selectCategory = async (cat: any) => {
  selectedCategory.value = cat
  await fetchFinishes(cat.id)
}

// Adicionar acabamento
const addFinish = async () => {
  if (!selectedCategory.value || !finishForm.name.trim()) return
  await createFinish({
    name: finishForm.name,
    slug: slugify(finishForm.name),
    category_id: selectedCategory.value.id
  })
  finishForm.name = ''
  await fetchFinishes(selectedCategory.value.id)
}

// Remover acabamento
const removeFinish = async (id: string) => {
  await deleteFinish(id)
  await fetchFinishes(selectedCategory.value.id)
}

// Remover categoria
const removeCategory = async (cat: any) => {
  const ok = confirm(
    `Tem certeza que deseja excluir a categoria "${cat.name}"?\nTodos os acabamentos e produtos vinculados serão removidos.`
  )
  if (!ok) return

  await deleteCategory(cat.id)
  if (selectedCategory.value?.id === cat.id) selectedCategory.value = null
  await fetchCategories()
}

// Logout
const logout = async () => {
  await supabase.auth.signOut()
  router.push('/login')
}

onMounted(fetchCategories)
</script>
