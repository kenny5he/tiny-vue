<template>
  <div>
    <div>
      <tiny-button @click="showTest = !showTest">{{ showTest ? '隐藏' : '显示' }}文字</tiny-button>
    </div>
    <br />
    <tiny-progress class="progress" :show-text="showTest" :percentage="50"></tiny-progress>
  </div>
</template>

<script lang="jsx">
import { TinyProgress, TinyButton } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyProgress,
    TinyButton
  },

  data() {
    return {
      showTest: true
    }
  }
}
</script>
