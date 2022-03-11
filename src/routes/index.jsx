import { useRoutes } from 'react-router-dom'
import Layout from '../layout'
import Collections from '../pages/Collections'
import Product from '../components/Product'

const Paths = () => [
  {
    path: '/',
    element: <Collections titlePage='All sneakers' />
  },
  {
    path: '/men',
    element: <Collections category='men' titlePage='Men' />
  },
  {
    path: '/men/product/:id',
    element: <Product />
  },
  {
    path: '/women',
    element: <Collections category='women' titlePage='Women' />
  },
  {
    path: '/women/product/:id',
    element: <Product />
  },
  {
    path: '*',
    element: (
      <section className='container'>
        <p className='text-center'>Page not found</p>
      </section>
    )
  }
]

const App = () => {
  const routing = useRoutes(Paths())
  return (
    <>
      <Layout>{routing}</Layout>
    </>
  )
}
export default App
