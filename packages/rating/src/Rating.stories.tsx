import type { Meta, StoryObj } from '@storybook/react'

import { mockProducts } from '@ajk-ui/data'
import { ThemeProvider } from '@ajk-ui/theme-utils'
import { Rating } from './'
import { ModernTech } from '@ajk-ui/themes'

const meta = {
  title: 'Components/Rating',
  component: Rating,

  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <ThemeProvider initialTheme={ModernTech}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Rating>

export default meta
type Story = StoryObj<typeof Rating>

export const RatingDefault: Story = {
  render: () => <Rating average={2} />,
}

export const RatingThin: Story = {
  render: () => <Rating average={2} className="h-3 w-3 gap-3" />,
}
