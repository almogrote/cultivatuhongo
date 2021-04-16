<template>
  <div class="column is-one-third-tablet is-half-mobile"  @click="clickProd">
    <router-link :to="{ path: `/product/${product.data.id}` }" class="is-flex is-flex-direction-column">
      <b-image :src="`https://raw.githubusercontent.com/almogrote/images/main${product.data.image[0]}`" :alt="product.data.name" ratio="16by9" />
      <h4 class="has-text-black has-text-weight-light mt-2">{{ product.data.name }}</h4>
      <ProductPriceSection :price="product.data.price" :stock="product.data.stock" />
    </router-link>
  </div>
</template>

<script>
import ProductPriceSection from './ProductPriceSection.vue'
export default {
  name: 'ProductGrid',
  props: ['product'],
  components: {
    ProductPriceSection
  },
  methods: {
    track () {
      this.$ga.page('/category')
      this.$ga.page('/product')
      this.$ga.page('/home')
    },
    clickProd: function () {
      this.$ga.event('product', this.product.data.name)
    }
  },
  beforeMount () {
    this.track()
  }
}
</script>

<style>

</style>
