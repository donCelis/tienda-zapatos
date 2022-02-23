import mainPhoto from '../assets/images/image-product-1.jpg'
/* thumbnails */
import thumbnail1 from '../assets/images/image-product-1-thumbnail.jpg'
import thumbnail2 from '../assets/images/image-product-2-thumbnail.jpg'
import thumbnail3 from '../assets/images/image-product-3-thumbnail.jpg'
import thumbnail4 from '../assets/images/image-product-4-thumbnail.jpg'

import '../styles/components/product.css'
import ProductCounter from './ProductCounter'

const Product = () => {
  return (
    <section className='product'>
      <div className='container row-grid'>
        <aside className='product-photos'>
          <figure className='main-photo'>
            <img className='img-fluid' src={mainPhoto} alt='sneaker' />
          </figure>
          <ul className='thumbnails'>
            <li>
              <figure>
                <img className='img-fluid' src={thumbnail1} alt='sneaker thumbnail' />
              </figure>
            </li>
            <li>
              <figure>
                <img className='img-fluid' src={thumbnail2} alt='sneaker thumbnail' />
              </figure>
            </li>
            <li>
              <figure>
                <img className='img-fluid' src={thumbnail3} alt='sneaker thumbnail' />
              </figure>
            </li>
            <li>
              <figure>
                <img className='img-fluid' src={thumbnail4} alt='sneaker thumbnail' />
              </figure>
            </li>
          </ul>
        </aside>
        <article className='product-info'>
          <small>Sneaker Company</small>
          <h2>Fall Limited Edition Sneakers</h2>
          <p>
            These low-profile sneakers are your perfect casual wear companion. Featuring a
            durable rubber outer sole, they’ll withstand everything the weather can offer.
          </p>
          <p className='price'>
            <span>
              $125.00
            </span>
            <span>
              50%
            </span>
          </p>
          <p>
            $250.00
          </p>
          <ProductCounter />
        </article>
      </div>
    </section>
  )
}

export default Product
