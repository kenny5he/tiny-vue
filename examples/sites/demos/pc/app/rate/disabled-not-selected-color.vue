<template>
  <tiny-rate v-model="rate" disabled :disabled-void-color="disabledcolor1"></tiny-rate>
</template>

<script>
import { TinyRate } from '@opentiny/vue'

export default {
  components: {
    TinyRate
  },
  data() {
    return {
      rate: 3,
      disabledcolor1: 'red'
    }
  }
}
</script>
