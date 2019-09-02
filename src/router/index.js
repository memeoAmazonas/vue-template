import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Login from '@/views/Login'
import SendBtc from '@/views/SendBtc'
import SendDash from '@/views/SendDash'
import Register from '@/views/Register'
import ReceiveBtc from '@/views/ReceiveBtc'
import ReceiveDash from '@/views/ReceiveDash'
import Transactions from '@/views/Transactions'
import TransactionDetail from '@/views/TransactionDetail'
import RestorePassword from '@/views/RestorePassword'

Vue.use(Router)
export const router = new Router({
  routes: [
    {
      name: 'login',
      path: '/',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
      component: Home
    },
    {
      name: 'register',
      path: '/register',
      component: Register
    },
    {
      name: 'receiveBtc',
      path: '/btc/receive',
      component: ReceiveBtc
    },
    {
      name: 'btcSend',
      path: '/btc/send',
      component: SendBtc
    },
    {
      name: 'receiveDash',
      path: '/dash/receive',
      component: ReceiveDash
    },
    {
      name: 'dashSend',
      path: '/dash/send',
      component: SendDash
    },
    {
      name: 'transaction',
      path: '/transaction',
      component: Transactions
    },
    {
      name: 'transactionDetail',
      path: '/transaction/detail',
      component: TransactionDetail
    },
    {
      name: 'restorePassword',
      path: '/restore-password',
      component: RestorePassword
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
