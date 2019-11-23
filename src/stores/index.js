import Vue from 'vue'
import Vuex from 'vuex'
import types from './types'
Vue.use(Vuex)


const state = {
  cart: [],
}

const mutations = {
  // 添加到购物车
  [types.ADD_CART](state, goodsInfo) {
    // 做判断是否有重复的，如果有重复的就往里面追加数量就行了
    let flag = state.cart.some((item, index) => {
      if(item.name == goodsInfo.name && item.color == goodsInfo.color){
        let sum = state.cart[index].count + goodsInfo.count
        let max = state.cart[index].ver.max
        if(sum >= max){
          state.cart[index].count = max 
        }else{
          state.cart[index].count += goodsInfo.count
        }
        window.console.log(state.cart[index])
        return true
      }
    })
    if(!flag){
      // 添加check用来再购物车哪里筛选的
      goodsInfo.checked = false
      state.cart.unshift(goodsInfo)
    }
  },
  // 减少数量
  [types.ADD_COUNT](state, index){
    state.cart[index].count += 1
  },
  // 增加数量
  [types.MINUS_COUNT](state, index){
    state.cart[index].count -= 1
  }
}

const actions = {
  addCart({ commit }, value) {
    commit(types.ADD_CART, value)
  },
  addCount({ commit }, value){
    commit(types.ADD_COUNT, value)
  },
  minusCount({commit}, value){
    commit(types.MINUS_COUNT, value)
  }
}
const getters = {
  cart(state) {
    return state.cart
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})  