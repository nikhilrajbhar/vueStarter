/* eslint-disable */

import Vue from 'vue'
import {createWebHistory, createRouter} from 'vue-router'
import HelloWorld from './components/HelloWorld'
import profile from './components/profile'
import login from './components/login'

const routes = [
  {
    name:'HelloWorld',
    path:"/",
    component: HelloWorld
  },
  {
    name:'login',
    path:"/login",
    component: login
  },
  {
    name:'profile',
    path:"/profile",
    component: profile
  },
]

const router = createRouter({
  history:createWebHistory(),
  routes
})
export default router;
