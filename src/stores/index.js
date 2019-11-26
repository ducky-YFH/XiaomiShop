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
      if (item.name == goodsInfo.name && item.color == goodsInfo.color) {
        let sum = state.cart[index].count + goodsInfo.count
        let max = state.cart[index].ver.max
        if (sum >= max) {
          state.cart[index].count = max
        } else {
          state.cart[index].count += goodsInfo.count
        }
        // window.console.log(state.cart[index])
        return true
      }
    })
    if (!flag) {
      // 添加check用来再购物车哪里筛选的
      goodsInfo.checked = true
      state.cart.unshift(goodsInfo)
    }
  },
  // 减少数量
  [types.ADD_COUNT](state, index) {
    state.cart[index].count += 1
  },
  // 增加数量
  [types.MINUS_COUNT](state, index) {
    state.cart[index].count -= 1
  },
  // 删除单个
  [types.DEL_ONE](state, index) {
    state.cart.splice(index, 1)
  },
  // 标记选中商品
  [types.TO_CHECK](state, index) {
    state.cart[index].checked = !state.cart[index].checked
  },
  // 删除选中
  [types.DEL_CHECK](state) {
    state.cart = state.cart.filter((item) => {
      if (!item.checked) {
        return item
      }
    })
    window.console.log(state.cart)
  },
  // 全选
  // eslint-disable-next-line no-unused-vars
  [types.CHECK_ALL](state) {
    let every = state.cart.every(item => {
      return item.checked == true
    })
    state.cart.forEach(item => {
      item.checked = true
    })
    if (every) {
      state.cart.forEach(item => {
        item.checked = false
      })
    }
  }
}

const actions = {
  addCart({ commit }, value) {
    commit(types.ADD_CART, value)
  },
  addCount({ commit }, value) {
    commit(types.ADD_COUNT, value)
  },
  minusCount({ commit }, value) {
    commit(types.MINUS_COUNT, value)
  },
  delOne({ commit }, index) {
    commit(types.DEL_ONE, index)
  },
  toCheck({ commit }, index) {
    commit(types.TO_CHECK, index)
  },
  delCheck({ commit }) {
    commit(types.DEL_CHECK)
  },
  checkAll({ commit }) {
    commit(types.CHECK_ALL)
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