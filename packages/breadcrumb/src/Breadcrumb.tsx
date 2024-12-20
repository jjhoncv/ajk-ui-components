import { cn } from '@ajk-ui/core'
import { ChevronRight, Home } from 'lucide-react'
import React from 'react'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  showHomeIcon?: boolean
  className?: string
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  showHomeIcon = true,
  className,
}) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn('flex items-center space-x-2 text-sm text-gray-500', className)}
    >
      {showHomeIcon && (
        <a href="/" className="flex items-center hover:text-gray-700">
          <Home className="h-4 w-4" />
        </a>
      )}

      {items.map((item, index) => (
        <React.Fragment key={item.href}>
          {/* Separator */}
          {(showHomeIcon || index > 0) && <ChevronRight className="h-4 w-4 text-gray-400" />}

          {/* Item */}
          <a
            href={item.href}
            className={cn(
              'transition-colors hover:text-gray-700',
              index === items.length - 1 ? 'font-medium text-gray-900' : ''
            )}
            {...(index === items.length - 1 ? { 'aria-current': 'page' } : {})}
          >
            {item.label}
          </a>
        </React.Fragment>
      ))}
    </nav>
  )
}
