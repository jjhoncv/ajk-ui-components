import { cn } from '@ajk-ui/core'
import { Highlight } from './Highlight'

export interface Suggestion {
  id: number
  title: string
  description?: string
  image?: string
}

const LINES = 2

interface SuggestionsDropdownProps {
  suggestions: Suggestion[]
  isLoading: boolean
  onSelect: (suggestion: Suggestion) => void
  query: string
  theme: any
  selectedIndex?: number // Nuevo prop para el índice seleccionado
}

export const SuggestionsDropdown = ({
  suggestions,
  isLoading,
  onSelect,
  query,
  theme,
  selectedIndex = -1, // -1 significa que no hay selección
}: SuggestionsDropdownProps) => (
  <div
    className={cn(
      'absolute z-50 mt-1 w-full overflow-hidden rounded-md shadow-lg',
      'border border-gray-200',
      'max-h-[300px] overflow-y-auto'
    )}
    style={{ backgroundColor: theme.colors.background }}
  >
    {isLoading ? (
      <div className="p-4 text-center text-sm" style={{ color: theme.colors.textVariants.muted }}>
        Buscando...
      </div>
    ) : suggestions.length > 0 ? (
      <ul className="divide-y divide-gray-100">
        {suggestions.map((suggestion, index) => (
          <li
            key={suggestion.id}
            onClick={() => onSelect(suggestion)}
            className={cn(
              'cursor-pointer px-4 py-3 transition-colors duration-200',
              selectedIndex === index ? 'bg-secondary-default' : 'hover:bg-gray-50'
            )}
          >
            <div className="flex items-center gap-3">
              {suggestion.image && (
                <img
                  src={suggestion.image}
                  alt={suggestion.title}
                  className="h-10 w-10 rounded object-cover"
                />
              )}

              <div>
                <div className="text-sm font-medium">
                  <Highlight
                    className={cn(
                      'line-clamp-1',
                      'display-webkit-box',
                      '-webkit-box-orient-vertical',
                      'overflow-hidden',
                      `line-clamp-1`,
                      `-webkit-line-clamp-1`
                    )}
                    text={suggestion.title}
                    query={query}
                  />
                </div>
                {suggestion.description && (
                  <div
                    className={cn(
                      'mt-0.5 text-xs',
                      'line-clamp-1',
                      LINES > 0 && [
                        'display-webkit-box',
                        '-webkit-box-orient-vertical',
                        'overflow-hidden',
                        `line-clamp-${LINES}`,
                        `-webkit-line-clamp-${LINES}`,
                      ]
                    )}
                    style={{ color: theme.colors.textVariants.muted }}
                  >
                    <Highlight text={suggestion.description} query={query} />
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    ) : (
      <div className="p-4 text-center text-sm" style={{ color: theme.colors.textVariants.muted }}>
        No se encontraron resultados
      </div>
    )}
  </div>
)
