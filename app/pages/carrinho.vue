<template>
  <div>
    <Nav />

    <section class="max-w-4xl mx-auto px-6 py-24 mt-20">
      <h1 class="text-3xl font-bold mb-8">Carrinho</h1>

      <div v-if="items.length" class="space-y-6">
        <div v-for="item in items" :key="item.id" class="flex gap-6 border-b pb-6 items-center">
          <!-- Imagem -->
          <img :src="item.images?.[0] || item.image" class="w-24 h-24 object-cover rounded-lg" />

          <!-- Info -->
          <div class="flex-1">
            <h2 class="font-semibold text-lg">{{ item.name }}</h2>

            <!-- Quantidade -->
            <div class="flex items-center gap-3 mt-2">
              <button @click="decrease(item.id)" class="w-8 h-8 border rounded hover:bg-gray-100">
                −
              </button>

              <span class="font-medium">{{ item.quantity }}</span>

              <button @click="increase(item.id)" class="w-8 h-8 border rounded hover:bg-gray-100">
                +
              </button>
            </div>

            <p class="font-bold text-blue-600 mt-2">
              R$ {{ (item.price * item.quantity).toFixed(2) }}
            </p>
          </div>

          <!-- Remover -->
          <button @click="removeFromCart(item.id)" class="text-red-500 hover:underline">
            Remover
          </button>
        </div>

        <!-- Total -->
        <div class="flex justify-between items-center pt-6">
          <p class="text-xl font-bold">Total: R$ {{ total.toFixed(2) }}</p>

          <NuxtLink to="/checkout" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block">
            Finalizar Compra
          </NuxtLink>
        </div>
      </div>

      <p v-else class="text-gray-500">Seu carrinho está vazio.</p>
    </section>

    <Footer />
  </div>
</template>

<script setup>
const { items, increase, decrease, removeFromCart, total } = useCart()
</script>
