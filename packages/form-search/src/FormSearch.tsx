import { Search } from 'lucide-react'
import { FC, useState } from 'react'
import { SearchInput } from './SearchInput'
import { SearchSheet } from './SearchSheet'
import { Suggestion } from './SuggestionsDropdown'

interface FormSearchProps {
  onSearch: (query: string) => void
  onGetSuggestions: (query: string) => Promise<Suggestion[]>
  placeholder?: string
  defaultValue?: string
  className?: string
  autoFocus?: boolean
  fullWidth?: boolean
  debounceMs?: number
}

export const FormSearch: FC<FormSearchProps> = ({ onSearch, onGetSuggestions, className }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  return (
    <>
      <div className="hidden md:block">
        <SearchInput
          onSearch={onSearch}
          onGetSuggestions={onGetSuggestions}
          className={className}
        />
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsSheetOpen(true)}
          className="rounded-full p-2 transition-colors hover:bg-gray-100"
          aria-label="Buscar"
        >
          <Search className="h-5 w-5" />
        </button>

        <SearchSheet
          isOpen={isSheetOpen}
          onClose={() => setIsSheetOpen(false)}
          onSearch={onSearch}
          onGetSuggestions={onGetSuggestions}
        />
      </div>
    </>
  )
}
