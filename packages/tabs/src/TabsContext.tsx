import React, { createContext, useContext, useState } from 'react'
import { TabsProps } from './Tabs'

interface TabsContextType {
  value: string
  setValue: (value: string) => void
}

const TabsContext = createContext<TabsContextType | undefined>(undefined)

export const useTabsContext = () => {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('Tabs components must be used within a TabsProvider')
  }
  return context
}

export const TabsProvider: React.FC<TabsProps> = ({ defaultValue, children }) => {
  const [value, setValue] = useState(defaultValue)

  return <TabsContext.Provider value={{ value, setValue }}>{children}</TabsContext.Provider>
}
