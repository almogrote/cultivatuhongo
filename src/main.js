import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@fortawesome/fontawesome-free/css/all.css'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultLocale: 'es',
  defaultFirstDayOfWeek: 1
})

Vue.use(VueAnalytics, {
  id: 'UA-194304307-1',
  autoTracking: {
    screenview: true
  },
  debug: {
    enabled: true,
    trace: true,
    sendHitTask: true
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
