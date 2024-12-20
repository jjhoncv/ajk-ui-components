import type { Meta, StoryObj } from '@storybook/react'
import { Modal } from '.'
import { useState } from 'react'

const meta = {
  title: 'Components/Modal',
  component: Modal,

  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [Story => <Story />],
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof Modal>

const ModalHook = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(true)
        }}
      >
        Open Modal
      </button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
      >
        Hola
      </Modal>
    </div>
  )
}

export const ModalDefault: Story = {
  render: () => <ModalHook />,
}
