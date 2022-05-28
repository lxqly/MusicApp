import Vue from 'vue'
import App from './App.vue'

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)

import 'amfe-flexible'
import 'amfe-flexible/index.js'

import './mock/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

