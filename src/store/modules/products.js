import axios from 'axios'

/**
 * 商品列表容器
 */
const state = {
  message: 'products message',
  allProducts: [
    // { 'id': 1, 'title': 'iPad 4 Mini', 'price': 500.01 },
    // { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99 },
    // { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99 }
  ] // 存储所有的商品列表
}

const getters = {}

const mutations = {
  setAllProducts (state, data) {
    // 4. 修改 state
    state.allProducts = data

    // 5. state 改变，驱动视图更新
  }
}

const actions = {
  // 2. 执行异步操作
  async getAllProducts (context) {
    const { data } = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/products'
    })

    // 3. 提交 mutation
    context.commit('setAllProducts', data)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
