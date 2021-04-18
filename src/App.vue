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
  },
  mounted () {
    if (!window.localStorage.getItem('policies') && !this.$el.querySelector('.dialog')) {
      console.log(1)
      this.confirmCustom()
    }
  },
  methods: {
    confirmCustom () {
      this.$buefy.dialog.confirm({
        title: 'Politicas de privacidad',
        message: `Este sitio web utiliza cookies, para continuar navegando debe aceptarlas
        Si quiere leer más lea <a href='/policies/'>nuestras políticas</a>`,
        confirmText: 'Aceptar',
        cancelText: 'Rechazar',
        type: 'is-primary',
        onConfirm: () => window.localStorage.setItem('policies', 1)
      })
    }
  }
}
</script>

<style>
  .base-height {
    min-height: calc(100vh - 334px);
  }
</style>
