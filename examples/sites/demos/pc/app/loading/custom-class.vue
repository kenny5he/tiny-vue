<template>
  <div id="tiny-demo-loading-custom-class"></div>
</template>

<script>
import { TinyLoading } from '@opentiny/vue'

export default {
  mounted() {
    TinyLoading.service({
      text: '自定义 loading 类名',
      customClass: 'new-loading',
      target: document.getElementById('tiny-demo-loading-custom-class'),
      background: '#595959'
    })
  }
}
</script>

<style scoped>
:deep(.tiny-loading__spinner > .tiny-svg.circular) {
  fill: #fff;
}
:deep(.new-loading .tiny-loading__spinner > .tiny-loading__text) {
  color: #fff;
}
#tiny-demo-loading-custom-class {
  height: 120px;
}
</style>
