<template>
  <nav class="flex flex-row justify-between items-center px-6 md:px-15 py-4 bg-white fixed top-0 left-0 w-full z-50 shadow-sm h-[72px] md:h-auto">
    
    <NuxtLink to="/">
      <img :src="logo" alt="logo" class="w-32 md:w-40">
    </NuxtLink>

    <ul class="hidden md:flex flex-row gap-5 text-md text-gray-800 font-medium">
      <NuxtLink to="/" class="cursor-pointer hover:text-blue-600">Inicio</NuxtLink>
      <NuxtLink to="/services" class="cursor-pointer hover:text-blue-600">Serviços</NuxtLink>
      <a href="https://alumicolt-test.rf.gd" class="cursor-pointer hover:text-blue-600">Loja</a>
      <NuxtLink to="/projects" class="cursor-pointer hover:text-blue-600">Projetos</NuxtLink>
      <NuxtLink to="/contact" class="cursor-pointer hover:text-blue-600">Contato</NuxtLink>
    </ul>

    <div class="flex flex-row gap-4 items-center">
      <a href="https://alumicolt-test.rf.gd/index.php/carrinho" class="relative cursor-pointer">
        <Icon name="lucide:shopping-cart" size="22" class="text-black" />
        <span v-if="totalItems > 0" class="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
          {{ totalItems }}
        </span>
      </a>

      <NuxtLink to="/contact" class="hidden sm:block bg-blue-500 text-white py-2 px-6 rounded cursor-pointer hover:bg-blue-600 transition text-sm">
        <p class="font-bold cursor-pointer">
          Solicitar Orçamento
        </p>
      </NuxtLink>

      <button @click="isOpen = !isOpen" class="md:hidden text-gray-800 focus:outline-none relative z-[60]">
        <Icon :name="isOpen ? 'lucide:x' : 'lucide:menu'" size="28" />
      </button>
    </div>

    <Transition name="slide">
      <div v-if="isOpen" class="fixed inset-0 bg-white z-[55] flex flex-col md:hidden overflow-y-auto">
        <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <img :src="logo" alt="logo" class="w-32">
          </div>

        <div class="flex flex-col p-8 gap-8">
          <NuxtLink @click="isOpen = false" to="/" class="text-xl font-bold text-gray-900 border-b border-gray-50 pb-2">Inicio</NuxtLink>
          <NuxtLink @click="isOpen = false" to="/services" class="text-xl font-bold text-gray-900 border-b border-gray-50 pb-2">Serviços</NuxtLink>
          <a href="https://alumicolt-test.rf.gd" class="text-xl font-bold text-gray-900 border-b border-gray-50 pb-2">Loja</a>
          <NuxtLink @click="isOpen = false" to="/projects" class="text-xl font-bold text-gray-900 border-b border-gray-50 pb-2">Projetos</NuxtLink>
          <NuxtLink @click="isOpen = false" to="/contact" class="text-xl font-bold text-gray-900 border-b border-gray-50 pb-2">Contato</NuxtLink>
          
          <div class="flex flex-col gap-4 mt-4">
            <a href="https://alumicolt-test.rf.gd" @click="isOpen = false" class="text-center bg-blue-50 text-blue-600 py-4 rounded-xl font-bold">
              Ir para Loja
            </a>
            <NuxtLink to="/contact" class="text-center bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg">
              Solicitar Orçamento
            </NuxtLink>
          </div>
        </div>
      </div>
    </Transition>
  </nav>

  <div class="h-[72px]"></div>
</template>

<script setup>
import { ref } from 'vue'
import logo from '@/assets/images/logo.png'

const isOpen = ref(false)
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>