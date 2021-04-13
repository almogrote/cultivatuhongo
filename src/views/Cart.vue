<template>
  <section class="section">
    <div class="container">
      <div class="columns" v-for="item in productsCart" :key="item.id">
        <div class="column is-3">{{ item.name }}</div>
        <div class="column is-2">{{ item.quantity }}</div>
        <div class="column is-2">{{ totalPrice(item.quantity, item.amount).toFixed(2) }}€</div>
      </div>
    </div>
    <StripeCheckout />
  </section>
</template>

<script>
import StripeCheckout from '../components/cart/StripeCheckout.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  components: {
    StripeCheckout
  },
  methods: {
    totalPrice (quantity, amount) {
      return quantity * amount
    }
  },
  computed: {
    ...mapGetters(['productsCart'])
  }
}
</script>

<style>

</style>
