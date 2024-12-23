import { Sheet } from '@ajk-ui/sheet'
import { Filter, X } from 'lucide-react'
import { useState } from 'react'
import { FilterContent } from './FilterContent'
import { useFilter } from './FilterContext'

export const MobileFilter = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { totalProducts } = useFilter()

  return (
    <>
      <div className="flex w-full items-center justify-between md:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-lg border px-4 py-2"
        >
          <Filter className="h-4 w-4" />
          <span>Filtrar</span>
        </button>
      </div>

      <Sheet
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        side="left"
        className="overflow-y-auto"
      >
        <div className="">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Filtros</h2>
            <button onClick={() => setIsOpen(false)} className="rounded-full p-2 hover:bg-gray-100">
              <X className="h-5 w-5" />
            </button>
          </div>

          <FilterContent />

          {/* Botón aplicar filtros */}
          <div className="mt-6 border-t pt-4">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full rounded-lg bg-black px-4 py-3 text-white hover:bg-gray-800"
            >
              Ver {totalProducts} resultados
            </button>
          </div>
        </div>
      </Sheet>
    </>
  )
}
