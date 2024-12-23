// Input.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { Mail, Eye, Search, AlertCircle, User, Lock } from 'lucide-react'
import { ThemeProvider } from '@ajk-ui/theme-utils'
import { BaseTheme } from '@ajk-ui/theme-utils'
import { ModernTech } from '@ajk-ui/themes'
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  decorators: [
    Story => (
      <ThemeProvider initialTheme={ModernTech}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    error: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

// Variantes básicas
export const Default: Story = {
  render: () => (
    <div className="w-[320px]">
      <Input placeholder="Input por defecto" />
    </div>
  ),
}

export const Filled: Story = {
  render: () => (
    <div className="w-[320px]">
      <Input variant="filled" placeholder="Input filled" />
    </div>
  ),
}

// Tamaños
export const Sizes: Story = {
  render: () => (
    <div className="w-[320px] space-y-4">
      <Input size="sm" placeholder="Tamaño pequeño" />
      <Input size="md" placeholder="Tamaño mediano" />
      <Input size="lg" placeholder="Tamaño grande" />
    </div>
  ),
}

// Estados
export const States: Story = {
  render: () => (
    <div className="w-[320px] space-y-4">
      <Input placeholder="Estado normal" />
      <Input error placeholder="Estado error" />
      <Input disabled placeholder="Estado deshabilitado" />
    </div>
  ),
}

// Con íconos
export const WithIcons: Story = {
  render: () => (
    <div className="w-[320px] space-y-4">
      <Input leftIcon={Mail} placeholder="Ícono izquierdo" />
      <Input rightIcon={Eye} placeholder="Ícono derecho" />
      <Input leftIcon={Search} rightIcon={AlertCircle} placeholder="Ambos íconos" />
    </div>
  ),
}

// Tipos comunes
export const CommonTypes: Story = {
  render: () => (
    <div className="w-[320px] space-y-4">
      <Input type="text" leftIcon={User} placeholder="Texto" />
      <Input type="email" leftIcon={Mail} placeholder="Email" />
      <Input type="password" leftIcon={Lock} rightIcon={Eye} placeholder="Contraseña" />
      <Input type="search" leftIcon={Search} placeholder="Búsqueda" variant="filled" />
    </div>
  ),
}

// Anchos
export const Widths: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Input placeholder="Ancho por defecto" />
      </div>
      <div className="w-[320px]">
        <Input fullWidth placeholder="Ancho completo" />
      </div>
    </div>
  ),
}

// Todas las variantes
export const AllVariants: Story = {
  render: () => (
    <div className="w-[320px] space-y-6">
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Default Variant</h3>
        <Input placeholder="Normal" />
        <Input error placeholder="Error" />
        <Input disabled placeholder="Disabled" />
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Filled Variant</h3>
        <Input variant="filled" placeholder="Normal" />
        <Input variant="filled" error placeholder="Error" />
        <Input variant="filled" disabled placeholder="Disabled" />
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">With Icons</h3>
        <Input leftIcon={User} placeholder="Left icon" />
        <Input rightIcon={Eye} placeholder="Right icon" />
        <Input leftIcon={Search} rightIcon={AlertCircle} placeholder="Both icons" />
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Sizes</h3>
        <Input size="sm" placeholder="Small" />
        <Input size="md" placeholder="Medium" />
        <Input size="lg" placeholder="Large" />
      </div>
    </div>
  ),
}

// Ejemplos de uso
export const Examples: Story = {
  render: () => (
    <div className="w-[320px] space-y-6">
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Login Form</h3>
        <Input leftIcon={User} placeholder="Username" />
        <Input type="password" leftIcon={Lock} rightIcon={Eye} placeholder="Password" />
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Search</h3>
        <Input variant="filled" leftIcon={Search} placeholder="Buscar productos..." fullWidth />
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Form with Error</h3>
        <Input error leftIcon={Mail} rightIcon={AlertCircle} placeholder="Email inválido" />
      </div>
    </div>
  ),
}
