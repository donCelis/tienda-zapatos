import { useProductCtx } from '../context'

import ProductStore from './ProductStore'

const StoreMenu = () => {
  const { store, storeMenu } = useProductCtx()
  const storeEmpty = store.length > 0
  const addClassEmpty = storeEmpty ? '' : 'empty'
  return (
    <section ref={storeMenu} className='store-menu show'>
      <header>
        <h4>Cart</h4>
      </header>
      <section className={`store-body ${addClassEmpty}`}>
        {storeEmpty
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
