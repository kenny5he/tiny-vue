<template>
  <tiny-action-menu :options="options" :max-show-num="1"> </tiny-action-menu>
</template>

<script setup>
import { ref } from 'vue'
import { TinyActionMenu } from '@opentiny/vue'

const options = ref([
  {
    label: '远程登陆'
  },
  {
    label: '开机'
  },
  {
    label: '关机'
  },
  {
    label: '重启'
  },
  {
    label: '网络设置',
    children: [{ label: '更改安全组' }, { label: '切换 VPC', divided: true }]
  }
])
</script>
