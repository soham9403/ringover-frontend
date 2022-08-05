import axios from 'axios'
import { getHeaders } from '../helpers/helper'

import apiUrl from './apiUrl'
import { resetToken } from './authApis'

export const createProductApi = async data => {
  return await axios({
    url: apiUrl.productcreate,
    method: 'POST',
    headers: { 'content-type': 'multipart/form-data', ...getHeaders() },
    data
  })
    .then(res => {
      if (res.data.status == 1) return res.data
      else return
    })
    .catch(async err => {
       
      if (err.response.status == '401') {
        return await resetToken(async () => {
          return await createProductApi(data)
        })
      }
      return err.response.data
    })
}
export const getProductApi = async params => {
  return await axios({
    url: apiUrl.productget,
    method: 'GET',
    headers:getHeaders(),
    params
  })
    .then(res => {
      if (res.data.status == 1) return res.data
      else return
    })
    .catch(async err => {
       
      if (err.response.status == '401') {
        return await resetToken(async () => {
          return await getProductApi(params)
        })
      }
      return err.response.data
    })
}
export const getProductBySlugApi = async params => {
  return await axios({
    url: apiUrl.getproductList,
    method: 'GET',
    headers:getHeaders(),
    params
  })
    .then(res => {
      if (res.data.status == 1) return res.data
      else return
    })
    .catch(async err => {
      //  
      // if (err.response.status == '401') {
      //   return await resetToken(async () => {
      //     return await getProductBySlugApi(params)
      //   })
      // }
      return err.response.data
    })
}

export const getProductDetailsBySlugApi = async params => {
  return await axios({
    url: apiUrl.getproductDetails,
    method: 'GET',
    headers:getHeaders(),
    params
  })
    .then(res => {
      if (res.data.status == 1) return res.data
      else return
    })
    .catch(async err => {
      
      
      return err.response.data
    })
}


export const rateProductApi = async data => {
  return await axios({
    url: apiUrl.rating,
    method: 'POST',
    headers: getHeaders(),
    data
  })
    .then(res => {
      if (res.data.status == 1) return res.data
      else return
    })
    .catch(async err => {
       
      if (err.response.status == '401') {
        return await resetToken(async () => {
          return await rateProductApi(data)
        })
      }
      return err.response.data
    })
}

export const createCartApi = async data => {
  return await axios({
    url: apiUrl.cart,
    method: 'POST',
    headers: getHeaders(),
    data
  })
    .then(res => {
      if (res.data.status == 1) return res.data
      else return
    })
    .catch(async err => {
       
      if (err.response.status == '401') {
        return await resetToken(async () => {
          return await createCartApi(data)
        })
      }
      return err.response.data
    })
}
export const fetchCartApi = async () => {
  return await axios({
    url: apiUrl.cart,
    method: 'GET',
    headers: getHeaders(),
    
  })
    .then(res => {
      if (res.data.status == 1) return res.data
      else return
    })
    .catch(async err => {
       
      if (err.response.status == '401') {
        return await resetToken(async () => {
          return await fetchCartApi()
        })
      }
      return err.response.data
    })
}
export const deleteCartApi = async (data) => {
  return await axios({
    url: apiUrl.cart,
    method: 'DELETE',
    headers: getHeaders(),
    data
  })
    .then(res => {
      if (res.data.status == 1) return res.data
      else return
    })
    .catch(async err => {
       
      if (err.response.status == '401') {
        return await resetToken(async () => {
          return await deleteCartApi(data)
        })
      }
      return err.response.data
    })
}
export const createOrderApi = async data => {
  return await axios({
    url: apiUrl.order,
    method: 'POST',
    headers: getHeaders(),
    data
  })
    .then(res => {
      if (res.data.status == 1) return res.data
      else return
    })
    .catch(async err => {
       
      if (err.response.status == '401') {
        return await resetToken(async () => {
          return await createCartApi(data)
        })
      }
      return err.response.data
    })
}
export const fetchOrdersApi = async () => {
  return await axios({
    url: apiUrl.order,
    method: 'GET',
    headers: getHeaders(),
    
  })
    .then(res => {
      if (res.data.status == 1) return res.data
      else return
    })
    .catch(async err => {
       
      if (err.response.status == '401') {
        return await resetToken(async () => {
          return await fetchOrdersApi()
        })
      }
      return err.response.data
    })
}