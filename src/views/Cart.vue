<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Carrito</h1>
      <div class="columns" v-if="productsCart.length > 0">
        <div class="column is-9">
          <div class="columns" v-for="(item, index) in productsCart" :key="index">
            <div class="column is-3">
              <b-image
                :src="`https://raw.githubusercontent.com/almogrote/images/main${item.image}`"
                ratio="16by9"
              ></b-image>
            </div>
            <div class="column is-4">
              <div class="has-background-light p-4 h-100">
                <h3 class="title is-4">Producto</h3>
                <p>{{ item.name }}</p>
              </div>
            </div>
            <div class="column is-3">
              <div class="has-background-light p-4 h-100">
                <h3 class="title is-4">Cantidad</h3>
                <div class="columns is-align-items-center">
                  <div class="column is-5">
                    <p class="is-size-5 has-text-danger-dark has-text-weight-light">{{ item.amount }} €</p>
                  </div>
                  <div class="column is-flex is-align-items-center is-justify-content-space-between">
                    <button type="button" class="button is-primary" @click="removeItemProduct(index)"><b-icon pack="fas" icon="minus" /></button>
                    <p>{{ item.quantity }}</p>
                    <button type="button" class="button is-primary" @click="addItemProduct(index)"><b-icon pack="fas" icon="plus" /></button>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-2">
              <div class="has-background-light p-4 h-100">
                <h3 class="title is-4">Total</h3>
                <p class="is-size-5 has-text-danger-dark has-text-weight-light">
                  {{
                    totalProductPrice(item.quantity, item.amount).toFixed(2)
                  }}€
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div class="is-flex is-justify-content-flex-end">
            <button class="button is-dark is-rounded" @click="clearCart">Vaciar carrito</button>
          </div>
        </div>
        <div class="column is-3">
          <div class="content has-background-light p-4">
            <ul>
              <li>Promoción inaugural, todos los pedidos con envío gratuito</li>
              <li>Garantía de germinación siguiendo los pasos recomendados</li>
            </ul>
            <hr class="cart-separator" />
            <p class="title has-text-centered">
              Total:
              <span class="has-text-weight-light has-text-danger-dark is-size-3"
                >{{ cartTotal.toFixed(2) }} €</span
              >
            </p>
            <StripeCheckout />
          </div>
        </div>
      </div>
      <div v-else class="content">
        <p class="has-text-centered is-size-3">
          El carrito se encuentra vacío.
          <br />
          <b-button class="mt-5" tag="router-link" to="/" type="is-primary">
            Volver a la tienda
          </b-button>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import StripeCheckout from '../components/cart/StripeCheckout.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Cart',
  components: {
    StripeCheckout
  },
  methods: {
    totalProductPrice (quantity, amount) {
      return quantity * amount
    },
    ...mapActions(['clearCart', 'addItemProduct', 'removeItemProduct'])
  },
  computed: {
    ...mapGetters(['productsCart', 'cartTotal'])
  }
}
</script>

<style>
.h-100 {
  height: 100%;
}
.cart-separator {
  background-color: #dedede;
}
</style>
