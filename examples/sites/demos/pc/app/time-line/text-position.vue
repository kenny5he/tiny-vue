<template>
  <tiny-time-line :data="data" :active="active" text-position="right" @click="click"></tiny-time-line>
</template>

<script>
import { TinyTimeLine, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyTimeLine
  },
  data() {
    return {
      active: 1,
      data: [
        { name: '已下单', time: '2019-11-11 00:01:30' },
        { name: '运输中', time: '2019-11-12 14:20:15' },
        { name: '已签收', time: '2019-11-14 20:45:50' }
      ]
    }
  },
  methods: {
    click(index, node) {
      this.active = index
      TinyModal.message({
        message: 'click 事件，当前 index：' + index + ' 节点信息：' + node.name + ',' + node.time,
        status: 'info'
      })
    }
  }
}
</script>
