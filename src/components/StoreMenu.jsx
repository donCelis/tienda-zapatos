import { useProductCtx } from '../context'

import ProductStore from './ProductStore'

const StoreMenu = () => {
  const { store, storeMenu } = useProductCtx()
  const storeEmpty = store.length > 0
  return (
    <section ref={storeMenu} className='store-menu show'>
      <header>
        <h4>Cart</h4>
      </header>
      <section className={`store-body ${storeEmpty ? '' : 'empty'}`}>
        {storeEmpty
          ? (
            <>
              {store.map((item, index) => (
                <ProductStore key={`${item.id}-${index}`} {...item} />
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
