import { render } from 'react-dom'
import { StrictMode } from 'react'

import './styles/main.css'
import App from './routes'
import { BrowserRouter } from 'react-router-dom'

render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('app')
)
