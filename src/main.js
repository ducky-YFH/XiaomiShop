import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router'
import { Swipe, SwipeItem } from 'vant'
import { Grid, GridItem } from 'vant'
import { Lazyload } from 'vant'
import { AddressList } from 'vant'
import { AddressEdit } from 'vant'
import NavBar from '@/components/NavBar'
import { Icon } from 'vant'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import BackTop from './components/BackTop'
import { Checkbox, CheckboxGroup } from 'vant'
import { Search } from 'vant'
import { Field } from 'vant'
import axios from './assets/http/http'
import store from './stores'
import { Toast } from 'vant'
import Loading from './components/Loading/index'
import CartNav from './components/CartNav'

Vue.use(CartNav)
Vue.use(Loading)
Vue.use(Field)
Vue.use(Search)
Vue.use(Checkbox).use(CheckboxGroup)
Vue.use(BackTop)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Grid).use(GridItem)
Vue.use(Lazyload, {
  loading: require('./assets/images/loading.gif'),
  error: require('./assets/images/error.jpg'),
})
Vue.use(AddressList)
Vue.use(AddressEdit)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.use(Toast)

Vue.prototype.$axios = axios


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
