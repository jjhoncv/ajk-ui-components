import type { Meta, StoryObj } from '@storybook/react'
import { LoginForm } from '.'
import { useState } from 'react'
import { Modal } from '@ajk-ui/modal'
import { AuthProvider } from '@ajk-ui/auth'
import { LoginModal } from './LoginModal'

const meta = {
  title: 'Components/LoginForm',
  component: LoginForm,

  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [Story => <Story />],
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof LoginForm>

const LoginModalFormHook = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <button
        className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
        onClick={() => {
          setIsOpen(true)
        }}
      >
        Open Login Form
      </button>
      <AuthProvider>
        <LoginModal
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false)
          }}
        />
      </AuthProvider>
    </div>
  )
}

export const LoginModalFormDefault: Story = {
  render: () => <LoginModalFormHook />,
}

export const LoginFormDefault: Story = {
  render: () => (
    <AuthProvider>
      <LoginForm />
    </AuthProvider>
  ),
}
