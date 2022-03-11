import { useRoutes } from 'react-router-dom'
import Layout from '../layout'
import Collections from '../pages/Collections'
// import Product from '../components/Product'

const Paths = () => [
  {
    path: '/',
    element: <Collections Collections titlePage='All sneakers' />
  },
  {
    path: ':category',
    element: <Collections />
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
