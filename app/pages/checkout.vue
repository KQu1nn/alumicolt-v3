<template>
  <div>
    <Nav />

    <section class="max-w-3xl mx-auto px-6 py-24 mt-20">
      <h1 class="text-3xl font-bold mb-8">Finalizar Compra</h1>

      <!-- Resumo do pedido -->
      <div class="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 class="font-semibold text-lg mb-4">Resumo do Pedido</h2>

        <div v-for="item in items" :key="item.id" class="flex justify-between mb-2">
          <span>{{ item.name }} (x{{ item.quantity }})</span>
          <span class="font-medium">R$ {{ (item.price * item.quantity).toFixed(2) }}</span>
        </div>

        <div class="border-t pt-4 mt-4 flex justify-between text-xl font-bold">
          <span>Total:</span>
          <span class="text-blue-600">R$ {{ total.toFixed(2) }}</span>
        </div>
      </div>

      <!-- Finalizar Compra -->
      <div v-if="!processing && !success" class="mb-6 bg-white border rounded-lg p-6">
        <h2 class="font-semibold text-lg mb-4">Finalize sua compra</h2>

        <div class="mb-4">
          <label class="block text-sm font-medium mb-2">Email</label>
          <input
            v-model="formData.email"
            type="email"
            required
            class="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
            placeholder="seu@email.com"
          />
        </div>

        <button
          @click="handleCheckoutPro"
          :disabled="loading || !formData.email"
          class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {{ loading ? "Redirecionando..." : "Finalizar Compra" }}
        </button>

        <!-- Mensagem de erro -->
        <div v-if="errorMessage" class="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p class="text-red-600 text-sm">{{ errorMessage }}</p>
        </div>
      </div>

      <!-- Loading -->
      <div v-if="processing" class="text-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p class="text-gray-600">Processando pagamento...</p>
      </div>

      <!-- Sucesso -->
      <div v-if="success" class="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div class="text-green-600 text-5xl mb-4">✓</div>
        <h2 class="text-2xl font-bold text-green-800 mb-2">Pagamento aprovado!</h2>
        <p class="text-gray-600 mb-6">Seu pedido foi confirmado com sucesso.</p>
        <NuxtLink
          to="/"
          class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block"
        >
          Voltar para a loja
        </NuxtLink>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();
const { items, total, clearCart } = useCart();

// Redireciona se carrinho vazio
if (!items.value.length) {
  navigateTo("/carrinho");
}

const loading = ref(false);
const processing = ref(false);
const success = ref(false);
const errorMessage = ref("");

const formData = ref({ email: "" });

// Checkout Pro (Redireciona para Mercado Pago)
const handleCheckoutPro = async () => {
  if (!formData.value.email) {
    errorMessage.value = "Informe seu email";
    return;
  }

  loading.value = true;
  errorMessage.value = "";

  try {
    const response: any = await $fetch("/api/create-preference", {
      method: "POST",
      body: {
        items: items.value,
        total: total.value,
        payerEmail: formData.value.email,
        paymentMethod: "card", // só para criar preferência
      },
    });

    if (!response.initPoint) throw new Error("Erro ao iniciar Checkout Mercado Pago");

    window.location.href = response.initPoint; // redireciona
  } catch (error: any) {
    errorMessage.value = error.message || "Erro ao processar pagamento";
    loading.value = false;
  }
};
</script>
