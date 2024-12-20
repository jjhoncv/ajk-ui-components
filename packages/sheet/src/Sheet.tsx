import { cn } from '@ajk-ui/core'
import React, { type FC, useEffect } from 'react'

interface SheetProps {
  isOpen?: boolean
  onClose: () => void
  children: React.ReactNode
  side?: 'left' | 'right'
  className?: string
}

export const Sheet: FC<SheetProps> = ({
  isOpen: isOpenInitial = false,
  onClose,
  children,
  side = 'left',
  className = '',
}) => {
  const [isOpen, setIsOpen] = React.useState(isOpenInitial)
  const [isVisible, setIsVisible] = React.useState(false)

  const sideStyles = {
    left: 'left-0 -translate-x-full',
    right: 'right-0 translate-x-full',
  }

  const baseMobileStyles = {
    box: 'fixed z-50 h-dvh top-0 w-[320px] transition-transform duration-300 ease-out shadow-2xl px-6 py-3 ove',
    bg: 'bg-white',
  }

  useEffect(() => {
    if (isOpenInitial) {
      setIsVisible(true)
      requestAnimationFrame(() => {
        setIsOpen(true)
      })
    } else {
      setIsOpen(false)
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOpenInitial])

  const handleOverlayClick = () => {
    setIsOpen(false)
    onClose?.()
  }

  return (
    <>
      <div
        className={cn('fixed inset-0 z-40 transition-all duration-300 ease-out', {
          invisible: !isVisible,
          visible: isVisible,
          'bg-black/60': isOpen,
          'bg-black/0': !isOpen,
        })}
        onClick={handleOverlayClick}
      />
      <div
        className={cn(
          baseMobileStyles.box,
          baseMobileStyles.bg,
          sideStyles[side],
          {
            'translate-x-0': isOpen,
            invisible: !isVisible,
            visible: isVisible,
          },
          className
        )}
      >
        {children}
      </div>
    </>
  )
}
