import React, { createContext, useContext, useEffect } from 'react'

// Interfaces
export interface CartItem {
  id: number
  name: string
  subname: string
  price: number
  quantity: number
  image?: string
}

interface CartState {
  items: CartItem[]
  total: number
  itemCount: number
  changeCounter: number // Add this new field
}

interface CartContextType extends CartState {
  addItem: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void
  removeItem: (itemId: string | number) => void
  updateQuantity: (itemId: string | number, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

interface CartProviderProps {
  children: React.ReactNode
  initialState?: Partial<CartState>
  storageKey?: string
}

const defaultInitialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
  changeCounter: 0,
}

// Helper functions for localStorage
const loadFromStorage = (key: string): CartState => {
  try {
    const storedData = localStorage.getItem(key)
    if (storedData) {
      return JSON.parse(storedData)
    }
  } catch (error) {
    console.error('Error loading cart from localStorage:', error)
  }
  return defaultInitialState
}

const saveToStorage = (key: string, state: CartState): void => {
  try {
    localStorage.setItem(key, JSON.stringify(state))
  } catch (error) {
    console.error('Error saving cart to localStorage:', error)
  }
}

export const CartProvider: React.FC<CartProviderProps> = ({
  children,
  initialState = defaultInitialState,
  storageKey = 'shopping-cart',
}) => {
  const [state, setState] = React.useState<CartState>(() => {
    const storedState = loadFromStorage(storageKey)
    return {
      ...defaultInitialState,
      ...initialState,
      ...storedState,
      changeCounter: 0, // Reset counter on initial load
    }
  })

  // Save to localStorage whenever state changes
  useEffect(() => {
    saveToStorage(storageKey, state)
  }, [state, storageKey])

  const addItem = (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    setState(prevState => {
      const existingItem = prevState.items.find(i => i.id === item.id)
      const quantity = item.quantity || 1

      if (existingItem) {
        const updatedItems = prevState.items.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        )
        return {
          ...prevState,
          items: updatedItems,
          total: calculateTotal(updatedItems),
          itemCount: calculateItemCount(updatedItems),
          changeCounter: prevState.changeCounter + 1,
        }
      }

      const newItem = { ...item, quantity }
      const newItems = [...prevState.items, newItem]

      return {
        ...prevState,
        items: newItems,
        total: calculateTotal(newItems),
        itemCount: calculateItemCount(newItems),
        changeCounter: prevState.changeCounter + 1,
      }
    })
  }

  const removeItem = (itemId: string | number) => {
    setState(prevState => {
      const newItems = prevState.items.filter(item => item.id !== itemId)
      return {
        ...prevState,
        items: newItems,
        total: calculateTotal(newItems),
        itemCount: calculateItemCount(newItems),
        changeCounter: prevState.changeCounter + 1,
      }
    })
  }

  const updateQuantity = (itemId: string | number, quantity: number) => {
    setState(prevState => {
      const updatedItems = prevState.items
        .map(item => (item.id === itemId ? { ...item, quantity: item.quantity + quantity } : item))
        .filter(item => item.quantity > 0)
      return {
        ...prevState,
        items: updatedItems,
        total: calculateTotal(updatedItems),
        itemCount: calculateItemCount(updatedItems),
        changeCounter: prevState.changeCounter + 1,
      }
    })
  }

  const clearCart = () => {
    setState({
      ...defaultInitialState,
      changeCounter: state.changeCounter + 1,
    })
  }

  const value = {
    ...state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

const calculateTotal = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0)
}

const calculateItemCount = (items: CartItem[]): number => {
  return items.reduce((count, item) => count + item.quantity, 0)
}

export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
