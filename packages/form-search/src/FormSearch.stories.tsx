import type { Meta, StoryObj } from '@storybook/react'
import { FormSearch } from './FormSearch'
import { ThemeProvider } from '@ajk-ui/theme-utils'
import { BaseTheme } from '@ajk-ui/theme-utils'
import { mockProducts } from '@ajk-ui/data'
import { Suggestion } from './SuggestionsDropdown'

const meta: Meta<typeof FormSearch> = {
  title: 'Forms/FormSearch',
  component: FormSearch,
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
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof FormSearch>

// Mock función para simular búsqueda de sugerencias
const mockGetSuggestions = async (query: string) => {
  await new Promise(resolve => setTimeout(resolve, 500)) // Simular delay de red

  const mockData: Suggestion[] = mockProducts.map(product => ({
    id: product.id,
    title: product.name,
    description: product.description,
    image: product.images.gallery[0].size.xs.url,
  }))

  return mockData.filter(item => item.title.toLowerCase().includes(query.toLowerCase()))
}

// Historia básica
export const Default: Story = {
  args: {
    onSearch: query => console.log('Búsqueda:', query),
    onGetSuggestions: mockGetSuggestions,
    placeholder: 'Buscar productos...',
  },
  render: args => (
    <div className="w-96">
      <FormSearch {...args} />
    </div>
  ),
}

// Con valor inicial
export const WithDefaultValue: Story = {
  args: {
    onSearch: query => console.log('Búsqueda:', query),
    onGetSuggestions: mockGetSuggestions,
    placeholder: 'Buscar productos...',
    defaultValue: 'iPhone',
  },
  render: args => (
    <div className="w-96">
      <FormSearch {...args} />
    </div>
  ),
}

// Con autofocus
export const WithAutofocus: Story = {
  args: {
    onSearch: query => console.log('Búsqueda:', query),
    onGetSuggestions: mockGetSuggestions,
    placeholder: 'Buscar productos...',
    autoFocus: true,
  },
  render: args => (
    <div className="w-96">
      <FormSearch {...args} />
    </div>
  ),
}

// Con diferentes anchos
export const DifferentWidths: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="w-64">
        <FormSearch
          onSearch={q => console.log(q)}
          onGetSuggestions={mockGetSuggestions}
          placeholder="Ancho pequeño"
        />
      </div>
      <div className="w-96">
        <FormSearch
          onSearch={q => console.log(q)}
          onGetSuggestions={mockGetSuggestions}
          placeholder="Ancho mediano"
        />
      </div>
      <div className="w-full max-w-2xl">
        <FormSearch
          onSearch={q => console.log(q)}
          onGetSuggestions={mockGetSuggestions}
          placeholder="Ancho completo"
        />
      </div>
    </div>
  ),
}

// Con diferentes tiempos de debounce
export const DifferentDebounce: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="w-96">
        <FormSearch
          onSearch={q => console.log(q)}
          onGetSuggestions={mockGetSuggestions}
          placeholder="Debounce rápido (200ms)"
          debounceMs={200}
        />
      </div>
      <div className="w-96">
        <FormSearch
          onSearch={q => console.log(q)}
          onGetSuggestions={mockGetSuggestions}
          placeholder="Debounce normal (300ms)"
          debounceMs={300}
        />
      </div>
      <div className="w-96">
        <FormSearch
          onSearch={q => console.log(q)}
          onGetSuggestions={mockGetSuggestions}
          placeholder="Debounce lento (500ms)"
          debounceMs={500}
        />
      </div>
    </div>
  ),
}

// Ejemplo de uso en un contexto
export const InContext: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-4xl p-4">
      <div className="rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-semibold">Búsqueda de Productos</h2>
        <FormSearch
          onSearch={query => console.log('Búsqueda:', query)}
          onGetSuggestions={mockGetSuggestions}
          placeholder="Buscar en el catálogo..."
          fullWidth
        />
        <div className="mt-4 text-sm text-gray-500">
          Prueba buscando: "iPhone", "MacBook", "iPad"
        </div>
      </div>
    </div>
  ),
}
