import { createContext, useRef, useState, useContext } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { product, products } from '../data'

const ProductContext = createContext(null)

export const AppProvider = ({ children }) => {
  const [filterProduct, setFilterProduct] = useState(products)
  const [productCtx, setproductCtx] = useState(product)
  const [store, setStore] = useState([])
  const [showCart, setShowCart] = useState(false)
  const storeMenu = useRef()

  const addProduct = (productTmp) => {
    const id = uuidv4()
    const tempProduct = { id, ...productTmp }
    setStore([...store, tempProduct])
  }
  const deleteProduct = (id) => {
    setStore(store.filter((item) => item.id !== id))
  }

  const useFilteredProduct = (id) => {
    setFilterProduct(filterProduct.filter((item) => item.id === id))
  }

  const handleStoreMenu = () => {
    setShowCart(!showCart)
    // storeMenu.current.classList.toggle('show')
  }

  const initialValue = {
    productCtx,
    setproductCtx,
    /* store */
    store,
    addProduct,
    deleteProduct,
    /* hide store menu */
    showCart,
    handleStoreMenu,
    /* store menu ref */
    storeMenu,
    /* data */
    filterProduct,
    useFilteredProduct
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
