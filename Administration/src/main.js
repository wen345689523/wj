import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './components'
import El from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/reset.css'
import '../public/utf8-php/ueditor.config'
import '../public/utf8-php/ueditor.all.min'
import '../public/utf8-php/lang/zh-cn/zh-cn'
import '../public/utf8-php/ueditor.parse.min'
import '../public/utf8-php/themes/default/css/ueditor.min.css'

Vue.use(El)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
