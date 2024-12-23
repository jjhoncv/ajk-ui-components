import { mockProducts } from '@ajk-ui/data'
import { Product } from '@ajk-ui/product'
import { hydrateProduct } from '../hydrators/hydrateProduct'

export const getProduct = (id: number): Product | null => {
  const product = mockProducts.find(product => product.id === Number(id))
  if (!product) return null
  return hydrateProduct(product)
}
