export const useFinishes = () => {
  const finishes = useState<any[]>('finishes', () => [])
  const loading = useState<boolean>('finishes-loading', () => false)
  const supabase = useSupabaseClient()

  /**
   * Busca acabamentos (cores) por categoria
   */
  const fetchFinishes = async (categoryId: string) => {
    if (!categoryId) {
      finishes.value = []
      return
    }

    loading.value = true

    const { data, error } = await supabase
      .from('finishes')
      .select(`
        id,
        name,
        slug,
        category_id
      `)
      .eq('category_id', categoryId)
      .order('name', { ascending: true })

    if (error) {
      console.error('Erro ao buscar acabamentos:', error)
      finishes.value = []
    } else {
      finishes.value = data ?? []
    }

    loading.value = false
  }

  /**
   * Cria um acabamento (cor)
   */
  const createFinish = async (finish: { name: string; slug: string; category_id: string }) => {
    const { error } = await supabase.from('finishes').insert([finish])
    if (error) {
      console.error('Erro ao criar acabamento:', error)
      throw error
    }
    return true
  }

  /**
   * Remove um acabamento (cor)
   */
  const deleteFinish = async (id: string) => {
    const { error } = await supabase.from('finishes').delete().eq('id', id)
    if (error) {
      console.error('Erro ao deletar acabamento:', error)
      throw error
    }
    return true
  }

  /**
   * Limpa acabamentos (usado ao trocar categoria)
   */
  const clearFinishes = () => {
    finishes.value = []
  }

  return {
    finishes,
    loading,
    fetchFinishes,
    createFinish,
    deleteFinish,
    clearFinishes
  }
}
