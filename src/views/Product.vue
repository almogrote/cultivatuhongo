<template>
  <section class="section">
      <div class="container has-background-grey-lighter p-6 mb-6">
        <div class="columns" v-if="product">
          <div class="column is-4">
            <ProductImages :image="product.image" :name="product.name"/>
          </div>
          <div class="column is-6 is-offset-1">
            <h1 class="title mb-2">{{ product.name }}</h1>
            <p class="mb-3">{{ product.description }}</p>
            <ProductPriceSection :price="product.price" :stock="product.stock" />
            <div class="columns mt-1">
              <div class="column is-narrow">
                <b-numberinput type="is-dark" v-model="quantity" :value="0" min="0" :max="product.stock" :editable="false" controls-position="compact" />
              </div>
              <div class="column">
                <b-button :disabled="!quantity" @click="addToCart" type="is-dark" label="Añadir al carrito" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CarouselFeaturedProd/>
  </section>
</template>

<script>
import ProductPriceSection from '../components/products/ProductPriceSection.vue'
import CarouselFeaturedProd from '../components/home/CarouselFeaturedProd.vue'
import ProductImages from '../components/products/ProductImages.vue'
import { mapActions } from 'vuex'

export default {
  name: 'Product',
  components: {
    ProductPriceSection,
    CarouselFeaturedProd,
    ProductImages
  },
  data () {
    return {
      product_id: this.$route.params.product_id,
      product: null,
      quantity: 0
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
      const selectedProduct = {
        price_id: this.product.price_id,
        quantity: this.quantity,
        amount: this.product.price,
        name: this.product.name
      }
      this.addProductToCart(selectedProduct)
      this.quantity = 0
      this.$buefy.toast.open({
        message: 'Producto añadido correctamente',
        type: 'is-success'
      })
    },
    ...mapActions(['addProductToCart'])
  }
}
</script>

<style>

</style>
