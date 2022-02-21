import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import SvgIcon from 'vue-svgicon'

Vue.config.productionTip = false

Vue.use(SvgIcon, {
  tagName: 'svgicon'
})

new Vue({
  render: h => h(App)
}).$mount('#app')
