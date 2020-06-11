/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Account from '../components/account'
import Login from '../components/login'
import store from '../store'
import Posts from '../components/posts';
import Debug from '../components/debug';
import About from '../components/about';

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts,
      beforeEnter: ifAuthenticated,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      beforeEnter: ifNotAuthenticated,
    },
    {
      path: '/documentation',
      name: 'Documentation',
      component: () => import('@/components/documentation/index.vue'),
    },
    {
      path: '/debug',
      name: 'debug',
      component: Debug,
      beforeEnter: ifAuthenticated,
      children: [
        {
          path: 'endpoints',
          name: 'endpoints',
          component: () => import('@/components/debug/ApiEndpoints.vue'),
        },
        {
          path: 'links',
          name: 'links',
          component: () => import('@/components/debug/DebugLinks.vue'),
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      children: [
        {
          path: '',
          name: 'about-general',
          component: () => import('@/components/about/General.vue'),
        },
        {
          path: 'technologies',
          name: 'technologies',
          component: () => import('@/components/about/Technologies.vue'),
        },
        {
          path: 'architecture',
          name: 'architecture',
          component: () => import('@/components/about/Architecture.vue'),
        }
      ]
    }
  ],
})
