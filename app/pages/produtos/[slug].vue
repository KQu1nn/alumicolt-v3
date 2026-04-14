<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <Nav />

    <section class="w-full px-6 md:px-50 py-10 md:py-10">
      <div class="max-w-5xl mx-auto flex flex-col gap-6">
        <div class="flex items-center gap-1">
          <Icon name="lucide:arrow-left" size="15" class="text-gray-600" />
          <NuxtLink to="/" class="text-sm text-gray-600 font-semibold cursor-pointer">Voltar</NuxtLink>
        </div>

        <nav class="flex items-center gap-2 text-gray-500 text-sm">
          <NuxtLink to="/" class="hover:text-blue-600 transition cursor-pointer">Início</NuxtLink>
          <Icon name="lucide:chevron-right" size="14" />
          <NuxtLink to="/" class="hover:text-blue-600 transition cursor-pointer">Produtos</NuxtLink>
          <Icon name="lucide:chevron-right" size="14" />
          <span class="text-blue-600 font-semibold">{{ product.title }}</span>
        </nav>

        <div class="flex items-center gap-2">
          <span class="w-10 h-[2px] bg-blue-600"></span>
          <p class="text-blue-600 font-bold tracking-widest text-sm uppercase">Detalhes do Produto</p>
        </div>

        <div class="flex flex-col gap-3">
          <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            {{ product.title }}
          </h1>
          <p class="text-gray-600 leading-relaxed text-base md:text-[17px]">
            {{ product.shortDescription }}
          </p>
        </div>
      </div>
    </section>

    <section class="flex-1 max-w-5xl mx-auto px-6 md:px-12 py-5 md:py-10 flex flex-col gap-12">
      
      <!-- 🔥 CAROUSEL -->
      <div class="rounded-2xl shadow-md bg-white border border-gray-200 p-4 relative">

        <!-- IMAGEM -->
        <div class="w-full h-[300px] md:h-[450px] flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden">
          <img
            :src="product.images[currentImage]"
            @click="openLightbox"
            class="max-h-full max-w-full object-contain p-4 cursor-zoom-in transition hover:scale-[1.02]"
            alt="Imagem do produto"
          />
        </div>

        <!-- BOTÃO ESQUERDA -->
        <button
          @click="prevImage"
          class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-600 p-3 rounded-full shadow-md z-10"
        >
          ‹
        </button>

        <!-- BOTÃO DIREITA -->
        <button
          @click="nextImage"
          class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-600 p-3 rounded-full shadow-md z-10"
        >
          ›
        </button>

        <!-- INDICADORES -->
        <div class="flex justify-center gap-2 mt-4">
          <button
            v-for="(img, index) in product.images"
            :key="index"
            @click="currentImage = index"
            class="w-3 h-3 rounded-full transition"
            :class="currentImage === index ? 'bg-blue-600' : 'bg-gray-300'"
          ></button>
        </div>

      </div>

      <!-- SOBRE -->
      <div class="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col gap-4">
        <h2 class="text-2xl font-bold text-blue-700">Sobre o produto</h2>
        <div class="flex flex-col gap-3">
          <p
            v-for="(p, i) in product.description.split('\n\n').filter(x => x.trim())"
            :key="i"
            class="text-gray-600 leading-relaxed text-base md:text-[17px]"
          >
            {{ p.trim() }}
          </p>
        </div>
      </div>

      <!-- SPECS -->
      <div class="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <h2 class="text-2xl font-bold text-blue-700 mb-6">Especificações Técnicas</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
          <div
            v-for="spec in product.specs"
            :key="spec.label"
            class="flex flex-col bg-gray-50 rounded-xl px-5 py-4 border border-gray-100 hover:border-blue-200 transition"
          >
            <span class="text-gray-500 text-sm">{{ spec.label }}</span>
            <span class="text-gray-900 font-semibold text-base">{{ spec.value }}</span>
          </div>
        </div>
      </div>

      <!-- BOTÕES -->
      <div class="flex flex-col sm:flex-row gap-4 mt-6">
        <NuxtLink
          to="/"
          class="flex-1 text-center border border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition cursor-pointer"
        >
          ← Voltar
        </NuxtLink>

        <a
          :href="lojaUrl"
          target="_blank"
          class="flex-1 text-center bg-blue-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-blue-700 transition shadow-md cursor-pointer"
        >
          Ver na Loja
        </a>
      </div>

    </section>

    <!-- 🔥 LIGHTBOX -->
    <VueEasyLightbox
      :visible="visible"
      :imgs="product.images"
      :index="currentImage"
      @hide="closeLightbox"
    />

    <Footer />
  </div>
</template>

<script setup>
import { allProducts } from '~/data/products'
import VueEasyLightbox from 'vue-easy-lightbox'

const route = useRoute()
const lojaUrl = 'https://alumicolt-test.rf.gd'

const product = computed(() =>
  allProducts.find(p => p.slug === route.params.slug) || allProducts[0]
)

/* 🔥 CAROUSEL */
const currentImage = ref(0)

const nextImage = () => {
  if (currentImage.value < product.value.images.length - 1) {
    currentImage.value++
  } else {
    currentImage.value = 0
  }
}

const prevImage = () => {
  if (currentImage.value > 0) {
    currentImage.value--
  } else {
    currentImage.value = product.value.images.length - 1
  }
}

/* 🔥 LIGHTBOX */
const visible = ref(false)

const openLightbox = () => {
  visible.value = true
}

const closeLightbox = () => {
  visible.value = false
}

/* SEO */
useHead({
  title: computed(() => `${product.value.title} — Alumicolt`),
  meta: [
    {
      name: 'description',
      content: computed(() => product.value.shortDescription)
    }
  ]
})
</script>

<style scoped>
</style>