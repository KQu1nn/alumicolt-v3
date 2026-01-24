<template>
  <section class="max-w-7xl mx-auto px-6 py-16">
    <h1 class="text-3xl font-bold mb-2">
      Inspiração Visual
    </h1>

    <p class="text-gray-600 mb-10">
      Veja como nossos produtos transformam ambientes.
    </p>

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
            <p class="font-semibold">
              {{ featured.title }}
            </p>
          </div>
        </div>
      </div>

      <!-- Grid -->
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
      <img :src="lightboxImage" class="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-lg" />
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
import grades from '/assets/images/grades.webp'
import pivot from '/assets/images/pivot.webp'
import ultraSlim from '/assets/images/ultra slim.webp'
import img1 from '/assets/images/img1.jpg'
import img2 from '/assets/images/hero01.jpg'

const featured = {
  title: 'Fachada Residencial Moderna',
  image: grades
}

const gallery = [
  { title: 'Porta de Alumínio Premium', image: pivot },
  { title: 'Janela com Vidro Temperado', image: ultraSlim },
  { title: 'Projeto Corporativo', image: img1 },
  { title: 'Sala Integrada com Esquadrias', image: img2 }
]

// lightbox
const lightboxImage = ref<string | null>(null)
const openLightbox = (src: string) => lightboxImage.value = src
const closeLightbox = () => lightboxImage.value = null
</script>
