import Header from '../components/Header'
import { AppProvider } from '../context'

const Layout = ({ children }) => {
  return (
    <AppProvider>
      <Header />
      <main className='container'>
        {children}
      </main>
    </AppProvider>
  )
}

export default Layout
