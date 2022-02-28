import { useContext, useEffect, useRef, useState } from 'react'
import { ProductContext } from '../context'
import '../styles/components/product.css'
import minus from '../assets/images/icon-minus.svg'
import plus from '../assets/images/icon-plus.svg'
import IconCart from './IconCart'

const ProductCounter = () => {
  const [activeBtn, setActiveBtn] = useState(false)

  const { number, setNumber } = useContext(ProductContext)

  const handleChangeNumber = (operation) => {
    switch (operation) {
      case '+':
        if (number < 10) setNumber(number + 1)
        break
      case '-':
        if (number > 0) setNumber(number - 1)
        break
      default:
        console.log('Operación no permitida')
        break
    }
  }

  const btnCart = useRef(null)

  useEffect(() => {
    switch (number) {
      case 0:
        setActiveBtn(true)
        break
      case 1:
        setActiveBtn(false)
        break
    }
    /* if (number > 0 && number < 10) setActiveBtn(false)
    if (number === 0) setActiveBtn(true) */
  }, [number])

  const handleAddProduct = () => {
    if (!activeBtn) console.log('ok')
  }

  return (
    <section className='add-item'>
      <div className='counter'>
        <button onClick={() => handleChangeNumber('-')}>
          <img src={minus} alt='minus' />
        </button>
        <p className='number'>{number}</p>
        <button onClick={() => handleChangeNumber('+')}>
          <img src={plus} alt='plus' />
        </button>
      </div>
      <button
        ref={btnCart}
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
