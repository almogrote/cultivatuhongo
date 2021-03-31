<template>
  <div id="app">
    <MainNavbar />
    <router-view />
    <CarouselFeaturedProd />
    <MainCategory />
    <MainFooter />
  </div>
</template>

<script>
import MainNavbar from './components/layout/MainNavbar.vue'
import MainFooter from './components/layout/MainFooter.vue'
import CarouselFeaturedProd from './components/layout/CarouselFeaturedProd.vue'
import MainCategory from './components/layout/MainCategory.vue'

export default {
  name: 'App',
  components: {
    MainNavbar,
    MainFooter,
    CarouselFeaturedProd,
    MainCategory
  }
}
</script>

<style>
</style>
