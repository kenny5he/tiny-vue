<template>
  <tiny-pager
    @prev-click="prevClick"
    :current-page="currentPage"
    @update:current-page="currentPage = $event"
    :page-size="100"
    layout="total, sizes, prev, pager, next"
    :total="1000"
  >
  </tiny-pager>
</template>

<script>
import { TinyPager, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyPager
  },
  data() {
    return {
      currentPage: 5
    }
  },
  methods: {
    prevClick(val) {
      TinyModal.message({
        message: `prev-click 事件，当前页: ${val}`,
        status: 'info'
      })
    }
  }
}
</script>
