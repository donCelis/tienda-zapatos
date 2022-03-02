import { createContext, useRef, useState } from 'react'

import { product } from '../data'

export const ProductContext = createContext(null)

export const ContextProvider = ({ children }) => {
  const [productCtx, setProductCtx] = useState(product)
  const [store, setStore] = useState([])
  const [showAdd, setShowAdd] = useState(false)
  const storeMenu = useRef()

  const addProduct = (product) => {
    setStore([...store, product])
  }
  const deleteProduct = (id) => {
    setStore(store.filter((item) => item.id !== id))
  }

  const handleStoreMenu = () => {
    setShowAdd(!showAdd)
    // storeMenu.current.classList.toggle('show')
  }

  const initialValue = {
    /* store */
    productCtx,
    store,
    addProduct,
    deleteProduct,
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
