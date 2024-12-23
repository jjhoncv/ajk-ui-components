import { ThemeProvider } from './../theme-provider'
import type { Meta, StoryObj } from '@storybook/react'
import { Block, BlockContent, BlockHeader, BlockTitle, ColorSection } from '../components'
import { BaseTheme } from './BaseTheme'

const Base = () => {
  return (
    <div className="mx-auto max-w-6xl space-y-8 bg-slate-50 p-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Default Theme Colors</h1>
        <p className="text-slate-600">Documentación completa de colores y variantes por defecto</p>
      </div>

      {/* Base Colors */}
      <ColorSection
        title="Colores Base"
        description="Colores principales que definen la identidad del tema"
        colors={{
          primary: BaseTheme.colors.primary,
          secondary: BaseTheme.colors.secondary,
          background: BaseTheme.colors.background,
          text: BaseTheme.colors.text,
        }}
      />

      {/* Primary Variants */}
      <ColorSection
        title="Variantes Primarias"
        description="Variaciones del color primario para diferentes estados y contextos"
        colors={BaseTheme.colors.primaryVariants}
      />

      {/* Text Variants */}
      <ColorSection
        title="Variantes de Texto"
        description="Diferentes tonos de texto para distintos niveles de jerarquía y contextos"
        colors={BaseTheme.colors.textVariants}
      />

      {/* Disabled States */}
      <ColorSection
        title="Estados Deshabilitados"
        description="Colores usados para elementos en estado deshabilitado"
        colors={BaseTheme.colors.disabled}
      />

      {/* Example Usage */}
      <Block>
        <BlockHeader>
          <BlockTitle>Ejemplos de Uso</BlockTitle>
        </BlockHeader>
        <BlockContent>
          <div className="space-y-6">
            {/* Buttons */}
            <div className="space-y-2">
              <h3 className="font-semibold">Botones</h3>
              <div className="flex gap-4">
                <button
                  className="rounded-md px-4 py-2 text-white"
                  style={{ backgroundColor: BaseTheme.colors.primary }}
                >
                  Botón Primario
                </button>
                <button
                  className="rounded-md px-4 py-2"
                  style={{
                    backgroundColor: BaseTheme.colors.secondary,
                    color: BaseTheme.colors.text,
                  }}
                >
                  Botón Secundario
                </button>
                <button
                  className="rounded-md px-4 py-2"
                  style={{
                    backgroundColor: BaseTheme.colors.disabled.background,
                    color: BaseTheme.colors.disabled.text,
                  }}
                >
                  Botón Deshabilitado
                </button>
              </div>
            </div>

            {/* Text Examples */}
            <div className="space-y-2">
              <h3 className="font-semibold">Texto</h3>
              <div className="space-y-2">
                <p style={{ color: BaseTheme.colors.textVariants.dark }}>Texto Principal</p>
                <p style={{ color: BaseTheme.colors.textVariants.light }}>Texto Secundario</p>
                <p style={{ color: BaseTheme.colors.textVariants.muted }}>Texto Muted</p>
              </div>
            </div>

            {/* Interactive States */}
            <div className="space-y-2">
              <h3 className="font-semibold">Estados Interactivos</h3>
              <div className="flex gap-4">
                <button
                  className="rounded-md px-4 py-2 transition-colors"
                  style={{
                    backgroundColor: BaseTheme.colors.primaryVariants.default,
                    color: BaseTheme.colors.text,
                  }}
                >
                  Estado Normal
                </button>
                <button
                  className="rounded-md px-4 py-2 transition-colors"
                  style={{
                    backgroundColor: BaseTheme.colors.primaryVariants.hover,
                    color: BaseTheme.colors.textVariants.light,
                  }}
                >
                  Estado Hover
                </button>
                <button
                  className="rounded-md px-4 py-2 transition-colors"
                  style={{
                    backgroundColor: BaseTheme.colors.primaryVariants.active,
                    color: BaseTheme.colors.textVariants.light,
                  }}
                >
                  Estado Activo
                </button>
              </div>
            </div>
          </div>
        </BlockContent>
      </Block>
    </div>
  )
}

const meta = {
  title: 'Themes/Base',
  component: Base,

  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  // decorators: [
  //   Story => (
  //     <ThemeProvider initialTheme={BaseTheme}>
  //       <Story />
  //     </ThemeProvider>
  //   ),
  // ],
} satisfies Meta<typeof Base>

export default meta

type Story = StoryObj<typeof Base>

export const Theme: Story = {
  render: () => (
    <ThemeProvider initialTheme={BaseTheme}>
      <Base />
    </ThemeProvider>
  ),
}
