<template>
  <tiny-button @click="show = true"> 弹出 Dialog </tiny-button>
  <tiny-dialog-box v-model:visible="show" class="demo-image__preview-dialog-box" title="消息" width="30%">
    <div class="demo-image__preview__in">
      <tiny-image :src="url" :preview-src-list="srcList"></tiny-image>
    </div>
    <template #footer>
      <tiny-button type="primary" @click="show = false"> 确 定 </tiny-button>
    </template>
  </tiny-dialog-box>
</template>

<script setup>
import { ref } from 'vue'
import { TinyButton, TinyDialogBox, TinyImage } from '@opentiny/vue'

const show = ref(false)
const url = ref(`${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`)
const srcList = ref([
  `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/mountain.png`,
  `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/house.jpg`,
  `${import.meta.env.VITE_APP_BUILD_BASE_URL}static/images/bridge.jpg`
])
</script>

<style lang="less" scoped>
.demo-image__preview__in {
  width: 200px;
  height: 200px;
  margin: auto;
  padding-top: 50px;
}

.demo-image__preview-dialog-box {
  :deep(.tiny-dialog-box) {
    > .tiny-dialog-box__footer {
      text-align: right;
    }
  }
}
</style>
