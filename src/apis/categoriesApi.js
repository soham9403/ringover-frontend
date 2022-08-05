import { getHeaders } from "../helpers/helper"
import apiUrl from "./apiUrl"
import { resetToken } from "./authApis"
import axios from 'axios'
export const getCategories = async (params) => {
  return await axios({
    url: apiUrl.categories,
    method: 'GET',
    headers: getHeaders(),
    params
  })
    .then(res => {
      if (res.data.status == 1) return res.data
      else return
    })
    .catch(async err => {
       
      if (err.response.status == 401) {
        return await resetToken(async () => {
          return await getCategories(params)
        })
      }
      return err.response.data
    })
}
