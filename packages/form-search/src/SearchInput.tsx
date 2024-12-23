import { Input } from '@ajk-ui/input'
import { useTheme } from '@ajk-ui/theme-utils'
import { debounce } from 'lodash'
import { Search } from 'lucide-react'
import { ChangeEvent, FormEvent, forwardRef, useEffect, useMemo, useRef, useState } from 'react'
import { Suggestion, SuggestionsDropdown } from './SuggestionsDropdown'

interface SearchInputProps {
  onSearch: (query: string) => void
  onGetSuggestions: (query: string) => Promise<Suggestion[]>
  onComplete?: () => void
  className?: string
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onSearch, onGetSuggestions, onComplete, className }, ref) => {
    const [query, setQuery] = useState('')
    const [suggestions, setSuggestions] = useState<Suggestion[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [showSuggestions, setShowSuggestions] = useState(false)
    const [selectedIndex, setSelectedIndex] = useState(-1)

    const wrapperRef = useRef<HTMLDivElement>(null)
    const { theme } = useTheme()

    const debouncedSearch = useMemo(
      () =>
        debounce(async (searchQuery: string) => {
          if (searchQuery.length < 2) {
            setSuggestions([])
            return
          }

          setIsLoading(true)
          try {
            const results = await onGetSuggestions(searchQuery)
            setSuggestions(results)
          } catch (error) {
            console.error('Error fetching suggestions:', error)
            setSuggestions([])
          } finally {
            setIsLoading(false)
          }
        }, 300),
      [onGetSuggestions]
    )

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onSearch(query)
      setShowSuggestions(false)
      onComplete?.()
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setQuery(value)
      setShowSuggestions(true)
      debouncedSearch(value)
    }

    const handleSuggestionClick = (suggestion: Suggestion) => {
      setQuery(suggestion.title)
      onSearch(suggestion.title)
      setShowSuggestions(false)
      onComplete?.()
    }

    useEffect(() => {
      return () => {
        setQuery('')
        setSuggestions([])
        setShowSuggestions(false)
        setSelectedIndex(-1)
      }
    }, [])

    return (
      <div ref={wrapperRef} className="relative">
        <form onSubmit={handleSubmit} className={className}>
          <Input
            ref={ref}
            type="text"
            value={query}
            onChange={handleChange}
            onFocus={() => setShowSuggestions(true)}
            placeholder="Buscar..."
            leftIcon={Search}
            fullWidth={true}
          />
        </form>

        {showSuggestions && query.length >= 2 && (
          <SuggestionsDropdown
            suggestions={suggestions}
            isLoading={isLoading}
            query={query}
            onSelect={handleSuggestionClick}
            theme={theme}
            selectedIndex={selectedIndex}
          />
        )}
      </div>
    )
  }
)

SearchInput.displayName = 'SearchInput'
