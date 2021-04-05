<template>
  <div class="container">
    <aside class="menu">
      <div class="is-menu-checkbox has-background-light">
        <p class="menu-label">Productos por precio</p>
        <ul class="menu-list">
          <li><label><input type="checkbox" v-model="price" value="10" /> Menor de 10€</label></li>
          <li><label><input type="checkbox" v-model="price" value="20" /> Menor de 20€</label></li>
          <li><label><input type="checkbox" v-model="price" value="50" /> Menor de 50€</label></li>
          <li><label><input type="checkbox" v-model="price" value="100" /> Menor de 100€</label></li>
        </ul>
        <p class="menu-label">STOCK</p>
        <ul class="menu-list">
          <li><label><input type="checkbox" /> En stock</label></li><li><label><input type="checkbox" /> Sin stock</label></li>
          <p class="menu-label">Ofertas</p>
          <li><label><input type="checkbox" /> En oferta</label></li>
          <li><label><input type="checkbox" /> Sin oferta</label></li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'FilterCheckBox'
}
</script>

<style>
.is-menu-checkbox {
  width: 170px;
  padding: 20px;
  margin:auto;
  padding:auto;
}
</style>
