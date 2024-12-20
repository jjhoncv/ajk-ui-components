import { X } from 'lucide-react'
import { useFilter } from './FilterContext'

export const FilterContent = () => {
  const { filters, updateFilter, filterOptions } = useFilter()
  const { categories, sizes, priceRanges } = filterOptions

  return (
    <div className="space-y-6">
      {/* Categorías */}
      <div>
        <h3 className="mb-3 font-medium">Categorías</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <label
              key={category}
              className="flex cursor-pointer items-center rounded p-2 hover:bg-gray-50"
            >
              <input
                type="checkbox"
                checked={filters.category.includes(category)}
                onChange={() => updateFilter('category', category)}
                className="mr-2"
              />
              <span className="text-sm">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Tallas */}
      <div>
        <h3 className="mb-3 font-medium">Tallas</h3>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map(size => (
            <label
              key={size}
              className="flex cursor-pointer items-center rounded p-2 hover:bg-gray-50"
            >
              <input
                type="checkbox"
                checked={filters.size.includes(size)}
                onChange={() => updateFilter('size', size)}
                className="mr-2"
              />
              <span className="text-sm">{size}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Precio */}
      <div>
        <h3 className="mb-3 font-medium">Precio</h3>
        <div className="space-y-2">
          {priceRanges.map(range => {
            const isChecked = filters.priceRange === range.value

            return (
              <div
                key={range.value}
                className="flex cursor-pointer items-center rounded p-2 hover:bg-gray-50"
                onClick={() => {
                  updateFilter('priceRange', range.value)
                }}
              >
                <div
                  className={`mr-2 flex h-4 w-4 items-center justify-center rounded-full border ${isChecked ? 'border-blue-500' : 'border-gray-300'}`}
                >
                  {isChecked && <div className="h-2 w-2 rounded-full bg-blue-500" />}
                </div>
                <span className="text-sm">{range.label}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Filtros activos */}
      {(filters.category.length > 0 || filters.size.length > 0 || filters.priceRange) && (
        <div>
          <h3 className="mb-3 font-medium">Filtros activos</h3>
          <div className="flex flex-wrap gap-2">
            {filters.category.map(cat => (
              <span
                key={cat}
                className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm"
              >
                {cat}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => updateFilter('category', cat)}
                />
              </span>
            ))}
            {filters.size.map(size => (
              <span
                key={size}
                className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm"
              >
                Talla {size}
                <X className="h-3 w-3 cursor-pointer" onClick={() => updateFilter('size', size)} />
              </span>
            ))}
            {filters.priceRange && (
              <span className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-sm">
                {priceRanges.find(range => range.value === filters.priceRange)?.label}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => updateFilter('priceRange', '')}
                />
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
