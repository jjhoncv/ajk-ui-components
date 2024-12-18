import { cn } from "@ajk-ui/core";
import { Product } from "@ajk-ui/product";
import { Tab, Tabs, TabsContent, TabsList } from "@ajk-ui/tabs";
import React from "react";
// import { Tabs, TabsList, Tab, TabsContent } from "./Tabs";
// import { Product, ProductReview } from "../types/product";

interface ProductTabsProps {
  product: Product;
}

const RatingStars: React.FC<{
  rating: number;
  size?: "xs" | "sm" | "md" | "lg";
}> = ({ rating, size = "md" }) => {
  const starSizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

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
              "w-full h-full",
              `${i < Math.floor(rating) ? "fill-yellow-400 " : "fill-gray-300"}`
            )}
          >
            <path d="M63.9269 80.7032C62.9269 80.7032 61.8253 80.4024 60.8253 79.9024L42.0283 70.004L23.2273 79.9024C21.0281 81.1016 18.3289 80.9024 16.3289 79.4024C14.3289 77.9024 13.3289 75.504 13.7273 73.004L17.3289 52.004L2.02785 37.102C0.227052 35.4028 -0.472148 32.8012 0.328652 30.4028C1.12945 28.0044 3.12945 26.3012 5.62945 25.9028L26.7315 22.8012L36.1299 3.6992C37.2315 1.3984 39.5283 0 42.0283 0C44.5283 0 46.8291 1.3984 47.9267 3.6992L57.3251 22.8012L78.4271 25.9028C80.9271 26.3012 82.9271 28.0044 83.7279 30.4028C84.5287 32.8012 83.8294 35.4028 82.0287 37.102L66.8297 52.004L70.4313 73.004C70.8297 75.504 69.8297 77.9024 67.8297 79.4024C66.6305 80.2032 65.3292 80.7032 63.9269 80.7032Z" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export const ProductTabs: React.FC<ProductTabsProps> = ({ product }) => {
  return (
    <Tabs defaultValue="description" className="w-full">
      {/* <TabsList className="grid grid-cols-3 bg-gray-50 rounded-t-lg"> */}
      <TabsList className="overflow-x-auto flex whitespace-nowrap w-full hide-scrollbar">
        <Tab value="description">Descripción</Tab>
        <Tab value="specs">Especificaciones</Tab>
        <Tab value="reviews">Reseñas</Tab>
      </TabsList>

      <div className="bg-white rounded-b-lg shadow">
        <TabsContent value="description">
          <div className="px-6 space-y-6">
            <p className="text-gray-600 leading-relaxed">
              {product.longDescription}
            </p>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-4">
                Características
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="block h-2 w-2 mt-2 mr-2 rounded-full bg-primary-600" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="specs">
          <div className="px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-medium text-gray-900 mb-4">
                  Materiales y Construcción
                </h3>
                <ul className="space-y-3">
                  {product.specs.material.map((material, index) => (
                    <li key={index} className="flex items-start">
                      <span className="block h-2 w-2 mt-2 mr-2 rounded-full bg-primary-600" />
                      <span className="text-gray-600">{material}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Calce</h3>
                  <p className="text-gray-600">{product.specs.fit}</p>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 mb-2">Cuidados</h3>
                  <ul className="list-disc pl-5 space-y-1">
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
          <div className="px-6 space-y-8">
            {/* Rating Summary */}
            <div className="flex items-center gap-8 p-4 bg-gray-50 rounded-lg flex-col w-full md:flex-row">
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900">
                  {product.ratings.average.toFixed(1)}
                </div>
                <div className="flex items-center justify-center mt-2">
                  <RatingStars rating={product.ratings.average} size="lg" />
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {product.ratings.count} reseñas
                </div>
              </div>
              <div className="flex-1 w-full">
                {Object.entries(product.ratings.distribution)
                  .reverse()
                  .map(([rating, count]) => (
                    <div key={rating} className="flex items-center gap-2 mb-2">
                      <div className="w-8 text-sm text-gray-600">{rating}★</div>
                      <div className="flex-1 h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-full bg-yellow-400 rounded-full transition-all"
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
              {product.reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-900 text-xs md:text-base">
                          {review.userName}
                        </span>
                        {review.verified && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                            Compra verificada
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <RatingStars rating={review.rating} size="sm" />
                        <span className="text-xs md:text-sm text-gray-500">
                          {new Date(review.date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-600 text-sm md:text-base">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default ProductTabs;
