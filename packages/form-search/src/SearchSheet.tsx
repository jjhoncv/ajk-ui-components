// SearchSheet.tsx
import { Sheet } from '@ajk-ui/sheet'
import { X } from 'lucide-react'
import { FC, useEffect, useRef, useState } from 'react'
import { SearchInput } from './SearchInput'
import type { Suggestion } from './SuggestionsDropdown'

interface SearchSheetProps {
  isOpen: boolean
  onClose: () => void
  onSearch: (query: string) => void
  onGetSuggestions: (query: string) => Promise<Suggestion[]>
}

export const SearchSheet: FC<SearchSheetProps> = ({
  isOpen,
  onClose,
  onSearch,
  onGetSuggestions,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      // Pequeño delay para asegurar que el Sheet está montado
      const timeoutId = setTimeout(() => {
        inputRef.current?.focus()
      }, 100)

      return () => clearTimeout(timeoutId)
    }
  }, [isOpen])

  const handleClose = () => {
    onClose()
  }

  return (
    <Sheet isOpen={isOpen} onClose={handleClose} side="right" className="w-full">
      <div className="flex h-full flex-col">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Buscar</h2>
          <button
            onClick={handleClose}
            className="rounded-full p-2 transition-colors hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <SearchInput
          ref={inputRef}
          onSearch={onSearch}
          onGetSuggestions={onGetSuggestions}
          onComplete={onClose}
          key={isOpen ? 'open' : 'closed'} // Forzar remontaje del componente
        />
      </div>
    </Sheet>
  )
}
