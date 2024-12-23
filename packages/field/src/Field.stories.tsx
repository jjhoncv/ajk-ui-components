import type { Meta, StoryObj } from '@storybook/react'
import { Field } from './'
import { Mail, Eye, Search, AlertCircle } from 'lucide-react'
import { ThemeProvider } from '@ajk-ui/theme-utils'
import { BaseTheme } from '@ajk-ui/theme-utils'
import { Input } from '@ajk-ui/input'

const meta: Meta<typeof Field> = {
  title: 'Components/Field',
  component: Field,
  decorators: [
    Story => (
      <ThemeProvider initialTheme={BaseTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Field>

export const Default: Story = {
  render: () => (
    <div className="w-[320px]">
      <Field label="Email">
        <Input placeholder="ejemplo@correo.com" />
      </Field>
    </div>
  ),
}

export const WithRequired: Story = {
  render: () => (
    <div className="w-[320px]">
      <Field label="Email" required>
        <Input placeholder="ejemplo@correo.com" />
      </Field>
    </div>
  ),
}

export const WithHint: Story = {
  render: () => (
    <div className="w-[320px]">
      <Field label="Email" hint="Usaremos este email para contactarte">
        <Input placeholder="ejemplo@correo.com" />
      </Field>
    </div>
  ),
}

export const WithError: Story = {
  render: () => (
    <div className="w-[320px]">
      <Field label="Email" error="El email ingresado no es válido">
        <Input error placeholder="ejemplo@correo.com" rightIcon={AlertCircle} />
      </Field>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="w-[320px]">
      <Field label="Email">
        <Input placeholder="ejemplo@correo.com" leftIcon={Mail} />
      </Field>
    </div>
  ),
}

export const WithPassword: Story = {
  render: () => (
    <div className="w-[320px]">
      <Field label="Contraseña" hint="La contraseña debe tener al menos 8 caracteres">
        <Input type="password" placeholder="Ingresa tu contraseña" rightIcon={Eye} />
      </Field>
    </div>
  ),
}

export const WithSearch: Story = {
  render: () => (
    <div className="w-[320px]">
      <Field label="Búsqueda">
        <Input variant="filled" placeholder="Buscar..." leftIcon={Search} />
      </Field>
    </div>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="w-[320px] space-y-4">
      <Field label="Campo por defecto">
        <Input placeholder="Campo normal" />
      </Field>

      <Field label="Campo requerido" required>
        <Input placeholder="Campo requerido" />
      </Field>

      <Field label="Campo con hint" hint="Este es un texto de ayuda">
        <Input placeholder="Campo con hint" />
      </Field>

      <Field label="Campo con error" error="Este campo tiene un error">
        <Input error placeholder="Campo con error" />
      </Field>

      <Field label="Campo con ícono">
        <Input leftIcon={Mail} placeholder="Campo con ícono" />
      </Field>

      <Field label="Campo filled">
        <Input variant="filled" placeholder="Campo filled" />
      </Field>
    </div>
  ),
}
