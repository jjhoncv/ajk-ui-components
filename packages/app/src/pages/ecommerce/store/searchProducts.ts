import { mockProducts } from '@ajk-ui/data'
import { Product } from '@ajk-ui/product'

export const searchProducts = (q: string): Product[] => {
  return mockProducts.filter(product => product.name.toLowerCase().includes(q.toLowerCase()))
}
