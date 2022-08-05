import Navbar from './templates/components/Navbar'

import './assets/css/theme.css'
import './assets/css/spacing.css'
import './assets/css/common.css'
import './assets/css/typography.css'
import './assets/css/app.css'
import CustomPopUpModalProvider from './hooksAndProviders/CustomPopUpModalProvider'

import AuthContextProvider from './hooksAndProviders/AuthContextProvider'
import NavigationRoutes from './NavigationRoutes'
import CartContextProvider from './hooksAndProviders/CartContextProvider'
function App () {
  return (
    <AuthContextProvider>
      <CartContextProvider>
      <CustomPopUpModalProvider>
        
          <Navbar>
            <NavigationRoutes />
          </Navbar>
        
      </CustomPopUpModalProvider>
      </CartContextProvider>
    </AuthContextProvider>
  )
}

export default App
