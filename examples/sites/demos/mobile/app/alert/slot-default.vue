<template>
  <div class="alert-wrap">
    <tiny-alert>
      <span>配置详细信息请点击</span>
      <a href="#" class="link">默认配置说明</a>
    </tiny-alert>
  </div>
</template>

<script>
import { TinyAlert } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyAlert
  }
}
</script>

<style>
.alert-wrap .tiny-mobile-alert {
  margin-bottom: 8px;
}

.link {
  color: #1476ff;
  margin-left: 8px;
}
</style>
