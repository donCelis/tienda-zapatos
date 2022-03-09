import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from '../components/Product'
import Layout from '../layout'
import Collections from '../pages/Collections'

const Paths = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Collections />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
export default Paths
