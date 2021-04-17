<template>
  <div class="container">
    <section class="hero is-widescreen">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered is-vcentered">
            <div class="column is-6">
              <h1 class="is-size-2 has-text-weight-bold mb-2">Cultiva tu hongo</h1>
              <p>
                En Cultiva tu Hongo podrás encontrar de manera sencilla y accesible todo lo necesario para
              para aprender y cultivar toda clase de hongos. Disponemos de un gran catálogo de variedades
              de todo el mundo y los instrumentos y conocimientos necesarios para sacar adelante
              tus cultivos. Nos apasiona nuestro trabajo, no dudes en escribirnos para cualquier consulta
              o seguimiento de tus proyectos. ¡Crea tu propio cultivo desde 0 con la guía de preparación que incluimos
              con la compra. Si quieres montártelo a tu manera o prefieres un kit, tenemos todo lo necesario!.
              </p>
            </div>
            <div class="column is-offset-1 is-5">
              <figure class="image is-3by2">
                <img src="https://learn.freshcap.com/wp-content/uploads/2017/01/1600X1000-blue-oyster-1440x900.png" class="is-rounded"/>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <CarouselFeaturedProd />
    <MainCategory />
  </div>
</template>

<script>
import CarouselFeaturedProd from '../components/home/CarouselFeaturedProd.vue'
import MainCategory from '../components/home/MainCategory.vue'

export default {
  name: 'Home',
  components: {
    CarouselFeaturedProd,
    MainCategory
  },
  methods: {
    track () {
      this.$ga.page('/category')
      this.$ga.page('/product')
      this.$ga.page('/home')
    }
  },
  beforeMount () {
    this.track()
  }
}
</script>
