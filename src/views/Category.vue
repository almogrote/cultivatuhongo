<template>
  <section class="section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-one-quarter">
          <!--Category view checkbox-->
          <template>
            <div class="container is-menu-checkbox">
              <aside class="menu">
                <div class=" has-background-light is-1 pt-4 pb-4 pl-2 pr-2">
                  <p class="menu-label has-text-centered">Productos por precio</p>
                  <ul class="menu-list">
                    <li class="has-text-centered">{{range}}€</li>
                    <li class="has-text-centered"><label><input v-if="products" type="range" v-model="range" min="0" :max="topPrice" step="1" /></label></li>
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
        <div class="column ml-4" v-if="category">
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
import { detect } from '../../node_modules/detect-browser'

export default {
  name: 'Category',
  metaInfo: {
    title: 'Categorias - Cultiva Tu Hongo',
    titleTemplate: '%s',
    meta: [
      { name: 'keywords', content: 'Sello de esporas, culturas líquidas, autoclaves, accesorios setas, libros hongos, spawn, kits de cultivo, boletus, pleurotus, ostreatus, djamor, eryngii, portobello, lentinuna edodes, pleurotus citrinoplieatus, lentinuna, edodes, shiitake' },
      { name: 'description', content: 'Categorias de cultivatuhongo.com, aquí se encuentran productos como esporas, kits de diseción, bisturí, placas petris, guantes de látex' },
      { name: 'robots', content: 'index, follow' },
      { name: 'lenguage', content: 'Spanish' },
      { name: 'revisit-after', content: '20 days' },
      { name: 'author', content: 'Antonio, Mathias y Darel' }
    ],
    htmlAttrs: {
      lang: 'es',
      amp: true
    }
  },
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
        .catch((error) => {
          console.log(error)
          this.$router.push({ path: '/' })
        })
    },
    getCategoryProducts (catgoryId) {
      fetch(`/.netlify/functions/get-category-products/${catgoryId}`)
        .then((response) => response.json())
        .then((data) => {
          this.products = data.data
          this.isLoading = false
          this.range = this.topPrice
        })
        .catch((error) => console.log(error))
    },
    filterBySortLowest () {
      const browser = detect()
      if (browser) {
        switch (browser && browser.name) {
          case 'firefox':
            return this.products.sort((a, b) => (a.data.price > b.data.price))
          case 'chrome':
            return this.products.sort((a, b) => (a.data.price > b.data.price) ? 0 : -1)
        }
      }
    },
    filterBySortHighest () {
      const browser = detect()
      if (browser) {
        switch (browser && browser.name) {
          case 'firefox':
            return this.products.sort((a, b) => (a.data.price < b.data.price))
          case 'chrome':
            return this.products.sort((a, b) => (a.data.price < b.data.price) ? 0 : -1)
        }
      }
    },
    filterProductsByStock: function (products) {
      return products.filter(product => this.filterStock === 0 ? (product.data.stock === 0) : this.filterStock === 10000 ? product.data.stock > 0 : product.data.stock >= 0)
    },
    filterProductsByOffers: function (products) {
      return products.filter(product => this.filterOffers === 0 ? (product.data.offers === 0) : this.filterOffers === 10000 ? product.data.offers > 0 : product.data.offers >= 0)
    },
    filterProductsByRange: function (products) {
      return products.filter(product => (product.data.price > 0 && product.data.price <= this.range) ? product : '')
    }
  },
  computed: {
    filterProducts () {
      return this.filterProductsByStock(this.filterProductsByOffers(this.filterProductsByRange(this.products)))
    },
    topPrice () {
      return Math.ceil(Math.max(...this.products.map(product => product.data.price)))
    }
  }
}
</script>

<style>
.is-menu-checkbox {
  width: 100%;
  margin:auto;
  list-style: none;
}
</style>
