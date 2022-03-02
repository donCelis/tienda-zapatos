import { Suspense, useContext } from 'react'
import { ProductContext } from '../context'
import '../styles/components/header.css'
/* images */
import logoStore from '../assets/images/logo.svg'
import iconCart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
/* components */
import Loading from './Loading'
import StoreMenu from './StoreMenu'

const Header = () => {
  const { showAdd, handleStoreMenu, store } = useContext(ProductContext)

  const navLinks = ['Collections', 'Men', 'Women', 'About', 'Contact']
  return (
    <header>
      <div className='container row'>
        <menu className='row'>
          <h1 className='logo-store'>
            <img src={logoStore} alt='La mejor tienda de zapatos' />
          </h1>
          <ul className='row main-menu'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href='#'>{link}</a>
              </li>
            ))}
          </ul>
        </menu>
        <nav className='row second-menu'>
          <Suspense fallback={<Loading />}>
            <button className='btn btn-cart' onClick={() => handleStoreMenu()}>
              {store.length > 0 && <p className='counter-store'>{store.length}</p>}
              <img src={iconCart} alt='Carrito de compras' />
            </button>
          </Suspense>
          <button className='btn btn-profile'>
            <img className='img-fluid' src={avatar} alt='Foto de perfil' />
          </button>
          {showAdd && <StoreMenu />}
        </nav>
      </div>
    </header>
  )
}
export default Header
