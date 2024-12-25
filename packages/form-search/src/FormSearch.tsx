import { Input } from '@ajk-ui/input'
import { Sheet } from '@ajk-ui/sheet'
import { useTheme } from '@ajk-ui/theme-utils'
import debounce from 'lodash/debounce'
import { Search, X } from 'lucide-react'
import { ChangeEvent, FC, FormEvent, useEffect, useMemo, useRef, useState } from 'react'
import { Suggestion, SuggestionsDropdown } from './SuggestionsDropdown'
import { SearchInput } from './SearchInput'
import { SearchSheet } from './SearchSheet'

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
      <div className="hidden w-full md:block">
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
          <Search className="h-6 w-6" />
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
