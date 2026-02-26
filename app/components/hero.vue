<template>
  <section 
    class="relative w-full min-h-screen flex items-center bg-center bg-no-repeat bg-cover overflow-hidden" 
    :style="{ backgroundImage: `url(${heroImage})` }"
  >
    
    <div class="absolute inset-0 bg-black/50 md:bg-gradient-to-r md:from-black/90 md:via-black/40 md:to-transparent" />

    <div class="relative z-10 w-full px-6 md:px-15 lg:max-w-4xl py-20 md:py-0">
      
      <p class="mb-4 text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] bg-blue-600 px-3 py-1.5 rounded w-fit">
        Excelência em Acabamentos
      </p>

      <h1 class="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
        Esquadrias de alumínio que <span class="text-blue-400">elevam o padrão</span> da sua obra
      </h1>

      <p class="mt-4 text-white/90 text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed">
        Design sofisticado, vedação impecável e durabilidade garantida. O acabamento que sua construção merece.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 mt-8">
        <a href="https://alumicolt-test.rf.gd"
          class="flex h-14 items-center justify-center rounded-lg bg-blue-600 px-10 text-white text-lg font-bold hover:bg-blue-700 transition-all shadow-xl cursor-pointer">
          Ver Produtos
      </a>
        
        <NuxtLink to="/contact"
          class="flex h-14 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md border border-white/30 px-10 text-white text-lg font-bold hover:bg-white/20 transition-all cursor-pointer">
          Solicitar Orçamento
    </NuxtLink>
      </div>

    </div>
  </section>
</template>

<script setup>
import heroImage from '@/assets/images/hero02.png'
</script>

<style scoped>
/* Garante que o fundo sempre cubra a tela em dispositivos móveis, ignorando barras de navegação do browser */
section {
  min-height: 100vh; /* Fallback */
  min-height: 100svh; /* Small Viewport Height (perfeito para mobile) */
}
</style>