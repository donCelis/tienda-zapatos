import { createContext, useRef, useState, useContext } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { product } from '../data'

const ProductContext = createContext(null)

export const AppProvider = ({ children }) => {
  const [productCtx] = useState(product)
  const [store, setStore] = useState([])
  const [showCart, setShowCart] = useState(false)
  const storeMenu = useRef()

  const addProduct = (product) => {
    const id = uuidv4()
    const tempProduct = { id, ...product }
    setStore([...store, tempProduct])
  }
  const deleteProduct = (id) => {
    setStore(store.filter((item) => item.id !== id))
  }

  const handleStoreMenu = () => {
    setShowCart(!showCart)
    // storeMenu.current.classList.toggle('show')
  }

  const initialValue = {
    /* store */
    productCtx,
    store,
    addProduct,
    deleteProduct,
    /* hide store menu */
    showCart,
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

export const useProductCtx = () => {
  return useContext(ProductContext)
}
