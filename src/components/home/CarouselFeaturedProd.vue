<template>
<section class="section">
  <div class="container">
  <div class="has-text-centered">
      <h2 class="title">Productos destacados</h2>
    </div>
    <b-carousel :progress-type="progressType" :pause-info="false" :repeat="true">
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section :class="`hero is-medium is-bold mb-6 mt-6`"  @click="clickFeaturedProd">
          <div class="columns is-centered is-vcentered">
            <div class="column has-text-centered is-3">
              <figure class="image is-3by2">
                <img :src="`${carousel.img0}`"/>
              </figure>
            </div>
            <div class="column has-text-centered is-3">
              <figure class="image is-3by2">
                <img :src="`${carousel.img1}`"/>
              </figure>
            </div>
            <div class="column has-text-centered is-3">
              <figure class="image is-3by2">
                <img :src="`${carousel.img2}`"/>
              </figure>
            </div>
            <div class="column has-text-centered is-3">
              <figure class="image is-3by2">
                <img :src="`${carousel.img3}`"/>
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
  data () {
    return {
      progress: true,
      progressType: 'is-primary',
      carousels: [
        {
          img0: 'https://i.pinimg.com/736x/eb/4b/3d/eb4b3d4a49ccee08a27586ec0e7d729d.jpg',
          img1: 'https://i.pinimg.com/736x/eb/4b/3d/eb4b3d4a49ccee08a27586ec0e7d729d.jpg',
          img2: 'https://i.pinimg.com/736x/eb/4b/3d/eb4b3d4a49ccee08a27586ec0e7d729d.jpg',
          img3: 'https://i.pinimg.com/736x/eb/4b/3d/eb4b3d4a49ccee08a27586ec0e7d729d.jpg'
        },
        {
          img0: 'https://i.pinimg.com/originals/e7/e4/4d/e7e44dc9cc3d85a641668ccc5d67573f.jpg',
          img1: 'https://i.pinimg.com/originals/e7/e4/4d/e7e44dc9cc3d85a641668ccc5d67573f.jpg',
          img2: 'https://i.pinimg.com/originals/e7/e4/4d/e7e44dc9cc3d85a641668ccc5d67573f.jpg',
          img3: 'https://i.pinimg.com/originals/e7/e4/4d/e7e44dc9cc3d85a641668ccc5d67573f.jpg'
        },
        {
          img0: 'http://www.comunicacampeche.com.mx/Imagenes/fungifotos1.jpg',
          img1: 'http://www.comunicacampeche.com.mx/Imagenes/fungifotos1.jpg',
          img2: 'http://www.comunicacampeche.com.mx/Imagenes/fungifotos1.jpg',
          img3: 'http://www.comunicacampeche.com.mx/Imagenes/fungifotos1.jpg'
        }
      ]
    }
  },
  methods: {
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
