<template>
  <tiny-transfer v-model="value" :data="data"></tiny-transfer>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyTransfer } from '@opentiny/vue'

const generateData = () => {
  const data = []

  for (let i = 0; i <= 15; i++) {
    data.push({
      key: i,
      label: `备选项 ${i}`,
      disabled: i % 4 === 0
    })
  }

  return data
}

const data = ref(generateData())
const value = ref([1, 4])
</script>
