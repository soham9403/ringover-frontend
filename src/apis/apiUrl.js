// import dotenv from 'dotenv'
// dotenv.config()
const mode = process.env.REACT_APP_MODE

let domainUrl = ''
switch (mode) {
  case 'local':
    domainUrl = 'http://localhost:8000'
    break
  case 'heroku':
    domainUrl = 'https://ringover-backend.herokuapp.com'
    break
  default:
    domainUrl = 'http://localhost:8000'
}


export default {
  baseUrl: domainUrl,
  user: domainUrl + '/api/app/user',
  signIn: domainUrl + '/api/auth/sign-in',
  signUp: domainUrl + '/api/auth/sign-up',
  reset_token: domainUrl + '/api/auth/reset-token',
  colors: domainUrl + '/api/app/color',
  categories: domainUrl + '/api/app/categories',
  customizesget: domainUrl + '/api/app/get-customizes',
  productcreate: domainUrl + '/api/app/create-product',
  productget: domainUrl + '/api/app/get-product',
  getproductList: domainUrl + '/api/app/get-product-list',
  getproductDetails: domainUrl + '/api/app/get-product-details',
  customizesCreate: domainUrl + '/api/app/create-customize',
  rating: domainUrl + '/api/app/rate',
  cart: domainUrl + '/api/app/cart',
  order: domainUrl + '/api/app/order'
}
