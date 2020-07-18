import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './components'
import El from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/reset.css'

Vue.use(El)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
