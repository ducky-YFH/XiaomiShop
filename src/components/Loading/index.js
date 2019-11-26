import Vue from 'vue'
import loadingComponent from './loading.vue'

const LoadingConstructor = Vue.extend(loadingComponent)

const loadingInstance = new LoadingConstructor({
  el: document.createElement('div')
})

loadingInstance.show = false // 默认隐藏

// loading 对象
const loading = {
  show() { // 显示方法
    loadingInstance.show = true
    document.body.appendChild(loadingInstance.$el)
  },
  hide() { // 隐藏方法
    loadingInstance.show = false
  }
}

export default {
  install() {
    if (!Vue.$loading) {
      Vue.$loading = loading
    }
    Vue.mixin({
      created() {
        this.$loading = Vue.$loading
      }
    })
  }
}