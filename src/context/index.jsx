import { createContext, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const ProductContext = createContext(null)

export const ContextProvider = ({ children }) => {
  const [store, setStore] = useState([])
  const [showAdd, setShowAdd] = useState(false)
  const storeMenu = useRef()

  const addProduct = (product) => {
    const id = uuidv4()
    const addIdProduct = { id, ...product }
    setStore([...store, addIdProduct])
  }
  const deleteProduct = (id) => {
    setStore(store.filter((item) => item.id !== id
    ))
  }

  const handleStoreMenu = () => {
    setShowAdd(!showAdd)
    // storeMenu.current.classList.toggle('show')
  }

  const initialValue = {
    /* store */
    store,
    addProduct,
    deleteProduct,
    /* hide store menu */
    showAdd,
    handleStoreMenu,
    /* store menu ref */
    storeMenu
  }

  console.log(store)

  return (
    <ProductContext.Provider value={initialValue}>
      {children}
    </ProductContext.Provider>
  )
}
