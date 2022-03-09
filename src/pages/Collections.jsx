import { useState, useEffect } from 'react'
import '../styles/components/collections.css'
import { products } from '../data'
import useDiscount from '../hooks/useDiscount'
import { Link } from 'react-router-dom'

const Collections = ({ category = '', titlePage }) => {
  const [filterCategory, setFilterCategory] = useState([])

  useEffect(() => {
    category
      ? setFilterCategory(products.filter((item) => item.category === category))
      : setFilterCategory(products)
  }, [category])

  return (
    <section className='collections'>
      <div className='container'>
        <h2 className='section-title'>{titlePage}</h2>
      </div>
      <div className='container row-grid'>
        {filterCategory.map(({ name, images, price, percent }, index) => {
          const { valueProduct, finalValue } = useDiscount(price, percent)
          return (
            <Link key={index} to='product'>
              <article className='collection-product'>
                <header className='product-header'>
                  <small className='off'>OFF: {percent}%</small>
                  <figure>
                    <img
                      className='img-fluid product-photo'
                      src={images[0].img}
                      alt='Product photo'
                    />
                  </figure>
                </header>
                <section className='product-body'>
                  <small>{name}</small>
                  <div className='values'>
                    <p className='initial-value'>{valueProduct}</p>
                    <p className='final-value'>{finalValue}</p>
                  </div>
                </section>
              </article>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
export default Collections
