<template>
  <div class="container">
    <section class="hero is-widescreen">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered is-vcentered">
            <div class="column is-6">
              <h1 class="is-size-2 has-text-weight-bold mb-2">Cultiva tu hongo</h1>
              <div class="content">
                <p class="is-size-5">
                  En Cultiva tu Hongo podrás encontrar de manera sencilla y accesible todo lo necesario para
                para aprender y cultivar toda clase de hongos. Disponemos de un gran catálogo de variedades
                de todo el mundo y los instrumentos y conocimientos necesarios para sacar adelante
                tus cultivos. Nos apasiona nuestro trabajo, no dudes en escribirnos para cualquier consulta
                o seguimiento de tus proyectos. ¡Crea tu propio cultivo desde 0 con la guía de preparación que incluimos
                con la compra. Si quieres montártelo a tu manera o prefieres un kit, tenemos todo lo necesario!.
                </p>
              </div>
            </div>
            <div class="column is-offset-1 is-5">
              <figure class="image is-3by2">
                <img src="https://raw.githubusercontent.com/almogrote/images/main/home/blue-oyster.webp" class="is-rounded"/>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <CarouselFeaturedProd />
    <section class="section">
      <div class="container has-text-centered">
        <h2 class="title">Te ayudamos en todo el proceso</h2>
        <div class="content">
          <p class="is-size-5">Desde Culltiva Tu Hongo queremos acompañarte en todo el proceso de producción de setas. Desde la inoculación de esporas, hasta la elección del sustrato para cada tipo de seta. No tengas miedo y contáctanos que somos majos. No te olvides de pedirnos nuestras guías de iniciación 😉</p>
          <a class="button is-large is-primary" href="https://cultivatuhongo.com/#contacto" target="_blank">Contáctanos</a>
        </div>
      </div>
    </section>
    <MainCategory />
  </div>
</template>

<script>
import CarouselFeaturedProd from '../components/home/CarouselFeaturedProd.vue'
import MainCategory from '../components/home/MainCategory.vue'

export default {
  name: 'Home',
  metaInfo: {
    title: 'HOME - Cultiva Tu Hongo',
    titleTemplate: '%s',
    meta: [
      { name: 'keywords', content: 'hongos, micologia, micelio, esporas, setas, hifa, micorriza, coprinus comatus, pholiota adiposa, flammulina, velutipes, chopo, agrocybe, aegerita' },
      { name: 'description', content: 'Web dedicada a la venta de hongos, esporas grano miceliado, inóculos en paja, guías para la recolección en el campo o para el autocultivo' },
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
