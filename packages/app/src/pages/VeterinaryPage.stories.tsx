import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, createTheme } from '@ajk-ui/theme-utils'
import { Header } from '@ajk-ui/header'
import { Section } from '@ajk-ui/section'
import { Card } from '@ajk-ui/card'
import { Footer } from '@ajk-ui/footer'
import { Button } from '@ajk-ui/button'

// Tema moderno para veterinaria
const vetTheme = createTheme({
  colors: {
    primary: '#06B6D4', // Cyan para un look moderno y limpio
    secondary: '#ddd6fe', // Violeta para acentos
    background: '#F8FAFC', // Gris muy claro para el fondo
    text: '#0F172A', // Slate oscuro para texto
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
  },
})

const Logo = () => (
  <div className="flex items-center">
    <div className="h-8 w-8">
      {' '}
      {/* Incrementa el tamaño del contenedor */}
      <img
        src={getImagePath('/images/veterinary/Logo.svg')}
        className="h-full w-full object-contain"
      />
    </div>
    <span className="ml-2 text-2xl font-extralight text-white">Modern Vet</span>
  </div>
)

const LogoFooter = () => (
  <div className="flex items-center gap-2">
    <div className="w-6">
      <img src={getImagePath('/images/veterinary/LogoInverter.svg')} />
    </div>
    <div className="ml-1 flex flex-col text-xl" style={{ lineHeight: '15px' }}>
      <p className="text-3xl font-extralight text-gray-800">Modern Vet</p>
    </div>
  </div>
)

const LogoNavMenuMobile = () => (
  <div className="flex items-center">
    <div className="h-8 w-8">
      {' '}
      {/* Incrementa el tamaño del contenedor */}
      <img
        src={getImagePath('/images/veterinary/LogoInverter.svg')}
        className="h-full w-full object-contain"
      />
    </div>
    <span className="ml-2 text-2xl font-extralight">Modern Vet</span>
  </div>
)

const VeterinaryPage = () => {
  const navItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Equipo', href: '/equipo' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contacto', href: '/contacto' },
  ]

  const footerColumns = [
    {
      title: 'Servicios',
      links: [
        { label: 'Medicina Preventiva', href: '/preventiva' },
        { label: 'Cirugía Avanzada', href: '/cirugia' },
        { label: 'Diagnóstico por Imagen', href: '/diagnostico' },
        { label: 'Hospitalización', href: '/hospitalizacion' },
      ],
    },
    {
      title: 'Atención',
      links: [
        { label: 'Emergencias 24/7', href: '/emergencias' },
        { label: 'Telemedicina', href: '/telemedicina' },
        { label: 'Agendar Cita', href: '/citas' },
      ],
    },
  ]

  const socialLinks = [
    { platform: 'instagram' as const, href: '#' },
    { platform: 'facebook' as const, href: '#' },
    { platform: 'twitter' as const, href: '#' },
  ]

  return (
    <ThemeProvider initialTheme={vetTheme}>
      <div className="bg-background min-h-screen">
        {/* Header */}
        <Header
          title="Cuidado Veterinario de Excelencia"
          subtitle="Tecnología avanzada y atención personalizada para tu mascota"
          backgroundImage={getImagePath('/images/veterinary/hero.jpg')}
          variant="hero"
          height="lg"
          navItems={navItems}
          logo={Logo}
          logoNavMenuMobile={LogoNavMenuMobile}
          cta={{
            label: 'Agendar Cita Online',
            href: '/agendar',
            variant: 'primary',
          }}
        />

        {/* Servicios Principales */}
        <Section
          variant="default"
          layout="grid"
          title="Servicios Especializados"
          subtitle="Atención integral con tecnología de vanguardia"
          gridCols={4}
          gap="lg"
        >
          <Card
            variant="service"
            title="Medicina Preventiva"
            subtitle="Plan Wellness"
            description="Programas personalizados de prevención y vacunación para mantener a tu mascota saludable."
            image={getImagePath('/images/veterinary/service1.jpg')}
          >
            <div className="mt-2 flex">
              <Button variant="secondary">Ver Planes</Button>
            </div>
          </Card>
          <Card
            variant="service"
            title="Cirugía Avanzada"
            subtitle="Tecnología de Punta"
            description="Procedimientos quirúrgicos mínimamente invasivos con recuperación rápida."
            image={getImagePath('/images/veterinary/service2.jpg')}
          >
            <div className="mt-2 flex">
              <Button variant="secondary">Consultar</Button>
            </div>
          </Card>
          <Card
            variant="service"
            title="Diagnóstico Digital"
            subtitle="Resultados Inmediatos"
            description="Radiografía digital y ultrasonido para diagnósticos precisos y rápidos."
            image={getImagePath('/images/veterinary/service3.jpg')}
          >
            <div className="mt-2 flex">
              <Button variant="secondary">Más Info</Button>
            </div>
          </Card>
          <Card
            variant="service"
            title="Hospitalización"
            subtitle="24/7"
            description="Unidad de cuidados intensivos con monitoreo constante y personal especializado."
            image={getImagePath('/images/veterinary/service4.jpg')}
          >
            <div className="mt-2 flex">
              <Button variant="secondary">Emergencias</Button>
            </div>
          </Card>
        </Section>

        {/* Sobre Nosotros */}
        <Section
          variant="highlight"
          layout="split"
          backgroundImage={getImagePath('/images/veterinary/about.jpg')}
          overlay
          title="Medicina Veterinaria del Futuro"
          subtitle="Innovación y Compasión"
        >
          <div className="flex flex-col space-y-6">
            <p className="text-lg text-gray-100">
              En ModernVet combinamos tecnología de vanguardia con un equipo altamente especializado
              para ofrecer el mejor cuidado veterinario. Nuestras instalaciones de última generación
              y protocolos avanzados garantizan el bienestar de tu mascota.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="primary">Conoce el Equipo</Button>
              <Button variant="outline">Tour Virtual</Button>
            </div>
          </div>
        </Section>

        {/* Testimonios */}
        <Section
          variant="alternate"
          title="Experiencias"
          subtitle="Lo que dicen nuestros clientes"
          layout="grid"
          gridCols={2}
        >
          <Card
            variant="testimonial"
            title="Atención excepcional"
            description="El equipo de ModernVet salvó la vida de mi mascota. Su dedicación y profesionalismo son incomparables. Las instalaciones son modernas y el seguimiento post-tratamiento fue excelente."
            author={{
              name: 'Carolina Méndez',
              title: 'Dueña de Luna',
              avatar: getImagePath('/images/veterinary/avatar1.jpg'),
            }}
          />
          <Card
            variant="testimonial"
            title="Tecnología de punta"
            description="Me impresionó el nivel de tecnología y la rapidez del diagnóstico. El Dr. Ramírez explicó todo detalladamente y el tratamiento fue muy efectivo. Definitivamente el mejor cuidado veterinario."
            author={{
              name: 'Roberto Silva',
              title: 'Dueño de Max',
              avatar: getImagePath('/images/veterinary/avatar2.jpg'),
            }}
          />
        </Section>

        {/* Footer */}
        <Footer
          variant="simple"
          logo={<LogoFooter />}
          columns={footerColumns}
          social={socialLinks}
          copyright="© 2024 ModernVet. Todos los derechos reservados."
          newsletter={{
            title: 'Tips de Salud Pet',
            description: 'Recibe consejos semanales para el cuidado de tu mascota',
            buttonText: 'Suscribirse',
          }}
        />
      </div>
    </ThemeProvider>
  )
}

const meta = {
  title: 'Pages/Veterinary',
  component: VeterinaryPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Implementación completa de la página de Veterinary usando los componentes de AJK UI.',
      },
      source: {
        code: `// Tema moderno para veterinaria
const vetTheme = createTheme({
  colors: {
    primary: "#06B6D4", // Cyan para un look moderno y limpio
    secondary: "#8B5CF6", // Violeta para acentos
    background: "#F8FAFC", // Gris muy claro para el fondo
    text: "#0F172A", // Slate oscuro para texto
  },
  typography: {
    fontFamily: "Inter, system-ui, sans-serif",
  },
});

const VetLogo = () => (
  <div className="flex items-center">
    <svg
      className="h-8 w-8"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M20 12H4M12 4v16m4-8h.01M8 12h.01M12 12h.01"
      />
    </svg>
    <span className="ml-2 text-xl font-bold">ModernVet</span>
  </div>
);

const VeterinaryPage = () => {
  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Servicios", href: "/servicios" },
    { label: "Equipo", href: "/equipo" },
    { label: "Blog", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
  ];

  const footerColumns = [
    {
      title: "Servicios",
      links: [
        { label: "Medicina Preventiva", href: "/preventiva" },
        { label: "Cirugía Avanzada", href: "/cirugia" },
        { label: "Diagnóstico por Imagen", href: "/diagnostico" },
        { label: "Hospitalización", href: "/hospitalizacion" },
      ],
    },
    {
      title: "Atención",
      links: [
        { label: "Emergencias 24/7", href: "/emergencias" },
        { label: "Telemedicina", href: "/telemedicina" },
        { label: "Agendar Cita", href: "/citas" },
      ],
    },
  ];

  const socialLinks = [
    { platform: "instagram" as const, href: "#" },
    { platform: "facebook" as const, href: "#" },
    { platform: "twitter" as const, href: "#" },
  ];

  return (
    <ThemeProvider initialTheme={vetTheme}>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header
          title="Cuidado Veterinario de Excelencia"
          subtitle="Tecnología avanzada y atención personalizada para tu mascota"
          backgroundImage="/images/veterinary/hero.jpg"
          variant="hero"
          height="lg"
          navItems={navItems}
          logo={<VetLogo />}
          cta={{
            label: "Agendar Cita Online",
            href: "/agendar",
            variant: "primary",
          }}
        />

        {/* Servicios Principales */}
        <Section
          variant="default"
          layout="grid"
          title="Servicios Especializados"
          subtitle="Atención integral con tecnología de vanguardia"
          gridCols={4}
          gap="lg"
        >
          <Card
            variant="service"
            title="Medicina Preventiva"
            subtitle="Plan Wellness"
            description="Programas personalizados de prevención y vacunación para mantener a tu mascota saludable."
            image="/images/veterinary/service1.jpg"
          >
            <Button variant="secondary">Ver Planes</Button>
          </Card>
          <Card
            variant="service"
            title="Cirugía Avanzada"
            subtitle="Tecnología de Punta"
            description="Procedimientos quirúrgicos mínimamente invasivos con recuperación rápida."
            image="/images/veterinary/service2.jpg"
          >
            <Button variant="secondary">Consultar</Button>
          </Card>
          <Card
            variant="service"
            title="Diagnóstico Digital"
            subtitle="Resultados Inmediatos"
            description="Radiografía digital y ultrasonido para diagnósticos precisos y rápidos."
            image="/images/veterinary/service3.jpg"
          >
            <Button variant="secondary">Más Info</Button>
          </Card>
          <Card
            variant="service"
            title="Hospitalización"
            subtitle="24/7"
            description="Unidad de cuidados intensivos con monitoreo constante y personal especializado."
            image="/images/veterinary/service4.jpg"
          >
            <Button variant="secondary">Emergencias</Button>
          </Card>
        </Section>

        {/* Sobre Nosotros */}
        <Section
          variant="highlight"
          layout="split"
          backgroundImage="/images/veterinary/about.jpg"
          overlay
          title="Medicina Veterinaria del Futuro"
          subtitle="Innovación y Compasión"
        >
          <div className="flex flex-col space-y-6">
            <p className="text-gray-100 text-lg">
              En ModernVet combinamos tecnología de vanguardia con un equipo
              altamente especializado para ofrecer el mejor cuidado veterinario.
              Nuestras instalaciones de última generación y protocolos avanzados
              garantizan el bienestar de tu mascota.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary">Conoce el Equipo</Button>
              <Button variant="outline">Tour Virtual</Button>
            </div>
          </div>
        </Section>

        {/* Testimonios */}
        <Section
          variant="alternate"
          title="Experiencias"
          subtitle="Lo que dicen nuestros clientes"
          layout="grid"
          gridCols={2}
        >
          <Card
            variant="testimonial"
            title="Atención excepcional"
            description="El equipo de ModernVet salvó la vida de mi mascota. Su dedicación y profesionalismo son incomparables. Las instalaciones son modernas y el seguimiento post-tratamiento fue excelente."
            author={{
              name: "Carolina Méndez",
              title: "Dueña de Luna",
              avatar: "/images/veterinary/avatar1.jpg",
            }}
          />
          <Card
            variant="testimonial"
            title="Tecnología de punta"
            description="Me impresionó el nivel de tecnología y la rapidez del diagnóstico. El Dr. Ramírez explicó todo detalladamente y el tratamiento fue muy efectivo. Definitivamente el mejor cuidado veterinario."
            author={{
              name: "Roberto Silva",
              title: "Dueño de Max",
              avatar: "/images/veterinary/avatar2.jpg",
            }}
          />
        </Section>

        {/* Footer */}
        <Footer
          variant="simple"
          logo={<VetLogo />}
          columns={footerColumns}
          social={socialLinks}
          copyright="© 2024 ModernVet. Todos los derechos reservados."
          newsletter={{
            title: "Tips de Salud Pet",
            description:
              "Recibe consejos semanales para el cuidado de tu mascota",
            buttonText: "Suscribirse",
          }}
        />
      </div>
    </ThemeProvider>
  );
};`,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof VeterinaryPage>

export default meta

type Story = StoryObj<typeof VeterinaryPage>

export const Modern: Story = {
  render: () => <VeterinaryPage />,
}
