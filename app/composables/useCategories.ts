export const useCategories = () => {
  const categories = useState<any[]>('categories', () => [])
  const loading = useState<boolean>('categories-loading', () => false)

  const supabase = useSupabaseClient()

  const fetchCategories = async () => {
    loading.value = true

    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name')

    if (!error) {
      categories.value = data ?? []
    }

    loading.value = false
  }

  const createCategory = async (payload: { name: string; slug: string }) => {
    const { error } = await supabase.from('categories').insert(payload)
    if (!error) await fetchCategories()
    return error
  }

  const updateCategory = async (id: string, payload: any) => {
    const { error } = await supabase
      .from('categories')
      .update(payload)
      .eq('id', id)

    if (!error) await fetchCategories()
    return error
  }

  const deleteCategory = async (id: string) => {
    const { error } = await supabase
      .from('categories')
      .delete()
      .eq('id', id)

    if (!error) await fetchCategories()
    return error
  }

  return {
    categories,
    loading,
    fetchCategories,
    createCategory,
    updateCategory,
    deleteCategory
  }
}
