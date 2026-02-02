<template>
    <Nav />
  <section id="servicos" class="w-full bg-white px-6 md:px-15 py-10 md:py-25">
    <div class="flex flex-col gap-4 mb-12 md:mb-16">
      <div class="flex items-center gap-2">
        <span class="w-10 h-[2px] bg-blue-600"></span>
        <p class="text-blue-600 font-bold tracking-widest text-sm uppercase">Soluções Completas</p>
      </div>
      <h2 class="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Serviços especializados para <br class="hidden md:block" /> 
        cada etapa do seu projeto
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      <div v-for="(servico, index) in servicos" :key="index" 
           class="group cursor-pointer bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500">
        
        <div class="relative h-64 overflow-hidden">
          <img :src="servico.image" :alt="servico.title" 
               class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
            <span class="text-white font-bold flex items-center gap-2">
              Saber mais <Icon name="lucide:arrow-right" size="18" />
            </span>
          </div>
        </div>

        <div class="p-8 flex flex-col gap-4">
          <div class="w-12 h-12 bg-blue-600 text-white flex items-center justify-center rounded-lg shadow-lg -mt-14 relative z-10">
            <Icon :name="servico.icon" size="24" />
          </div>
          
          <h3 class="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {{ servico.title }}
          </h3>
          
          <p class="text-gray-600 leading-relaxed">
            {{ servico.description }}
          </p>

          <ul class="flex flex-col gap-2 mt-2">
            <li v-for="item in servico.items" :key="item" class="flex items-center gap-2 text-sm text-gray-500">
              <span class="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

    </div>

    <div class="mt-16 p-8 md:p-12 bg-blue-50 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 border border-blue-100">
      <div class="text-center md:text-left">
        <h4 class="text-xl md:text-2xl font-bold text-blue-900">Não encontrou o que procurava?</h4>
        <p class="text-blue-700">Desenvolvemos projetos personalizados sob medida para sua necessidade.</p>
      </div>
      <a href="https://api.whatsapp.com/send/?phone=55087999639709" class="bg-blue-600 text-white px-10 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 whitespace-nowrap">
        Falar com Especialista
      </a>
    </div>
  </section>
  <Footer />
  <WhatsappBtn />
</template>

<script setup>
import img1 from '@/assets/images/instalacao.jpg'
import img2 from '@/assets/images/img2.jpg'
const servicos = [
  {
    title: 'Instalação Técnica',
    description: 'Montagem precisa de esquadrias e vidros com equipe própria treinada nas normas ABNT.',
    icon: 'lucide:settings',
    image: img1,
    items: ['Vedação termoacústica', 'Ajuste de pressão', 'Limpeza técnica']
  },
  {
    title: 'Manutenção Preventiva',
    description: 'Prolongue a vida útil dos seus portões e janelas com revisões periódicas de roldanas e motores.',
    icon: 'lucide:wrench',
    image: img2,
    items: ['Lubrificação de trilhos', 'Troca de borrachas', 'Regulagem de motores']
  },
  {
    title: 'Consultoria de Projetos',
    description: 'Auxiliamos arquitetos na escolha do melhor perfil e tipologia de vidro para cada ambiente.',
    icon: 'lucide:layout',
    image: 'https://leaogerenciamento.com.br/wp-content/uploads/2024/10/projetos.png',
    items: ['Cálculo de carga de vento', 'Especificação de cores', 'Otimização de custos']
  }
]
</script>