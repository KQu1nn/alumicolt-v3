<template>
  <section class="bg-gray-100 flex flex-col gap-10 px-6 md:px-15 py-16 md:py-25">
    
    <div class="flex flex-col items-center gap-4 text-center max-w-2xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-bold text-gray-900">Por que Alumicolt?</h1>
      <p class="text-base md:text-[18px] text-gray-700">
        O material definido para quem busca o equilíbrio entre estética moderna e funcionalidade de alto desempenho.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div 
        v-for="card in cards" 
        :key="card.title"
        class="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
      >
        <span class="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-full">
          <Icon :name="card.icon" size="24" class="text-blue-600" />
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
// Nota: No Nuxt 4, ref() é auto-importado, mas certifique-se que o script tenha acesso.
const cards = [
  {
    title: 'Engenharia de Precisão',
    description: 'Perfis cortados com alta tecnologia para encaixes perfeitos e vedação absoluta contra intempéries.',
    icon: 'lucide:pencil-ruler'
  },
  {
    title: 'Instalação rápida',
    description: 'Nossa equipe utiliza métodos de pré-montagem que reduzem o tempo de obra significativamente.',
    icon: 'lucide:clock'
  },
  {
    title: 'Alta resistência',
    description: 'Materiais anodizados que resistem à corrosão, ideais para áreas litorâneas e grandes cidades.',
    icon: 'lucide:shield-check'
  }
]
</script>