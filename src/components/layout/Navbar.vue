<template>
  <b-navbar spaced wrapper-class="container">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
          alt="Cultiva tu Hongo"
        />
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item href="#"> Equipación </b-navbar-item>
      <b-navbar-item href="#"> Complementos </b-navbar-item>
      <b-navbar-item href="#"> Cultivo </b-navbar-item>
      <b-navbar-item href="#"> Ropa </b-navbar-item>
      <b-navbar-item href="#"> Contacto </b-navbar-item>
    </template>

    <template #end>
      <b-input placeholder="Search..." type="search" icon-pack="fas" icon="search" />
      <b-navbar-item href="#">
          <b-icon pack="fas" icon="user" size="is-medium" />
      </b-navbar-item>
      <b-navbar-item href="#">
          <b-icon pack="fas" icon="shopping-cart" size="is-medium" />
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
