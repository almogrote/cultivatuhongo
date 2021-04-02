<template>
  <div id="app">
    <MainNavbar />
    <router-view :key="$route.fullPath" />
    <MainFooter />
  </div>
</template>

<script>
import MainNavbar from './components/layout/MainNavbar.vue'
import MainFooter from './components/layout/MainFooter.vue'

export default {
  name: 'App',
  components: {
    MainNavbar,
    MainFooter
  }
}
</script>

<style>
</style>
