import { createContext, useState } from 'react'

export const ProductContext = createContext(null)

export const ContextProvider = ({ children }) => {
  const [store, setStore] = useState([])
  const [showAdd, setShowAdd] = useState(false)

  const addProduct = (product) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const addIdProduct = { id, ...product }
    setStore([...store, addIdProduct])
  }

  const initialValue = {
    store,
    addProduct,
    showAdd,
    setShowAdd
  }

  console.log(store)

  return (
    <ProductContext.Provider value={initialValue}>
      {children}
    </ProductContext.Provider>
  )
}
