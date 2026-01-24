<template>
  <aside class="w-64 h-full bg-white shadow-lg p-6 space-y-6">
    <h2 class="text-xl font-bold">Admin</h2>

    <nav class="space-y-2">
      <NuxtLink
        to="/admin"
        class="block px-4 py-2 rounded hover:bg-blue-100"
        active-class="bg-blue-600 text-white"
      >
        📦 Produtos
      </NuxtLink>

      <NuxtLink
        to="/admin/categorias"
        class="block px-4 py-2 rounded hover:bg-blue-100"
        active-class="bg-blue-600 text-white"
      >
        🏷️ Categorias & Cores
      </NuxtLink>
    </nav>
  </aside>
</template>
