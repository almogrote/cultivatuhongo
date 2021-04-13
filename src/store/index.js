import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productsCart: []
  },
  mutations: {
    setProducts (state, product) {
      const productExists = state.productsCart.findIndex(currentValue => currentValue.price_id === product.price_id)
      if (!productExists) {
        state.productsCart[productExists].quantity += product.quantity
      } else {
        state.productsCart.push(product)
      }
    }
  },
  actions: {
    addProductToCart (context, product) {
      context.commit('setProducts', product)
    }
  },
  getters: {
    productsCart: state => state.productsCart
  },
  modules: {
  }
})
