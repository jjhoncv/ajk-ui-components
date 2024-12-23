import { useFilter } from './FilterContext'
import { MobileFilter } from './MobileFilter'

export const TopFilter = () => {
  const { filters, updateFilter, totalProducts, filterOptions } = useFilter()
  const { sortOptions } = filterOptions

  return (
    <div className="">
      <div className="mx-auto max-w-7xl py-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <MobileFilter />
            <div className="hidden items-center gap-4 md:flex">
              <select
                value={filters.sortBy}
                onChange={e => updateFilter('sortBy', e.target.value)}
                className="rounded-lg border bg-white px-3 py-2"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="text-sm text-gray-500">{totalProducts} productos</div>
        </div>
      </div>
    </div>
  )
}
