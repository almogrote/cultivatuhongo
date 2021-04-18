<template>
  <div class="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <router-link :to="{ path: `/category/${category.data.slug}` }">
      <b-image
        :src="`https://raw.githubusercontent.com/almogrote/images/main${category.data.image[0]}`"
        :alt="category.data.name"
        ratio="is-3by2" />
      <h4 class="has-text-black has-text-weight-medium is-size-5 mt-2">{{ category.data.name }}</h4>
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
