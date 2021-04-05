<template>
<div class="container">
  <b-carousel
    :autoplay="false"
    with-carousel-list
    :indicator="false"
    @click="switchGallery(true)"
  >
    <b-carousel-item v-for="(item, i) in items" :key="i">
      <figure class="image is-3by3">
        <img :src="item.image" />
      </figure>
    </b-carousel-item>
    <span
      v-if="gallery"
      @click="switchGallery(false)"
      class="modal-close is-large" />
    <template #list="props">
      <b-carousel-list
        v-model="props.active"
        :data="items"
        v-bind="al"
        @switch="props.switch($event, false)"
        as-indicator
      /> </template
  ></b-carousel>
  </div>
</template>

<script>
export default {
  name: 'ProductImages',
  data () {
    return {
      gallery: false,
      al: {
        hasGrayscale: true,
        itemsToShow: 2,
        breakpoints: {
          768: {
            hasGrayscale: false,
            itemsToShow: 4
          },
          960: {
            hasGrayscale: true,
            itemsToShow: 6
          }
        }
      },
      items: [
        {
          title: 'Slide 1',
          image: 'https://www.endemico.org/wp-content/uploads/2019/06/11.jpg'
        },
        {
          title: 'Slide 2',
          image: 'https://www.endemico.org/wp-content/uploads/2019/06/11.jpg'
        },
        {
          title: 'Slide 3',
          image: 'https://www.endemico.org/wp-content/uploads/2019/06/11.jpg'
        }
      ]
    }
  },
  methods: {
    switchGallery (value) {
      this.gallery = value
      if (value) {
        document.documentElement.classList.add('is-clipped')
      } else {
        document.documentElement.classList.remove('is-clipped')
      }
    }
  }
}
</script>

<style>
</style>
