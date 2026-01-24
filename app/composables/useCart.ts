export const useCart = () => {
  // estado global do carrinho
  const items = useState<any[]>('cart-items', () => [])

  /* ===========================
   *  CARREGAR DO localStorage
   * =========================== */
  onMounted(() => {
    const saved = localStorage.getItem('cart-items')
    if (saved) {
      try {
        items.value = JSON.parse(saved)
      } catch (e) {
        console.error('Erro ao carregar carrinho:', e)
        items.value = []
      }
    }
  })

  /* ===========================
   *  SALVAR NO localStorage
   * =========================== */
  watch(
    items,
    (value) => {
      localStorage.setItem('cart-items', JSON.stringify(value))
    },
    { deep: true }
  )

  /* ===========================
   *  ADICIONAR AO CARRINHO
   * =========================== */
  const addToCart = (product: any) => {
    const item = items.value.find(i => i.id === product.id)

    if (item) {
      // usa quantidade vinda do slug
      item.quantity += product.quantity ?? 1
    } else {
      items.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images?.[0] || '',
        quantity: product.quantity ?? 1
      })
    }
  }

  /* ===========================
   *  AUMENTAR / DIMINUIR
   * =========================== */
  const increase = (id: number) => {
    const item = items.value.find(i => i.id === id)
    if (item) item.quantity++
  }

  const decrease = (id: number) => {
    const item = items.value.find(i => i.id === id)
    if (!item) return

    if (item.quantity > 1) {
      item.quantity--
    } else {
      removeFromCart(id)
    }
  }

  /* ===========================
   *  REMOVER / LIMPAR
   * =========================== */
  const removeFromCart = (id: number) => {
    items.value = items.value.filter(i => i.id !== id)
  }

  const clearCart = () => {
    items.value = []
  }

  /* ===========================
   *  TOTAIS
   * =========================== */
  const total = computed(() =>
    items.value.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    )
  )

  const totalItems = computed(() =>
    items.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  return {
    items,
    addToCart,
    increase,
    decrease,
    removeFromCart,
    clearCart,
    total,
    totalItems
  }
}
