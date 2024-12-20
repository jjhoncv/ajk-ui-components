import type { Meta, StoryObj } from "@storybook/react";
import { ModernTech } from "./ThemeModernTech";
import {
  Block,
  BlockContent,
  BlockHeader,
  BlockTitle,
  ColorSection,
} from "./../components";

const TechThemeColors = () => {
  const theme = ModernTech;

  return (
    <div className="p-8 space-y-8 max-w-6xl mx-auto bg-slate-50">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Tech Theme Colors</h1>
        <p className="text-slate-600">
          Documentación completa de colores y variantes del tema tecnológico
        </p>
      </div>

      {/* Base Colors */}
      <ColorSection
        title="Colores Base"
        description="Colores principales que definen la identidad del tema"
        colors={{
          primary: theme.colors.primary,
          secondary: theme.colors.secondary,
          background: theme.colors.background,
          text: theme.colors.text,
        }}
      />

      {/* Primary Variants */}
      <ColorSection
        title="Variantes Primarias"
        description="Variaciones del color primario para diferentes estados y contextos"
        colors={theme.colors.primaryVariants}
      />

      {/* Text Variants */}
      <ColorSection
        title="Variantes de Texto"
        description="Diferentes tonos de texto para distintos niveles de jerarquía y contextos"
        colors={theme.colors.textVariants}
      />

      {/* Disabled States */}
      <ColorSection
        title="Estados Deshabilitados"
        description="Colores usados para elementos en estado deshabilitado"
        colors={theme.colors.disabled}
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
                  className="px-4 py-2 rounded-md text-white"
                  style={{ backgroundColor: theme.colors.primary }}
                >
                  Botón Primario
                </button>
                <button
                  className="px-4 py-2 rounded-md"
                  style={{
                    backgroundColor: theme.colors.secondary,
                    color: theme.colors.text,
                  }}
                >
                  Botón Secundario
                </button>
                <button
                  className="px-4 py-2 rounded-md"
                  style={{
                    backgroundColor: theme.colors.disabled.background,
                    color: theme.colors.disabled.text,
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
                <p style={{ color: theme.colors.textVariants.dark }}>
                  Texto Principal
                </p>
                <p style={{ color: theme.colors.textVariants.light }}>
                  Texto Secundario
                </p>
                <p style={{ color: theme.colors.textVariants.muted }}>
                  Texto Muted
                </p>
              </div>
            </div>

            {/* Interactive States */}
            <div className="space-y-2">
              <h3 className="font-semibold">Estados Interactivos</h3>
              <div className="flex gap-4">
                <button
                  className="px-4 py-2 rounded-md transition-colors"
                  style={{
                    backgroundColor: theme.colors.primaryVariants.default,
                    color: theme.colors.text,
                  }}
                >
                  Estado Normal
                </button>
                <button
                  className="px-4 py-2 rounded-md transition-colors"
                  style={{
                    backgroundColor: theme.colors.primaryVariants.hover,
                    color: theme.colors.textVariants.light,
                  }}
                >
                  Estado Hover
                </button>
                <button
                  className="px-4 py-2 rounded-md transition-colors"
                  style={{
                    backgroundColor: theme.colors.primaryVariants.active,
                    color: theme.colors.textVariants.light,
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
  );
};

const meta = {
  title: "Themes/Tech/Modern",
  component: TechThemeColors,

  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof TechThemeColors>;

export default meta;

type Story = StoryObj<typeof TechThemeColors>;

export const Theme: Story = {
  render: () => <TechThemeColors />,
};
