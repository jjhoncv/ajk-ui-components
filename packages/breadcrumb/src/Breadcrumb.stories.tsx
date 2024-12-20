import type { Meta, StoryObj } from '@storybook/react'
import { Breadcrumb } from './'

const meta = {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Un componente de navegación que muestra la ruta jerárquica actual.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    showHomeIcon: {
      control: 'boolean',
      description: 'Muestra u oculta el ícono de inicio',
      defaultValue: true,
    },
    items: {
      control: 'object',
      description: 'Array de items para el breadcrumb',
    },
    className: {
      control: 'text',
      description: 'Clases adicionales para personalizar el estilo',
    },
  },
} satisfies Meta<typeof Breadcrumb>

export default meta
type Story = StoryObj<typeof meta>

// Historia básica
export const Default: Story = {
  args: {
    items: [
      { label: 'Inicio', href: '/' },
      { label: 'Categorías', href: '/categorias' },
      { label: 'Zapatillas', href: '/categorias/zapatillas' },
    ],
    showHomeIcon: true,
  },
}

// Historia sin ícono de home
export const WithoutHomeIcon: Story = {
  args: {
    items: [
      { label: 'Categorías', href: '/categorias' },
      { label: 'Zapatillas', href: '/categorias/zapatillas' },
    ],
    showHomeIcon: false,
  },
}

// Historia con un solo item
export const SingleItem: Story = {
  args: {
    items: [{ label: 'Categorías', href: '/categorias' }],
    showHomeIcon: true,
  },
}

// Historia con muchos items
export const ManyItems: Story = {
  args: {
    items: [
      { label: 'Inicio', href: '/' },
      { label: 'Categorías', href: '/categorias' },
      { label: 'Zapatillas', href: '/categorias/zapatillas' },
      { label: 'Vans', href: '/categorias/zapatillas/vans' },
      { label: 'Old Skool', href: '/categorias/zapatillas/vans/old-skool' },
    ],
    showHomeIcon: true,
  },
}

// Historia con estilos personalizados
export const CustomStyle: Story = {
  args: {
    items: [
      { label: 'Inicio', href: '/' },
      { label: 'Categorías', href: '/categorias' },
      { label: 'Zapatillas', href: '/categorias/zapatillas' },
    ],
    showHomeIcon: true,
    className: 'bg-gray-100 p-4 rounded-lg',
  },
}

// Historia con ejemplos interactivos
export const Interactive: Story = {
  render: args => (
    <div className="space-y-4">
      <Breadcrumb {...args} />
      <p className="text-sm text-gray-500">
        Prueba a hacer hover sobre los elementos para ver la interacción
      </p>
    </div>
  ),
  args: {
    items: [
      { label: 'Inicio', href: '/' },
      { label: 'Categorías', href: '/categorias' },
      { label: 'Zapatillas', href: '/categorias/zapatillas' },
    ],
    showHomeIcon: true,
  },
}
