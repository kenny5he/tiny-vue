<template>
  <div class="demo-steps">
    <tiny-steps :data="data" :active="advancedActive" @click="advancedClick"></tiny-steps>
    <br /><br />

    <p>通过 <code>advanced</code> 属性启用高级向导功能：</p>
    <br />
    <tiny-steps advanced :data="data" :active="advancedActive" @click="advancedClick"></tiny-steps>
  </div>
</template>

<script>
import { TinySteps, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinySteps
  },
  data() {
    return {
      advancedActive: 1,
      data: [
        { name: 'Basic Info', count: 3, status: 'done' },
        { name: 'BOQ Info', count: 0, status: 'doing' },
        { name: 'Involved Parties', count: 10, status: 'error' },
        { name: 'Billing', count: 0, status: 'disabled' },
        { name: 'Appraise', count: 3 }
      ]
    }
  },
  methods: {
    advancedClick(index, node) {
      this.advancedActive = index

      TinyModal.message({ message: `节点 index: ${index}; 节点信息：${JSON.stringify(node)}`, status: 'info' })
    }
  }
}
</script>
