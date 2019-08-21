// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {router} from './router/index'
import {store} from './store'
// import { mapState, mapActions } from 'vuex'

import Notifications from 'vue-notification'
import BoostrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(BoostrapVue)
Vue.use(Notifications)
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
