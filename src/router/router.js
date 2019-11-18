import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  linkActiveClass: 'link-active',
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      name: 'index',
      path: '/index',
      component: () => import('@/components/Index')
    },
    {
      name: 'category',
      path: '/category',
      component: () => import('@/components/Category')
    },
    {
      name: 'detail',
      path: '/detail',
      component: () => import('@/components/Detail'),
    },
    {
      name: 'me',
      path: '/me',
      component: () => import('@/components/Me'),
      children:[
        {
          path: 'editAddr',
          name: 'editAddr',
          component: () => import('@/components/Me/editAddr')
        }
      ]
    },
    {
      path: "*",
      redirect: '/index'
    },
  ]
})

export default router