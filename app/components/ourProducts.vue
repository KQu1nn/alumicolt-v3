<template>
  <section class="w-full px-6 md:px-15 py-16 md:py-20 bg-gray-100">
    <div class="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
      <div class="flex flex-col gap-2">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Nossos Produtos</h2>
        <p class="text-base md:text-lg text-gray-700">Qualidade e sofisticação em cada detalhe.</p>
      </div>
      
      <a href="http://alumicolt.test"
        class="hidden md:flex flex-row items-center gap-3 cursor-pointer font-bold px-6 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow-md">
        Ir para a Loja
        <Icon name="lucide:shopping-cart" size="20" />
    </a>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
      <div v-for="card in cardsProducts" :key="card.title" 
           class="border border-gray-200 h-auto py-15 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
        
        <div>
          <span class="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-xl mb-4">
            <Icon :name="card.icon" size="26" class="text-blue-600" />
          </span>

          <div class="flex flex-col gap-2">
            <h3 class="text-xl font-bold text-gray-900">{{ card.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full flex justify-center mt-10">
      <a href="http://alumicolt.test/"
                class="w-full sm:w-auto text-center text-white bg-blue-600 font-bold px-10 py-4 rounded-xl cursor-pointer hover:bg-blue-700 transition shadow-lg">
        Ver Todos os Produtos
      </a>
    </div>
  </section>
</template>

<script setup>
const cardsProducts = ref([
  {
    title: 'Janelas de Alumínio',
    description: 'Isolamento acústico e térmico superior com design moderno e variadas cores.',
    icon: 'lucide:grid-2x2'
  },
  {
    title: 'Vidros Temperados',
    description: 'Segurança e elegância para box de banheiro, sacadas e divisórias de ambiente.',
    icon: 'lucide:flip-horizontal'
  },
  {
    title: 'Portas de Alumínio',
    description: 'Design imponente com abertura pivotante ou de correr, unindo leveza, alta durabilidade e acabamento premium',
    icon: 'lucide:warehouse'
  },
  {
    title: 'Projetos Especiais',
    description: 'Soluções personalizadas para arquitetos e construtoras buscando inovação.',
    icon: 'lucide:hard-hat'
  }
])
</script>