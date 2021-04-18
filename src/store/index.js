import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productsCart: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  },
  mutations: {
    setProducts (state, product) {
      const productExists = state.productsCart.findIndex(currentValue => currentValue.price_id === product.price_id)
      if (!productExists) {
        state.productsCart[productExists].quantity += product.quantity
      } else {
        state.productsCart.push(product)
      }
      localStorage.setItem('cart', JSON.stringify(state.productsCart))
    },
    clearProductsCart (state) {
      state.productsCart = []
      localStorage.setItem('cart', JSON.stringify(state.productsCart))
    }
  },
  actions: {
    addProductToCart (context, product) {
      context.commit('setProducts', product)
    },
    clearCart (context) {
      context.commit('clearProductsCart')
    }
  },
  getters: {
    productsCart: state => state.productsCart,
    cartTotal: state => state.productsCart.reduce((acc, prod) => acc + (prod.quantity * prod.amount), 0)
  },
  modules: {
  }
})
