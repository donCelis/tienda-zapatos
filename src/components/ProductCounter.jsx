import { useEffect, useState } from 'react'
/* context */
import { useProductCtx } from '../context'
/* icons */
import minus from '../assets/images/icon-minus.svg'
import plus from '../assets/images/icon-plus.svg'
import IconCart from './IconCart'
/* styles */
import '../styles/components/product.css'

const ProductCounter = () => {
  const { addProduct, productCtx, setproductCtx } = useProductCtx()
  const [accumulator, setAccumulator] = useState(0)
  const [activeBtn, setActiveBtn] = useState(false)

  useEffect(() => {
    setActiveBtn(accumulator === 0)
  }, [accumulator])

  const handleAddProduct = () => {
    if (!activeBtn) {
      addProduct({ ...productCtx, accumulator })
      setproductCtx((prev) => ({ ...prev, units: prev.units - accumulator }))
      setAccumulator(0)
    }
  }

  return (
    <section className='add-item'>
      <div className='counter'>
        <button
          onClick={() => accumulator > 0 && setAccumulator(accumulator - 1)}
        >
          <img src={minus} alt='minus' />
        </button>
        <p className='accumulator'>{accumulator}</p>
        <button
          onClick={() =>
            productCtx.units > accumulator && setAccumulator(accumulator + 1)}
        >
          <img src={plus} alt='plus' />
        </button>
      </div>
      <button
        className={`add-cart ${activeBtn ? 'disable' : ''}`}
        onClick={() => handleAddProduct()}
      >
        <figure>
          <IconCart />
        </figure>
        <p>Add to cart</p>
      </button>
    </section>
  )
}
export default ProductCounter
