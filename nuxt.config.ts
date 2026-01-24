// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  supabase: {
    redirect: false, // 🚫 impede redirecionamento automático para /login
  },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/content',
    '@nuxtjs/supabase'
  ],

  runtimeConfig: {
    mercadopagoAccessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
    public: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_KEY: process.env.SUPABASE_KEY,
      mercadopagoPublicKey: process.env.NUXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY,
    },
  },

  css: ['./app/assets/css/main.css'],

  vite: {
    server: {
      allowedHosts: ['.ngrok-free.app'], // 🔥 libera todos os subdomínios ngrok
    },
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      script: [
        {
          src: 'https://sdk.mercadopago.com/js/v2',
          defer: true,
        },
      ],
    },
  },
})
