<template>
  <div>
    <tiny-popconfirm :title="title" :message="message" ref="popconfirm">
      <template #reference>
        <tiny-button>悬浮我提示</tiny-button>
      </template>
      <template #footer>
        <tiny-button @click="handleClose"> 自定义关闭按钮 </tiny-button>
      </template>
    </tiny-popconfirm>
  </div>
</template>

<script>
import { TinyPopconfirm, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyPopconfirm,
    TinyButton
  },
  data() {
    return {
      title: '这是气泡标题',
      message: '这是气泡确认框提示内容文本描述，这是两行内容的展示样式，文本内容很长很长。'
    }
  },
  methods: {
    handleClose() {
      this.$refs.popconfirm.hide()
    }
  }
}
</script>
