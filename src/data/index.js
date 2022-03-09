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

const products = [
  {
    company: 'SNEAKER COMPANY',
    name: 'Fall Limited Edition Sneakers 1',
    description: `These low-profile sneakers are your perfect casual wear companion.
    Featuring a durable rubber outer sole, they’ll withstand everything
    the weather can offer.`,
    price: 110,
    percent: 20,
    images: allImages,
    units: 1,
    category: 'men'
  },
  {
    company: 'SNEAKER COMPANY',
    name: 'Fall Limited Edition Sneakers 2',
    description: `These low-profile sneakers are your perfect casual wear companion.
    Featuring a durable rubber outer sole, they’ll withstand everything
    the weather can offer.`,
    price: 320,
    percent: 15,
    images: allImages,
    units: 2,
    category: 'women'
  },
  {
    company: 'SNEAKER COMPANY',
    name: 'Fall Limited Edition Sneakers 3',
    description: `These low-profile sneakers are your perfect casual wear companion.
    Featuring a durable rubber outer sole, they’ll withstand everything
    the weather can offer.`,
    price: 150,
    percent: 10,
    images: allImages,
    units: 3,
    category: 'men'
  },
  {
    company: 'SNEAKER COMPANY',
    name: 'Fall Limited Edition Sneakers 4',
    description: `These low-profile sneakers are your perfect casual wear companion.
    Featuring a durable rubber outer sole, they’ll withstand everything
    the weather can offer.`,
    price: 110,
    percent: 70,
    images: allImages,
    units: 4,
    category: 'women'
  },
  {
    company: 'SNEAKER COMPANY',
    name: 'Fall Limited Edition Sneakers 5',
    description: `These low-profile sneakers are your perfect casual wear companion.
    Featuring a durable rubber outer sole, they’ll withstand everything
    the weather can offer.`,
    price: 250,
    percent: 50,
    images: allImages,
    units: 5,
    category: 'men'
  },
  {
    company: 'SNEAKER COMPANY',
    name: 'Fall Limited Edition Sneakers 6',
    description: `These low-profile sneakers are your perfect casual wear companion.
    Featuring a durable rubber outer sole, they’ll withstand everything
    the weather can offer.`,
    price: 250,
    percent: 50,
    images: allImages,
    units: 6,
    category: 'women'
  },
  {
    company: 'SNEAKER COMPANY',
    name: 'Fall Limited Edition Sneakers 7',
    description: `These low-profile sneakers are your perfect casual wear companion.
    Featuring a durable rubber outer sole, they’ll withstand everything
    the weather can offer.`,
    price: 250,
    percent: 50,
    images: allImages,
    units: 7,
    category: 'men'
  },
  {
    company: 'SNEAKER COMPANY',
    name: 'Fall Limited Edition Sneakers 8',
    description: `These low-profile sneakers are your perfect casual wear companion.
    Featuring a durable rubber outer sole, they’ll withstand everything
    the weather can offer.`,
    price: 250,
    percent: 50,
    images: allImages,
    units: 8,
    category: 'women'
  }
]

export { allImages, product, products }
