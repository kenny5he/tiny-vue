<template>
  <tiny-carousel height="150px" loop :disabled="true" arrow="always">
    <tiny-carousel-item class="carousel-item-demo" v-for="item in 3" :key="item">
      <h3>{{ item }}</h3>
    </tiny-carousel-item>
  </tiny-carousel>
</template>

<script>
import { TinyCarousel, TinyCarouselItem } from '@opentiny/vue'

export default {
  components: {
    TinyCarousel,
    TinyCarouselItem
  }
}
</script>

<style scoped>
.tiny-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
  font-size: 25px;
}

.carousel-item-demo:nth-child(2n) {
  background-color: #fafafa;
}

.carousel-item-demo:nth-child(2n + 1) {
  background-color: #edf0f3;
}
</style>
