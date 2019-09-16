import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Trade from './views/Trade.vue'
import Quote from './views/Quote.vue'
import Contact from './views/Contact.vue'
import Todo from './views/Todo.vue'
import Surround from './views/Surround.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: About
    },
    {
      path: '/trade',
      name: 'trade',
      component: Trade
    },
    {
      path: '/quote',
      name: 'quote',
      component: Quote
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/surround',
      name: 'surround',
      component: Surround
    }
  ]
})
