import { useState } from 'react'
import '../styles/components/product.css'
import minus from '../assets/images/icon-minus.svg'
import plus from '../assets/images/icon-plus.svg'
import IconCart from './IconCart'

const ProductCounter = () => {
  const [number, setNumber] = useState(0)

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
      <button className='add-cart'>
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
