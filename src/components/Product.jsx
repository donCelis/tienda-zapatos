import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'
/* styles */
import '../styles/components/product.css'
/* context */
import { useProductCtx } from '../context'
/* components */
import AddToCart from './AddToCart'
import Thumbnail from './Thumbnail'
/* hooks */
import useDiscount from '../hooks/useDiscount'
import usePortal from 'react-useportal'
import iconClose from '../assets/images/icon-close.svg'

const Product = () => {
  const { id } = useParams()
  const { filterProduct, useFilteredProduct } = useProductCtx()
  const convertId = Number(id)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    useFilteredProduct(convertId)
    setLoading(true)
    return () => setLoading(false)
  }, [id])

  const { name, price, percent, description, images, company } = filterProduct

  /* set main photo and filter photo */
  const [mainPhoto, setMainPhoto] = useState('')
  // const [filterPhoto, setFilterPhoto] = useState([])

  useEffect(() => {
    if (images) {
      setMainPhoto(images[0].img)
      // setFilterPhoto(images.filter(({ img }) => img !== mainPhoto))
    }
  }, [loading])

  // const filterPhoto = images.filter(({ img }) => img !== mainPhoto)
  /* useDiscount */
  const { valueProduct, finalValue, discount } = useDiscount(price, percent)

  /* Options lightbox */
  /* const options = {
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
  } */

  const { ref, openPortal, closePortal, isOpen, Portal } = usePortal()

  return !loading
    ? (<p>...Loading</p>)
    : (
      <section className='product'>
        <div className='row-grid'>
          <aside className='product-photos'>
            {/* <SimpleReactLightbox> */}
            {/* <SRLWrapper options={options}> */}
            <figure className='main-photo' ref={ref} onClick={() => openPortal()}>
              <img className='img-fluid' src={mainPhoto} alt='sneaker' />
            </figure>
            {
              isOpen && (
                <Portal>
                  <section className='modal-box'>
                    <div className='modal-container'>
                      <button onClick={() => closePortal()}>
                        <img src={iconClose} alt='close' />
                      </button>
                      <img className='img-fluid' src={mainPhoto} alt='Done' />
                    </div>
                  </section>
                </Portal>
              )
            }
            {/* <div style={{ display: 'none' }}>
                  {filterPhoto.map(({ img }, index) => (
                    <img key={index} src={img} alt='foto' />
                  ))}
                </div> */}
            {/* </SRLWrapper> */}
            {/* </SimpleReactLightbox> */}
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
