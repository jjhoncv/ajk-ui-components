import { cn } from '@ajk-ui/core'
import React, { type FC, useEffect } from 'react'

export interface ModalProps {
  isOpen?: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}

export const Modal: FC<ModalProps> = ({
  isOpen: isOpenInitial = false,
  onClose,
  children,
  className,
}) => {
  const [isVisible, setIsVisible] = React.useState(false)

  const baseStyles = {
    container: 'fixed inset-0 z-50',
    wrapper: 'fixed inset-0 flex items-center justify-center pointer-events-none',
    box: 'w-full min-h-[100dvh] md:min-h-[400px] md:w-[500px] md:max-h-[80vh] md:rounded-lg transition-all duration-300 ease-out shadow-2xl px-6 py-3 pointer-events-auto',
    bg: 'bg-white',
    overlay: 'fixed inset-0 bg-black transition-all duration-300 ease-out',
  }

  // Manejador de tecla Escape
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpenInitial) {
        onClose()
      }
    }

    // Agregar el event listener cuando el modal está abierto
    if (isOpenInitial) {
      document.addEventListener('keydown', handleEscapeKey)
    }

    // Limpiar el event listener
    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isOpenInitial, onClose])

  useEffect(() => {
    if (isOpenInitial) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOpenInitial])

  if (!isVisible && !isOpenInitial) return null

  return (
    <div className={baseStyles.container}>
      {/* Overlay */}
      <div
        className={cn(baseStyles.overlay, {
          'opacity-60': isOpenInitial,
          'opacity-0': !isOpenInitial,
        })}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className={baseStyles.wrapper}>
        <div
          className={cn(
            baseStyles.box,
            baseStyles.bg,
            {
              'translate-y-0 opacity-100 md:translate-y-0': isOpenInitial,
              'translate-y-full opacity-0 md:translate-y-8': !isOpenInitial,
            },
            className
          )}
        >
          <div className="flex w-full justify-end md:hidden">
            <button
              onClick={() => {
                onClose()
              }}
              className="rounded-full bg-gray-100 p-2 hover:bg-gray-200"
            >
              <svg className={cn('h-5 w-5')} fill="none" viewBox="0 0 24 24">
                <path
                  className={cn('stroke-slate-950')}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
