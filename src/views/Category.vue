<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Category</h1>
      <button @click="getCategory" class="button is-primary is-rounded">Get Category</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Category',
  data () {
    return {
      category_id: this.$route.params.category_id
    }
  },
  methods: {
    getCategory () {
      // fetch(`/.netlify/functions/get-category/${this.category_id}`)
      // fetch('/.netlify/functions/get-categories')
      // fetch(`/.netlify/functions/get-product/${this.category_id}`)
      // fetch(`/.netlify/functions/get-category-products/${this.category_id}`)
      fetch('/.netlify/functions/get-featured-products')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }
  }
}
</script>

<style>

</style>
