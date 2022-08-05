import { createContext, useEffect, useState } from 'react'
import { getUserByToken } from '../apis/authApis'
import { accessToken, nodeSignOut, refreshToken } from '../helpers/helper'
import Loader from '../templates/components/Loader'

export const AuthContext = createContext({
  isSignedIn: false,
  user: {},
  signIn: data => {},
  signOut: () => {}
})

const AuthContextProvider = ({ children }) => {
  const defaultAuth = {
    isSignedIn: false,
    user: {}
  }

  const [loading, setLoading] = useState(true)
  const [auth, setAuth] = useState(defaultAuth)
  const fetchUser = async () => {
    if (accessToken.getToken()) {
      setLoading(true)

      const response = await getUserByToken()
      if (response.status == 1) {
        setAuth({ ...auth, isSignedIn: true, user: response.data })
      } else {
        nodeSignOut()
      }
    }
    setLoading(false)
  }
  useEffect(() => {
    
    fetchUser()
  }, [])
  const signIn = data => {
    accessToken.setToken(data.accessToken)
    refreshToken.setToken(data.refreshToken)
    setAuth({ ...auth, isSignedIn: true, user: data })
  }
  const signOut = () => {
    nodeSignOut()
    setAuth({ ...auth, isSignedIn: false, user: {} })
  }
  if (loading)
    return (
      <div className='full-width df center'>
        <Loader />
      </div>
    )
  return (
    <AuthContext.Provider value={{ ...auth, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider
