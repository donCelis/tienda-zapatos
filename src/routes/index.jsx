import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../layout'
import Collections from '../pages/Collections'
import Product from '../components/Product'

const Paths = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Collections titlePage='All sneakers' />} />
          <Route path='product/' element={<Product />} />
          <Route
            path='/men'
            element={<Collections titlePage='Men' category='men' />}
          />
          <Route
            path='/women'
            element={<Collections titlePage='Women' category='women' />}
          />
          <Route path='*' element={<p>There's nothing here!</p>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
export default Paths
