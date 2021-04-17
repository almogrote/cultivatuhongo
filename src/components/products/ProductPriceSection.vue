<template>
  <div class="mt-1">
    <p class="has-text-danger-dark has-text-weight-medium">{{ price }} €</p>
    <p class="has-text-weight-light is-size-6 mt-1">
      <span v-if="hasStock(stock)" class="has-text-success-dark">Recíbelo mañana - en stock</span>
      <span v-else class="has-text-danger-dark">Sin stock</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProductPriceSection',
  props: ['stock', 'price'],
  methods: {
    hasStock (stock) {
      return stock > 0
    }
  }
}
</script>

<style>
</style>
