<template>
  <aui-time-line :data="data" :active="active" @click="click" vertical>
    <template #left="data">
      <span style="text-align: right; float: left; padding-right: 16px">
        {{ data.slotScope.name }}
      </span>
    </template>
    <template #right="data">
      <span style="margin-left: 15px; float: left">
        {{ data.slotScope.time }}
      </span>
    </template>
  </aui-time-line>
</template>

<script>
import { TinyTimeLineNew } from '@opentiny/vue'

export default {
  components: {
    AuiTimeLine: TinyTimeLineNew
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
    click(index) {
      this.active = index
    }
  }
}
</script>
