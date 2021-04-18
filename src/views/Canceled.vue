<template>
  <section class="section">
    <div class="container is-flex is-flex-direction-column is-justify-content-center">
      <div class="has-background-grey-lighter p-6 mb-6 has-text-centered">
        <h1 class="title">¡No se pudo completar la compra!</h1>
        <p class="is-size-5">¿Algún problema? <a href="https://cultivatuhongo.com/#contacto" target="_blank">Contacta con nosotros</a></p>
      </div>
      <div class="has-background-grey-lighter p-6 mb-6 has-text-centered">
        <p class="is-size-5">Si deseas volver a intentarlo haz click <router-link :to="{ path: '/cart/' }">aquí</router-link></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Canceled'
}
</script>

<style>

</style>
