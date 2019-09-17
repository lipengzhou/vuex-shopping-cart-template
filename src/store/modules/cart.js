/**
 * 购物车数据容器
 */
const state = {
  message: 'cart message',
  cartProducts: [
    // { 'id': 1, 'title': 'iPad 40 Mini', 'price': 500.01, isChecked: false, count: 1 },
    // { 'id': 2, 'title': 'H&M T-Shirt White', 'price': 10.99, isChecked: false, count: 2 },
    // { 'id': 3, 'title': 'Charli XCX - Sucker CD', 'price': 19.99, isChecked: false, count: 3 }
  ]
}

const getters = {
  allCartProductsCount (state) {
    let count = 0
    state.cartProducts.forEach(item => {
      count += item.count
    })
    return count
  },

  allCartProductsPrice (state) {
    let price = 0
    state.cartProducts.forEach(item => {
      price += (item.count * item.price)
    })
    return price
  }
}

const mutations = {
  addToCart (state, product) {
    // find 会遍历数组，找到符合 item.id === product.id 条件的元素并返回
    const prod = state.cartProducts.find(function (item, index) {
      return item.id === product.id
    })

    // 如果该商品已存在，则让购物车中的这个商品的数量+1
    if (prod) {
      prod.count++
    } else {
      // 如果不存在，则新增一个商品到购物车列表
      state.cartProducts.push({
        ...product,
        isChecked: true,
        count: 1
      })
    }
  },

  deleteProduct (state, product) {
    const index = state.cartProducts.findIndex(item => item.id === product.id)
    index !== -1 && state.cartProducts.splice(index, 1)
    // if (index !== -1) {
    //   state.cartProducts.splice(索引, 1)
    // }
  },

  /**
   * 更新商品的选中状态
   * 注意：mutation 只能接收一个参数，多个参数放到一个对象中
   */
  updateProductChecked (state, data) {
    data.product.isChecked = data.checked
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
