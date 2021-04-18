<template>
  <b-navbar spaced wrapper-class="container">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img :src="require('@/assets/logo-principal.png')" width="112" alt="Cultiva tu Hongo" />
      </b-navbar-item>
    </template>
    <template #start>
        <b-navbar-item v-for="link in menuLinks" :key="link.name" tag="div">
          <router-link class="button is-primary is-rounded is-fullwidth"
            :to="{ path: link.path }">
            {{ link.name }}
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
            :to="{ path: '/cart/' }" class="has-text-grey-dark is-flex is-align-items-center">
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
  },
  data () {
    return {
      menuLinks: [
        {
          name: 'Sello de Esporas',
          path: '/category/sello-de-esporas'
        },
        {
          name: 'Culturas',
          path: '/category/culturas-liquidas'
        },
        {
          name: 'Autoclaves',
          path: '/category/autoclaves'
        },
        {
          name: 'Equipación',
          path: '/category/equipamiento-laboratorio'
        },
        {
          name: 'Libros',
          path: '/category/libros'
        }

      ]
    }
  }
}
</script>
