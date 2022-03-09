import Header from '../components/Header'
import { AppProvider } from '../context'

const Layout = ({ children }) => {
  return (
    <AppProvider>
      <Header />
      {children}
    </AppProvider>
  )
}

export default Layout
