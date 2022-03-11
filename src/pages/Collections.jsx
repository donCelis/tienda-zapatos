import { useEffect, useState } from 'react'
import '../styles/components/collections.css'
import GridProducts from '../components/GridProducts'
import { Link, useParams } from 'react-router-dom'
import { useProductCtx } from '../context'

const Collections = ({ titlePage = '' }) => {
  const { category } = useParams()
  const { allProducts } = useProductCtx()
  const [filterCategory, setFilterCategory] = useState([])

  useEffect(() => {
    category
      ? setFilterCategory(
          allProducts.filter((item) => item.category === category)
        )
      : setFilterCategory(allProducts)
  }, [category])

  return (
    <section className='collections'>
      <h2 className='section-title'>{category || titlePage}</h2>
      <div className='row-grid'>
        {filterCategory.map((item, index) => (
          <Link
            key={index}
            to={
              category
                ? `/${category}/${item.id}`
                : `/product/${item.id}`
            }
          >
            <GridProducts {...item} />
          </Link>
        ))}
      </div>
    </section>
  )
}
export default Collections
