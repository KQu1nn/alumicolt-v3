<template>
  <section class="max-w-7xl mx-auto px-6 py-20">
    <!-- HEADER -->
    <div class="flex flex-col items-center text-center gap-5 mb-14">
      <div class="flex items-center gap-2">
        <span class="w-10 h-[2px] bg-blue-600"></span>
        <p class="text-blue-600 font-bold uppercase tracking-widest text-sm">
          Inspiração Visual
        </p>
        <span class="w-10 h-[2px] bg-blue-600 hidden sm:block"></span>
      </div>

      <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Ambientes que <span class="text-blue-600">inspiram</span> e refletem sofisticação
      </h1>

      <p class="text-gray-600 text-base md:text-lg max-w-2xl">
        Veja como nossos produtos transformam espaços em obras de arte funcionais,
        combinando luz, design e performance.
      </p>

      <NuxtLink
        to="/projects"
        class="mt-3 inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-blue-600 text-white font-bold shadow-md hover:bg-blue-700 transition"
      >
        Ver Projetos
        <Icon name="lucide:arrow-right" size="18" />
      </NuxtLink>
    </div>

    <!-- CONTEÚDO -->
    <div class="flex flex-col lg:flex-row gap-6">
      
      <!-- Imagem grande -->
      <div class="lg:w-1/2 w-full">
        <div 
          class="relative h-[420px] rounded-xl overflow-hidden group cursor-pointer"
          @click="openLightbox(featured.image)"
        >
          <img
            :src="featured.image"
            class="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div class="absolute bottom-0 w-full bg-black/50 text-white px-4 py-3 transition-all duration-500 group-hover:bg-black/70">
            <p class="font-semibold">{{ featured.title }}</p>
          </div>
        </div>
      </div>

      <!-- Grid lateral -->
      <div class="lg:w-1/2 w-full grid grid-cols-2 gap-6">
        <div
          v-for="(item, index) in gallery"
          :key="index"
          class="relative h-[200px] rounded-xl overflow-hidden group cursor-pointer"
          @click="openLightbox(item.image)"
        >
          <img
            :src="item.image"
            class="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div class="absolute bottom-0 w-full bg-black/50 text-white px-3 py-2 text-sm transition-all duration-500 group-hover:bg-black/70">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>

    <!-- LIGHTBOX -->
    <div
      v-if="lightboxImage"
      class="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    >
      <img
        :src="lightboxImage"
        class="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
      />
      <button
        @click="closeLightbox"
        class="absolute top-5 right-5 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold hover:bg-gray-200"
      >
        &times;
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import moderna from '/assets/images/imagesProd/fachada-moderna.jpeg'
import pivot from '/assets/images/pivot.webp'
import janela from '/assets/images/imagesProd/janela-temperada.JPG'
import corporativo from '/assets/images/imagesProd/projeto-corporativo.jpg'
import sala from '/assets/images/imagesProd/sala.jpg'

const featured = {
  title: 'Fachada Residencial Moderna',
  image: moderna
}

const gallery = [
  { title: 'Porta de Alumínio Premium', image: pivot },
  { title: 'Janela com Vidro Temperado', image: janela },
  { title: 'Projeto Corporativo', image: corporativo },
  { title: 'Sala Integrada com Esquadrias', image: sala }
]

const lightboxImage = ref<string | null>(null)
const openLightbox = (src: string) => (lightboxImage.value = src)
const closeLightbox = () => (lightboxImage.value = null)
</script>