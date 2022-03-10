import { useState, useEffect } from 'react'
import '../styles/components/collections.css'
import { products } from '../data'
import GridProducts from '../components/GridProducts'

const Collections = ({ category = '', titlePage }) => {
  const [filterCategory, setFilterCategory] = useState([])

  useEffect(() => {
    category
      ? setFilterCategory(products.filter((item) => item.category === category))
      : setFilterCategory(products)
  }, [category])

  return (
    <section className='collections'>
      <div className='container'>
        <h2 className='section-title'>{titlePage}</h2>
      </div>
      <div className='container row-grid'>
        {filterCategory.map((item, index) =>
          <GridProducts key={index} {...item} />
        )}
      </div>
    </section>
  )
}
export default Collections
