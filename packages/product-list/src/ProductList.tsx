import { Breadcrumb } from '@ajk-ui/breadcrumb'
import { mockProducts } from '@ajk-ui/data'
import { FilterBar, FilterProvider } from '@ajk-ui/filter-bar'
import { Pagination } from '@ajk-ui/pagination'
import { Product } from '@ajk-ui/product'
import { ProductGrid } from '@ajk-ui/product-grid'
import { FC, useState } from 'react'

interface ProductListProps {
  products: Product[]
}

interface FilterState {
  category: string[]
  size: string[]
  priceRange: string
  sortBy: string
}

export const ProductList: FC<ProductListProps> = ({ products }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts)
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 12

  const breadcrumbItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Zapatillas', href: '/zapatillas' },
  ]

  const handleFilterChange = (filters: FilterState) => {
    console.log('filters', filters)
    let result = [...mockProducts]

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
      default:
        // 'featured' - mantener orden original
        break
    }

    setFilteredProducts(result)
    setCurrentPage(1) // Reset a primera página cuando se aplican filtros
  }

  // Calcular productos para la página actual
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)

  return (
    <FilterProvider onFilterChange={handleFilterChange} totalProducts={filteredProducts.length}>
      {/* Breadcrumb */}
      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <Breadcrumb
            items={[
              { href: '#', label: 'Inicio' },
              { href: '#', label: 'Zapatillas' },
            ]}
          />

          <div className="mt-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Zapatillas</h1>
          </div>
        </div>
      </div>

      {/* TopFilter */}
      <FilterBar position="top" />

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex gap-6">
          {/* SideFilter */}
          <FilterBar position="left" />

          {/* Product Grid */}
          <div className="flex-1">
            <ProductGrid
              products={currentProducts.map(product => ({
                ...{
                  ...product,
                  image: getImagePath(product.images.gallery[0].size.lg.url),
                },
              }))}
            />
            <div className="mt-8">
              <Pagination
                totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </FilterProvider>
  )
}
