import { useState } from 'react'
import allImages from '../data'
import ProductCounter from './ProductCounter'
import '../styles/components/product.css'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
import useDiscount from '../hooks/useDiscount'

const Thumbnail = ({ urlImg, active }) => {
  return (
    <figure className={active}>
      <img className='img-fluid' src={urlImg} alt='sneaker thumbnail' />
    </figure>
  )
}

const Product = () => {
  /* set main photo and filter photo */
  const [mainPhoto, setMainPhoto] = useState(allImages[0].img)
  const deletePhoto = allImages.filter(({ img }) => img !== mainPhoto)
  /* useDiscount */
  const {
    valueProduct,
    finalValue,
    discount,
    setMoneda
  } = useDiscount(250, 50)

  const prices = [
    { price: 250 },
    { price: 100 },
    { price: 100 },
    { price: 250 }
  ]

  const mapPrices = prices.map(({ price }) => useDiscount(price, 50))

  console.log(mapPrices)

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
                {deletePhoto.map(({ img }, index) => (
                  <img key={index} src={img} alt='foto' />
                ))}
              </div>
            </SRLWrapper>
          </SimpleReactLightbox>
          <ul className='thumbnails'>
            {allImages.map(({ thumb, img }, index) => (
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
          <small>Sneaker Company</small>
          <h2>Fall Limited Edition Sneakers</h2>
          <form>
            <select onChange={(event) => setMoneda(event.target.value)}>
              <option value='en-US'>Dolar</option>
              <option value='de-DE'>Euro</option>
            </select>
          </form>
          <p className='info-text'>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <p className='price'>
            <span className='final-value'>{finalValue}</span>
            <span className='discount'>{discount}%</span>
          </p>
          <p className='initial-value'>{valueProduct}</p>
          <ProductCounter />
        </article>
      </div>
    </section>
  )
}

export default Product
