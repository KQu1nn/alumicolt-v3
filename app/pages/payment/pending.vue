<template>
  <div>
    <Nav />
    <section class="max-w-2xl mx-auto px-6 py-24 mt-20 text-center">
      <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
        <div class="text-yellow-600 text-5xl mb-4">⏳</div>
        <h1 class="text-2xl font-bold text-yellow-800 mb-2">Pagamento pendente</h1>
        <p class="text-gray-600 mb-6">Aguardando confirmação do pagamento.</p>
        <NuxtLink to="/" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block">
          Voltar para a loja
        </NuxtLink>
      </div>
    </section>
    <Footer />
  </div>
</template>