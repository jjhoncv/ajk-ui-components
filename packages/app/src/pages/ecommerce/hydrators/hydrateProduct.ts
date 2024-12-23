import { Product } from '@ajk-ui/product'

export const hydrateProduct = (product: Product): Product => {
  const productHydrated: Product = {
    ...product,
    brand: {
      ...product.brand,
      logo: getImagePath(product.brand.logo),
    },
    images: {
      gallery: product.images.gallery.map(item => ({
        ...item,
        size: {
          lg: {
            url: getImagePath(item.size.lg.url),
          },
          xs: {
            url: getImagePath(item.size.xs.url),
          },
        },
      })),
    },
  }

  return productHydrated
}
