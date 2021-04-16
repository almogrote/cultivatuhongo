<template>
  <div id="app">
    <MainNavbar />
    <router-view :key="$route.fullPath" class="base-height" />
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
.base-height {
  min-height: calc(100vh - 358px);
}
</style>
