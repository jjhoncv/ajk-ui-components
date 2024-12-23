import { useState, useEffect, useMemo } from 'react'
import type { Product } from '@ajk-ui/product'

interface FilterState {
  category: string[]
  size: string[]
  priceRange: string
  sortBy: string
}

interface UseProductListProps {
  products: Product[]
  productsPerPage?: number
}

interface UseProductListReturn {
  filteredProducts: Product[]
  currentProducts: Product[]
  currentPage: number
  totalPages: number
  handleFilterChange: (filters: FilterState) => void
  setCurrentPage: (page: number) => void
  totalProducts: number
}

export function useProductList({
  products: initialProducts,
  productsPerPage = 12,
}: UseProductListProps): UseProductListReturn {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts)
  const [currentPage, setCurrentPage] = useState(1)

  // Reset productos filtrados cuando cambien los productos iniciales
  useEffect(() => {
    setFilteredProducts(initialProducts)
    setCurrentPage(1)
  }, [initialProducts])

  // Función para aplicar filtros
  const handleFilterChange = (filters: FilterState) => {
    let result = [...initialProducts]

    // Filtrar por categoría
    if (filters.category.length > 0) {
      result = result.filter(product =>
        filters.category.some(cat => product.categories.includes(cat))
      )
    }

    // Filtrar por talla
    if (filters.size.length > 0) {
      result = result.filter(product =>
        product.variants.some(variant =>
          variant.sizes.some(size => filters.size.includes(size.size) && size.stock > 0)
        )
      )
    }

    // Filtrar por rango de precio
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number)
      result = result.filter(product => product.price >= min && product.price <= max)
    }

    // Ordenar productos
    switch (filters.sortBy) {
      case 'price_asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price_desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.ratings.average - a.ratings.average)
        break
      // 'featured' - mantener orden original
      default:
        break
    }

    setFilteredProducts(result)
    setCurrentPage(1) // Reset a primera página cuando se aplican filtros
  }

  // Calcular productos para la página actual usando useMemo
  const currentProducts = useMemo(() => {
    const indexOfLastProduct = currentPage * productsPerPage
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage
    return filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  }, [currentPage, filteredProducts, productsPerPage])

  // Calcular total de páginas
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  return {
    filteredProducts,
    currentProducts,
    currentPage,
    totalPages,
    handleFilterChange,
    setCurrentPage,
    totalProducts: filteredProducts.length,
  }
}
