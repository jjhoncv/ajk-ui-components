import { Button } from "@ajk-ui/button";
import { cn, formatPEN } from "@ajk-ui/core";
import { Sheet } from "@ajk-ui/sheet";
import { useEffect, useRef, useState } from "react";
import ButtonCart from "./ButtonCart";

import { ButtonPlusMinus } from "./ButtonPlusMinus";
import { useCart } from "./CartContext";

interface MiniCartProps {
  isOpen?: boolean;
  openWhenProductIsAddedToCart?: boolean;
  className?: string;
}

export const MiniCart = ({
  isOpen: isOpenInitial = false,
  openWhenProductIsAddedToCart = false,
  className = "",
}: MiniCartProps) => {
  const [isOpen, setIsOpen] = useState(isOpenInitial);
  const { items, total, itemCount, updateQuantity, changeCounter } = useCart();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    if (openWhenProductIsAddedToCart) {
      setIsOpen(true);
    }
  }, [changeCounter, openWhenProductIsAddedToCart]);

  const toggleCart = () => setIsOpen(!isOpen);
  return (
    <div className="relative">
      {/* Cart Toggle Button */}
      <ButtonCart
        className={className}
        handleClick={toggleCart}
        total={items.reduce((acc, item) => acc + item.quantity, 0)}
      />

      <Sheet
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(!isOpen);
        }}
        side="right"
        className="w-full md:w-[400px] md:visible"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b">
          <h2 className="text-lg font-semibold">
            Carrito de compras ({itemCount})
          </h2>
          <button
            onClick={toggleCart}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <svg className={cn("w-5 h-5")} fill="none" viewBox="0 0 24 24">
              <path
                className={cn("stroke-slate-950")}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              Tu carrito esta vacio
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex space-x-4  py-3 rounded-lg items-start"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold block text-xs">{item.name}</h3>
                    <h4 className="font-medium text-xs">{item.subname}</h4>

                    <p className="text-gray-600 font-bold text-sm">
                      {formatPEN(item.price)}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <ButtonPlusMinus
                        id={item.id}
                        updateQuantity={updateQuantity}
                        quantity={item.quantity}
                      />
                      <button
                        onClick={() =>
                          updateQuantity?.(item.id, -item.quantity)
                        }
                        className="p-1 hover:bg-gray-200 rounded ml-2"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          className={cn("w-5 h-5")}
                          viewBox="0 0 32 32"
                        >
                          <path d="M 15 4 C 14.476563 4 13.941406 4.183594 13.5625 4.5625 C 13.183594 4.941406 13 5.476563 13 6 L 13 7 L 7 7 L 7 9 L 8 9 L 8 25 C 8 26.644531 9.355469 28 11 28 L 23 28 C 24.644531 28 26 26.644531 26 25 L 26 9 L 27 9 L 27 7 L 21 7 L 21 6 C 21 5.476563 20.816406 4.941406 20.4375 4.5625 C 20.058594 4.183594 19.523438 4 19 4 Z M 15 6 L 19 6 L 19 7 L 15 7 Z M 10 9 L 24 9 L 24 25 C 24 25.554688 23.554688 26 23 26 L 11 26 C 10.445313 26 10 25.554688 10 25 Z M 12 12 L 12 23 L 14 23 L 14 12 Z M 16 12 L 16 23 L 18 23 L 18 12 Z M 20 12 L 20 23 L 22 23 L 22 12 Z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t py-4 space-y-4">
          <div className="flex justify-between items-center font-semibold">
            <span>Total:</span>
            <span>{formatPEN(total)}</span>
          </div>
          <Button
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            disabled={items.length === 0}
          >
            Proceed to Checkout
          </Button>
        </div>
      </Sheet>
    </div>
  );
};
