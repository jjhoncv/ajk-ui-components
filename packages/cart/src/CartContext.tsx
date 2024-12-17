import React, { createContext, useContext, useReducer } from "react";

// Interfaces
export interface CartItem {
  id: number;
  name: string;
  subname: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
}

interface CartContextType extends CartState {
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeItem: (itemId: string | number) => void;
  updateQuantity: (itemId: string | number, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartProviderProps {
  children: React.ReactNode;
  initialState?: Partial<CartState>;
}

const defaultInitialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

export const CartProvider: React.FC<CartProviderProps> = ({
  children,
  initialState = defaultInitialState,
}) => {
  const [state, setState] = React.useState<CartState>({
    ...defaultInitialState,
    ...initialState,
  });

  const addItem = (
    item: Omit<CartItem, "quantity"> & { quantity?: number }
  ) => {
    setState((prevState) => {
      const existingItem = prevState.items.find((i) => i.id === item.id);
      const quantity = item.quantity || 1;

      if (existingItem) {
        const updatedItems = prevState.items.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
        return {
          ...prevState,
          items: updatedItems,
          total: calculateTotal(updatedItems),
          itemCount: calculateItemCount(updatedItems),
        };
      }

      const newItem = { ...item, quantity };
      const newItems = [...prevState.items, newItem];

      return {
        ...prevState,
        items: newItems,
        total: calculateTotal(newItems),
        itemCount: calculateItemCount(newItems),
      };
    });
  };

  const removeItem = (itemId: string | number) => {
    setState((prevState) => {
      const newItems = prevState.items.filter((item) => item.id !== itemId);
      return {
        ...prevState,
        items: newItems,
        total: calculateTotal(newItems),
        itemCount: calculateItemCount(newItems),
      };
    });
  };

  const updateQuantity = (itemId: string | number, quantity: number) => {
    setState((prevState) => {
      const updatedItems = prevState.items
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
        .filter((item) => item.quantity > 0);
      return {
        ...prevState,
        items: updatedItems,
        total: calculateTotal(updatedItems),
        itemCount: calculateItemCount(updatedItems),
      };
    });
  };

  const clearCart = () => {
    setState(defaultInitialState);
  };

  const value = {
    ...state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

const calculateItemCount = (items: CartItem[]): number => {
  return items.reduce((count, item) => count + item.quantity, 0);
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart debe ser usado dentro de un CartProvider");
  }
  return context;
};
