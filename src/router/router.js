import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  linkActiveClass: 'link-active',
  mode: 'history',
  // base: process.env.BASE_URL,
  base: 'dhsphone',
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
      path: '/detail/:id',
      component: () => import('@/components/Detail'),
      meta: {
        keepAlive: true,
      }
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
      component: () => import('@/components/Address'),
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
          path: 'view/:cid',
          name: 'view',
          component: () => import('@/components/Comment/view')
        },
        {
          path: 'list/:id',
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
      name: 'state',
      path: '/state',
      redirect: '/index',
      component: () => import('@/components/State'),
      children: [
        {
          name: 'login',
          path: 'login',
          component: () => import('@/components/State/login')
        },
        {
          name: 'reg',
          path: 'reg',
          component: () => import('@/components/State/reg')
        },
        {
          name: 'findpass',
          path: 'findpass',
          component: () => import('@/components/State/findPass')
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