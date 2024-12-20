import React, { ButtonHTMLAttributes } from 'react'
import { useTabsContext } from './TabsContext'
import { cn } from '@ajk-ui/core'

export interface TabProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
  children: React.ReactNode
  isActive?: boolean
  onClick?: () => void
  className?: string
}

export const Tab: React.FC<TabProps> = ({ value, children, className, ...props }) => {
  const { value: selectedValue, setValue } = useTabsContext()
  const isSelected = value === selectedValue

  return (
    <button
      onClick={() => setValue(value)}
      className={cn(
        `px-4 py-2 text-sm font-medium transition-colors ${
          isSelected
            ? 'border-b-2 border-primary-600 text-primary-600'
            : 'text-gray-500 hover:text-gray-700'
        } `,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
