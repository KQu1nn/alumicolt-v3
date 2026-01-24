<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="bg-white p-10 rounded-2xl w-full max-w-sm shadow-lg">
      <!-- LOGO -->
      <div class="flex justify-center mb-6">
        <img :src="logo" alt="Logo" class="w-32 h-auto" />
      </div>

      <h1 class="text-2xl font-bold text-gray-800 text-center mb-8">
        Acesse sua conta
      </h1>

      <!-- FORMULÁRIO -->
      <form @submit.prevent="login" class="space-y-5">
        <div>
          <label class="block text-gray-600 mb-1">Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="seu@email.com"
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label class="block text-gray-600 mb-1">Senha</label>
          <input
            v-model="password"
            type="password"
            placeholder="********"
            class="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Entrar
        </button>
      </form>

      <p class="text-sm text-gray-500 text-center mt-6">
        &copy; 2026 Alumicolt
      </p>
    </div>
  </div>
</template>

<script setup>
import logo from '/assets/images/logo.png'

const supabase = useSupabaseClient()
const email = ref('')
const password = ref('')

const login = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  if (!error) {
    navigateTo('/admin')
  } else {
    alert('Login inválido')
  }
}
</script>
