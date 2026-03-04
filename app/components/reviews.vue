<template>
  <section class="w-full bg-gray-100 py-20 px-6 md:px-15 flex flex-col gap-12 md:gap-20">
    
    <!-- HEADER -->
    <div class="flex flex-col items-center gap-4 text-center">
      <div class="flex items-center gap-2">
        <span class="w-10 h-[2px] bg-blue-600"></span>
        <p class="text-blue-600 font-bold uppercase tracking-widest text-sm">
          Depoimentos
        </p>
        <span class="w-10 h-[2px] bg-blue-600 hidden sm:block"></span>
      </div>

      <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
        O que dizem <span class="text-blue-600">nossos clientes</span>
      </h2>

      <p class="text-base md:text-lg text-gray-700 max-w-xl">
        A confiança de quem já transformou seu projeto com a Alumicolt.
      </p>
    </div>

    <!-- GRID DE DEPOIMENTOS -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <div 
        v-for="(card, index) in cardData" 
        :key="index"
        class="w-full bg-white rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-[2px] transition-all duration-300"
      >
        <div class="flex flex-row gap-1 text-amber-400">
          <Icon v-for="i in 5" :key="i" name="lucide:star" size="18" />
        </div>

        <div class="flex-grow">
          <p class="italic text-base md:text-lg text-gray-800 leading-relaxed">
            {{ card.review }}
          </p>
        </div>

        <div class="flex flex-row gap-3 items-center pt-4 border-t border-gray-100">
          <div
            class="w-11 h-11 bg-blue-100 flex items-center justify-center rounded-full text-blue-600"
          >
            <Icon name="lucide:user" size="20" />
          </div>
          <div class="text-sm">
            <p class="font-bold text-gray-900">{{ card.name }}</p>
            <p class="text-xs text-gray-500">Cliente Satisfeito</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// ref é auto-importado no Nuxt
const cardData = ref([
  {
    review: `"O atendimento foi excepcional desde o primeiro contato. As janelas antirruído mudaram a qualidade de vida da minha família."`,
    name: 'Ricardo Mendes'
  },
  {
    review: `"Contratei para instalar toda a fachada de vidro da minha loja. Cumpriram o prazo rigorosamente e o acabamento ficou impecável."`,
    name: 'Ana Paula Silva'
  },
  {
    review: `"Os portões automáticos são muito rápidos e silenciosos. Recomendo a Alumicolt para todos os meus vizinhos."`,
    name: 'Carlos Eduardo'
  }
])
</script>