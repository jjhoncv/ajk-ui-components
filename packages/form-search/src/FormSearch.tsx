import { Input } from '@ajk-ui/input'
import { useTheme } from '@ajk-ui/theme-utils'
import debounce from 'lodash/debounce'
import { Search } from 'lucide-react'
import { ChangeEvent, FC, FormEvent, useCallback, useEffect, useRef, useState } from 'react'
import { Suggestion, SuggestionsDropdown } from './SuggestionsDropdown'

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

export const FormSearch: FC<FormSearchProps> = ({
  onSearch,
  onGetSuggestions,
  placeholder = 'Buscar...',
  defaultValue = '',
  className,
  autoFocus = false,
  fullWidth = true,
  debounceMs = 300,
}) => {
  const [query, setQuery] = useState(defaultValue)
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [selectedIndex, setSelectedIndex] = useState(-1)

  const { theme } = useTheme()

  const debouncedSearch = useCallback(
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
    }, debounceMs),
    [onGetSuggestions]
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(query)
    setShowSuggestions(false)
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
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || suggestions.length === 0) {
      // Si no hay sugerencias, permitir el comportamiento normal del formulario
      return
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault() // Prevenir el scroll
        setSelectedIndex(prev => (prev < suggestions.length - 1 ? prev + 1 : 0))
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : suggestions.length - 1))
        break
      case 'Enter':
        e.preventDefault()
        if (selectedIndex >= 0) {
          // Si hay una sugerencia seleccionada, úsala
          handleSuggestionClick(suggestions[selectedIndex])
        } else {
          // Si no hay sugerencia seleccionada, buscar el query actual
          onSearch(query)
          setShowSuggestions(false)
        }
        break
      case 'Escape':
        setShowSuggestions(false)
        break
    }
  }

  useEffect(() => {
    setSelectedIndex(-1)
  }, [suggestions])

  return (
    <div ref={wrapperRef} className="relative">
      <form onSubmit={handleSubmit} className={className}>
        <Input
          type="search"
          value={query}
          onChange={handleChange}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          leftIcon={Search}
          fullWidth={fullWidth}
          autoFocus={autoFocus}
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
