<template>
  <div>
    <tiny-progress
      class="progress"
      :text-inside="true"
      :stroke-width="24"
      :percentage="100"
      status="success"
    ></tiny-progress>
    <br />
    <tiny-progress
      class="progress"
      :text-inside="true"
      :stroke-width="22"
      :percentage="80"
      status="warning"
    ></tiny-progress>
    <br />
    <tiny-progress
      class="progress"
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception"
    ></tiny-progress>
  </div>
</template>

<script lang="jsx">
import { TinyProgress } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyProgress
  },

  data() {
    return {}
  }
}
</script>
