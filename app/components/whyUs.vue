<template>
  <section class="relative bg-gray-100 flex flex-col gap-12 px-6 md:px-15 py-20 md:py-28">
    <div class="flex flex-col items-center text-center max-w-3xl mx-auto gap-6">
      <span class="uppercase tracking-widest text-blue-600 font-semibold text-sm">Excelência em Alumínio</span>
      <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Por que escolher a <span class="text-blue-600">Alumicolt</span>?
      </h1>
      <p class="text-base md:text-lg text-gray-700 max-w-2xl leading-relaxed">
        Somos especialistas em soluções sob medida que unem <b>design moderno, precisão técnica</b> e <b>resistência incomparável</b> para todos os tipos de projeto.
      </p>

      <!-- Botões -->
      <div class="flex flex-col sm:flex-row gap-4 mt-4">
        <NuxtLink
          to="/projects"
          class="px-8 py-3 rounded-xl bg-blue-600 text-white font-bold shadow-md hover:bg-blue-700 transition"
        >
          Ver Projetos
        </NuxtLink>
        <NuxtLink
          to="/services"
          class="px-8 py-3 rounded-xl border border-blue-600 text-blue-600 font-bold hover:bg-blue-50 transition"
        >
          Nossos Serviços
        </NuxtLink>
      </div>
    </div>

    <!-- Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div
        v-for="card in cards"
        :key="card.title"
        class="bg-white border border-gray-100 rounded-2xl p-8 flex flex-col items-start gap-4 text-left shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      >
        <span class="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-xl">
          <Icon :name="card.icon" size="26" class="text-blue-600" />
        </span>
        <h3 class="text-xl font-bold text-gray-900">{{ card.title }}</h3>
        <p class="text-gray-600 leading-relaxed">
          {{ card.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    title: 'Engenharia de Precisão',
    description: 'Perfis cortados com alta tecnologia para encaixes perfeitos e vedação absoluta contra intempéries.',
    icon: 'lucide:pencil-ruler'
  },
  {
    title: 'Instalação Rápida',
    description: 'Nossa equipe utiliza métodos de pré-montagem que reduzem o tempo de obra significativamente.',
    icon: 'lucide:clock'
  },
  {
    title: 'Alta Resistência',
    description: 'Materiais anodizados que resistem à corrosão, ideais para áreas litorâneas e grandes cidades.',
    icon: 'lucide:shield-check'
  }
]
</script>