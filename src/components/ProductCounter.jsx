import { useEffect, useState } from 'react'
import '../styles/components/product.css'
import minus from '../assets/images/icon-minus.svg'
import plus from '../assets/images/icon-plus.svg'
import IconCart from './IconCart'
import { useGlobalContext } from '../context'
import { product } from '../data'

const ProductCounter = () => {
  const { store, setStore } = useGlobalContext()
  const [productTemp, setProductTemp] = useState(product)
  const [number, setNumber] = useState(0)
  const [activeBtn, setActiveBtn] = useState(false)

  useEffect(() => {
    setActiveBtn(number === 0)
  }, [number])

  const handleAddProduct = () => {
    if (!activeBtn) {
      setStore([...store, product])
      setProductTemp({ ...productTemp, units: productTemp.units - number })
      setNumber(0)
    }
  }

  return (
    <section className='add-item'>
      <div className='counter'>
        <button onClick={() => number > 0 && setNumber(number - 1)}>
          <img src={minus} alt='minus' />
        </button>
        <p className='number'>{number}</p>
        <button onClick={() => productTemp.units > number && setNumber(number + 1)}>
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
