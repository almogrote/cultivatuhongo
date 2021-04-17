<template>
  <section class="section">
    <div class="container" v-if="category">
      <div class="columns is-multiline">
        <div class="column is-one-quarter">
          <!--Category view checkbox-->
          <template>
                        <div class="container">
              <aside class="menu">
                <div class="is-menu-checkbox has-background-light is-1 pt-4 pb-4 pl-2 pr-2">
                  <p class="menu-label has-text-centered">Productos por precio</p>
                  <ul class="menu-list">
                    <li class="has-text-centered">{{range}}€</li>
                    <li class="has-text-centered"><label><input type="range" v-model="range" min="0" max="450" step="1" /></label></li>
                  </ul>

                  <p class="menu-label has-text-centered">Stock</p>
                  <ul class="menu-list">
                    <li li class="pl-5"><label><input type="radio" v-model="filterStock" :value="0"/> Sin Stock</label></li>
                    <li li class="pl-5"><label><input type="radio" v-model="filterStock" :value="10000"/> Con Stock</label></li>
                    <li li class="pl-5"><label><input type="radio" v-model="filterStock" :value="100000"/> Todos</label></li>
                  </ul>

                  <p class="menu-label has-text-centered">Ofertas</p>
                  <ul class="menu-list">
                    <li class="pl-5"><label><input type="radio" v-model="filterOffers" :value="0"/> Sin ofertas</label></li>
                    <li class="pl-5"><label><input type="radio" v-model="filterOffers" :value="10000"/> Con Ofertas</label></li>
                    <li class="pl-5"><label><input type="radio" v-model="filterOffers" :value="100000"/> Todos</label></li>
                  </ul>
                </div>
              </aside>
            </div>
          </template>
        </div>
        <div class="column">
          <!--Category info-->
          <h1 class="is-size-2 has-text-weight-bold">{{ category.data.name }}</h1>
          <p>{{ category.data.description }}</p>
          <hr />
          <div class="level">
            <b-dropdown class="mb-1" aria-role="list">
              <template #trigger="{ active }">
                <b-button label="Ordenar por" type="is-primary is-rounded is-small" :icon-right="active ? 'caret-up' : 'caret-down'" />
              </template>
              <b-dropdown-item aria-role="listitem" @click="filterBySortHighest">Precio: Más caros primero</b-dropdown-item>
              <b-dropdown-item aria-role="listitem" @click="filterBySortLowest">Precio: Más baratos primero</b-dropdown-item>
            </b-dropdown>
          </div>
          <!-- Products -->
          <div class="columns is-multiline is-mobile" v-if="products">
            <ProductGrid v-for="(product, index) in filterProducts" :key="index" :product="product"  />
          </div>
        </div>
      </div>
    </div>
    <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="false"></b-loading>
  </section>
</template>

<script>
import ProductGrid from '../components/products/ProductGrid.vue'
export default {
  name: 'Category',
  components: {
    ProductGrid
  },
  data () {
    return {
      category_slug: this.$route.params.slug,
      category: '',
      name: '',
      products: null,
      isLoading: true,
      range: 450,
      filterStock: 1000000,
      filterOffers: 1000000
    }
  },
  created () {
    this.getCategory()
  },
  methods: {
    getCategory () {
      fetch(`/.netlify/functions/get-category-by-slug/${this.category_slug}`)
        .then((response) => response.json())
        .then((data) => {
          this.category = data
          this.getCategoryProducts(this.category.data.id)
        })
        .catch((error) => console.log(error))
    },
    getCategoryProducts (catgoryId) {
      fetch(`/.netlify/functions/get-category-products/${catgoryId}`)
        .then((response) => response.json())
        .then((data) => {
          this.products = data.data
          this.isLoading = false
        })
        .catch((error) => console.log(error))
    },
    filterBySortLowest () {
      return this.products.sort((a, b) => (a.data.price > b.data.price))
    },
    filterBySortHighest () {
      return this.products.sort((a, b) => (a.data.price < b.data.price))
    },
    filterProductsByStock: function (products) {
      return products.filter(product => this.filterStock === 0 ? (product.data.stock === 0) : this.filterStock === 10000 ? product.data.stock > 0 : product.data.stock >= 0)
    },
    filterProductsByOffers: function (products) {
      return products.filter(product => this.filterOffers === 0 ? (product.data.offers === 0) : this.filterOffers === 10000 ? product.data.offers > 0 : product.data.offers >= 0)
    },
    filterProductsByRange: function (products) {
      return products.filter(product => (product.data.price > 0 && product.data.price < this.range) ? product : '')
    }
  },
  computed: {
    filterProducts: function () {
      return this.filterProductsByStock(this.filterProductsByOffers(this.filterProductsByRange(this.products)))
    }
  }
}
</script>

<style>
.is-menu-checkbox {
  width: 80%;
  margin:auto;
  list-style: none;
}
</style>
