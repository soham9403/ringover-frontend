import { fetchCartApi } from '../apis/productApi'
import { AuthContext } from './AuthContextProvider'

const { useContext, createContext, useEffect, useState } = require('react')

export const cartContext = createContext({
  loading: false,
  data: {},
  addToCart: item => {},
  onOrderCreate: id => {},
  removeFromCart: item => {}
})
const CartContextProvider = ({ children }) => {
  const auth = useContext(AuthContext)
  const [loading, setLoading] = useState(false)
  const [cart, setCart] = useState({})

  const fetchCart = async () => {
    if (auth.isSignedIn) {
      setLoading(true)
      const response = await fetchCartApi()

      if (response.status == '1') {
        const data = response.data
        const cartInfo = {}
        if (data && Array.isArray(data)) {
          data.forEach((item, index) => {
            if (item.status == 'in_cart') {
              if(!cartInfo['current']){
                cartInfo['current'] = []
              }
             
              cartInfo['current'].push(item)
            }
            if (item.status == 'ordered') {
              if (!cartInfo['ordered']) {
                cartInfo['ordered'] = {}
              }
              if (!cartInfo['ordered'][item.cart_id]) {
                cartInfo['ordered'][item.cart_id] = []
              }
              cartInfo['ordered'][item.cart_id].push(item)
            }
          })

          setCart(
            Object.keys(cartInfo)
              .sort()
              .reduce((obj, key) => {
                obj[key] = cartInfo[key]
                return obj
              }, {})
          )
        }
      } else {
        alert(response.message)
      }
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchCart()
  }, [auth.isSignedIn])

  const addToCart = product => {
    const cartInstance = { ...cart }
    if (!cartInstance['current']) {
      cartInstance['current'] = []
    }
    cartInstance['current'].push(product)

    setCart(
      Object.keys(cartInstance)
        .sort()
        .reduce((obj, key) => {
          obj[key] = cartInstance[key]
          return obj
        }, {})
    )
  }
  const onOrderCreate = (id) => {
    
    const cartInstance = { ...cart }
    const currentcart = cartInstance['current']

    cartInstance['current'] = []
    if (!cartInstance['ordered']) {
      cartInstance['ordered'] = {}
    }
    cartInstance['ordered'][id] = currentcart

    setCart(
      Object.keys(cartInstance)
        .sort()
        .reduce((obj, key) => {
          obj[key] = cartInstance[key]
          return obj
        }, {})
    )
  }
  const removeFromCart = item => {
    const cartInstance = { ...cart }
    let i = 0
    if (cartInstance['current']) {
      for (let row of cartInstance['current']) {
        if (row.cart_product_id == item.cart_product_id) {
          break
        }
        i++
      }
      cartInstance['current'].splice(i, 1)
    }

    setCart(cartInstance)
  }
  return (
    <>
      <cartContext.Provider
        value={{
          data: cart,
          loading,
          addToCart,
          onOrderCreate,
          removeFromCart,
          
        }}
      >
        {children}
      </cartContext.Provider>
    </>
  )
}
export default CartContextProvider
