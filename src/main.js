import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import SvgIcon from 'vue-svgicon'
import store from './store'

Vue.config.productionTip = false

Vue.use(SvgIcon, {
  tagName: 'svgicon'
})

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
