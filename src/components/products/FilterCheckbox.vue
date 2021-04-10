<template>
  <div class="container">
    <aside class="menu">
      <div class="is-menu-checkbox has-background-light">
        <p class="menu-label">Productos por precio</p>
        <li><label><input type="range" v-model="range" min="0" max="500" step="1"/> {{range}}€</label></li>
        <p class="menu-label">STOCK</p>
        <li><label><input type="radio" v-model="withWithoutStock" value="0"/> Sin Stock</label></li>
        <li><label><input type="radio" v-model="withWithoutStock" value="Number.MAX_VALUE"/> Con Stock</label></li>
        <ul class="menu-list">
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
  name: 'FilterCheckBox',
  props: ['range', 'withWithoutStock', 'withWithoutOffers'],
  range: 600,
  withWithoutStock: Number.MAX_VALUE,
  withWithoutOffers: Number.MAX_VALUE
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
