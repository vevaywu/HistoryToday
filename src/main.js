import Vue from 'vue'
import App from './App'
import Fly from 'flyio/dist/npm/wx'

Vue.config.productionTip = false
Vue.prototype.$http = new Fly()
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
