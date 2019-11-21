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
      children: [
        {
          name: '',
          path: '',
          component: () => import('@/components/Me/main')
        },
        {
          name: 'set',
          path: 'set',
          component: () => import('@/components/Me/setting')
        }
      ]
    },
    {
      name: 'cart',
      path: '/cart',
      component: () => import('@/components/Cart')
    },
    {
      name: 'address',
      path: '/address',
      component: () =>  import('@/components/Address'),
      children: [
        {
          name: 'editAddr',
          path: 'editAddr',
          component: () => import('@/components/Address/editAddr')
        },
        {
          name: 'list',
          path: 'list',
          component: () => import('@/components/Address/list')
        },
      ]
    },
    {
      name: 'comment',
      path: '/comment',
      redirect: '/index',
      component: () => import('@/components/Comment'),
      children: [
        {
          path: 'view',
          name: 'view',
          component: () => import('@/components/Comment/view')
        },
        {
          path: 'list',
          name: 'list',
          component: () => import("@/components/Comment/list")
        }
      ]
    },
    {
      name: 'search',
      path: '/search',
      component: () => import('@/components/Search')
    },
    {
      path: "*",
      redirect: '/index'
    },
  ]
})

export default router