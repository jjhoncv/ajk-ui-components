export interface Brand {
  id: number
  name: string
  logo: string
}

export interface ProductSize {
  size: string
  stock: number
}

export interface ProductVariant {
  id: number
  color: string
  colorCode: string
  images: ProductImage[]
  sizes: ProductSize[]
}

export interface ProductSpecs {
  material: string[]
  fit: string
  care: string[]
  origin: string
}

export interface ProductRatings {
  average: number
  count: number
  distribution: {
    [key: number]: number
    5: number
    4: number
    3: number
    2: number
    1: number
  }
}

export interface ProductReview {
  id: number
  userName: string
  rating: number
  comment: string
  date: string
  verified: boolean
}

export interface ShippingMethod {
  id: number
  name: string
  price: number
  estimatedDays: number
}

export interface ProductShipping {
  free: boolean
  estimatedDays: number
  methods: ShippingMethod[]
}

export interface ProductStock {
  total: number
  status: 'in_stock' | 'low_stock' | 'out_of_stock'
  threshold: number
}

export interface ProductImage {
  size: {
    xs: { url: string }
    lg: { url: string }
  }
  id: number
  alt: string
  isPrimary: boolean
}

export interface ProductImages {
  gallery: ProductImage[]
}

export interface Product {
  id: number
  name: string
  subname: string
  slug: string
  sku: string
  brand: Brand
  description: string
  longDescription: string
  features: string[]
  specs: ProductSpecs
  images: ProductImages
  price: number
  originalPrice?: number
  discount?: number
  quantity: number
  condition: string
  variants: ProductVariant[]
  categories: string[]
  tags: string[]
  ratings: ProductRatings
  reviews: ProductReview[]
  relatedProducts: number[]
  shipping: ProductShipping
  stock: ProductStock
}
