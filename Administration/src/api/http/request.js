/**
 * Created by Hzz on 2020/4/30.
 * http配置
 */

import axios from 'axios'

// import store from './store/store'
// import * as types from './store/types'
import router from '../../router'

// axios 配置
axios.defaults.timeout = 5 * 1000
axios.defaults.baseURL = '/'

// http request 拦截器
axios.interceptors.request.use(
  config => {
    // 判断是否存在token，是否登录
    // if (store.state.token) {
    //   config.headers.Authorization = `token ${store.state.token}`
    // }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.state === 202) {
      // alert('请先登陆！')
      // router.currentRoute.path !== 'login' &&
      //   router.replace({
      //     path: '/',
      //     query: { redirect: router.currentRoute.path }
      //   })
      return response.data
    }
    return response.data
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 200:
          // 401 清除token信息并跳转到登录页面

          // store.commit(types.LOGOUT)

          // 只有在当前路由不是登录页面才跳转
          router.currentRoute.path !== 'login' &&
            router.replace({
              path: 'login',
              query: { redirect: router.currentRoute.path }
            })
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data)
  }
)

export default axios
