import { getHeaders } from "../helpers/helper"
import apiUrl from "./apiUrl"
import { resetToken } from "./authApis"
import axios from 'axios'
export const getColorsApi = async () => {
  return await axios({
    url: apiUrl.colors,
    method: 'GET',
    headers: getHeaders(),
    
  })
    .then(res => {
      if (res.data.status == 1) return res.data
      else return
    })
    .catch(async err => {
       
      if (err.response.status == 401) {
        return await resetToken(async () => {
          return await getColorsApi()
        })
      }
      return err.response.data
    })
}
