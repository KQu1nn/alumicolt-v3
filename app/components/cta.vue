<template>
  <section class="bg-blue-600 text-white flex flex-col gap-8 items-center py-16 px-6 md:py-20 text-center">
    
    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl leading-tight">
      Pronto para modernizar seu ambiente?
    </h2>

    <p class="w-full md:max-w-2xl text-base md:text-lg text-blue-100 leading-relaxed">
      Acesse nossa loja online para ver produtos a pronta entrega ou entre na área do cliente para acompanhar seu projeto personalizado.
    </p>

    <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
      <a href="https://alumicolt-test.rf.gd"
        class="cursor-pointer px-8 py-4 font-bold bg-white text-blue-700 rounded-xl hover:bg-gray-100 transition-all text-center shadow-lg"
      >
        Ir para Loja Online
    </a>
      
      <NuxtLink to="/contact"
        class="cursor-pointer px-8 py-4 font-bold bg-blue-800/40 text-white border border-blue-400/30 backdrop-blur-sm rounded-xl hover:bg-blue-700 transition-all text-center"
      >
        Solicitar Orçamento
      </NuxtLink >
    </div>

  </section>
</template>