import { NavLink } from 'react-router-dom'
import { useProductCtx } from '../context'
/* styles */
import '../styles/components/header.css'
/* images */
import logoStore from '../assets/images/logo.svg'
import iconCart from '../assets/images/icon-cart.svg'
import avatar from '../assets/images/image-avatar.png'
/* components */
import StoreMenu from './StoreMenu'

const Header = () => {
  const { handleStoreMenu, store } = useProductCtx()

  const navLinks = [
    { uri: 'Collections', path: '/' },
    { uri: 'Men', path: '/men' },
    { uri: 'Women', path: '/women' },
    { uri: 'About', path: '/about' },
    { uri: 'Contact', path: '/contact' }
  ]
  return (
    <header>
      <div className='container row'>
        <menu className='row'>
          <h1 className='logo-store'>
            <img src={logoStore} alt='La mejor tienda de zapatos' />
          </h1>
          <ul className='row main-menu'>
            {navLinks.map(({ uri, path }, index) => (
              <li key={index}>
                <NavLink to={path}>{uri}</NavLink>
              </li>
            ))}
          </ul>
        </menu>
        <nav className='row second-menu'>
          <button className='btn btn-cart' onClick={() => handleStoreMenu()}>
            {store.length !== 0 && (
              <p className='counter-store'>{store.length}</p>
            )}
            <img src={iconCart} alt='Carrito de compras' />
          </button>
          <StoreMenu />
          <button className='btn btn-profile'>
            <img className='img-fluid' src={avatar} alt='Foto de perfil' />
          </button>
        </nav>
      </div>
    </header>
  )
}
export default Header
