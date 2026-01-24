<template>
  <section class="w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16 px-6 md:px-15 py-16 lg:py-24 bg-white">
    
    <div class="w-full lg:w-1/2 relative">
      <div class="relative overflow-hidden rounded-2xl shadow-2xl">
        <img :src="about" alt="Fábrica Alumicolt" class="w-full h-auto object-cover transform hover:scale-105 transition duration-700" />
      </div>

      <div class="absolute -bottom-6 -right-2 md:-right-6
               shadow-2xl bg-white
               px-5 py-4 md:px-7 md:py-5 rounded-2xl
               flex items-center gap-4 border border-blue-50">
        <h1 class="text-4xl md:text-5xl font-extrabold text-blue-700 leading-none">
          10
        </h1>
        <p class="text-[11px] md:text-xs font-bold text-gray-700 leading-tight uppercase tracking-widest">
          Anos de <br> <span class="text-blue-600">Excelência</span>
        </p>
      </div>
    </div>

    <div class="w-full lg:w-1/2 flex flex-col gap-8">
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <p class="text-sm md:text-base font-black text-blue-600 tracking-[0.2em] uppercase">Nossa História</p>
          <h2 class="text-3xl md:text-5xl font-bold text-gray-900 leading-[1.1]">
            Referência em Esquadrias no <span class="text-blue-700">Vale do São Francisco e Brasil</span>
          </h2>
        </div>
        
        <div class="flex flex-col gap-4 text-base md:text-lg text-gray-600 leading-relaxed">
          <p>
            Sediada em Petrolina-PE, a <strong>Alumicolt</strong> transforma projetos em realidade através de esquadrias de alumínio e vidros técnicos de alto padrão.
          </p>
          <p>
            Mais do que acabamentos, entregamos soluções que seguem rigorosamente as normas de desempenho (NBR), garantindo o máximo em isolamento acústico e sofisticação para o seu ambiente.
          </p>
        </div>
      </div>

      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-gray-700 font-medium">
        <li class="flex items-center gap-3">
          <Icon name="lucide:check-circle-2" size="22" class="text-blue-600 shrink-0" />
          <span>Normas NBR 10.821 e 15.575</span>
        </li>
        <li class="flex items-center gap-3">
          <Icon name="lucide:check-circle-2" size="22" class="text-blue-600 shrink-0" />
          <span>Equipe Técnica Própria</span>
        </li>
        <li class="flex items-center gap-3">
          <Icon name="lucide:check-circle-2" size="22" class="text-blue-600 shrink-0" />
          <span>Fachadas Glazing e Pivotantes</span>
        </li>
        <li class="flex items-center gap-3">
          <Icon name="lucide:check-circle-2" size="22" class="text-blue-600 shrink-0" />
          <span>Atendimento Nacional</span>
        </li>
      </ul>

      <div class="flex flex-col sm:flex-row gap-5 pt-4">
        <NuxtLink to="/contact"
          class="px-10 py-4 bg-blue-700 text-white text-base font-bold rounded-xl cursor-pointer hover:bg-blue-800 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-blue-200">
          Solicitar Orçamento
      </NuxtLink>
        <a href="http://alumicolt.test"
          class="px-10 py-4 bg-white text-blue-700 border-2 border-blue-700 text-base font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 text-center">
          Ver Catálogo
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import about from '/assets/images/about.png'
</script>