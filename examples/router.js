import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { title: 'Example', icon: 'example' },
      component: Home,
      children: [{
        path: 'home2',
        name: 'home2',
        meta: { title: 'Example2', icon: 'example2' },
        component: Home
      },
      {
        path: 'home3',
        name: 'home3',
        meta: { title: 'Example3', icon: 'example3' },
        component: Home
      }]
    },
    {
      path: '/about',
      name: 'about',
      meta: { title: 'Example', icon: 'example' },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
