import { products } from '../data'

const Men = () => {
  const filterMen = products.filter((item) => item.category === 'men')
  return (
    <section className='container'>
      {filterMen.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </section>
  )
}
export default Men
