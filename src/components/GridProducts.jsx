import useDiscount from '../hooks/useDiscount'

const GridProducts = ({ name, images, price, percent }) => {
  const { valueProduct, finalValue } = useDiscount(price, percent)
  return (
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
  )
}
export default GridProducts
