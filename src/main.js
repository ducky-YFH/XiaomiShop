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

(function (win) {
  var remCalc = {}
  var docEl = win.document.documentElement,
    tid
  function refreshRem() {
    var width = docEl.getBoundingClientRect().width
    if (width > 750) {
      width = 750
    }
    var rem = width / 10
    docEl.style.fontSize = rem + "px"
    remCalc.rem = rem
    var actualSize = parseFloat(window.getComputedStyle(document.documentElement)["font-size"])
    if (actualSize !== rem && actualSize > 0 && Math.abs(actualSize - rem) > 1) {
      var remScaled = rem * rem / actualSize
      docEl.style.fontSize = remScaled + "px"
    }
  }

  function dbcRefresh() {
    clearTimeout(tid)
    tid = setTimeout(refreshRem, 100)
  }
  win.addEventListener("resize", function () {
    dbcRefresh()
  }, false)
  win.addEventListener("pageshow", function (e) {
    if (e.persisted) {
      dbcRefresh()
    }
  }, false)
  refreshRem()
  remCalc.refreshRem = refreshRem
  remCalc.rem2px = function (d) {
    var val = parseFloat(d) * this.rem
    if (typeof d === "string" && d.match(/rem$/)) {
      val += "px"
    }
    return val
  }
  remCalc.px2rem = function (d) {
    var val = parseFloat(d) / this.rem
    if (typeof d === "string" && d.match(/px$/)) {
      val += "rem"
    }
    return val
  }
  win.remCalc = remCalc
})(window)

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
Vue.use(VueAwesomeSwiper)
Vue.use(Toast)

Vue.prototype.$axios = axios


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
