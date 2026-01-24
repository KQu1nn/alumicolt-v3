<template>
  <div>
    <Nav />

    <section class="max-w-7xl mx-auto px-6 py-20 mt-20">
      <!-- Loading -->
      <div v-if="loading" class="text-gray-500">
        Carregando...
      </div>

      <!-- Produto encontrado -->
      <div v-else-if="product" class="grid lg:grid-cols-2 gap-12">
        <!-- Imagens -->
        <div>
          <!-- Imagem principal com zoom -->
          <div class="rounded-xl overflow-hidden border border-gray-400 relative">
            <img :src="mainImage" :alt="product.name"
              class="w-full h-[420px] object-contain transition-transform duration-300 ease-in-out transform hover:scale-150 cursor-zoom-in" />
          </div>

          <!-- Miniaturas -->
          <div class="flex gap-2 mt-4">
            <img v-for="(img, index) in product.images" :key="index" :src="img"
              :alt="`Imagem ${index + 1} de ${product.name}`"
              class="w-20 h-20 object-cover rounded border cursor-pointer hover:scale-105 transition"
              :class="img === mainImage ? 'border-blue-600' : 'border-gray-300'" @click="mainImage = img" />
          </div>
        </div>


        <!-- Informações -->
        <div class="space-y-6">
          <h1 class="text-3xl font-bold">
            {{ product.name }}
            <span v-if="product.width && product.height" class="text-base text-gray-500">
              {{ product.width }} x {{ product.height }} cm
            </span>
          </h1>
          <p class="text-gray-600">{{ product.description }}</p>
          <p class="text-3xl font-bold text-blue-600">
            R$ {{ Number(product.price).toFixed(2) }}
          </p>

          <!-- QUANTIDADE -->
          <div class="flex items-center gap-4 mt-4">
            <button @click="decreaseQuantity" class="px-3 py-1 border rounded hover:bg-gray-100">
              −
            </button>

            <span class="font-medium text-lg">{{ quantity }}</span>

            <button @click="increaseQuantity" class="px-3 py-1 border rounded hover:bg-gray-100">
              +
            </button>
          </div>

          <button @click="handleAddToCart" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 mt-4">
            Adicionar ao Carrinho
          </button>
        </div>
      </div>

      <!-- Produto não encontrado -->
      <div v-else class="text-center text-gray-500">
        Produto não encontrado.
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()

// hooks
const { products, fetchProducts, loading } = useProducts()
const { addToCart } = useCart()

// quantidade inicial
const quantity = ref(1)

// produto computado
const product = computed(() =>
  products.value.find(p => p.slug === route.params.slug)
)

// imagem principal
const mainImage = ref<string | null>(null)

// fetch de produtos se ainda não carregou
onMounted(async () => {
  if (!products.value.length) await fetchProducts()
  if (product.value) mainImage.value = product.value.images?.[0] ?? null
})

// aumentar/diminuir quantidade
const increaseQuantity = () => quantity.value++
const decreaseQuantity = () => {
  if (quantity.value > 1) quantity.value--
}

// função que chama o addToCart já com quantidade
const handleAddToCart = () => {
  if (!product.value) return
  addToCart({ ...product.value, quantity: quantity.value })
  quantity.value = 1
}

// atualizar a imagem principal quando o produto mudar
watch(product, (newProd) => {
  if (newProd) mainImage.value = newProd.images?.[0] ?? null
})
</script>
