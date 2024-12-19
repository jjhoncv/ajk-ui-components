import { cn } from "@ajk-ui/core";
import React from "react";
import { FilterContent } from "./FilterContent";
import { MobileFilter } from "./MobileFilter";
import { TopFilter } from "./TopFilter";

interface FilterBarProps {
  position?: "top" | "left" | "right";
  className?: string;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  position = "top",
  className,
}) => {
  // Renderizar versión top si es la posición seleccionada
  if (position === "top") {
    return <TopFilter />;
  }

  // Estilos para las versiones laterales
  const sideFilterClass = cn(
    "hidden md:block w-64 p-6 bg-white border rounded-lg",
    position === "left" ? "mr-6" : "ml-6",
    className
  );

  return (
    <>
      <div className={sideFilterClass}>
        <FilterContent />
      </div>
    </>
  );
};
