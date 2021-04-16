<template>
<div class="container">
  <b-carousel :autoplay="false" with-carousel-list :indicator="false" @click="switchGallery(true)">
    <b-carousel-item v-for="(item, i) in items" :key="i">
      <figure class="image is-5by4">
        <img :src="item.image" />
      </figure>
    </b-carousel-item>
    <span v-if="gallery" @click="switchGallery(false)" class="modal-close is-large" />
    <template #list="props">
      <b-carousel-list class="azucar" v-model="props.active" :data="items" v-bind="al" @switch="props.switch($event, false)" as-indicator/>
    </template>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'ProductImages',
  props: ['image', 'name'],
  item: [],
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
          title: this.name,
          image: (typeof this.image[0] === 'undefined') ? '' : 'https://raw.githubusercontent.com/almogrote/images/main' + this.image[0]
        },
        {
          title: this.name,
          image: (typeof this.image[1] === 'undefined') ? 'https://raw.githubusercontent.com/almogrote/images/main' + this.image[0]
            : 'https://raw.githubusercontent.com/almogrote/images/main' + this.image[1]
        },
        {
          title: this.name,
          image: (typeof this.image[2] === 'undefined') ? 'https://raw.githubusercontent.com/almogrote/images/main' + this.image[0]
            : 'https://raw.githubusercontent.com/almogrote/images/main' + this.image[2]
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
  },
  computed: {
  }
}
</script>

<style>

.carousel-slide:active {
  margin-top: 4px;
  margin-bottom: 4px;
  width: 100%;
}

.carousel-slide figure img{
  height: 60px;
  margin-left: -1px
}

</style>
