<template>
  <tiny-action-menu :options="options" more-text="自定义下拉文本"> </tiny-action-menu>
</template>

<script>
import { TinyActionMenu } from '@opentiny/vue'

export default {
  components: {
    TinyActionMenu
  },
  data() {
    return {
      options: [
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
      ]
    }
  }
}
</script>
