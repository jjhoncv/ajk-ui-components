// FilterContext.tsx
import React, { createContext, useContext, useState } from 'react'

interface FilterState {
  category: string[]
  size: string[]
  priceRange: string
  sortBy: string
}

interface FilterContextType {
  filters: FilterState
  updateFilter: (type: keyof FilterState, value: string) => void
  totalProducts: number
  filterOptions: {
    categories: string[]
    sizes: string[]
    priceRanges: Array<{ label: string; value: string }>
    sortOptions: Array<{ label: string; value: string }>
  }
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

export const useFilter = () => {
  const context = useContext(FilterContext)
  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider')
  }
  return context
}

export const FilterProvider: React.FC<{
  children: React.ReactNode
  onFilterChange?: (filters: FilterState) => void
  totalProducts: number
}> = ({ children, onFilterChange, totalProducts }) => {
  const [filters, setFilters] = useState<FilterState>({
    category: [],
    size: [],
    priceRange: '',
    sortBy: 'featured',
  })

  const filterOptions = {
    categories: ['Zapatillas', 'Skate', 'Casual', 'Mujer', 'Unisex'],
    sizes: ['35', '36', '37', '38', '39'],
    priceRanges: [
      { label: 'Menos de S/ 120', value: '0-120' },
      { label: 'S/ 120 - S/ 140', value: '120-140' },
      { label: 'Más de S/ 140', value: '140-999' },
    ],
    sortOptions: [
      { label: 'Destacados', value: 'featured' },
      { label: 'Precio: Menor a Mayor', value: 'price_asc' },
      { label: 'Precio: Mayor a Menor', value: 'price_desc' },
      { label: 'Mejor Valorados', value: 'rating' },
    ],
  }

  const updateFilter = (type: keyof FilterState, value: string) => {
    setFilters(prev => {
      const newFilters = { ...prev }

      if (type === 'priceRange') {
        console.log('Previous price:', prev.priceRange)
        console.log('New price:', value)
        newFilters.priceRange = value
      } else if (type === 'category' || type === 'size') {
        const array = prev[type] as string[]
        const index = array.indexOf(value)
        newFilters[type] = index === -1 ? [...array, value] : array.filter(item => item !== value)
      } else {
        newFilters[type] = value
      }

      console.log('Updated filters:', newFilters)
      onFilterChange?.(newFilters)
      return newFilters
    })
  }

  return (
    <FilterContext.Provider
      value={{
        filters,
        updateFilter,
        totalProducts,
        filterOptions,
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
