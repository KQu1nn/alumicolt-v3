export const useProducts = () => {
  const products = useState<any[]>('products', () => [])
  const loading = useState<boolean>('products-loading', () => false)

  const supabase = useSupabaseClient()

  /**
   * Busca produtos com filtros opcionais:
   * @param categorySlug slug da categoria
   * @param finishId id do acabamento
   * @param size string "largura x altura"
   */
  const fetchProducts = async (
    categorySlug?: string,
    finishId?: string,
    size?: string
  ) => {
    loading.value = true

    let categoryId: string | null = null

    // 🔹 converter slug → category_id
    if (categorySlug) {
      const { data: category, error } = await supabase
        .from('categories')
        .select('id')
        .eq('slug', categorySlug)
        .single()

      if (!error && category) {
        categoryId = category.id
      }
    }

    // 🔹 construir query
    let query = supabase
      .from('products')
      .select(`
        id,
        name,
        slug,
        description,
        price,
        images,
        active,
        width,
        height,
        category_id,
        finish_id,
        categories (
          id,
          name,
          slug
        ),
        finishes (
          id,
          name,
          slug
        )
      `)
      .eq('active', true)
      .order('created_at', { ascending: false })

    // 🔹 filtro por categoria
    if (categoryId) {
      query = query.eq('category_id', categoryId)
    }

    // 🔹 filtro por acabamento
    if (finishId) {
      query = query.eq('finish_id', finishId)
    }

    // 🔹 filtro por tamanho (width x height)
    if (size) {
      const [width, height] = size.split('x').map(s => Number(s.trim()))
      if (!isNaN(width) && !isNaN(height)) {
        query = query.eq('width', width).eq('height', height)
      }
    }

    const { data, error } = await query

    if (error) {
      console.error('Erro ao buscar produtos:', error)
      products.value = []
    } else {
      products.value = data ?? []
    }

    loading.value = false
  }

  return {
    products,
    loading,
    fetchProducts
  }
}
