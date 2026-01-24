<template>
  <section class="w-full bg-gray-100 py-16 md:py-25 px-6 md:px-15 flex flex-col gap-12 md:gap-20">
    
    <div class="flex flex-col items-center gap-3 text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900">O que dizem nossos clientes</h2>
      <p class="text-base md:text-[17px] text-gray-700 max-w-xl">
        A confiança de quem já transformou seu projeto com a Alumicolt.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <div 
        v-for="(card, index) in cardData" 
        :key="index"
        class="w-full bg-white rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 shadow-sm border border-gray-50"
      >
        <div class="flex flex-row gap-1 text-amber-400">
          <Icon v-for="i in 5" :key="i" name="lucide:star" size="18" />
        </div>

        <div class="flex-grow">
          <p class="italic text-base md:text-lg text-gray-800 leading-relaxed">
            {{ card.review }}
          </p>
        </div>

        <div class="flex flex-row gap-3 items-center pt-4 border-t border-gray-50">
          <div class="w-11 h-11 bg-blue-100 flex items-center justify-center rounded-full text-blue-600">
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
// ref já é auto-importado no Nuxt
const cardData = ref([
  {
    review: `"O atendimento foi excepcional desde o primeiro contato. As janelas antirruído mudaram a qualidade de vida da minha família."`,
    name: 'Ricardo Mendes',
    picture: ''
  },
  {
    review: `"Contratei para instalar toda a fachada de vidro da minha loja. Cumpriram o prazo rigorosamente e o acabamento ficou impecável."`,
    name: 'Ana Paula Silva',
    picture: ''
  },
  {
    review: `"Os portões automáticos são muito rápidos e silenciosos. Recomendo a Alumicolt para todos os meus vizinhos."`,
    name: 'Carlos Eduardo',
    picture: ''
  }
])
</script>