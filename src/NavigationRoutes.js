import { Route, Routes, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import ContactUs from './templates/pages/contactus/Contactus'
import Team from './templates/pages/team/Team'
import Journey from './templates/pages/journey/Journy'
import ProductListController from './controllers/product/ProductListController'


import { AuthContext } from './hooksAndProviders/AuthContextProvider'

import CreateProductController from './controllers/admin/product/CreateProductController'
import ListProductController from './controllers/admin/product/ListProductController'
import { roles } from './helpers/helper'
import CreateCustomizesController from './controllers/admin/customizes/CreateCustomizesController'
import CategoryListController from './controllers/product/CategoryListController'
import ProductDetailsController from './controllers/product/ProductDetailsController'
import Homepage from './templates/pages/home/Homepage'
import ListCustomizesController from './controllers/admin/customizes/ListCustomizesController'

import ListOrdersController from './controllers/admin/orders/ListOrdersController'
const NavigationRoutes = () => {
  const auth = useContext(AuthContext)
  return (
    <Routes>
      <Route path='/' element={<Homepage />}></Route>
      <Route path='/contact' element={<ContactUs />} />
      <Route path='/team' element={<Team />} />
      <Route path='/journey' element={<Journey />} />
      <Route path='/store'>
        <Route path='' element={<CategoryListController />} />
        <Route path=':category_slug' element={<ProductListController />} />
        <Route path=':category_slug/:product_slug' element={<ProductDetailsController />} />
      </Route>
      {auth.isSignedIn && auth.user.role === roles.MERCHENT_USER && (
        <Route path='/admin'>
          <Route path='create-product' element={<CreateProductController />} />
          <Route path='get-product' element={<ListProductController />} />
          <Route
            path='create-customizes'
            element={<CreateCustomizesController />}
          />
          <Route
            path='get-customizes'
            element={<ListCustomizesController />}
          />
           <Route
            path='orders'
            element={<ListOrdersController />}
          />
        </Route>
      )}
      <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>
  )
}
export default NavigationRoutes
