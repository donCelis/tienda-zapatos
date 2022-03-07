import imageProduct1 from '../assets/images/image-product-1.jpg'
import imageProduct2 from '../assets/images/image-product-2.jpg'
import imageProduct3 from '../assets/images/image-product-3.jpg'
import imageProduct4 from '../assets/images/image-product-4.jpg'
/* thumbnails */
import thumbnail1 from '../assets/images/image-product-1-thumbnail.jpg'
import thumbnail2 from '../assets/images/image-product-2-thumbnail.jpg'
import thumbnail3 from '../assets/images/image-product-3-thumbnail.jpg'
import thumbnail4 from '../assets/images/image-product-4-thumbnail.jpg'

const allImages = [
  {
    img: imageProduct1,
    thumb: thumbnail1
  },
  {
    img: imageProduct2,
    thumb: thumbnail2
  },
  {
    img: imageProduct3,
    thumb: thumbnail3
  },
  {
    img: imageProduct4,
    thumb: thumbnail4
  }
]

const product = {
  company: 'SNEAKER COMPANY',
  name: 'Fall Limited Edition Sneakers',
  description: `These low-profile sneakers are your perfect casual wear companion.
    Featuring a durable rubber outer sole, they’ll withstand everything
    the weather can offer.`,
  price: 250,
  percent: 50,
  images: allImages,
  units: 10
}

export { allImages, product }
