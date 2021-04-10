<template>
  <section class="section has-text-centered">
    <div class="container">
      <h2 class="title mb-6">Principales categorías</h2>
      <div class="columns is-full">
        <div class="columns is-multiline is-mobile" v-if="category">
          <CategoryGrid v-for="(category, index) in this.category.data" :key="index" :category="category" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CategoryGrid from '../category/CategoryGrid.vue'
export default {
  name: 'MainCategory',
  components: {
    CategoryGrid
  },
  data () {
    return {
      category: null,
      isLoading: true,
      products: null
    }
  },
  created () {
    this.getCategory()
  },
  methods: {
    getCategory () {
      fetch(`/.netlify/functions/get-categories.js/${this.category_id}`)
        .then((response) => response.json())
        .then((data) => {
          this.category = data
          this.isLoading = false
        })
        .catch((error) => console.log(error))
    }
  },
  computed: {
    categories () {
      return this.category
    }
  }
}
</script>

<style>
</style>
