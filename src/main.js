import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import fastclick from 'fastclick'
import 'common/stylus/index.styl'
import router from './router'
import VueLazyLoad from 'vue-lazyload'

fastclick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require('common/image/logo.jpg')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
