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
      <div class="buttons is-hidden-mobile">
        <a class="button is-primary is-rounded" tag="router-link" :to="{ path: '/' }"> Equipación </a>
        <a class="button is-primary is-rounded" tag="router-link" :to="{ path: '/' }"> Complementos </a>
        <a class="button is-primary is-rounded" tag="router-link" :to="{ path: '/' }"> Cultivo </a>
        <a class="button is-primary is-rounded" tag="router-link" :to="{ path: '/' }"> Ropa </a>
        <a class="button is-primary is-rounded" tag="router-link" :to="{ path: '/' }"> Contacto </a>
      </div>
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
