<template>
  <tiny-pull-refresh v-model="isLoading" @refresh="onRefresh" :animation-duration="1000">
    <h3 v-for="index in 5" :key="index">hello pull-refresh</h3>
  </tiny-pull-refresh>
</template>

<script>
import { TinyPullRefresh } from '@opentiny/vue'

export default {
  components: {
    TinyPullRefresh
  },
  data() {
    return {
      isLoading: false
    }
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    }
  }
}
</script>
