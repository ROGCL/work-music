import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import router from '@/router/index'
import axios from '@/axios/index'

Vue.prototype.$http = axios
Vue.use(Vant)
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
