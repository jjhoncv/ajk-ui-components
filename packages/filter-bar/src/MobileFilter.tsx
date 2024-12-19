import { Sheet } from "@ajk-ui/sheet";
import { Filter, X } from "lucide-react";
import { useState } from "react";
import { FilterContent } from "./FilterContent";
import { useFilter } from "./FilterContext";

export const MobileFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { totalProducts } = useFilter();

  return (
    <>
      <div className="md:hidden flex items-center justify-between w-full">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2 border rounded-lg"
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
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Filtros</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <FilterContent />

          {/* Botón aplicar filtros */}
          <div className="mt-6 border-t pt-4">
            <button
              onClick={() => setIsOpen(false)}
              className="w-full py-3 px-4 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              Ver {totalProducts} resultados
            </button>
          </div>
        </div>
      </Sheet>
    </>
  );
};
