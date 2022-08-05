export const roles = {
  NORMAL_USER: '2',
  MERCHENT_USER: '1',
  ADMIN_USER: '0'
}
export const accessToken = {
  getToken: () => {
    return localStorage.getItem('node_access_token')
  },
  setToken: token => {
    localStorage.setItem('node_access_token', token)
  },
  removeToken: () => {
    localStorage.removeItem('node_access_token')
  }
}
export const refreshToken = {
  getToken: () => {
    return localStorage.getItem('node_refresh_token')
  },
  setToken: token => {
    localStorage.setItem('node_refresh_token', token)
  },
  removeToken: () => {
    localStorage.removeItem('node_refresh_token')
  }
}

export const nodeSignOut = () => {
  refreshToken.removeToken()
  accessToken.removeToken()
}
export const getHeaders = () => {
  return {
    Authorization: `Bearer ${accessToken.getToken()}`
  }
}
export const isEmail = val => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val.trim())
}
export const dateConverter = ({ type, value }) => {
  if (type ==='DD_MM_YYYY') {
    const dateObj = new Date(value)
    return (
      setZeroPrefix(dateObj.getDate()) +
      '/' +
      setZeroPrefix(dateObj.getMonth() + 1) +
      '/' +
      dateObj.getFullYear()
    )
  }
  if (type === 'YYYY_MM_DD') {
    const dateObj = new Date(value)
    return (
      dateObj.getFullYear() +
      '/' +
      setZeroPrefix(dateObj.getMonth() + 1) +
      '/' +
      setZeroPrefix(dateObj.getDate())
    )
  }
}
export const gateDateAfterdays = no_of_day => {
  const todaystime = new Date().getTime()
  const after_day_date = new Date(
    todaystime + 1000 * 60 * 60 * 24 * parseInt(no_of_day)
  )
  const minDateInstance = new Date(after_day_date)
  
  return (
    minDateInstance.getFullYear() +
    '-' +
    setZeroPrefix(minDateInstance.getMonth() + 1) +
    '-' +
    setZeroPrefix(minDateInstance.getDate())
  )
}

export function setZeroPrefix (val) {
  if (parseInt(val) < 10) {
    return '0' + val
  }
  return val
}
