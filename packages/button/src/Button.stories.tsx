// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { Mail, ArrowRight, Plus, Settings } from 'lucide-react'
import { createTheme, ThemeProvider } from '@ajk-ui/theme-utils'

const techTheme = createTheme({
  colors: {
    primary: '#4F46E5', // Indigo para el color principal
    secondary: '#fde68a', // Verde esmeralda para acentos
    background: '#F9FAFB', // Gris muy claro para el fondo
    text: '#111827', // Casi negro para el texto
  },
  typography: {
    fontFamily: 'Inter, system-ui, sans-serif',
  },
})

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'outline'],
      description: 'Estilo visual del botón',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del botón',
    },
    disabled: {
      control: 'boolean',
      description: 'Estado deshabilitado',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Botón de ancho completo',
    },
    leftIcon: {
      control: 'select',
      options: ['none', 'mail', 'plus', 'settings'],
      mapping: {
        none: undefined,
        mail: Mail,
        plus: Plus,
        settings: Settings,
      },
      description: 'Icono a la izquierda',
    },
    rightIcon: {
      control: 'select',
      options: ['none', 'arrowRight', 'plus', 'settings'],
      mapping: {
        none: undefined,
        arrowRight: ArrowRight,
        plus: Plus,
        settings: Settings,
      },
      description: 'Icono a la derecha',
    },
    children: {
      control: 'text',
      description: 'Contenido del botón',
    },
  },
  decorators: [
    Story => (
      <ThemeProvider initialTheme={techTheme}>
        <div className="p-4">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

// Historia básica
export const Default: Story = {
  args: {
    children: 'Button',
  },
}

// Variantes
export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  ),
}

// Tamaños
export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
}

// Con iconos
export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button leftIcon={Mail}>Send Email</Button>
        <Button rightIcon={ArrowRight}>Next</Button>
        <Button leftIcon={Mail} rightIcon={ArrowRight}>
          Send and Continue
        </Button>
      </div>
      <div className="flex gap-4">
        <Button variant="outline" leftIcon={Settings}>
          Settings
        </Button>
        <Button variant="secondary" rightIcon={Plus}>
          Add New
        </Button>
      </div>
    </div>
  ),
}

// Estados
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button>Normal</Button>
        <Button disabled>Disabled</Button>
      </div>
      <div className="flex gap-4">
        <Button variant="outline">Normal</Button>
        <Button variant="outline" disabled>
          Disabled
        </Button>
      </div>
    </div>
  ),
}

// Ancho completo
export const FullWidth: Story = {
  render: () => (
    <div className="w-[300px] space-y-4">
      <Button fullWidth>Full Width Button</Button>
      <Button fullWidth variant="outline" leftIcon={Mail}>
        Contact Us
      </Button>
    </div>
  ),
}

// Historia interactiva
export const Interactive: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Interactive Button',
    disabled: false,
    fullWidth: false,
  },
}
