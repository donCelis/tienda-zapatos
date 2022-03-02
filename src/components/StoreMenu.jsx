import { useContext } from 'react'
import { ProductContext } from '../context'
import useDiscount from '../hooks/useDiscount'
import iconDelete from '../assets/images/icon-delete.svg'

const ProductStore = ({ id, name, price, accumulator, images, percent }) => {
  const { deleteProduct } = useContext(ProductContext)
  const { finalValue, initialfinalValue, convertCurrency } = useDiscount(
    price,
    percent
  )
  const totalValue = convertCurrency(initialfinalValue * accumulator)
  return (
    <article className='product-cart'>
      <aside>
        <img className='img-fluid' src={images[0].thumb} alt='Image product' />
      </aside>
      <section className='product-desc'>
        <h4>{name}</h4>
        <div className='product-values'>
          <p>
            {finalValue} x {accumulator} - <span>{totalValue}</span>
          </p>
        </div>
      </section>
      <figure onClick={() => deleteProduct(id)} className='delete'>
        <img src={iconDelete} alt='Icon delete product' />
      </figure>
    </article>
  )
}

const StoreMenu = () => {
  const { store, storeMenu } = useContext(ProductContext)
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
