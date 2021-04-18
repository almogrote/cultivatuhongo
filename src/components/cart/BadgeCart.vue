<template>
  <span class="tag is-danger has-text-weight-bold">{{ productCount }}</span>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BadgeCart',
  computed: {
    ...mapGetters(['productsCart']),
    productCount () {
      return this.productsCart.reduce((acc, prod) => acc + prod.quantity, 0)
    }
  }
}
</script>
