import { NavEcommerce } from '@ajk-ui/nav'
import { Logo } from './Logo'
import { LogoNavMenuMobile } from './LogoNavMenuMobile'
import { mockProducts } from '@ajk-ui/data'
import { Suggestion } from '@ajk-ui/form-search'

const navItems = [
  { label: 'Productos', href: '/productos' },
  { label: 'Ofertas', href: '/ofertas' },
  { label: 'Soporte', href: '/soporte' },
]

const onSearch = (query: string) => {
  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)

  if (params.get('id') !== 'pages-ecommerce--search-page') {
    ;(window as any).top.location.href = getImagePath(
      `/iframe.html?id=pages-ecommerce--search-page&viewMode=story&search=${query}`
    )
  }

  if (query) {
    params.set('search', query)
  } else {
    params.delete('search')
  }

  // console.log('idxx', params.get('id'))

  // Mantener otros parámetros existentes
  const newUrl = `${window.location.pathname}?${params.toString()}`
  window.history.pushState({}, '', newUrl)

  // Disparar evento personalizado
  window.dispatchEvent(new Event('urlChange'))

  // "/iframe.html?id=pages-ecommerce--search-page&viewMode=story&search="
}

const onGetSuggestions = async (query: string) => {
  await new Promise(resolve => setTimeout(resolve, 500)) // Simular delay de red

  const mockData: Suggestion[] = mockProducts.map(product => ({
    id: product.id,
    title: product.name,
    description: product.description,
    image: product.images.gallery[0].size.xs.url,
  }))

  return mockData.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
}

export const Header = () => {
  return (
    <>
      <div className="hidden border-b bg-white text-sm font-medium text-gray-900 md:flex">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
          <div className="flex h-10 w-full items-center justify-between">
            <div>
              <div>About Us | My Account | Wishlist | Order Tracking</div>
            </div>
            <div>100% Secure delivery without contacting the courier</div>
            <div>Need help? Call Us:+ 1800 900 | English | USD</div>
          </div>
        </div>
      </div>
      <div className="z-40 w-full border-b bg-white shadow-sm">
        <NavEcommerce
          onSearch={onSearch}
          onGetSuggestions={onGetSuggestions}
          items={navItems}
          logo={Logo}
          variant="transparent"
          logoNavMenuMobile={LogoNavMenuMobile}
          className="mx-auto flex h-16 w-full max-w-7xl items-center px-4 sm:px-6 md:h-24"
        />
      </div>
    </>
  )
}
