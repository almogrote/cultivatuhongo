<template>
  <div class="column is-one-third-tablet is-half-mobile">
    <router-link
      :to="{ path: `/product/${product.data.id}` }"
      class="is-flex is-flex-direction-column">
      <b-image
        :src="require('@/assets/logo.png')"
        :alt="product.data.name"
        ratio="16by9" />
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
  }
}
</script>

<style>

</style>
