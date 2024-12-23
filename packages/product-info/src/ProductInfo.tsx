import { Button } from '@ajk-ui/button'
import { cn, formatPEN } from '@ajk-ui/core'
import { Product } from '@ajk-ui/product'

interface ProductInfoProps {
  product: Product
  selectedSize: string
  quantity: number
  onSizeSelect: (size: string) => void
  onQuantityChange: (quantity: number) => void
  onAddToCart: () => void
}
export const ProductInfo: React.FC<ProductInfoProps> = ({
  product,
  selectedSize,
  quantity,
  onSizeSelect,
  onQuantityChange,
  onAddToCart,
}) => {
  return (
    <div className="space-y-6">
      {/* Brand */}
      <div className="h-8">
        <img src={product.brand.logo} alt={product.brand.name} className="h-full object-contain" />
      </div>

      {/* Title & Rating */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
        <p className="mt-1 text-lg text-gray-500">{product.subname}</p>
        <div className="mt-4 flex items-center gap-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <div className="h-5 w-5">
                <svg
                  width="85"
                  height="81"
                  viewBox="0 0 85 81"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(
                    'h-full w-full',
                    `${
                      i < Math.floor(product.ratings.average) ? 'fill-yellow-400' : 'fill-gray-300'
                    }`
                  )}
                >
                  <path d="M63.9269 80.7032C62.9269 80.7032 61.8253 80.4024 60.8253 79.9024L42.0283 70.004L23.2273 79.9024C21.0281 81.1016 18.3289 80.9024 16.3289 79.4024C14.3289 77.9024 13.3289 75.504 13.7273 73.004L17.3289 52.004L2.02785 37.102C0.227052 35.4028 -0.472148 32.8012 0.328652 30.4028C1.12945 28.0044 3.12945 26.3012 5.62945 25.9028L26.7315 22.8012L36.1299 3.6992C37.2315 1.3984 39.5283 0 42.0283 0C44.5283 0 46.8291 1.3984 47.9267 3.6992L57.3251 22.8012L78.4271 25.9028C80.9271 26.3012 82.9271 28.0044 83.7279 30.4028C84.5287 32.8012 83.8294 35.4028 82.0287 37.102L66.8297 52.004L70.4313 73.004C70.8297 75.504 69.8297 77.9024 67.8297 79.4024C66.6305 80.2032 65.3292 80.7032 63.9269 80.7032Z" />
                </svg>
              </div>
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {product.ratings.average} ({product.ratings.count} reseñas)
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-4">
        <span className="text-3xl font-bold text-gray-900">{formatPEN(product.price)}</span>
        {product.originalPrice && (
          <>
            <span className="text-xl text-gray-500 line-through">
              {formatPEN(product.originalPrice)}
            </span>
            <span className="text-sm font-medium text-green-600">{product.discount}% OFF</span>
          </>
        )}
      </div>

      {/* Size Selector */}
      <div>
        <h3 className="text-sm font-medium text-gray-900">Talla</h3>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {product.variants[0].sizes.map(({ size, stock }) => (
            <button
              key={size}
              onClick={() => onSizeSelect(size)}
              disabled={stock === 0}
              className={`rounded-md px-4 py-3 text-sm font-medium ${
                selectedSize === size
                  ? 'bg-gray-900 text-white'
                  : stock === 0
                    ? 'cursor-not-allowed bg-gray-100 text-gray-400'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <h3 className="text-sm font-medium text-gray-900">Cantidad</h3>
        <div className="mt-2 flex items-center gap-2">
          <button
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            className="rounded-md bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
          >
            -
          </button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={e => onQuantityChange(Math.max(1, parseInt(e.target.value)))}
            className="w-16 rounded-md border p-2 text-center"
          />
          <button
            onClick={() => onQuantityChange(quantity + 1)}
            className="rounded-md bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart */}
      <Button
        variant="primary"
        onClick={onAddToCart}
        // className="w-full rounded-lg bg-primary-600 px-8 py-4 text-lg font-medium text-white hover:bg-primary-700"
      >
        Agregar al carrito
      </Button>

      {/* Shipping & Returns */}
      <div className="grid grid-cols-2 gap-4 border-t pt-6">
        <div className="flex gap-4">
          <div className="h-6 w-6">
            <svg
              width="95"
              height="67"
              viewBox="0 0 95 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full fill-gray-400"
            >
              <path d="M85.4299 55.3678C85.4299 61.778 80.2346 66.9768 73.8209 66.9768C67.4107 66.9768 62.2119 61.7776 62.2119 55.3678C62.2119 48.9537 67.4111 43.7588 73.8209 43.7588C80.235 43.7588 85.4299 48.9541 85.4299 55.3678Z" />
              <path d="M34.6018 55.3678C34.6018 61.778 29.4065 66.9768 22.9928 66.9768C16.5826 66.9768 11.3838 61.7776 11.3838 55.3678C11.3838 48.9537 16.583 43.7588 22.9928 43.7588C29.4069 43.7588 34.6018 48.9541 34.6018 55.3678Z" />
              <path d="M94.391 31.7697L75.641 9.17968C75.4418 8.96874 75.2309 8.76952 74.8324 8.76952H62.5314C62.3205 8.76952 62.1213 8.5703 62.1213 8.37108V0.800779C62.3205 0.199219 61.922 0 61.5197 0H1.0117C0.39842 0 0 0.40234 0 1.0117V54.5627C0 54.9611 0.39844 55.3635 0.80859 55.3635H7.05859C7.45703 55.3635 7.66015 55.1643 7.66015 54.7619C7.87109 51.5314 8.87105 48.3127 11.0898 45.4807C14.9296 40.8401 22.9879 38.8323 28.6409 41.0393C34.6916 43.4612 38.1214 48.9104 38.3206 54.7583C38.3206 55.1568 38.5198 55.3599 38.9299 55.3599H57.8909C58.2894 55.3599 58.4925 55.1607 58.4925 54.7583C58.6917 50.7271 60.3128 46.688 63.9417 43.6683C68.5823 39.6292 75.4417 38.8285 80.8827 41.6488C86.1327 44.4691 89.1522 49.5199 89.3515 54.7578C89.3515 55.1563 89.5507 55.3594 89.9609 55.3594H94.1914C94.6015 55.3594 95 54.9609 95 54.5586V32.7696C94.8007 32.3712 94.6019 31.9728 94.391 31.7697ZM62.731 14.6217C62.731 14.4029 62.9107 14.2232 63.1295 14.2232H72.8092C73.0084 14.2232 73.0084 14.2232 73.2193 14.4225L82.6334 26.0675C83.5123 27.1534 82.7389 28.7745 81.3404 28.7745L64.3914 28.7706C63.4734 28.7706 62.7312 28.0284 62.7312 27.1104L62.731 14.6217Z" />
            </svg>
          </div>
          <div>
            <h4 className="font-medium">Envío gratis</h4>
            <p className="text-sm text-gray-500">En pedidos mayores a S/99</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="h-6 w-6">
            <svg
              width="69"
              height="87"
              viewBox="0 0 69 87"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-full w-full fill-gray-400"
            >
              <path d="M63.076 11.3974C58.9744 11.0068 54.9432 10.081 51.099 8.6435C46.4584 6.913 42.1381 4.4638 38.247 1.3623C35.9697 -0.4541 32.7861 -0.4541 30.5087 1.3623C26.622 4.46 22.2978 6.9092 17.6567 8.6435C13.8129 10.081 9.7817 11.0068 5.6797 11.3974C2.4414 11.706 0 14.3818 0 17.6162V48.5112C0 61.6132 7.2812 73.3942 19.004 79.2572L31.582 85.5463C32.457 85.9838 33.4179 86.1986 34.375 86.1986C35.3359 86.1986 36.293 85.9799 37.1719 85.5463L49.7499 79.2572C61.4689 73.3939 68.7539 61.6122 68.7539 48.5112L68.7578 17.6162C68.7578 14.3779 66.3164 11.706 63.0781 11.3974H63.076ZM49.107 37.0614L33.482 52.9674C32.8961 53.5651 32.0914 53.901 31.2554 53.901H31.2476C30.4038 53.901 29.5992 53.5572 29.0171 52.9557L19.6421 43.2995C18.439 42.0612 18.4702 40.0847 19.7085 38.8815C20.9468 37.6783 22.9273 37.7057 24.1265 38.9479L31.2749 46.3073L44.6579 32.6863C45.8688 31.4519 47.8415 31.4363 49.0759 32.6472C50.3064 33.8581 50.3259 35.8347 49.115 37.0652L49.107 37.0614Z" />
            </svg>
          </div>
          <div>
            <h4 className="font-medium">Devolución gratis</h4>
            <p className="text-sm text-gray-500">Hasta 30 días después</p>
          </div>
        </div>
      </div>
    </div>
  )
}
