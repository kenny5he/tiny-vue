<template>
  <div class="demo-checkbox">
    <tiny-checkbox v-model="checked" text="复选框" true-label="真文本" false-label="假文本"></tiny-checkbox>
    <tiny-button class="btn" @click="getValue">获取文本</tiny-button>
  </div>
</template>

<script>
import { TinyCheckbox, TinyModal, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyCheckbox,
    TinyButton
  },
  data() {
    return {
      checked: ''
    }
  },
  methods: {
    getValue() {
      TinyModal.message({
        message: 'change 事件，当前选中的值为:' + this.checked,
        status: 'info'
      })
    }
  }
}
</script>

<style scoped>
.demo-checkbox .btn {
  margin-left: 20px;
}
</style>
