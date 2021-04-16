<template>
<section class="section">
  <div class="container">
    <div class="content has-text-centered">
        <h2 class="title">Productos destacados</h2>
    </div>

    <b-carousel-list class="is-shadowless" v-if="products" v-model="values" :data="products" :items-to-show="4" :arrow="true" :repeat="true" :has-drag="true" :as-indicator="true">
        <template #item="product">
            <router-link :to="{ path: `/product/${product.data.slug}` }">
              <figure class="image is-3by2">
                <img :src="`https://raw.githubusercontent.com/almogrote/images/main${product.data.image[0]}`"/>
              </figure>
            </router-link>
        </template>
    </b-carousel-list>

  </div>
</section>
</template>

<script>
export default {
  name: 'CarouselFeaturedProd',
  created () {
    this.getProduct()
  },
  data () {
    return {
      products: null,
      values: 0
    }
  },
  methods: {
    getProduct () {
      fetch('/.netlify/functions/get-featured-products')
        .then((response) => response.json())
        .then((data) => {
          this.products = data.data
        })
        .catch((error) => console.log(error))
    },
    track () {
      this.$ga.page('/category')
      this.$ga.page('/product')
      this.$ga.page('/home')
    },
    clickFeaturedProd: function () {
      this.$ga.event('home', 'featuredProd')
    }
  },
  beforeMount () {
    this.track()
  }
}
</script>

<style>

</style>
