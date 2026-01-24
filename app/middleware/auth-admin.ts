export default defineNuxtRouteMiddleware((to) => {
  // Executa apenas no cliente
  if (process.server) return

  const user = useSupabaseUser()

  // Rotas públicas (sem login)
  const publicRoutes = ['/', '/login', '/produtos', '/contato']

  // Se a rota atual for pública, não faz nada
  if (publicRoutes.includes(to.path)) return

  // Se o usuário ainda não estiver logado, redireciona
  if (!user.value) {
    return navigateTo('/login')
  }
})
