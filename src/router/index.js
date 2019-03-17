import Vue from 'vue'
import Router from 'vue-router'
import renderPage from '@/views/renderPage'
import loginPage from '@/views/loginPage'
import modelPage from '@/views/modelPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/models',
      component: modelPage
    },
    {
      path: '/render',
      component: renderPage
    },
    {
      path: '/',
      name: 'login',
      component: loginPage
    },
  ]
})
