<template>
  <footer class="bg-gray-50 border-t border-gray-200">
    <div class="px-6 md:px-15 py-10 md:py-16">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-12">
        
        <div class="col-span-2 lg:col-span-1 space-y-4">
          <img :src="logo" alt="Alumicolt Logo" class="w-28 md:w-32">
          <p class="text-xs md:text-sm text-gray-600 leading-relaxed max-w-xs">
            Desde 2010 sendo referência em esquadrias de alto padrão e soluções em alumínio no Vale do São Francisco.
          </p>
          <div class="flex items-center gap-4 text-gray-500">
            <a href="https://instagram.com/alumicolt/" target="_blank" aria-label="Instagram">
              <Icon name="lucide:instagram" size="20" class="hover:text-blue-600 transition-colors cursor-pointer" />
            </a>
            <a href="mailto:contato@alumicolt.com.br" aria-label="E-mail">
              <Icon name="lucide:mail" size="20" class="hover:text-blue-600 transition-colors cursor-pointer" />
            </a>
            <a href="https://api.whatsapp.com/send?l=pt_BR&phone=55087999639709" target="_blank" aria-label="WhatsApp">
              <Icon name="lucide:phone" size="20" class="hover:text-blue-600 transition-colors cursor-pointer" />
            </a>
          </div>
        </div>

        <div class="col-span-1">
          <p class="font-bold text-gray-900 mb-4 text-sm uppercase tracking-tight">Empresa</p>
          <ul class="space-y-2.5 text-xs md:text-sm text-gray-600">
            <li><a href="/" class="hover:text-blue-600 transition-colors">Sobre Nós</a></li>
            <li><a href="https://alumicolt.test" class="hover:text-blue-600 transition-colors">Produtos</a></li>
            <li><a href="/" class="hover:text-blue-600 transition-colors">Serviços</a></li>
          </ul>
        </div>

        <div class="col-span-1">
          <a href="https://api.whatsapp.com/send/?phone=55087999639709" class="font-bold text-gray-900 mb-4 text-sm uppercase tracking-tight">Suporte</a>
          <ul class="space-y-2.5 text-xs md:text-sm text-gray-600">
            <li><NuxtLink to="/contact" class="hover:text-blue-600 transition-colors">Fale Conosco</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-blue-600 transition-colors">Privacidade</NuxtLink></li>
            <li class="hover:text-blue-600 cursor-pointer">Trabalhe Conosco</li>
          </ul>
        </div>

        <div class="col-span-2 lg:col-span-1 space-y-4">
          <p class="font-bold text-gray-900 text-sm uppercase tracking-tight">Novidades</p>
          <p class="text-[11px] text-gray-600">Assine para receber novos projetos e prazos.</p>
          <form @submit.prevent class="flex flex-row gap-0 w-full max-w-sm">
            <input
              type="email"
              placeholder="Seu e-mail"
              class="flex-1 px-3 py-2 text-xs rounded-l-lg border border-gray-300 focus:ring-1 focus:ring-blue-500 outline-none bg-white"
            />
            <button class="bg-blue-600 text-white font-bold px-4 py-2 text-xs rounded-r-lg hover:bg-blue-700 transition shadow-sm">
              OK
            </button>
          </form>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-200 bg-white py-6">
      <div class="px-6 md:px-15 flex flex-col md:flex-row justify-between items-center gap-3 text-[10px] md:text-xs text-gray-500">
        <p>© 2026 Alumicolt Esquadrias. Petrolina-PE.</p>
        <a href="https://api.whatsapp.com/send?phone=5587992007632">Desenvolvido por <span class="text-blue-700 font-bold tracking-wide">RAMON KELVIN</span></a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import logo from '@/assets/images/logo.png'
</script>