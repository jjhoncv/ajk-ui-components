import { cn } from '@ajk-ui/core'
import { Product } from '@ajk-ui/product'
import { Tab, Tabs, TabsContent, TabsList } from '@ajk-ui/tabs'
import React from 'react'
// import { Tabs, TabsList, Tab, TabsContent } from "./Tabs";
// import { Product, ProductReview } from "../types/product";

interface ProductTabsProps {
  product: Product
}

const RatingStars: React.FC<{
  rating: number
  size?: 'xs' | 'sm' | 'md' | 'lg'
}> = ({ rating, size = 'md' }) => {
  const starSizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }

  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <div className={starSizes[size]}>
          <svg
            width="85"
            height="81"
            viewBox="0 0 85 81"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
              'h-full w-full',
              `${i < Math.floor(rating) ? 'fill-yellow-400' : 'fill-gray-300'}`
            )}
          >
            <path d="M63.9269 80.7032C62.9269 80.7032 61.8253 80.4024 60.8253 79.9024L42.0283 70.004L23.2273 79.9024C21.0281 81.1016 18.3289 80.9024 16.3289 79.4024C14.3289 77.9024 13.3289 75.504 13.7273 73.004L17.3289 52.004L2.02785 37.102C0.227052 35.4028 -0.472148 32.8012 0.328652 30.4028C1.12945 28.0044 3.12945 26.3012 5.62945 25.9028L26.7315 22.8012L36.1299 3.6992C37.2315 1.3984 39.5283 0 42.0283 0C44.5283 0 46.8291 1.3984 47.9267 3.6992L57.3251 22.8012L78.4271 25.9028C80.9271 26.3012 82.9271 28.0044 83.7279 30.4028C84.5287 32.8012 83.8294 35.4028 82.0287 37.102L66.8297 52.004L70.4313 73.004C70.8297 75.504 69.8297 77.9024 67.8297 79.4024C66.6305 80.2032 65.3292 80.7032 63.9269 80.7032Z" />
          </svg>
        </div>
      ))}
    </div>
  )
}

export const ProductTabs: React.FC<ProductTabsProps> = ({ product }) => {
  return (
    <Tabs defaultValue="description" className="w-full">
      {/* <TabsList className="grid grid-cols-3 bg-gray-50 rounded-t-lg"> */}
      <TabsList className="hide-scrollbar flex w-full overflow-x-auto whitespace-nowrap">
        <Tab value="description">Descripción</Tab>
        <Tab value="specs">Especificaciones</Tab>
        <Tab value="reviews">Reseñas</Tab>
      </TabsList>

      <div className="rounded-b-lg bg-white shadow">
        <TabsContent value="description">
          <div className="space-y-6 px-6">
            <p className="leading-relaxed text-gray-600">{product.longDescription}</p>
            <div>
              <h3 className="mb-4 text-lg font-medium text-gray-900">Características</h3>
              <ul className="grid grid-cols-1 gap-x-6 gap-y-2 md:grid-cols-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-2 block h-2 w-2 rounded-full bg-primary-600" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="specs">
          <div className="px-6">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 font-medium text-gray-900">Materiales y Construcción</h3>
                <ul className="space-y-3">
                  {product.specs.material.map((material, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 mt-2 block h-2 w-2 rounded-full bg-primary-600" />
                      <span className="text-gray-600">{material}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-medium text-gray-900">Calce</h3>
                  <p className="text-gray-600">{product.specs.fit}</p>
                </div>
                <div>
                  <h3 className="mb-2 font-medium text-gray-900">Cuidados</h3>
                  <ul className="list-disc space-y-1 pl-5">
                    {product.specs.care.map((item, index) => (
                      <li key={index} className="text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="reviews">
          <div className="space-y-8 px-6">
            {/* Rating Summary */}
            <div className="flex w-full flex-col items-center gap-8 rounded-lg bg-gray-50 p-4 md:flex-row">
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900">
                  {product.ratings.average.toFixed(1)}
                </div>
                <div className="mt-2 flex items-center justify-center">
                  <RatingStars rating={product.ratings.average} size="lg" />
                </div>
                <div className="mt-1 text-sm text-gray-500">{product.ratings.count} reseñas</div>
              </div>
              <div className="w-full flex-1">
                {Object.entries(product.ratings.distribution)
                  .reverse()
                  .map(([rating, count]) => (
                    <div key={rating} className="mb-2 flex items-center gap-2">
                      <div className="w-8 text-sm text-gray-600">{rating}★</div>
                      <div className="h-2 flex-1 rounded-full bg-gray-200">
                        <div
                          className="h-full rounded-full bg-yellow-400 transition-all"
                          style={{
                            width: `${(count / product.ratings.count) * 100}%`,
                          }}
                        />
                      </div>
                      <div className="w-12 text-sm text-gray-500">
                        {Math.round((count / product.ratings.count) * 100)}%
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            {/* Reviews List */}
            <div className="space-y-6">
              {product.reviews.map(review => (
                <div key={review.id} className="border-b border-gray-200 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-gray-900 md:text-base">
                          {review.userName}
                        </span>
                        {review.verified && (
                          <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-800">
                            Compra verificada
                          </span>
                        )}
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <RatingStars rating={review.rating} size="sm" />
                        <span className="text-xs text-gray-500 md:text-sm">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 md:text-base">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  )
}

export default ProductTabs
