import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import Loading from './components/Loading'
import Header from './components/Header'

import './styles/main.css'

const Product = lazy(() => import('./components/Product'))

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Suspense fallback={<Loading />}>
      <Product />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
