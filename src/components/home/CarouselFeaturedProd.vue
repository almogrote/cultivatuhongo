<template>
<section class="section">
  <div class="container">
    <div class="content has-text-centered">
        <h2 class="is-size-3 has-text-weight-bold mb-5">Productos destacados</h2>
    </div>

    <b-carousel-list class="is-shadowless home-carousel" v-if="products" v-model="values" :data="products" :items-to-show="itemsToShow" :arrow="true" :repeat="true" :has-drag="true" :as-indicator="false">
        <template #item="product">
            <router-link :to="{ path: `/product/${product.data.slug}` }">
              <figure class="image is-3by2">
                <img :src="`https://raw.githubusercontent.com/almogrote/images/main${product.data.image[0]}`"/>
              </figure>
              <h4 class="has-text-black has-text-weight-medium mt-2">{{ product.data.name }}</h4>
              <ProductPriceSection :price="product.data.price" :stock="product.data.stock" />
            </router-link>
        </template>
    </b-carousel-list>

  </div>
</section>
</template>

<script>
import ProductPriceSection from '../products/ProductPriceSection.vue'
export default {
  name: 'CarouselFeaturedProd',
  components: {
    ProductPriceSection
  },
  created () {
    this.getProduct()
  },
  data () {
    return {
      products: null,
      values: 0,
      itemsToShow: 4
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
    },
    resizeSlider () {
      if (window.innerWidth < 768) {
        this.itemsToShow = 2
      } else {
        this.itemsToShow = 4
      }
    }
  },
  beforeMount () {
    this.track()
    window.addEventListener('resize', () => {
      this.resizeSlider()
    })
    this.resizeSlider()
  }
}
</script>

<style>
.carousel-list .carousel-slides .carousel-slide {
    padding: 0.375rem;
}
.home-carousel > .carousel-arrow .icon.has-icons-left, .home-carousel > .carousel-arrow .icon.has-icons-right {
    top: 35%;
}
</style>
