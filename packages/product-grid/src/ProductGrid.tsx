import { ProductCart } from '@ajk-ui/cart'
import { cn } from '@ajk-ui/core'
import { Product } from '@ajk-ui/product'
import { FC } from 'react'

interface ProductGrid extends Product {
  clickMe: () => void
}
interface ProductGridProps {
  products: ProductGrid[]
  layout?: 'horizontal' | 'vertical'
}
export const ProductGrid: FC<ProductGridProps> = ({ products, layout = 'vertical' }) => {
  const layoutStyles = {
    horizontal: {
      content: 'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2',
    },
    vertical: {
      content: 'grid grid-cols-2 gap-2 md:gap-6 md:grid-cols-2 lg:grid-cols-4',
    },
  }
  return (
    <div className={cn(layoutStyles[layout].content)}>
      {products.map(product => (
        <ProductCart handleClick={product.clickMe} layout={layout} key={product.id} {...product} />
      ))}
    </div>
  )
}
