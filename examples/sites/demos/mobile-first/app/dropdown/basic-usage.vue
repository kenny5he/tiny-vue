<template>
  <tiny-dropdown>
    <span>更多</span>
    <template #dropdown>
      <tiny-dropdown-menu>
        <tiny-dropdown-item>黄金糕</tiny-dropdown-item>
        <tiny-dropdown-item>双皮奶</tiny-dropdown-item>
        <tiny-dropdown-item>蚵仔煎</tiny-dropdown-item>
        <tiny-dropdown-item>龙须面</tiny-dropdown-item>
        <tiny-dropdown-item>北京烤鸭</tiny-dropdown-item>
      </tiny-dropdown-menu>
    </template>
  </tiny-dropdown>
</template>

<script>
import { TinyDropdown, TinyDropdownMenu, TinyDropdownItem } from '@opentiny/vue'

export default {
  components: {
    TinyDropdown,
    TinyDropdownMenu,
    TinyDropdownItem
  }
}
</script>
