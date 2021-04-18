<template>
  <section class="section">
    <div class="container is-flex is-flex-direction-column is-justify-content-center">
      <div class="has-background-grey-lighter p-6 mb-6 has-text-centered">
        <h1 class="title">¡Su compra se ha realizado con éxito!</h1>
        <p class="is-size-5">¡Disfruta de tus hongos y que tu cultivo sea un triunfo!</p>
      </div>
      <div class="has-background-grey-lighter p-6 mb-6 has-text-centered">
        <p class="is-size-5">En breve recibirás tu recibo de compra, si tienes alguna duda haz click <a href="https://cultivatuhongo.com/#contacto" target="_blank">aquí</a></p>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Success',
  mounted () {
    this.clearCart()
  },
  methods: {
    ...mapActions(['clearCart'])
  }
}
</script>

<style>

</style>
