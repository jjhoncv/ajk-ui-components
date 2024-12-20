import type { Meta, StoryObj } from '@storybook/react'
import { Footer, SocialLink } from './Footer'
import { ThemeProvider, themes } from '@ajk-ui/theme-utils'

const meta = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  decorators: [
    Story => (
      <ThemeProvider initialTheme={themes.restaurant.modern}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof Footer>

const defaultColumns = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
      { label: 'Blog', href: '#' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Products', href: '#' },
      { label: 'Services', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
]

const defaultSocial: SocialLink[] = [
  { platform: 'facebook', href: '#' },
  { platform: 'twitter', href: '#' },
  { platform: 'instagram', href: '#' },
  { platform: 'linkedin', href: '#' },
]

export const Simple: Story = {
  args: {
    variant: 'simple',
    logo: <span className="text-2xl font-bold">Logo</span>,
    columns: defaultColumns,
    social: defaultSocial,
    copyright: '© 2024 Your Company. All rights reserved.',
  },
}

export const Multicolumn: Story = {
  args: {
    variant: 'multicolumn',
    logo: <span className="text-2xl font-bold">Logo</span>,
    columns: [
      ...defaultColumns,
      {
        title: 'Resources',
        links: [
          { label: 'Documentation', href: '#' },
          { label: 'Guides', href: '#' },
          { label: 'Help Center', href: '#' },
        ],
      },
    ],
    social: defaultSocial,
    copyright: '© 2024 Your Company. All rights reserved.',
    newsletter: {
      title: 'Subscribe to our newsletter',
      description: 'Get the latest news and updates delivered to your inbox.',
      buttonText: 'Subscribe',
    },
  },
}

export const Centered: Story = {
  args: {
    variant: 'centered',
    logo: <span className="text-2xl font-bold">Logo</span>,
    social: defaultSocial,
    copyright: '© 2024 Your Company. All rights reserved.',
  },
}

export const Minimal: Story = {
  args: {
    variant: 'minimal',
    copyright: '© 2024 Your Company. All rights reserved.',
    social: defaultSocial,
  },
}

// Restaurant Footer
export const RestaurantModern: Story = {
  args: {
    variant: 'multicolumn',
    logo: <span className="text-2xl font-bold">Restaurant Name</span>,
    columns: [
      {
        title: 'Visit Us',
        links: [
          { label: 'Locations', href: '#' },
          { label: 'Hours & Info', href: '#' },
          { label: 'Reservations', href: '#' },
        ],
      },
      {
        title: 'Menu',
        links: [
          { label: 'Lunch', href: '#' },
          { label: 'Dinner', href: '#' },
          { label: 'Wine List', href: '#' },
          { label: 'Special Events', href: '#' },
        ],
      },
      {
        title: 'Contact',
        links: [
          { label: 'Contact Us', href: '#' },
          { label: 'Private Events', href: '#' },
          { label: 'Careers', href: '#' },
        ],
      },
    ],
    social: defaultSocial,
    copyright: '© 2024 Restaurant Name. All rights reserved.',
    newsletter: {
      title: 'Join our mailing list',
      description: 'Get updates on special events and exclusive offers.',
      buttonText: 'Sign Up',
    },
  },
  decorators: [
    Story => (
      <ThemeProvider initialTheme={themes.restaurant.modern}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

// Barbershop Footer
export const BarbershopVintage: Story = {
  args: {
    variant: 'multicolumn',
    logo: <span className="text-2xl font-bold">Barber Co.</span>,
    columns: [
      {
        title: 'Services',
        links: [
          { label: 'Haircuts', href: '#' },
          { label: 'Shaves', href: '#' },
          { label: 'Beard Trim', href: '#' },
          { label: 'Hair Styling', href: '#' },
        ],
      },
      {
        title: 'Book',
        links: [
          { label: 'Book Online', href: '#' },
          { label: 'Gift Cards', href: '#' },
          { label: 'Products', href: '#' },
        ],
      },
      {
        title: 'About',
        links: [
          { label: 'Our Story', href: '#' },
          { label: 'Team', href: '#' },
          { label: 'Careers', href: '#' },
        ],
      },
    ],
    social: defaultSocial,
    copyright: '© 2024 Barber Co. All rights reserved.',
  },
  decorators: [
    Story => (
      <ThemeProvider initialTheme={themes.barbershop.vintage}>
        <Story />
      </ThemeProvider>
    ),
  ],
}

// Business Footer
export const BusinessModern: Story = {
  args: {
    variant: 'multicolumn',
    logo: <span className="text-2xl font-bold">Business Co.</span>,
    columns: [
      {
        title: 'Solutions',
        links: [
          { label: 'Marketing', href: '#' },
          { label: 'Analytics', href: '#' },
          { label: 'Commerce', href: '#' },
          { label: 'Insights', href: '#' },
        ],
      },
      {
        title: 'Support',
        links: [
          { label: 'Pricing', href: '#' },
          { label: 'Documentation', href: '#' },
          { label: 'Guides', href: '#' },
          { label: 'API Status', href: '#' },
        ],
      },
      {
        title: 'Company',
        links: [
          { label: 'About', href: '#' },
          { label: 'Blog', href: '#' },
          { label: 'Jobs', href: '#' },
          { label: 'Press', href: '#' },
          { label: 'Partners', href: '#' },
        ],
      },
    ],
    social: defaultSocial,
    copyright: '© 2024 Business Co. All rights reserved.',
    newsletter: {
      title: 'Subscribe to our newsletter',
      description: 'The latest news, articles, and resources, sent to your inbox weekly.',
      buttonText: 'Subscribe',
    },
  },
}
