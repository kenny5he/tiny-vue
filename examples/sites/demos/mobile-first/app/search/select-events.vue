<template>
  <div class="demo-select-events">
    <tiny-search tiny-search :search-types="searchTypes" @select="select"></tiny-search>
  </div>
</template>

<script>
import { TinySearch, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinySearch
  },
  data() {
    return {
      searchTypes: [
        {
          text: '找人',
          value: 1
        },
        {
          text: '找文档',
          value: 2
        },
        {
          text: '找谁',
          value: 3
        }
      ]
    }
  },
  methods: {
    select(value) {
      TinyModal.message({ message: `${value.text}`, status: 'info' })
    }
  }
}
</script>

<style scoped>
.demo-select-events {
  min-height: 200px;
}
</style>
