import type { Meta, StoryObj } from '@storybook/react'
import { ButtonAccount, MiniAccount } from './'
import { ThemeProvider, themes } from '@ajk-ui/theme-utils'
import { AuthProvider } from '@ajk-ui/auth'

const meta = {
  title: 'Components/Account',
  component: ButtonAccount,

  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <ThemeProvider initialTheme={themes.restaurant.modern}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof ButtonAccount>

export default meta
type Story = StoryObj<typeof ButtonAccount>

export const ButtonAccountDefault: Story = {
  render: () => <ButtonAccount />,
}

export const MiniAccountDefault: Story = {
  render: () => (
    <AuthProvider>
      <MiniAccount />
    </AuthProvider>
  ),
}
