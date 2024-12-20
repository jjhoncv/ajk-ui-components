import { Button } from '@ajk-ui/button'
import { Card } from '@ajk-ui/card'
import { Footer } from '@ajk-ui/footer'
import { Header } from '@ajk-ui/header'
import { Section } from '@ajk-ui/section'
import { ThemeProvider, themes } from '@ajk-ui/theme-utils'
import { Meta, StoryObj } from '@storybook/react'

const Logo = () => (
  <div className="flex items-center">
    <div className="w-6">
      <img src={getImagePath('/images/restaurant/Logo.svg')} />
    </div>
    <span className="ml-2 text-xl font-extralight text-white">Fine Dining</span>
  </div>
)

const LogoFooter = () => (
  <div className="flex items-center gap-2">
    <div className="w-6">
      <img src={getImagePath('/images/restaurant/LogoInverter.svg')} />
    </div>
    <div className="ml-1 flex flex-col text-xl" style={{ lineHeight: '15px' }}>
      <p className="text-xl font-extralight text-gray-800">Fine Dining</p>
    </div>
  </div>
)

const LogoNavMenuMobile = () => (
  <div className="flex items-center">
    <div className="w-6">
      <img src={getImagePath('/images/restaurant/LogoInverter.svg')} />
    </div>
    <span className="ml-2 text-xl font-extralight">Fine Dining</span>
  </div>
)

const ModernRestaurant = () => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Menu', href: '/menu' },
    { label: 'Reservations', href: '/reservations' },
    { label: 'About', href: '/about' },
  ]

  const footerColumns = [
    {
      title: 'Visit Us',
      links: [
        { label: 'Menu', href: '/menu' },
        { label: 'Reservations', href: '/reservations' },
        { label: 'Private Events', href: '/events' },
      ],
    },
    {
      title: 'Contact',
      links: [
        { label: 'Contact Us', href: '/contact' },
        { label: 'Location', href: '/location' },
      ],
    },
  ]

  const socialLinks = [
    { platform: 'instagram' as const, href: '#' },
    { platform: 'facebook' as const, href: '#' },
  ]

  return (
    <ThemeProvider initialTheme={themes.restaurant.modern}>
      <div className="min-h-screen">
        {/* Header */}
        <Header
          title="Experience Fine Dining"
          subtitle="Modern cuisine in an elegant atmosphere"
          backgroundImage={getImagePath('/images/restaurant/hero.jpg')}
          variant="hero"
          height="lg"
          navItems={navItems}
          logo={Logo}
          logoNavMenuMobile={LogoNavMenuMobile}
          cta={{
            label: 'Make a Reservation',
            href: '/reservations',
            variant: 'primary',
          }}
        />

        {/* Featured Menu */}
        <Section
          variant="feature"
          layout="grid"
          title="Featured Dishes"
          subtitle="Chef's special selection"
          gridCols={3}
          gap="lg"
        >
          <Card
            variant="product"
            title="Grilled Salmon"
            subtitle="$32"
            description="Fresh Atlantic salmon with seasonal vegetables"
            image={getImagePath('/images/restaurant/salmon.jpg')}
          />
          <Card
            variant="product"
            title="Wagyu Steak"
            subtitle="$45"
            description="Premium Japanese beef with truffle sauce"
            image={getImagePath('/images/restaurant/steak.jpg')}
          />
          <Card
            variant="product"
            title="Lobster Risotto"
            subtitle="$38"
            description="Creamy risotto with fresh Maine lobster"
            image={getImagePath('/images/restaurant/risotto.jpg')}
          />
        </Section>

        {/* About Section */}
        <Section
          variant="highlight"
          layout="split"
          backgroundImage={getImagePath('/images/restaurant/about.jpg')}
          overlay
          title="Our Story"
          subtitle="Experience the perfect blend of traditional and modern cuisine in our elegant dining room. Our expert chefs create unforgettable dishes using the finest ingredients."
        >
          <div className="flex flex-col space-y-4">
            <p className="text-gray-200">
              Since 2010, we've been serving exceptional dishes that combine classic techniques with
              modern innovation. Our commitment to quality and service has made us a destination for
              food lovers.
            </p>
            <div>
              <Button variant="secondary">Learn More</Button>
            </div>
          </div>
        </Section>

        {/* Testimonials */}
        <Section variant="alternate" title="What Our Guests Say" layout="grid" gridCols={2}>
          <Card
            variant="testimonial"
            title="An unforgettable dining experience"
            description="The attention to detail in every dish and the impeccable service made our anniversary dinner truly special."
            author={{
              name: 'Sarah Johnson',
              title: 'Food Critic',
              avatar: getImagePath('/images/restaurant/avatar1.jpg'),
            }}
          />
          <Card
            variant="testimonial"
            title="Exceptional cuisine"
            description="Every visit is a culinary journey. The seasonal menu never fails to impress with its creativity and flavors."
            author={{
              name: 'Michael Chen',
              title: 'Regular Guest',
              avatar: getImagePath('/images/restaurant/avatar2.jpg'),
            }}
          />
        </Section>

        {/* Footer */}
        <Footer
          variant="multicolumn"
          logo={<LogoFooter />}
          columns={footerColumns}
          social={socialLinks}
          copyright="© 2024 Fine Dining. All rights reserved."
          newsletter={{
            title: 'Stay Updated',
            description: 'Subscribe for special offers and events',
            buttonText: 'Subscribe',
          }}
        />
      </div>
    </ThemeProvider>
  )
}

const meta = {
  title: 'Pages/Restaurant',
  component: ModernRestaurant,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ModernRestaurant>

export default meta

type Story = StoryObj<typeof ModernRestaurant>

export const Modern: Story = {
  render: () => <ModernRestaurant />,
}
