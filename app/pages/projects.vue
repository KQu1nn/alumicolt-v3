<template>
  <div class="min-h-screen bg-white">
    <Nav />

    <main class="pt-10 md:pt-32 pb-20">
      <section class="px-6 md:px-15 mb-12">
        <div class="max-w-4xl">
          <p class="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3">Portfolio de Obras</p>
          <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Transformando espaços com <span class="text-blue-600">engenharia e design</span>
          </h1>
          
          <div class="flex flex-wrap gap-3 mt-8">
            <button 
              v-for="cat in categorias" :key="cat"
              @click="filtroAtivo = cat"
              :class="[
                'px-5 py-2 rounded-full text-sm font-medium transition-all border',
                filtroAtivo === cat 
                  ? 'bg-blue-600 border-blue-600 text-white shadow-lg' 
                  : 'bg-white border-gray-200 text-gray-600 hover:border-blue-400'
              ]"
            >
              {{ cat }}
            </button>
          </div>
        </div>
      </section>

      <section class="px-6 md:px-15">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div 
            v-for="(projeto, index) in projetosFiltrados" :key="index"
            class="group relative overflow-hidden rounded-2xl bg-gray-100 border border-gray-100 transition-all duration-500 hover:-translate-y-2"
          >
            <div class="aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden">
              <img 
                :src="projeto.image" 
                :alt="projeto.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
              <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span class="bg-blue-600 text-[10px] text-white font-bold uppercase px-2 py-1 rounded mb-3 inline-block">
                  {{ projeto.categoria }}
                </span>
                <h3 class="text-xl font-bold text-white mb-1">{{ projeto.title }}</h3>
                <p class="text-gray-300 text-sm mb-4 line-clamp-2">{{ projeto.description }}</p>
                
                <div class="flex items-center gap-4 text-xs text-white/80 border-t border-white/20 pt-4">
                  <span class="flex items-center gap-1">
                    <Icon name="lucide:map-pin" size="14" /> {{ projeto.location }}
                  </span>
                  <span class="flex items-center gap-1">
                    <Icon name="lucide:calendar" size="14" /> {{ projeto.year }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="px-6 md:px-15 mt-20">
        <div class="bg-gray-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
          <div class="relative z-10 flex flex-col items-center gap-6">
            <h2 class="text-2xl md:text-4xl font-bold max-w-2xl">Interessado em um acabamento deste nível para sua obra?</h2>
            <NuxtLink to="/contact" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-transform hover:scale-105">
              Iniciar meu orçamento personalizado
            </NuxtLink>
          </div>
          <div class="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        </div>
      </section>
    </main>

    <Footer />
    <WhatsappBtn />
  </div>
</template>

<script setup>
const filtroAtivo = ref('Todos')
const categorias = ['Todos', 'Residencial', 'Comercial', 'Alto Padrão']
import img1 from '@/assets/images/obra1.jpg'
import img2 from '@/assets/images/obra2.jpg'
import img3 from '@/assets/images/obra3.jpg'
import img4 from '@/assets/images/obra4.jpg'
const projetos = [
  {
    title: 'Alphaville',
    description: 'Fachada em pele de vidro com controle solar e esquadrias de alta performance.',
    categoria: 'Residencial',
    location: 'Condominio Aplhaville',
    year: '2025',
    image: img1
  },
  {
    title: 'Residência G.A',
    description: 'Portas de correr minimalistas de 6 metros, integrando sala e área gourmet.',
    categoria: 'Alto Padrão',
    location: 'Curitiba, PR',
    year: '2023',
    image: img2
  },
  {
    title: 'Condomínio Solar',
    description: 'Janelas com persiana integrada automatizada em mais de 40 unidades.',
    categoria: 'Residencial',
    location: 'Joinville, SC',
    year: '2024',
    image: img3
  },
  {
    title: 'Shopping Vila Nova',
    description: 'Divisórias de vidro temperado e portões automáticos industriais.',
    categoria: 'Comercial',
    location: 'Blumenau, SC',
    year: '2022',
    image: img4
  }
]

const projetosFiltrados = computed(() => {
  if (filtroAtivo.value === 'Todos') return projetos
  return projetos.filter(p => p.categoria === filtroAtivo.value)
})
</script>