import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import VueMeta from 'vue-meta'
// import 'buefy/dist/buefy.css'
import '@/assets/styles/bulma.scss'
import '@fortawesome/fontawesome-free/css/all.css'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

Vue.use(VueMeta, {
  // optional pluginOptions
  refreshOnceOnNavigation: true
})

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
    enabled: false,
    trace: true,
    sendHitTask: true
  }
})
new Vue({
  router,
  store,
  render: h => h(App),
  mounted: () => document.dispatchEvent(new Event('x-app-rendered'))
}).$mount('#app')
