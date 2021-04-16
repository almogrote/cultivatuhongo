<template>
  <div class="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <router-link :to="{ path: `/category/${category.data.slug}` }">
      <b-image
        src="https://learn.freshcap.com/wp-content/uploads/2017/01/1600X1000-blue-oyster-1440x900.png"
        :alt="category.data.name"
        ratio="is-3by2" />
      <h4 class="has-text-black has-text-weight-bold mt-2">{{ category.data.name }}</h4>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'categoryGrid',
  props: ['category']
}
</script>

<style>

</style>
