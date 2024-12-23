import { mockProducts } from '@ajk-ui/data'
import { Suggestion } from '@ajk-ui/form-search'

export const onGetSuggestions = async (query: string) => {
  await new Promise(resolve => setTimeout(resolve, 500)) // Simular delay de red

  const mockData: Suggestion[] = mockProducts.map(product => ({
    id: product.id,
    title: product.name,
    description: product.description,
    image: product.images.gallery[0].size.xs.url,
  }))

  return mockData.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
}
