<template>
  <div>
    <div class="page__hd">
      <h1 class="page__title">Slider</h1>
      <p class="page__desc">滑块</p>
    </div>
    <div class="padds">
      <tiny-slider v-model="value" :show-tip="false"></tiny-slider>
    </div>
  </div>
</template>

<script lang="jsx">
import { TinySlider } from '@opentiny/vue-mobile'

export default {
  components: {
    TinySlider
  },
  data() {
    return {
      value: 20
    }
  }
}
</script>

<style scoped>
.page__hd {
  padding: 40px;
}
.page__title {
  font-weight: 400;
  font-size: 21px;
  text-align: left;
}
.page__desc {
  margin-top: 5px;
  color: #888;
  font-size: 14px;
  text-align: left;
}
.padds {
  padding: 15px;
}
</style>
