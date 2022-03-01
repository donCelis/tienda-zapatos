import { useContext } from 'react'
import { ProductContext } from '../context'

const ProductStore = () => {
  return (
    <article>
      <h4>producto</h4>
      <p>valor del producto</p>
    </article>
  )
}

const StoreMenu = () => {
  const { store, storeMenu } = useContext(ProductContext)
  return (
    <section ref={storeMenu} className='store-menu show'>
      <header>
        <h4>Cart</h4>
      </header>
      <section className='store-body'>
        {store.length > 0
          ? (
            <>
              <ProductStore />
              <button className='add-cart'>Checkout</button>
            </>
            )
          : (
            <p>Your cart is empty.</p>
            )}
      </section>
    </section>
  )
}
export default StoreMenu
