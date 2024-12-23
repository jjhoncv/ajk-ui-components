import { Footer as FooterSection } from '@ajk-ui/footer'
import { LogoFooter } from './LogoFooter'
const footerColumns = [
  {
    title: 'Productos',
    links: [
      { label: 'Computadoras', href: '/computadoras' },
      { label: 'Smartphones', href: '/smartphones' },
      { label: 'Accesorios', href: '/accesorios' },
    ],
  },
  {
    title: 'Soporte',
    links: [
      { label: 'Centro de Ayuda', href: '/ayuda' },
      { label: 'Garantía', href: '/garantia' },
      { label: 'Contacto', href: '/contacto' },
    ],
  },
]

const socialLinks = [
  { platform: 'instagram' as const, href: '#' },
  { platform: 'facebook' as const, href: '#' },
  { platform: 'twitter' as const, href: '#' },
]

export const Footer = () => {
  return (
    <FooterSection
      variant="simple"
      logo={<LogoFooter />}
      columns={footerColumns}
      social={socialLinks}
      copyright="© 2024 TechStore. Todos los derechos reservados."
      newsletter={{
        title: 'Suscríbete',
        description: 'Recibe las últimas novedades y ofertas exclusivas',
        buttonText: 'Suscribirse',
      }}
    />
  )
}
