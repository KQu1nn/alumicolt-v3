<template>
  <div>
    <Nav />

    <!-- HERO -->
    <section class="bg-gray-50 mt-20">
      <div class="max-w-7xl mx-auto px-6 py-16">
        <h1 class="text-4xl font-bold mb-3">Nossos Produtos</h1>
        <p class="text-gray-600 max-w-2xl">
          Encontre as melhores esquadrias, janelas e vidros para sua obra com qualidade garantida.
        </p>
      </div>
    </section>

    <!-- CONTEÚDO -->
    <section class="max-w-7xl mx-auto px-6 py-16">
      <div class="flex flex-col lg:flex-row gap-10">

        <!-- FILTROS -->
        <aside class="lg:w-1/4 w-full space-y-10">

          <!-- CATEGORIAS -->
          <div>
            <h2 class="font-semibold text-lg mb-4 flex items-center gap-2">
              <Icon name="lucide:boxes" size="18" />
              Categorias
            </h2>

            <ul class="space-y-3">
              <li @click="selectCategory(null)" class="flex items-center gap-3 cursor-pointer group">
                <span class="w-4 h-4 border rounded flex items-center justify-center"
                  :class="!selectedCategory ? 'bg-blue-600 border-blue-600' : 'border-gray-400'">
                  <Icon v-if="!selectedCategory" name="lucide:check" size="12" class="text-white" />
                </span>
                <span class="group-hover:text-blue-600"
                  :class="!selectedCategory && 'font-semibold text-blue-600'">Todas</span>
              </li>

              <li v-for="cat in categories" :key="cat.id" @click="selectCategory(cat)"
                class="flex items-center gap-3 cursor-pointer group">
                <span class="w-4 h-4 border rounded flex items-center justify-center"
                  :class="selectedCategory?.id === cat.id ? 'bg-blue-600 border-blue-600' : 'border-gray-400'">
                  <Icon v-if="selectedCategory?.id === cat.id" name="lucide:check" size="12" class="text-white" />
                </span>
                <span class="group-hover:text-blue-600"
                  :class="selectedCategory?.id === cat.id && 'font-semibold text-blue-600'">
                  {{ cat.name }}
                </span>
              </li>
            </ul>
          </div>

          <!-- TAMANHO -->
          <div v-if="sizeFilters.length">
            <h2 class="font-semibold text-lg mb-4 flex items-center gap-2">
              <Icon name="lucide:arrows-expand" size="18" />
              Tamanhos
            </h2>

            <ul class="space-y-3">
              <li @click="selectSize(null)" class="flex items-center gap-3 cursor-pointer group">
                <span class="w-4 h-4 border rounded flex items-center justify-center"
                  :class="!selectedSize ? 'bg-blue-600 border-blue-600' : 'border-gray-400'">
                  <Icon v-if="!selectedSize" name="lucide:check" size="12" class="text-white" />
                </span>
                <span class="group-hover:text-blue-600"
                  :class="!selectedSize && 'font-semibold text-blue-600'">Todos</span>
              </li>

              <li v-for="size in sizeFilters" :key="size" @click="selectSize(size)"
                class="flex items-center gap-3 cursor-pointer group">
                <span class="w-4 h-4 border rounded flex items-center justify-center"
                  :class="selectedSize === size ? 'bg-blue-600 border-blue-600' : 'border-gray-400'">
                  <Icon v-if="selectedSize === size" name="lucide:check" size="12" class="text-white" />
                </span>
                <span class="group-hover:text-blue-600" :class="selectedSize === size && 'font-semibold text-blue-600'">
                  {{ size }}
                </span>
              </li>
            </ul>
          </div>

          <!-- ACABAMENTOS -->
          <div v-if="finishes.length">
            <h2 class="font-semibold text-lg mb-4 flex items-center gap-2">
              <Icon name="lucide:palette" size="18" />
              Acabamentos
            </h2>

            <ul class="space-y-3">
              <li @click="selectFinish(null)" class="flex items-center gap-3 cursor-pointer group">
                <span class="w-4 h-4 border rounded flex items-center justify-center"
                  :class="!selectedFinish ? 'bg-blue-600 border-blue-600' : 'border-gray-400'">
                  <Icon v-if="!selectedFinish" name="lucide:check" size="12" class="text-white" />
                </span>
                <span class="group-hover:text-blue-600"
                  :class="!selectedFinish && 'font-semibold text-blue-600'">Todos</span>
              </li>

              <li v-for="finish in finishes" :key="finish.id" @click="selectFinish(finish)"
                class="flex items-center gap-3 cursor-pointer group">
                <span class="w-4 h-4 border rounded flex items-center justify-center"
                  :class="selectedFinish?.id === finish.id ? 'bg-blue-600 border-blue-600' : 'border-gray-400'">
                  <Icon v-if="selectedFinish?.id === finish.id" name="lucide:check" size="12" class="text-white" />
                </span>
                <span class="group-hover:text-blue-600"
                  :class="selectedFinish?.id === finish.id && 'font-semibold text-blue-600'">
                  {{ finish.name }}
                </span>
              </li>
            </ul>
          </div>

        </aside>

        <!-- PRODUTOS -->
        <div class="lg:w-3/4 w-full">
          <div v-if="loading" class="text-gray-500">Carregando produtos...</div>

          <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <NuxtLink v-for="product in products" :key="product.id" :to="`/loja/${product.slug}`"
              class="block border border-gray-300 rounded-xl overflow-hidden hover:shadow-xl transition group">
              <img :src="product.images?.[0]" :alt="product.name"
                class="h-48 w-full object-contain bg-gray-100 group-hover:scale-105 transition" />


              <div class="p-4 space-y-2">
                <h3 class="font-semibold text-lg group-hover:text-blue-600 transition">
                  {{ product.name }} {{ product.width && product.height ? `${product.width} x ${product.height}` : ''
                  }}
                </h3>
                <p class="text-sm text-gray-600 line-clamp-2">{{ product.description }}</p>

                <div class="flex flex-col gap-1 pt-2">
                  <span class="text-sm text-gray-500">
                    Tamanho: {{ product.width }} x {{ product.height }}
                  </span>
                  <span class="text-xl font-bold text-blue-600">
                    R$ {{ Number(product.price).toFixed(2) }}
                  </span>
                </div>

                <div class="flex justify-end pt-2">
                  <Icon name="lucide:arrow-right" size="18"
                    class="text-gray-400 group-hover:text-blue-600 transition" />
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>

      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
const { products, fetchProducts, loading } = useProducts()
const { categories, fetchCategories } = useCategories()
const { finishes, fetchFinishes } = useFinishes()

const selectedCategory = ref<any | null>(null)
const selectedFinish = ref<any | null>(null)
const selectedSize = ref<string | null>(null)

const sizeFilters = ref<string[]>([])

/* CATEGORIA */
const selectCategory = async (category: any | null) => {
  selectedCategory.value = category
  selectedFinish.value = null
  selectedSize.value = null

  if (category) {
    await fetchFinishes(category.id)
    await fetchProducts(category.slug)
    updateSizeFilters()
  } else {
    finishes.value = []
    await fetchProducts()
    sizeFilters.value = []
  }
}

/* ACABAMENTO */
const selectFinish = async (finish: any | null) => {
  selectedFinish.value = finish
  await fetchProducts(
    selectedCategory?.value?.slug,
    finish?.id,
    selectedSize?.value
  )
}

/* TAMANHO */
const selectSize = async (size: string | null) => {
  selectedSize.value = size
  await fetchProducts(
    selectedCategory?.value?.slug,
    selectedFinish?.value?.id,
    size
  )
}

/* FILTRO DE TAMANHOS DISPONÍVEIS */
const updateSizeFilters = () => {
  const sizes = new Set<string>()
  products.value.forEach(p => {
    if (p.width && p.height) sizes.add(`${p.width} x ${p.height}`)
  })
  sizeFilters.value = Array.from(sizes)
}

onMounted(async () => {
  await fetchCategories()
  await fetchProducts()
  updateSizeFilters()
})
</script>
