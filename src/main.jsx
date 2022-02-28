import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import Loading from './components/Loading'
import Header from './components/Header'

import './styles/main.css'
import { ContextProvider } from './context'

const Product = lazy(() => import('./components/Product'))

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Header />
      <Suspense fallback={<Loading />}>
        <Product />
      </Suspense>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('app')
)
