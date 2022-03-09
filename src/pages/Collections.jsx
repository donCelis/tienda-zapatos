import '../styles/components/collections.css'
import { products } from '../data'
import useDiscount from '../hooks/useDiscount'

const Collections = () => {
  return (
    <section className='collections'>
      <div className='container'>
        <h2 className='section-title'>All sneakers</h2>
      </div>
      <div className='container row-grid'>
        {products.map(({ name, images, price, percent }, index) => {
          const { valueProduct, finalValue } = useDiscount(price, percent)
          return (
            <article key={index} className='collection-product'>
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
          )
        })}
      </div>
    </section>
  )
}
export default Collections
