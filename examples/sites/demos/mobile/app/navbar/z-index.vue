<template>
  <tiny-nav-bar title="导航栏" z-index="10" :fixed="false" left-arrow right-arrow> </tiny-nav-bar>
</template>

<script lang="jsx">
import { TinyNavBar } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyNavBar
  },
  data() {
    return {}
  }
}
</script>
