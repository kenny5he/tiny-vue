<template>
  <tiny-rate v-model="rate1" show-text @change="onchange"></tiny-rate>
</template>

<script>
import { TinyRate, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyRate
  },
  data() {
    return {
      rate1: 2
    }
  },
  methods: {
    onchange(v) {
      TinyModal.message({ message: `选中的值是 ${v}`, status: 'info' })
    }
  }
}
</script>
