import { ProductStock } from '@ajk-ui/product'
import { useState } from 'react'

export const useProductStock = (initialStock: ProductStock) => {
  const [stock, setStock] = useState(initialStock)

  const checkStockStatus = (quantity: number): boolean => {
    return quantity <= stock.total
  }

  const updateStock = (quantity: number) => {
    setStock(prev => ({
      ...prev,
      total: prev.total - quantity,
      status: prev.total - quantity <= prev.threshold ? 'low_stock' : 'in_stock',
    }))
  }

  return {
    stock,
    checkStockStatus,
    updateStock,
  }
}
