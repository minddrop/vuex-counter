import Vue from 'vue'
import store from './store/store'
import App from './App.vue'

// eslint-disable-next-line
const app = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
