import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Login from '@/views/Login'
import SendBtc from '@/views/SendBtc'
import Register from '@/views/Register'
import RetirementBtc from '@/views/RetirementBtc'
import Transactions from '@/views/Transactions'
import TransactionDetail from '@/views/TransactionDetail'

Vue.use(Router)
export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/btc/retirement',
      name: 'retirementBtc',
      component: RetirementBtc
    },
    {
      path: '/btc/send',
      name: 'btcSend',
      component: SendBtc
    },
    {
      path: '/transaction',
      name: 'transaction',
      component: Transactions
    },
    {
      path: '/transaction/detail',
      name: 'transactionDetail',
      component: TransactionDetail
    }
  ]
})

/* router.beforeEach((to, from, next) => {
  const publicPages = ['/', 'register']
  const autRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user')
  if (autRequired && !loggedIn) {
    return next('/')
  }
}) */
