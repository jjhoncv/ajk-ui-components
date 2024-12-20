import { FC } from 'react'

export interface ButtonPlusMinusProps {
  id: number
  quantity: number
  updateQuantity: (id: number, change: number) => void
}

export const ButtonPlusMinus: FC<ButtonPlusMinusProps> = ({ id, quantity, updateQuantity }) => {
  const buttonStyles = 'hover:bg-gray-200 w-6 h-full flex justify-center items-center'

  return (
    <div className="flex h-full items-center border">
      <button onClick={() => updateQuantity(id, -1)} className={buttonStyles}>
        -
      </button>
      <div className="h-full w-8 text-center text-sm">{quantity}</div>
      <button onClick={() => updateQuantity(id, 1)} className={buttonStyles}>
        +
      </button>
    </div>
  )
}
