import { createContext, useRef, useState } from 'react'

export const ProductContext = createContext(null)

export const ContextProvider = ({ children }) => {
  const [store, setStore] = useState([])
  const [showAdd, setShowAdd] = useState(false)
  const storeMenu = useRef()

  const addProduct = (product) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const addIdProduct = { id, ...product }
    setStore([...store, addIdProduct])
  }

  const handleStoreMenu = () => {
    setShowAdd(!showAdd)
    // storeMenu.current.classList.toggle('show')
  }

  const initialValue = {
    /* store */
    store,
    addProduct,
    /* hide store menu */
    showAdd,
    handleStoreMenu,
    /* store menu ref */
    storeMenu
  }

  return (
    <ProductContext.Provider value={initialValue}>
      {children}
    </ProductContext.Provider>
  )
}
