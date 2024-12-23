import { Breadcrumb } from '@ajk-ui/breadcrumb'
import { FilterBar, FilterProvider } from '@ajk-ui/filter-bar'
import { Pagination } from '@ajk-ui/pagination'
import { Product } from '@ajk-ui/product'
import { ProductGrid } from '@ajk-ui/product-grid'
import { FC } from 'react'
import { useProductList } from './hooks/useProductList'

interface ProductListProps {
  products: Product[]
}

export const ProductList: FC<ProductListProps> = ({ products: initialProducts }) => {
  const breadcrumbItems = [{ label: 'Zapatillas', href: '/zapatillas' }]

  const {
    currentProducts,
    currentPage,
    totalPages,
    handleFilterChange,
    setCurrentPage,
    totalProducts,
  } = useProductList({
    products: initialProducts,
    productsPerPage: 12,
  })

  return (
    <FilterProvider onFilterChange={handleFilterChange} totalProducts={totalProducts}>
      {/* Breadcrumb */}
      <div className="py-2">
        <div className="mx-auto max-w-7xl pb-0 pt-4">
          <Breadcrumb items={breadcrumbItems} />

          <div className="mt-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Zapatillas</h1>
          </div>
        </div>
      </div>

      {/* TopFilter */}
      <FilterBar position="top" />

      {/* Main Content */}
      <div className="mx-auto max-w-7xl">
        <div className="flex gap-6">
          {/* SideFilter */}
          <FilterBar position="left" />

          {/* Product Grid */}
          <div className="flex-1">
            <ProductGrid
              products={currentProducts.map(product => ({
                ...{
                  ...product,
                  clickMe: () => {
                    ;(window as any).top.location.href = getImagePath(
                      `/iframe.html?productId=${product.id}&id=pages-ecommerce--product-detail-page&viewMode=story`
                    )
                  },
                  image: getImagePath(product.images.gallery[0].size.lg.url),
                },
              }))}
            />
            <div className="mt-8">
              <Pagination
                totalPages={totalPages}
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
