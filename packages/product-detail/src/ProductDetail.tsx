import { Breadcrumb } from '@ajk-ui/breadcrumb'
import { useCart } from '@ajk-ui/cart'
import { Product, ProductImage } from '@ajk-ui/product'
import { ProductGallery } from '@ajk-ui/product-gallery'
import { ProductInfo } from '@ajk-ui/product-info'
import { ProductTabs } from '@ajk-ui/product-tabs'
import { useState } from 'react'

interface ProductDetailProps {
  product: Product
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  const { addItem } = useCart()

  const [selectedSize, setSelectedSize] = useState<string>('')
  const [quantity, setQuantity] = useState<number>(1)
  const [selectedImage, setSelectedImage] = useState<ProductImage>(product.images.gallery[0])

  const handleSizeSelect = (size: string): void => {
    setSelectedSize(size)
  }

  const handleQuantityChange = (newQuantity: number): void => {
    setQuantity(Math.max(1, Math.min(newQuantity, product.stock.total)))
  }

  const handleImageSelect = (image: ProductImage): void => {
    setSelectedImage(image)
  }

  const handleAddToCart = (): void => {
    if (!selectedSize) {
      alert('Por favor selecciona una talla')
      return
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: selectedImage.size.xs.url,
      subname: product.subname,
      quantity,
    })
  }

  return (
    <div className="py-8">
      {/* Breadcrumb */}
      <div className="mb-8 text-sm">
        <Breadcrumb
          items={product.categories.map(categorie => ({
            href: `#/${categorie}`,
            label: categorie,
          }))}
          showHomeIcon={false}
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Image Gallery */}
        <ProductGallery
          images={product.images}
          selectedImage={selectedImage}
          onImageSelect={handleImageSelect}
        />

        {/* Product Info */}
        <ProductInfo
          product={product}
          selectedSize={selectedSize}
          quantity={quantity}
          onSizeSelect={handleSizeSelect}
          onQuantityChange={handleQuantityChange}
          onAddToCart={handleAddToCart}
        />
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <ProductTabs product={product} />
      </div>
    </div>
  )
}
