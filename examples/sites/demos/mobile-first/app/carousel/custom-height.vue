<template>
  <div>
    <tiny-carousel type="card" height="150px">
      <tiny-carousel-item :class="bgColor[item - 1]" v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </tiny-carousel-item>
    </tiny-carousel>
    <br />
    <tiny-carousel type="card" height="200px">
      <tiny-carousel-item :class="bgColor[item - 1]" v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </tiny-carousel-item>
    </tiny-carousel>
  </div>
</template>

<script>
import { TinyCarousel, TinyCarouselItem } from '@opentiny/vue'

export default {
  components: {
    TinyCarousel,
    TinyCarouselItem
  },
  data() {
    return {
      bgColor: [
        'bg-color-info-primary-subtle',
        'bg-color-success-subtle',
        'bg-color-icon-primary',
        'bg-color-warning-subtle'
      ]
    }
  }
}
</script>
