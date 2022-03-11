import { useState, useEffect } from 'react'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
/* styles */
import '../styles/components/product.css'
/* context */
import { useProductCtx } from '../context'
/* components */
import AddToCart from './AddToCart'
/* hooks */
import useDiscount from '../hooks/useDiscount'
import { useParams } from 'react-router-dom'
/* products */

const Thumbnail = ({ urlImg, active }) => {
  return (
    <figure className={active}>
      <img className='img-fluid' src={urlImg} alt='sneaker thumbnail' />
    </figure>
  )
}

const Product = () => {
  const { filterProduct, useFilteredProduct } = useProductCtx()
  const { id } = useParams()

  useEffect(() => {
    useFilteredProduct(Number(id))
  }, [])

  console.log(filterProduct)

  const { images, company, name, price, percent, description } = filterProduct[0]
  /* set main photo and filter photo */
  const [mainPhoto, setMainPhoto] = useState(images[0].img)
  const filterPhoto = images.filter(({ img }) => img !== mainPhoto)
  /* useDiscount */
  const { valueProduct, finalValue, discount } = useDiscount(price, percent)

  /* Options lightbox */
  const options = {
    settings: {
      disableWheelControls: true,
      disablePanzoom: true,
      slideAnimationType: 'slide'
    },
    buttons: {
      showAutoplayButton: false,
      showDownloadButton: false,
      showFullscreenButton: false,
      showThumbnailsButton: false,
      backgroundColor: 'white',
      iconColor: 'tomato'
    },
    caption: {
      showCaption: false
    },
    thumbnails: {
      thumbnailsGap: '1rem'
    }
  }

  return (
    <section className='product'>
      <div className='container row-grid'>
        <aside className='product-photos'>
          <SimpleReactLightbox>
            <SRLWrapper options={options}>
              <figure className='main-photo'>
                <img className='img-fluid' src={mainPhoto} alt='sneaker' />
              </figure>
              <div style={{ display: 'none' }}>
                {filterPhoto.map(({ img }, index) => (
                  <img key={index} src={img} alt='foto' />
                ))}
              </div>
            </SRLWrapper>
          </SimpleReactLightbox>
          <ul className='thumbnails'>
            {images.map(({ thumb, img }, index) => (
              <li key={index} onClick={() => setMainPhoto(img)}>
                <Thumbnail
                  active={mainPhoto === img ? 'active' : ''}
                  urlImg={thumb}
                />
              </li>
            ))}
          </ul>
        </aside>
        <article className='product-info'>
          <small>{company}</small>
          <h2>{name}</h2>
          <p className='info-text'>{description}</p>
          <p className='price'>
            <span className='final-value'>{finalValue}</span>
            <span className='discount'>{discount}%</span>
          </p>
          <p className='initial-value'>{valueProduct}</p>
          <AddToCart />
        </article>
      </div>
    </section>
  )
}

export default Product
