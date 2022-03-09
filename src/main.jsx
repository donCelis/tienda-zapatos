import { render } from 'react-dom'
import { StrictMode } from 'react'

import './styles/main.css'
import Paths from './routes'

render(
  <StrictMode>
    <Paths />
  </StrictMode>,
  document.getElementById('app')
)
