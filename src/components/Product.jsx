import { useState } from 'react'
import allImages from '../data'
import ProductCounter from './ProductCounter'
import '../styles/components/product.css'

const Thumbnail = ({ urlImg }) => {
  return (
    <figure>
      <img className='img-fluid' src={urlImg} alt='sneaker thumbnail' />
    </figure>
  )
}

const Product = () => {
  const [mainPhoto, setMainPhoto] = useState(allImages[0].img)
  return (
    <section className='product'>
      <div className='container row-grid'>
        <aside className='product-photos'>
          <figure className='main-photo'>
            <img className='img-fluid' src={mainPhoto} alt='sneaker' />
          </figure>
          <ul className='thumbnails'>
            {allImages.map(({ thumb, img }, index) =>
              <li key={index} onClick={() => setMainPhoto(img)}>
                <Thumbnail urlImg={thumb} />
              </li>
            )}
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
