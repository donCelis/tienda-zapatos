import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import Loading from './components/Loading'
import Header from './components/Header'

import './styles/main.css'
import { AppProvider } from './context'

const Product = lazy(() => import('./components/Product'))

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Header />
      <Suspense fallback={<Loading />}>
        <Product />
      </Suspense>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('app')
)
