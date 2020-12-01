// 请求管理
import axios from '../http/index'

// get请求
export const get = (url) => {
  return axios.get(url).then(data => {
    return Promise.resolve(data)
  })
}

// post请求
export const post = (url, params) => {
  return axios.post(url, params).then(data => {
    return Promise.resolve(data)
  })
}
