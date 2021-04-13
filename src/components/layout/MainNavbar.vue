<template>
  <b-navbar spaced wrapper-class="container">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          :src="require('@/assets/logo.svg')"
          alt="Cultiva tu Hongo" />
      </b-navbar-item>
    </template>
    <template #start>
        <b-navbar-item tag="div">
          <router-link class="button is-primary is-rounded is-fullwidth"
            :to="{ path: '/category/equipamiento-laboratorio' }">
            Equipación
          </router-link>
        </b-navbar-item>
        <b-navbar-item tag="div">
          <router-link class="button is-primary is-rounded is-fullwidth"
            :to="{ path: '/category/sello-de-esporas' }">
            Sello de Esporas
          </router-link>
        </b-navbar-item>
        <b-navbar-item tag="div">
          <router-link class="button is-primary is-rounded is-fullwidth"
            :to="{ path: '/category/culturas-liquidas' }">
            Culturas
          </router-link>
        </b-navbar-item>
        <b-navbar-item tag="div">
          <router-link class="button is-primary is-rounded is-fullwidth"
            :to="{ path: '/category/autoclaves' }">
            Autoclaves
          </router-link>
        </b-navbar-item>
        <b-navbar-item tag="div">
          <router-link class="button is-primary is-rounded is-fullwidth"
            :to="{ path: '/category/libros' }">
            Libros
          </router-link>
        </b-navbar-item>
    </template>

    <template #end>
      <b-input
        placeholder="Search..."
        type="search"
        icon-pack="fas"
        icon="search"  />
      <b-navbar-item href="#">
        <b-icon pack="fas" icon="user" size="is-medium" />
      </b-navbar-item>
      <b-navbar-item tag="div">
        <router-link
            :to="{ path: '/cart/' }">
            <b-icon pack="fas" icon="shopping-cart" size="is-medium" />
            <BadgeCart />
          </router-link>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import BadgeCart from '../cart/BadgeCart.vue'
export default {
  name: 'MainNavbar',
  components: {
    BadgeCart
  }
}
</script>
