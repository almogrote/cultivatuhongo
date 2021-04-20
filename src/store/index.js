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
      if (productExists >= 0) {
        state.productsCart[productExists].quantity += product.quantity
      } else {
        state.productsCart.push(product)
      }
      localStorage.setItem('cart', JSON.stringify(state.productsCart))
    },
    clearProductsCart (state) {
      state.productsCart = []
      localStorage.setItem('cart', JSON.stringify(state.productsCart))
    },
    addItemProduct (state, itemId) {
      state.productsCart[itemId].quantity += 1
      localStorage.setItem('cart', JSON.stringify(state.productsCart))
    },
    removeItemProduct (state, itemId) {
      if (state.productsCart[itemId].quantity === 1) {
        state.productsCart.splice(itemId, 1)
      } else {
        state.productsCart[itemId].quantity -= 1
      }
      localStorage.setItem('cart', JSON.stringify(state.productsCart))
    }
  },
  actions: {
    addProductToCart (context, product) {
      context.commit('setProducts', product)
    },
    addItemProduct (context, itemId) {
      context.commit('addItemProduct', itemId)
    },
    removeItemProduct (context, itemId) {
      context.commit('removeItemProduct', itemId)
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
