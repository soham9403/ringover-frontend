import axios from 'axios'
import { getHeaders, nodeSignOut, refreshToken,accessToken } from '../helpers/helper'


import apiUrl from './apiUrl'


export const getUserByToken = async () => {
  return await axios({
    url: apiUrl.user,
    method: 'GET',
    headers: getHeaders()
  })
    .then(res => {
      if (res.data.status == 1) return res.data
      else return
    })
    .catch(async err => {
       
      if (err.response.status == '401') {
        return await resetToken(async () => {
          return await getUserByToken()
        })
      }
      return err.response.data
    })
}

export const signInApi = async (data) => {
  return await axios({
    url: apiUrl.signIn,
    method: 'POST',
    data:data
  })
    .then(res => {
      if (res.data.status == 1) return res.data
      else return
    })
    .catch(err => {
      return err.response.data
    })
}
export const signUpApi = async (data) => {
  return await axios({
    url: apiUrl.signUp,
    method: 'POST',
    data:data
  })
    .then(res => {
      if (res.data.status == 1) return res.data
      else return
    })
    .catch(err => {
      return err.response.data
    })
}



export const resetToken = async (callBack = async () => {}, isNormalUser) => {
  return await axios({
    url: apiUrl.reset_token,
    method: 'post',
    headers: getHeaders(),
    data: {
      refreshToken:  refreshToken.getToken()
    }
  })
    .then(async res => {
      
        accessToken.setToken(res.data.data.accessToken)
        refreshToken.setToken(res.data.data.refreshToken)
      return await callBack()
    })
    .catch(err => {
      if (err.response.status === 401) {
        nodeSignOut()
        window.location.reload()
      }
      return err.response.data
    })
}
