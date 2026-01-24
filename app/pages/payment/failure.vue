<template>
  <div>
    <Nav />
    <section class="max-w-2xl mx-auto px-6 py-24 mt-20 text-center">
      <div class="bg-red-50 border border-red-200 rounded-lg p-8">
        <div class="text-red-600 text-5xl mb-4">✕</div>
        <h1 class="text-2xl font-bold text-red-800 mb-2">Pagamento recusado</h1>
        <p class="text-gray-600 mb-6">Não foi possível processar o pagamento.</p>
        <NuxtLink to="/checkout" class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 inline-block">
          Tentar novamente
        </NuxtLink>
      </div>
    </section>
    <Footer />
  </div>
</template>