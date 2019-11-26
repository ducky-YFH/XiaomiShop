import axios from 'axios'
import Vue from 'vue'

// 请求拦截
axios.interceptors.request.use(config => {
  window.console.log("我发起请求啦")
  Vue.$loading.show()
  return config
}, error => {
  window.console.log(error)
})

// 响应拦截
axios.interceptors.response.use(response => {
  Vue.$loading.hide()
  window.console.log("我接收到数据啦")
  return response
}, error => {
  setTimeout(()=>{
    window.console.log('获取不到数据',error)
    Vue.$loading.hide()
  },1000)
})

export default axios
