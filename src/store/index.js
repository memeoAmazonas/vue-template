import Vue from 'vue'
import Vuex from 'vuex'

import { alert } from './alert.module'
import vueHeadful from 'vue-headful'
import { authentication } from './authentication.module'

Vue.use(Vuex)
Vue.component('vue-headful', vueHeadful)

export const store = new Vuex.Store({
  modules: {
    alert,
    authentication
  }
})
