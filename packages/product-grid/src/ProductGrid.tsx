import { ProductCart } from '@ajk-ui/cart'
import { Product } from '@ajk-ui/product'
import { FC } from 'react'

interface ProductGridProps {
  products: Product[]
}
export const ProductGrid: FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {products.map(product => (
        <ProductCart key={product.id} {...product} />
      ))}
    </div>
  )
}
