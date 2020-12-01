// 储存公用api数据
import { post, get } from '../../../api/home'

const module = {
  state: {
    user_info: {}
  },
  mutations: {
    userInfo (state, url) {
      get(url).then(req => {
        state.user_info = req
        console.log(111, req)
      })
    }
  },
  actions: {
    addUser ({ commit }, name) {
      return commit('userInfo', '/api/blog/userinfo')
    }
  },
  getters: {
  }
}
export default module
