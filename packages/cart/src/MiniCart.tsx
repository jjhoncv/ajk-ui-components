import { useState } from "react";
import ButtonCart from "./ButtonCart";
import { cn } from "@ajk-ui/core";
import { Sheet } from "@ajk-ui/sheet";

interface Item {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface MiniCartProps {
  items?: Item[];
  isOpen?: boolean;
  className: string;
  updateQuantity?: (id: number, change: number) => void;
}

export const MiniCart = ({
  items: itemsInitial = [],
  isOpen: isOpenInitial = false,
  className = "",
  updateQuantity,
}: MiniCartProps) => {
  const [isOpen, setIsOpen] = useState(isOpenInitial);
  const [items, setItems] = useState(itemsInitial);
  // const [items, setItems] = useState([
  //   {
  //     id: 1,
  //     name: "Product 1",
  //     price: 19.99,
  //     quantity: 1,
  //     image: "/api/placeholder/80/80",
  //   },
  //   {
  //     id: 2,
  //     name: "Product 2",
  //     price: 29.99,
  //     quantity: 2,
  //     image: "/api/placeholder/80/80",
  //   },
  // ]);

  // const updateQuantity = (id: number, change: number) => {
  //   setItems(
  //     items
  //       .map((item) => {
  //         if (item.id === id) {
  //           const newQuantity = Math.max(0, item.quantity + change);
  //           return { ...item, quantity: newQuantity };
  //         }
  //         return item;
  //       })
  //       .filter((item) => item.quantity > 0)
  //   );
  // };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const toggleCart = () => setIsOpen(!isOpen);
  return (
    <div className="relative">
      {/* Cart Toggle Button */}
      <ButtonCart
        className={className}
        handleClick={toggleCart}
        total={items.length}
      />
      {/* <button
        onClick={toggleCart}
        className="fixed top-4 right-4 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        <ShoppingCart className="w-6 h-6" />
        {items.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {items.length}
          </span>
        )}
      </button> */}

      <Sheet isOpen={isOpen} onClose={()=>{ setIsOpen(!isOpen) }} side="right">
        <div className={cn("fixed inset-y-0 right-0 w-[80%] sm:w-96 bg-white shadow-xl flex flex-col")}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <button
              onClick={toggleCart}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              cerrar
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                Your cart is empty
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center space-x-4 bg-gray-50 p-3 rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => updateQuantity?.(item.id, -1)}
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity?.(item.id, 1)}
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          +
                        </button>
                        <button
                          onClick={() =>
                            updateQuantity?.(item.id, -item.quantity)
                          }
                          className="p-1 hover:bg-gray-200 rounded ml-2"
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between items-center font-semibold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
              disabled={items.length === 0}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </Sheet>
    </div>
  );
};
