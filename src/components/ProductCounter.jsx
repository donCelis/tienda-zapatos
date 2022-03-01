import { useContext, useEffect, useState } from 'react'
/* context */
import { ProductContext } from '../context'
/* icons */
import minus from '../assets/images/icon-minus.svg'
import plus from '../assets/images/icon-plus.svg'
import IconCart from './IconCart'
/* data */
import { product } from '../data'
/* styles */
import '../styles/components/product.css'

const ProductCounter = () => {
  const { addProduct } = useContext(ProductContext)
  const [accumulator, setAccumulator] = useState(0)
  const [activeBtn, setActiveBtn] = useState(false)

  const handleChangeaccumulator = (operation) => {
    switch (operation) {
      case '+':
        if (accumulator < 10) setAccumulator(accumulator + 1)
        break
      case '-':
        if (accumulator > 0) setAccumulator(accumulator - 1)
        break
      default:
        console.log('Operación no permitida')
        break
    }
  }

  useEffect(() => {
    if (accumulator > 0 && accumulator < 10) setActiveBtn(false)
    if (accumulator === 0) setActiveBtn(true)
  }, [accumulator])

  const handleAddProduct = () => {
    if (!activeBtn) {
      addProduct({ accumulator, ...product[0] })
      setAccumulator(0)
    }
  }

  return (
    <section className='add-item'>
      <div className='counter'>
        <button onClick={() => handleChangeaccumulator('-')}>
          <img src={minus} alt='minus' />
        </button>
        <p className='accumulator'>{accumulator}</p>
        <button onClick={() => handleChangeaccumulator('+')}>
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
