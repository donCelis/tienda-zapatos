import { useContext, useEffect, useRef } from 'react'
import { ProductContext } from '../context'
import '../styles/components/product.css'
import minus from '../assets/images/icon-minus.svg'
import plus from '../assets/images/icon-plus.svg'
import IconCart from './IconCart'

const ProductCounter = () => {
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
    if (number > 0) btnCart.current.classList.remove('disable')
    if (number === 0) btnCart.current.classList.add('disable')
  }, [number])

  const handleAddProduct = () => {
    if (number > 0) console.log('ok')
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
      <button ref={btnCart} className='add-cart' onClick={() => handleAddProduct()}>
        <figure>
          <IconCart />
        </figure>
        <p>
          Add to cart
        </p>
      </button>
    </section>
  )
}
export default ProductCounter
