import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes.js'
import Toasted from 'vue-toasted'

// fontawesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

const ToastedOptions = {
  position: 'bottom-center',
  duration: 4000,
  theme: 'toasted-primary'
}
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})
Vue.use(Toasted, ToastedOptions)


library.add(fas);
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueRouter);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: router,
}).$mount('#app')
