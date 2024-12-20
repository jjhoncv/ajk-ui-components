import { cn } from '@ajk-ui/core'
import { User } from 'lucide-react'

export const ButtonAccount = ({
  className,
  handleClick,
}: {
  className?: string
  handleClick?: () => void
}) => {
  return (
    <>
      <button
        type="button"
        onClick={e => {
          handleClick?.()
          e.preventDefault()
        }}
        className={cn('flex items-center gap-1 rounded-lg hover:bg-gray-100', className)}
      >
        <User className="h-5 w-5 text-gray-600" />
        <span className="hidden text-sm font-medium text-gray-700 md:block">Mi Cuenta</span>
      </button>
    </>
  )
}
