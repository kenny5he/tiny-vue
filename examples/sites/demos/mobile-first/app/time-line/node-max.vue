<template>
  <tiny-time-line :data="data" vertical :node-max="5"></tiny-time-line>
</template>

<script>
import { TinyTimeLine } from '@opentiny/vue'

export default {
  components: {
    TinyTimeLine
  },
  data() {
    return {
      active: 1,
      data: [
        { name: '节点标题', time: '2019-11-11 00:01:30' },
        { name: '节点标题', time: '2019-11-12 14:20:15' },
        { name: '节点标题', time: '2019-11-14 20:45:50' },
        { name: '节点标题', time: '2019-11-11 00:01:30' },
        { name: '节点标题', time: '2019-11-12 14:20:15' },
        { name: '节点标题', time: '2019-11-14 20:45:50' }
      ]
    }
  }
}
</script>
