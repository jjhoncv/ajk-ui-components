import { Button } from '@ajk-ui/button'
import { Card } from '@ajk-ui/card'
import { cn, formatPEN } from '@ajk-ui/core'
import { ShoppingCart } from 'lucide-react'
import { CartItem, useCart } from './CartContext'

interface ProductCartProps extends Omit<CartItem, 'quantity'> {
  description: string
  condition: string
  layout?: 'vertical' | 'horizontal'
  aspectRatio?: '1:1' | '4:3' | '16:9'
  handleClick?: () => void
}

export const ProductCart = ({
  id,
  name,
  description,
  price,
  subname,
  image,
  condition,
  layout = 'vertical',
  aspectRatio = '4:3',
  handleClick,
  ...props
}: ProductCartProps) => {
  const { addItem } = useCart()

  const baseStyles = {
    card: 'group relative cursor-pointer',
  }

  const layoutStyles = {
    horizontal: {
      card: 'flex flex-row ',
      contentButton: 'flex',
      button: 'mt-4',
      aspectRatio: '1:1',
    },
    vertical: {
      card: 'md:pb-16',
      contentButton: 'md:absolute bottom-6 left-0 right-0 mt-2 flex w-full justify-center',
      button: 'flex group-hover:flex md:hidden overflow-hidden my-2 md:my-0',
      aspectRatio: '4:3',
    },
  }

  return (
    <Card
      variant="product"
      title={name}
      subtitle={formatPEN(price)}
      description={description}
      image={image}
      badge={condition}
      layout={layout}
      aspectRatio={cn(layoutStyles[layout].aspectRatio) as '1:1' | '4:3' | '16:9'}
      className={cn(baseStyles.card, layoutStyles[layout].card)}
      handleClick={handleClick}
      {...props}
    >
      <div className={layoutStyles[layout].contentButton}>
        <Button
          onClick={() => {
            addItem({
              id,
              name,
              price,
              image,
              subname,
              quantity: 1,
            })
          }}
          variant="secondary"
          size="sm"
          className={cn(layoutStyles[layout].button)}
          leftIcon={ShoppingCart}
        >
          <p className="flex w-full md:gap-1">
            Agregar <span className="hidden xl:flex">al Carro</span>
          </p>
        </Button>
      </div>
    </Card>
  )
}
