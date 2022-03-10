import { createContext, useState, useContext } from 'react'

const ProductContext = createContext(null)

export const ContextProvider = ({ children }) => {
  const [store, setStore] = useState([])

  const initialValue = {
    store,
    setStore
  }

  return (
    <ProductContext.Provider value={initialValue}>
      {children}
    </ProductContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(ProductContext)
}
