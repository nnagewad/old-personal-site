import Vue from 'vue'
import App from './App.vue'
import VueScrollTo from 'vue-scrollto'
import VueScrollReveal from 'vue-scroll-reveal'

Vue.use(VueScrollTo, {
  easing: "ease",
  duration: 750
})

Vue.use(VueScrollReveal, {
  scale: 1,
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
