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
        <b-navbar-item tag="div">
          <a class="button is-primary is-rounded"
            tag="router-link"
            :to="{ path: '/' }">
            Equipación
          </a>
        </b-navbar-item>
        <b-navbar-item tag="div">
          <a class="button is-primary is-rounded"
            tag="router-link"
            :to="{ path: '/' }">
            Complementos
          </a>
        </b-navbar-item>
        <b-navbar-item tag="div">
          <a class="button is-primary is-rounded"
            tag="router-link"
            :to="{ path: '/' }">
            Cultivo
          </a>
        </b-navbar-item>
        <b-navbar-item tag="div">
          <a class="button is-primary is-rounded"
            tag="router-link"
            :to="{ path: '/' }">
            Ropa
          </a>
        </b-navbar-item>
        <b-navbar-item tag="div">
          <a class="button is-primary is-rounded"
            tag="router-link"
            :to="{ path: '/' }">
            Contacto
          </a>
        </b-navbar-item>
    </template>

    <template #end>
      <b-input
        placeholder="Search..."
        type="search"
        icon-pack="fas"
        icon="search"
      />
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
  name: 'MainNavbar'
}
</script>
