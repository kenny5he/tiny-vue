<template>
  <div>
    <tiny-alert :icon="TinyIconBoat" description="自定义图标"></tiny-alert>
    <tiny-alert description="默认图标"></tiny-alert>
    <tiny-alert type="success" description="type 为 success 的默认图标"></tiny-alert>
    <tiny-alert :icon="TinyIconWarningTriangle" type="warning" description="type 为 warning 的默认图标"></tiny-alert>
    <tiny-alert type="error" description="type 为 error 的默认图标"></tiny-alert>
  </div>
</template>

<script setup>
import { TinyAlert } from '@opentiny/vue'
import { iconBoat, iconWarningTriangle } from '@opentiny/vue-icon'

const TinyIconBoat = iconBoat()
const TinyIconWarningTriangle = iconWarningTriangle()
</script>
