<template>
  <div>
    <Nav />
    <section class="max-w-2xl mx-auto px-6 py-24 mt-20 text-center">
      <div class="bg-green-50 border border-green-200 rounded-lg p-8">
        <div class="text-green-600 text-5xl mb-4">✓</div>
        <h1 class="text-2xl font-bold text-green-800 mb-2">Pagamento confirmado!</h1>
        <p class="text-gray-600 mb-6">Seu pedido foi aprovado com sucesso.</p>
        <NuxtLink to="/" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block">
          Voltar para a loja
        </NuxtLink>
      </div>
    </section>
    <Footer />
  </div>
</template>