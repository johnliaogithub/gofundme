import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import New from '../views/New.vue'
import Covid19page from '../views/Covid19page.vue'
import Funddetail from '../views/Funddetail.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sign-up',
    name: 'signup',
    component: Signup
  },
  {
    path: '/new',
    name: 'new',
    component: New
  },
  {
    path: '/fund/:id',
    name: 'funddetail',
    component: Funddetail
  },
  {
	path: '/Covid19page',
	name: 'covid19page',
	component: Covid19page
  },
  {
    path: '/Search/:searched',
    name: 'Search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Search.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
