import { useContext } from 'react'
import { ProductContext } from '../context'

const ProductStore = ({ name, price, accumulator }) => {
  return (
    <article>
      <h4>{name}</h4>
      <p>{price}</p>
      <p>cantidad: {accumulator}</p>
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
              {store.map((item) => (
                <ProductStore key={item.id} {...item} />
              ))}
              <button className='add-cart check'>Checkout</button>
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
