<template>
  <div class="container">
    <section class="hero is-widescreen">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered is-vcentered">
            <div class="column is-7">
              <h1 class="title">Cultiva tu hongo</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <div class="column is-5">
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
