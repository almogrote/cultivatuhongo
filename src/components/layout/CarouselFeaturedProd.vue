<template>
<div class="container">
  <div class="has-text-centered">
      <h1 class="title">Productos destacados</h1>
    </div>
    <b-carousel :progress-type="progressType" :pause-info="false" :repeat="true">
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section :class="`hero is-medium is-bold mb-6 mt-6`">
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
          img1: 'https://lh3.googleusercontent.com/proxy/zpViCeEss5Unz0o91MxV0iBm_tD46WAAxQUpsPuHxXNefSACjkqZL-7ZRcyVYVZa8H7FFUWEOlHRW2rkHMei7ZqJ_FxzTRHnTSmw5sV1_CT4SE3QbuZ4T0yOTfFULSh4Mt9LZQtdbHTiS4dRcSs',
          img2: 'https://lh3.googleusercontent.com/proxy/a37MYio4eq2fyhmbwd5koqApONaxCm4SBbqU2tWTU9_mH4yzZjvR_KJY_KyoCZNFqunAZp764hZs6bK0dG5IxLDbW9rhoJwN636FIk8PE-UG0-F1UH7nxwJO6OKlRZ-6EFFo9ES8lBDG',
          img3: 'https://i.pinimg.com/originals/e7/e4/4d/e7e44dc9cc3d85a641668ccc5d67573f.jpg'
        },
        {
          img0: 'https://ak.picdn.net/shutterstock/videos/18733370/thumb/1.jpg?ip=x480',
          img1: 'https://i.pinimg.com/originals/67/36/92/67369267a4f5a4c9055ddce1ed9af1f2.jpg',
          img2: 'https://i.pinimg.com/originals/ff/7b/0f/ff7b0f80127ce0639a1d0291b1c07703.jpg',
          img3: 'https://lh3.googleusercontent.com/proxy/atjZ3dre4kW7FEbVywRsta7VEUdkj8QJR5tqzv3lgH8OQ13euA5uVKj2rMTFw7b9pt0vOAPalID_QuthwnFx8HBfCf921-WMz-GHzfhHsHZFhN6ZCmrbAjw900SmNbaMN_-1WTUR0AKp6ocMaw'
        },
        {
          img0: 'https://i.ytimg.com/vi/OakxYHj4In0/maxresdefault.jpg',
          img1: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCBpxP7AJjsz26zrwD4B01_4jOQkent8vIwvgisb3IXHCfnLdRCvcHFbw7rXuX5plv1QA&usqp=CAU',
          img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzbajGWd8qs_19oCQ_oz2zHNc5R_9qLjL0Xp6a2QxyJmlJWQpRuu_YMen1JIC-F-YYQXs&usqp=CAU',
          img3: 'http://www.comunicacampeche.com.mx/Imagenes/fungifotos1.jpg'
        }
      ]
    }
  }
}
</script>

<style>

</style>
