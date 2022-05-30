import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

import 'amfe-flexible'
import 'amfe-flexible/index.js'

import './mock/index.js'

import '@/assets/font/iconfont'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

