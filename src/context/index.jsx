import { createContext, useState } from 'react'

export const ProductContext = createContext(null)

export const ContextProvider = ({ children }) => {
  const [number, setNumber] = useState(0)

  const initialValue = {
    number,
    setNumber
  }

  return (
    <ProductContext.Provider value={initialValue}>
      {children}
    </ProductContext.Provider>
  )
}
