import { createContext, useRef, useState, useContext } from 'react'

import { v4 as uuidv4 } from 'uuid'

import { products } from '../data'

const AppContext = createContext({})

export const AppProvider = ({ children }) => {
  /* data */
  const [allProducts] = useState(products)
  const [productCtx, setproductCtx] = useState({})
  /* filter product in router */
  const [filterProduct, setFilterProduct] = useState(allProducts)
  /* store */
  const [store, setStore] = useState([])
  /* view o hide cart */
  const [showCart, setShowCart] = useState(false)
  const storeMenu = useRef()

  /* modify data router */
  const useFilteredProduct = (id) => {
    const tmpItemFilter = allProducts.filter((item) => item.id === id)
    setFilterProduct(tmpItemFilter)
  }

  /* modify store */
  const addProduct = (productTmp) => {
    const id = uuidv4()
    const tmpItemsStore = [...store, { id, ...productTmp }]
    setStore(tmpItemsStore)
  }

  const deleteProduct = (id) => {
    const tmpItemStore = store.filter((item) => item.id !== id)
    setStore(tmpItemStore)
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
    allProducts,
    filterProduct,
    useFilteredProduct,
    setFilterProduct
  }

  return (
    <AppContext.Provider value={initialValue}>
      {children}
    </AppContext.Provider>
  )
}

export const useProductCtx = () => {
  return useContext(AppContext)
}
