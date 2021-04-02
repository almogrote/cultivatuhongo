<template>
  <section class="section">
      <div class="container has-background-grey-lighter p-6 mb-6">
        <div class="columns" v-if="product">
          <div class="column is-5">
            <b-image src="https://picsum.photos/id/237/800/400"/>
          </div>
          <div class="column is-6 is-offset-1">
            <h1 class="title mb-2">{{ product.name }}</h1>
            <p class="mb-3">{{ product.description }}</p>
            <ProductPriceSection :price="product.price" :stock="product.stock" />
            <form @submit.prevent="addToCart" class="mt-4">
              <b-field>
                <b-field grouped>
                  <p class="control">
                    <b-button :disabled="!selected" native-type="submit" type="is-dark" label="Comprar" />
                  </p>
                  <b-numberinput type="is-dark" v-model="selected" :value="0" min="0" :max="product.stock" controls-position="compact" />
                </b-field>
              </b-field>
            </form>
          </div>
        </div>
      </div>
      <CarouselFeaturedProd />
  </section>
</template>

<script>
import ProductPriceSection from '../components/products/ProductPriceSection.vue'
import CarouselFeaturedProd from '../components/home/CarouselFeaturedProd.vue'

export default {
  name: 'Product',
  components: {
    ProductPriceSection,
    CarouselFeaturedProd
  },
  data () {
    return {
      product_id: this.$route.params.product_id,
      product: null,
      selected: 0
    }
  },
  created () {
    this.getProduct()
  },
  methods: {
    getProduct () {
      fetch(`/.netlify/functions/get-product/${this.product_id}`)
        .then((response) => response.json())
        .then((data) => {
          this.product = data.data
        })
        .catch((error) => console.log(error))
    },
    addToCart () {
      return true
    }
  }
}
</script>

<style>

</style>
