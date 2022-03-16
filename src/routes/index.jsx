import { useRoutes } from 'react-router-dom'
import Layout from '../layout'
import Collections from '../pages/Collections'
import Product from '../components/Product'
import { Modal } from '../components/Modal'

const Paths = () => [
  {
    path: '/',
    element: <Collections titlePage='All sneakers' />
  },
  {
    path: ':category',
    element: <Collections />
  },
  {
    path: ':category/:id',
    element: <Product />
  },
  {
    path: 'product/:id',
    element: <Product />
  },
  {
    path: 'portal',
    element: <Modal />
  },
  {
    path: '*',
    element: (
      <section style={{ textAlign: 'center' }}>
        <p>Page not found</p>
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
