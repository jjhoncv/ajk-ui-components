import { ThemeProvider } from '@ajk-ui/theme-utils'
import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Pagination, PaginationProps } from '.'
import { ModernTech } from '@ajk-ui/themes'

const meta = {
  title: 'Navigation/Pagination',
  component: Pagination,
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
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

const PaginationHook = ({ ...args }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage)

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={page => {
        setCurrentPage(page)
      }}
    />
  )
}

// Historia básica
export const Default: Story = {
  args: {
    totalPages: 5,
    currentPage: 2,
  },
  render: args => {
    return <PaginationHook {...args} />
  },
}
