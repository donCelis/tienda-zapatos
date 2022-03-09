import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from '../components/Product'
import Layout from '../layout'
import Collections from '../pages/Collections'

const Paths = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Collections titlePage='All sneakers' />} />
          <Route path='/product' element={<Product />} />
          <Route
            path='/men'
            element={<Collections titlePage='Men' category='men' />}
          />
          <Route
            path='/women'
            element={<Collections titlePage='Women' category='women' />}
          />
          <Route path='*' element={<p>Page not found</p>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
export default Paths
