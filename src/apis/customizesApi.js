import axios from 'axios'
import { getHeaders } from '../helpers/helper'

import apiUrl from './apiUrl'
import { resetToken } from './authApis'

export const createCustomizesApi = async data => {
    return await axios({
      url: apiUrl.customizesCreate,
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
            return await createCustomizesApi(data)
          })
        }
        return err.response.data
      })
  }

  export const getcustomizesApi = async params => {
    return await axios({
      url: apiUrl.customizesget,
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
            return await getcustomizesApi(params)
          })
        }
        return err.response.data
      })
  }
  