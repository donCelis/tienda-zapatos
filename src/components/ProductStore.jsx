import { useProductCtx } from '../context'
import useDiscount from '../hooks/useDiscount'
import iconDelete from '../assets/images/icon-delete.svg'

const ProductStore = ({ id, name, price, accumulator, images, percent }) => {
  const { deleteProduct } = useProductCtx()
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
export default ProductStore
