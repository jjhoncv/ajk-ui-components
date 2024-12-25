import { cn } from '@ajk-ui/core'
import { useTheme } from '@ajk-ui/theme-utils'
import { ShoppingCart } from 'lucide-react'

export const ButtonCart = ({
  total,
  className,
  handleClick,
}: {
  total: number
  className?: string
  handleClick?: () => void
}) => {
  const { theme } = useTheme()
  return (
    <button
      type="button"
      onClick={e => {
        handleClick?.()
        e.preventDefault()
      }}
      className={cn('flex items-center gap-1 md:min-w-[100px] md:justify-between')}
    >
      <div className="relative">
        <ShoppingCart className="h-6 w-6 text-gray-600" />

        {total > 0 && (
          <div
            className={cn(
              'absolute right-[-10px] top-[-10px] z-10 flex h-5 w-5 items-center justify-center rounded-full border border-transparent bg-red-500 text-xs text-white'
            )}
            style={{
              backgroundColor: theme.colors.primary,
            }}
          >
            {total}
          </div>
        )}
      </div>
      <span className="hidden text-sm font-medium text-gray-700 md:block">Mi Carrito</span>
    </button>
  )
}

export default ButtonCart
