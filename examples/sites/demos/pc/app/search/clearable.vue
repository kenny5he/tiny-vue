<template>
  <div>
    <tiny-search v-model="value" placeholder="请输入关键词" clearable></tiny-search>
  </div>
</template>

<script lang="jsx">
import { TinySearch } from '@opentiny/vue'

export default {
  components: {
    TinySearch
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>
