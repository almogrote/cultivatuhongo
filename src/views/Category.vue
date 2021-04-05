<template>
  <section class="section">
    <div class="container" v-if="category">
      <div class="columns is-multiline">
        <div class="column is-one-quarter">
          <!--Category view checkbox-->
          <FilterCheckox />
        </div>
        <div class="column">
          <!--Category info-->
          <h1 class="title">{{ category.data.name }}</h1>
          <p>{{ category.data.description }}</p>
          <hr />
          <div class="level">
            <b-dropdown aria-role="list">
              <template #trigger="{ active }">
                <b-button label="Ordenar por" type="is-dark is-rounded is-small" :icon-right="active ? 'caret-up' : 'caret-down'" />
              </template>
              <b-dropdown-item aria-role="listitem" @click="sortHighest()">Precio: Más caros primero</b-dropdown-item>
              <b-dropdown-item aria-role="listitem" @click="sortLowest()">Precio: Más baratos primero</b-dropdown-item>
              <b-dropdown-item aria-role="listitem">Ofertas</b-dropdown-item>
            </b-dropdown>
          </div>
          <!-- Products -->
          <div class="columns is-multiline is-mobile" v-if="products">
            <ProductGrid v-for="(product, index) in products" :key="index" :product="product" />
          </div>
        </div>
      </div>
    </div>
    <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="false"></b-loading>
  </section>
</template>

<script>
import ProductGrid from '../components/products/ProductGrid.vue'
import FilterCheckox from '../components/products/FilterCheckbox.vue'
export default {
  name: 'Category',
  components: {
    ProductGrid,
    FilterCheckox
  },
  data () {
    return {
      category_id: this.$route.params.category_id,
      category: null,
      products: null,
      isLoading: true
    }
  },
  created () {
    this.getCategory()
    this.getCategoryProducts()
  },
  methods: {
    getCategory () {
      fetch(`/.netlify/functions/get-category/${this.category_id}`)
        .then((response) => response.json())
        .then((data) => {
          this.category = data
        })
        .catch((error) => console.log(error))
    },
    getCategoryProducts () {
      fetch(`/.netlify/functions/get-category-products/${this.category_id}`)
        .then((response) => response.json())
        .then((data) => {
          this.products = data.data
          console.log(this.products)
          this.isLoading = false
        })
        .catch((error) => console.log(error))
    },
    sortLowest () {
      this.products.sort((a, b) => (a.data.price > b.data.price ? 0 : -1))
    },
    sortHighest () {
      this.products.sort((a, b) => (a.data.price < b.data.price ? 0 : -1))
    }
  }
}
</script>

<style>
</style>
