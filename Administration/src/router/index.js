import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import { getCookie, setCookie } from '../utils/aqi'
import store from '../store/index'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

// 封装添加路由
const addRout = (name) => {
  router.addRoutes([
    {
      path: `/${name}`,
      name: name,
      component: () => import(`../views/${name}.vue`)
    }
  ])
}
// 通过后端动态加路由
router.beforeEach((to, from, next) => {
  let rout = to.matched.length || 0
  console.log(store.state)
  next()
  // if (JSON.parse(getCookie('isAddRoute')) === true || rout === 0) {
  //   setCookie('isAddRoute', false)
  //   let name = JSON.parse(getCookie('key'))
  //   Object.keys(name).forEach(key => {// console.log(key, name[key])
  //     switch (key) {
  //       case 'name':
  //         addRout('Admin')
  //         break
  //       case 'name1':
  //         addRout('New')
  //         break
  //       case 'name2':
  //         addRout('NumberRecord')
  //         break
  //       case 'name3':
  //         addRout('Organization')
  //         break
  //       case 'name4':
  //         addRout('WorkJournal')
  //         break
  //     }
  //   })
  // }
  // rout === 0 ? next('/TaskInformation') : next()
  // if (to.matched.some(record => record.meta.requiresAuth)) {
  //   // this route requires auth, check if logged in
  //   // if not, redirect to login page.
  //   if (!record.meta.requiresAuth) {
  //     next({
  //       path: '/login',
  //       query: { redirect: to.fullPath }
  //     })
  //   } else {
  //     next()
  //   }
  // } else {
  //   next()
  // }
})
export default router
