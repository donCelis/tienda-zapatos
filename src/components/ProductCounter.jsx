import { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context'
import '../styles/components/product.css'
import minus from '../assets/images/icon-minus.svg'
import plus from '../assets/images/icon-plus.svg'
import IconCart from './IconCart'

const ProductCounter = () => {
  const { number, setNumber } = useContext(ProductContext)
  const [activeBtn, setActiveBtn] = useState(false)

  useEffect(() => {
    setActiveBtn(number === 0)
  }, [number])

  const handleAddProduct = () => {
    if (!activeBtn) console.log('ok')
  }

  return (
    <section className='add-item'>
      <div className='counter'>
        <button onClick={() => number > 0 && setNumber(number - 1)}>
          <img src={minus} alt='minus' />
        </button>
        <p className='number'>{number}</p>
        <button onClick={() => setNumber(number + 1)}>
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
