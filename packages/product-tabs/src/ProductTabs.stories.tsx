// src/stories/ProductTabs.stories.tsx
import type { Meta, StoryObj } from '@storybook/react'
import { ProductTabs } from './ProductTabs'
import { mockProducts } from '@ajk-ui/data'

const meta: Meta<typeof ProductTabs> = {
  title: 'Feature/ProductTabs',
  component: ProductTabs,
  parameters: {
    layout: 'padded',
  },
  decorators: [
    Story => (
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-6">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ProductTabs>

const mockProduct = mockProducts[0]

export const Default: Story = {
  args: {
    product: mockProduct,
  },
}

// Variante con muchas reseñas
export const ManyReviews: Story = {
  args: {
    product: {
      ...mockProduct,
      reviews: [
        ...mockProduct.reviews,
        {
          id: 4,
          userName: 'Pedro S.',
          rating: 3,
          comment: 'El producto está bien, pero esperaba mejor calidad.',
          date: '2024-02-05',
          verified: true,
        },
        {
          id: 5,
          userName: 'Laura M.',
          rating: 5,
          comment: '¡Increíbles! Son muy cómodas y el diseño es genial.',
          date: '2024-02-03',
          verified: true,
        },
      ],
    },
  },
}

// Variante con calificación baja
export const LowRating: Story = {
  args: {
    product: {
      ...mockProduct,
      ratings: {
        average: 2.5,
        count: 150,
        distribution: {
          5: 10,
          4: 20,
          3: 30,
          2: 50,
          1: 40,
        },
      },
    },
  },
}

// Variante sin reseñas
export const NoReviews: Story = {
  args: {
    product: {
      ...mockProduct,
      ratings: {
        average: 0,
        count: 0,
        distribution: {
          5: 0,
          4: 0,
          3: 0,
          2: 0,
          1: 0,
        },
      },
      reviews: [],
    },
  },
}

// Variante con descripción larga
export const LongDescription: Story = {
  args: {
    product: {
      ...mockProduct,
      longDescription: `La Vans Old Skool fue presentada en 1977 y se posicionó como el primer modelo de skate que exhibió la icónica sidestripe de la marca. Lo que comenzó como un simple garabato dibujado por Paul Van Doren, y originalmente llamado "jazz stripe", se ha convertido en el sello inconfundible de la marca Vans.

      Este modelo representa la perfecta combinación entre rendimiento y estilo, siendo adoptado no solo por skaters sino también por diferentes subculturas urbanas a lo largo de las décadas. Su construcción robusta incluye un upper de lona y gamuza que ofrece durabilidad excepcional, mientras que la suela waffle característica de Vans proporciona un agarre superior.

      La atención al detalle es evidente en cada aspecto del diseño, desde las costuras reforzadas hasta el acolchado estratégicamente ubicado para mayor comodidad. El cuello acolchado brinda soporte adicional, mientras que la plantilla amortiguada asegura comodidad durante todo el día.

      La versatilidad de las Old Skool ha permitido que trascienda su origen en el skateboarding para convertirse en un ícono de la moda streetwear, siendo una opción popular tanto para el uso diario como para ocasiones casuales.`,
    },
  },
}

// Variante móvil
export const Mobile: Story = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
}

// Variante con especificaciones técnicas extensas
export const ExtendedSpecs: Story = {
  args: {
    product: {
      ...mockProduct,
      specs: {
        ...mockProduct.specs,
        material: [
          'Upper: Combinación de lona y gamuza premium',
          'Forro: Textil transpirable',
          'Suela: Goma vulcanizada waffle pattern',
          'Ojales: Metal reforzado',
          'Lengüeta: Espuma acolchada',
          'Plantilla: EVA removible',
          'Entresuela: Amortiguación de espuma',
          'Refuerzos: Piel sintética en puntera y talón',
        ],
        care: [
          'Limpiar con un paño húmedo',
          'No lavar en máquina',
          'Dejar secar a temperatura ambiente',
          'Usar protector de calzado',
          'Evitar exposición directa al sol',
          'Guardar en lugar fresco y seco',
          'Rotar el uso con otro calzado',
        ],
      },
    },
  },
}
