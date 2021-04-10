<template>
  <div class="column is-one-quarter is-half-mobile">
    <router-link
      :to="{ path: `/category/${this.clearUrl()}` }"
      class="is-flex is-flex-direction-column">
      <b-image
        src="https://learn.freshcap.com/wp-content/uploads/2017/01/1600X1000-blue-oyster-1440x900.png"
        :alt="category.data.name"
        ratio="16by9" />
      <h4 class="has-text-black has-text-weight-light mt-2">{{ category.data.name }}</h4>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'categoryGrid',
  props: ['category'],
  methods: {
    clearUrl () {
      return this.category.data.name.replaceAll(' ', '-'
      ).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    }
  }
}
</script>

<style>

</style>
