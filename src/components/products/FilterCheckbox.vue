<template>
            <div class="container">
              <aside class="menu">
                <div class="is-menu-checkbox has-background-light is-1 pt-4 pb-4 pl-2 pr-2">
                  <p class="menu-label has-text-centered">Productos por precio</p>
                  <ul class="menu-list">
                    <li class="has-text-centered">{{range}}€</li>
                    <li class="has-text-centered"><label><input type="range" v-model="range" min="0" max="600" step="1" /></label></li>
                  </ul>

                  <p class="menu-label has-text-centered">Stock</p>
                  <ul class="menu-list">
                    <li li class="pl-5"><label><input type="radio" v-model="filterStock" :value="0"/> Sin Stock</label></li>
                    <li li class="pl-5"><label><input type="radio" v-model="filterStock" :value="1000000"/> Con Stock</label></li>
                  </ul>

                  <p class="menu-label has-text-centered">Ofertas</p>
                  <ul class="menu-list">
                    <li class="pl-5"><label><input type="radio" v-model="filterOffers" :value="false"/> Sin ofertas</label></li>
                    <li class="pl-5"><label><input type="radio" v-model="filterOffers" :value="true"/> Con Ofertas</label></li>
                  </ul>
                </div>
              </aside>
            </div>
</template>

<script>
export default {
  name: 'FilterCheckBox',
  props: ['range', 'filterStock', 'filterOffers'],
  range: 600,
  filterStock: 1000000,
  filterOffers: 1000000
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
