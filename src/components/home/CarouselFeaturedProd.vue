<template>
<section class="section">
  <div class="container">
  <div class="has-text-centered">
      <h2 class="title">Productos destacados</h2>
  </div>
  <b-carousel :progress-type="progressType" :pause-info="false" :repeat="true" v-if="product" @keypress="false">
    <b-carousel-item v-for="i in 3" :key="i">
      <section :class="`hero is-medium is-bold mb-6 mt-6`"  @click="clickFeaturedProd">
        <div class="columns is-centered is-vcentered">
          <div class="column has-text-centered is-3">
            <figure class="image is-3by2">
              <a :href="'product/'+product[i].data.id"><img :src="`https://raw.githubusercontent.com/almogrote/images/main${product[i].data.image[randomPicture()]}`"/></a>
            </figure>
          </div>
          <div class="column has-text-centered is-3">
            <figure class="image is-3by2">
              <a :href="product[i+1].data.id"><img :src="`https://raw.githubusercontent.com/almogrote/images/main${product[i+1].data.image[randomPicture()]}`"/></a>
            </figure>
          </div>
          <div class="column has-text-centered is-3">
            <figure class="image is-3by2">
              <a :href="product[i+2].data.id"><img :src="`https://raw.githubusercontent.com/almogrote/images/main${product[i+2].data.image[randomPicture()]}`"/> </a>
            </figure>
          </div>
          <div class="column has-text-centered is-3">
            <figure class="image is-3by2">
              <a :href="product[i+3].data.slug"><img :src="`https://raw.githubusercontent.com/almogrote/images/main${product[i+3].data.image[randomPicture()]}`"/></a>
            </figure>
          </div>
        </div>
      </section>
    </b-carousel-item>
  </b-carousel>
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
      progress: true,
      progressType: 'is-primary',
      product: null
    }
  },
  methods: {
    getProduct () {
      fetch('/.netlify/functions/get-featured-products')
        .then((response) => response.json())
        .then((data) => {
          this.product = data.data
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
    randomPicture () {
      return parseInt(Math.floor(Math.random() * (2 - 0)) + 0)
    }
  },
  beforeMount () {
    this.track()
  },
  computed: {
    producto: function () {
      return this.product
    }
  }
}
</script>

<style>

</style>
