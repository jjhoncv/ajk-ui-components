import { X } from "lucide-react";
import { useFilter } from "./FilterContext";

export const FilterContent = () => {
  const { filters, updateFilter, filterOptions } = useFilter();
  const { categories, sizes, priceRanges } = filterOptions;

  return (
    <div className="space-y-6">
      {/* Categorías */}
      <div>
        <h3 className="font-medium mb-3">Categorías</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center hover:bg-gray-50 p-2 rounded cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.category.includes(category)}
                onChange={() => updateFilter("category", category)}
                className="mr-2"
              />
              <span className="text-sm">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Tallas */}
      <div>
        <h3 className="font-medium mb-3">Tallas</h3>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <label
              key={size}
              className="flex items-center hover:bg-gray-50 p-2 rounded cursor-pointer"
            >
              <input
                type="checkbox"
                checked={filters.size.includes(size)}
                onChange={() => updateFilter("size", size)}
                className="mr-2"
              />
              <span className="text-sm">{size}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Precio */}
      <div>
        <h3 className="font-medium mb-3">Precio</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => {
            const isChecked = filters.priceRange === range.value;

            return (
              <div
                key={range.value}
                className="flex items-center hover:bg-gray-50 p-2 rounded cursor-pointer"
                onClick={() => {
                  updateFilter("priceRange", range.value);
                }}
              >
                <div
                  className={`w-4 h-4 rounded-full border mr-2 flex items-center justify-center 
                    ${isChecked ? "border-blue-500" : "border-gray-300"}`}
                >
                  {isChecked && (
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                  )}
                </div>
                <span className="text-sm">{range.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filtros activos */}
      {(filters.category.length > 0 ||
        filters.size.length > 0 ||
        filters.priceRange) && (
        <div>
          <h3 className="font-medium mb-3">Filtros activos</h3>
          <div className="flex flex-wrap gap-2">
            {filters.category.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-1"
              >
                {cat}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => updateFilter("category", cat)}
                />
              </span>
            ))}
            {filters.size.map((size) => (
              <span
                key={size}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-1"
              >
                Talla {size}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => updateFilter("size", size)}
                />
              </span>
            ))}
            {filters.priceRange && (
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center gap-1">
                {
                  priceRanges.find(
                    (range) => range.value === filters.priceRange
                  )?.label
                }
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={() => updateFilter("priceRange", "")}
                />
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
