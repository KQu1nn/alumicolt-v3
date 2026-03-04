<template>
  <section class="w-full px-6 md:px-15 py-16 md:py-20 bg-gray-100">
    <!-- Cabeçalho -->
    <div class="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
      <div class="flex flex-col gap-2">
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900">Nossos Produtos</h2>
        <p class="text-base md:text-lg text-gray-700">Qualidade e sofisticação em cada detalhe.</p>
      </div>

      <a
        href="https://alumicolt-test.rf.gd"
        class="hidden md:flex flex-row items-center gap-3 cursor-pointer font-bold px-6 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
      >
        Ir para a Loja
        <Icon name="lucide:shopping-cart" size="20" />
      </a>
    </div>

    <!-- Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
      <NuxtLink
        v-for="card in visibleProducts"
        :key="card.title"
        :to="`/produtos/${card.slug}`"
        class="border border-gray-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between group cursor-pointer"
      >
        <div class="flex flex-col gap-3">
          <!-- Ícone -->
          <span class="w-11 h-11 bg-blue-100 flex items-center justify-center rounded-xl group-hover:bg-blue-200 transition-colors">
            <Icon :name="card.icon" size="24" class="text-blue-600" />
          </span>

          <!-- Texto -->
          <h3 class="text-lg font-bold text-gray-900 leading-snug">{{ card.title }}</h3>
          <p class="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {{ card.description }}
          </p>
        </div>

        <!-- Ver detalhes -->
        <div class="flex items-center gap-1 mt-5 text-blue-600 font-semibold text-sm">
          Ver detalhes
          <Icon name="lucide:arrow-right" size="16" class="group-hover:translate-x-1 transition-transform" />
        </div>
      </NuxtLink>
    </div>

    <!-- Botão Ver Todos -->
    <div class="w-full flex justify-center mt-10">
      <button
        v-if="!showAll"
        @click="showAll = true"
        class="w-full sm:w-auto text-center text-white bg-blue-600 font-bold px-8 py-3 rounded-xl cursor-pointer hover:bg-blue-700 transition shadow-md"
      >
        Ver Todos os Produtos
      </button>
      <button
        v-else
        @click="showAll = false"
        class="w-full sm:w-auto text-center text-white bg-gray-500 font-bold px-8 py-3 rounded-xl cursor-pointer hover:bg-gray-600 transition shadow-md"
      >
        Ver Menos
      </button>
    </div>
  </section>
</template>

<script setup>
const showAll = ref(false)

const cardsProducts = ref([
  {
    title: 'Fachadas Glazing',
    slug: 'fachadas-glazing',
    description: 'Soluções sofisticadas em pele de vidro que unem estética contemporânea, eficiência térmica e máxima luminosidade.',
    icon: 'lucide:building-2'
  },
  {
    title: 'Ripados',
    slug: 'ripados',
    description: 'Perfis em alumínio com design moderno, ideais para compor fachadas e ambientes internos com leveza e ventilação controlada.',
    icon: 'lucide:align-justify'
  },
  {
    title: 'Gradis e Portões',
    slug: 'gradis-e-portoes',
    description: 'Segurança e durabilidade com acabamento refinado. Produzidos sob medida para atender projetos residenciais e corporativos.',
    icon: 'lucide:fence'
  },
  {
    title: 'Portas de Entrada',
    slug: 'portas-de-entrada',
    description: 'Portas robustas, elegantes e de alto padrão, desenvolvidas para oferecer segurança e impacto visual logo na chegada.',
    icon: 'lucide:door-open'
  },
  {
    title: 'Boxes para Banheiro',
    slug: 'boxes-para-banheiro',
    description: 'Funcionalidade e estilo em soluções de vidro temperado com acabamentos de qualidade e montagem precisa.',
    icon: 'lucide:bath'
  },
  {
    title: 'Kits Temperados',
    slug: 'kits-temperados',
    description: 'Conjuntos completos para portas e janelas com vidro temperado, pensados para facilitar a instalação com desempenho garantido.',
    icon: 'lucide:package'
  },
  {
    title: 'Claraboias',
    slug: 'claraboias',
    description: 'Iluminação natural com eficiência e resistência. Ideais para aproveitar a luz do dia sem abrir mão da proteção.',
    icon: 'lucide:sun'
  },
  {
    title: 'Contramarcos',
    slug: 'contramarcos',
    description: 'Acabamento técnico que garante encaixe perfeito das esquadrias, com estética limpa e melhor vedação.',
    icon: 'lucide:square-dashed'
  },
  {
    title: 'Brises',
    slug: 'brises',
    description: 'Controle solar com elegância. Nossos brises em alumínio combinam funcionalidade e apelo arquitetônico.',
    icon: 'lucide:blinds'
  },
  {
    title: 'Guarda-Corpo',
    slug: 'guarda-corpo',
    description: 'Segurança sem abrir mão do design. Soluções em vidro e alumínio para varandas, escadas e sacadas com visual leve e moderno.',
    icon: 'lucide:shield-check'
  },
  {
    title: 'Esquadrias sob medida',
    slug: 'esquadrias-sob-medida',
    description: 'Projetos personalizados para cada obra, com alta performance em vedação, isolamento e design funcional.',
    icon: 'lucide:ruler'
  }
])

const visibleProducts = computed(() =>
  showAll.value ? cardsProducts.value : cardsProducts.value.slice(0, 4)
)
</script>