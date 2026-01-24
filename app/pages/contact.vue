<template>
  <div class="min-h-screen bg-white">
    <Nav />

    <main class="pt-15 md:pt-32 pb-20">
      <section class="px-6 md:px-15 mb-16 text-center md:text-left">
        <p class="text-blue-600 font-bold tracking-widest text-xs uppercase mb-3">Fale Conosco</p>
        <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Estamos prontos para tirar <br class="hidden md:block" /> 
          sua ideia do papel.
        </h1>
      </section>

      <section class="px-6 md:px-15">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          <div class="flex flex-col gap-10">
            
            <div class="bg-green-50 border border-green-100 rounded-3xl p-8 relative overflow-hidden group">
              <div class="relative z-10">
                <div class="w-12 h-12 bg-green-500 text-white flex items-center justify-center rounded-xl mb-6 shadow-lg">
                  <Icon name="logos:whatsapp-icon" size="28" />
                </div>
                <h3 class="text-2xl font-bold text-green-900 mb-2">WhatsApp Direto</h3>
                <p class="text-green-800/70 mb-6 max-w-sm">
                  Clique no botão abaixo para falar agora mesmo com um consultor técnico.
                </p>
                <a :href="`https://wa.me/${whatsappNumber}`" target="_blank" 
                   class="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-xl">
                  Conversar agora
                  <Icon name="lucide:arrow-right" size="20" />
                </a>
              </div>
              <Icon name="logos:whatsapp-icon" class="absolute -bottom-10 -right-10 text-green-200/30 w-48 h-48 -rotate-12" />
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2 text-blue-600 font-bold text-sm">
                  <Icon name="lucide:mail" size="18" /> E-mail
                </div>
                <p class="text-gray-600 text-sm md:text-base">contato@alumicolt.com.br</p>
              </div>

              <div class="flex flex-col gap-2">
                <div class="flex items-center gap-2 text-blue-600 font-bold text-sm">
                  <Icon name="lucide:map-pin" size="18" /> Endereço
                </div>
                <p class="text-gray-600 text-sm md:text-base">R. Raul Lins • Dom Avelar Petrolina-PE</p>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">
            <h3 class="text-2xl font-bold text-gray-900 mb-8">Envie uma mensagem</h3>
            
            <form @submit.prevent="handleSend" class="flex flex-col gap-5">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div class="flex flex-col gap-2">
                  <label class="text-xs font-bold text-gray-500 uppercase tracking-wider">Nome</label>
                  <input 
                    v-model="formData.nome"
                    required
                    type="text" 
                    placeholder="Seu nome"
                    class="bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition" 
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-xs font-bold text-gray-500 uppercase tracking-wider">Telefone</label>
                  <input 
                    v-model="formData.telefone"
                    required
                    type="tel" 
                    placeholder="(00) 00000-0000"
                    class="bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition" 
                  />
                </div>
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-xs font-bold text-gray-500 uppercase tracking-wider">Mensagem</label>
                <textarea 
                  v-model="formData.mensagem"
                  required
                  rows="4" 
                  placeholder="Olá, gostaria de um orçamento para..."
                  class="bg-white border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-200 mt-2 flex items-center justify-center gap-2"
              >
                <Icon name="lucide:send" size="18" />
                Enviar para o WhatsApp
              </button>
              <p class="text-[10px] text-center text-gray-400 uppercase tracking-widest">Resposta imediata via consultoria</p>
            </form>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup>
// Número do WhatsApp da Alumicolt (substitua pelo real)
// Formato: CodigoPaísCodigoAreaNumero (sem espaços ou traços)
const whatsappNumber = "55087999639709"

const formData = ref({
  nome: '',
  telefone: '',
  mensagem: ''
})

const handleSend = () => {
  // Criamos a mensagem formatada
  const message = `*Nova Solicitação de Orçamento*%0A` +
                  `------------------------------%0A` +
                  `*Nome:* ${formData.value.nome}%0A` +
                  `*Telefone:* ${formData.value.telefone}%0A` +
                  `*Mensagem:* ${formData.value.mensagem}`

  // URL do WhatsApp
  const url = `https://wa.me/${whatsappNumber}?text=${message}`

  // Abre em uma nova aba
  window.open(url, '_blank')
  
  // Opcional: Limpar formulário após envio
  // formData.value = { nome: '', telefone: '', mensagem: '' }
}
</script>