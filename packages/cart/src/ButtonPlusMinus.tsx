import { FC } from "react";

export interface ButtonPlusMinusProps {
  id: number;
  quantity: number;
  updateQuantity: (id: number, change: number) => void;
}

export const ButtonPlusMinus: FC<ButtonPlusMinusProps> = ({
  id,
  quantity,
  updateQuantity,
}) => {
  const buttonStyles =
    "hover:bg-gray-200 w-6 h-full flex justify-center items-center";

  return (
    <div className="border h-full flex items-center">
      <button onClick={() => updateQuantity(id, -1)} className={buttonStyles}>
        -
      </button>
      <div className="w-8 h-full text-center text-sm">{quantity}</div>
      <button onClick={() => updateQuantity(id, 1)} className={buttonStyles}>
        +
      </button>
    </div>
  );
};
