import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

import Index from '@/views/Index'
import Hello from '@/views/Hello'
import BlogList from '@/views/BlogList'
import Blog from '@/views/Blog'

import SayHi from '@/views/SayHi'
import SayHiFromVariable from '@/views/SayHiFromVariable'

import TwoWayBinding from '@/views/TwoWayBinding'
import FormInput from '@/views/FormInput'
import FormSubmit from '@/views/FormSubmit'

import SayHiFromMixin from '@/views/SayHiFromMixin'

import ShowCounter1 from '@/views/ShowCounter1'
import ShowCounter2 from '@/views/ShowCounter2'


const routes = [
    {
      path: '/',
      name: 'Index',
      component: Index
    },

    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/say_hi',
      name: 'SayHi',
      component: SayHi
    },

    {
      path: '/say_hi_from_variable',
      name: 'SayHiFromVariable',
      component: SayHiFromVariable
    },
    {
      path: '/blogs',
      name: 'BlogList',
      component: BlogList
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Blog
    },

    {
      path: '/two_way_binding',
      name: 'TwoWayBinding',
      component: TwoWayBinding
    },

    {
      path: '/form_input',
      name: 'FormInput',
      component: FormInput
    },
    {
      path: '/form_submit',
      name: 'FormSubmit',
      component: FormSubmit
    },
    {
      path: '/say_hi_from_mixin',
      name: 'SayHiFromMixin',
      component: SayHiFromMixin
    },
    {
      path: '/show_counter_1',
      name: 'ShowCounter1',
      component: ShowCounter1
    },
    {
      path: '/show_counter_2',
      name: 'ShowCounter2',
      component: ShowCounter2
    },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
