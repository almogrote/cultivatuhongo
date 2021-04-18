
<template>
  <div class="has-text-right">
    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
      @loading="v => loading = v"
    />
    <button class="button is-dark is-rounded" @click="submit">Pagar ahora!</button>
  </div>
</template>

<script>
import { StripeCheckout } from '@vue-stripe/vue-stripe'
import { mapGetters } from 'vuex'
export default {
  props: {
    items: {
      type: []
    }
  },
  components: {
    StripeCheckout
  },
  data () {
    this.publishableKey = 'pk_test_51IeONwA15852FpvpRSxErXRD3BYMJaDQow10OSS9zKa1E5shjmi6heeIQl79XAlIUz8IthBaxlVx4jtJJFnhp7TL00gzlTyZJ5'
    return {
      loading: false,
      lineItems: [],
      successURL: 'https://shop.cultivatuhongo.com/success/',
      cancelURL: 'https://shop.cultivatuhongo.com/canceled/'
    }
  },
  methods: {
    submit () {
      this.lineItems = this.productsCheckout
      this.$refs.checkoutRef.redirectToCheckout()
    }
  },
  computed: {
    productsCheckout () {
      return this.productsCart.map(product => { return { price: product.price_id, quantity: product.quantity } })
    },
    ...mapGetters(['productsCart'])
  }
}
</script>
