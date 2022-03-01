import { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../context'
import '../styles/components/product.css'
import minus from '../assets/images/icon-minus.svg'
import plus from '../assets/images/icon-plus.svg'
import IconCart from './IconCart'
import { product } from '../data'

const ProductCounter = () => {
  const [number, setNumber] = useState(0)
  const [activeBtn, setActiveBtn] = useState(false)

  const { addProduct } = useContext(ProductContext)

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

  useEffect(() => {
    if (number > 0 && number < 10) setActiveBtn(false)
    if (number === 0) setActiveBtn(true)
  }, [number])

  const handleAddProduct = () => {
    if (!activeBtn) {
      addProduct(product[0])
      setNumber(0)
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
