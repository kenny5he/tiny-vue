<template>
  <div>
    <div>
      <tiny-button-group :data="groupData" disabled v-model="value"></tiny-button-group>
    </div>
    <div class="mt-12">
      <tiny-button-group :data="disabledGroup" v-model="value"></tiny-button-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyButtonGroup } from '@opentiny/vue'

const value = ref(1)
const groupData = ref([
  { text: 'Button1', value: 1 },
  { text: 'Button2', value: 2 },
  { text: 'Button3', value: 3 }
])

const disabledGroup = ref([
  { text: 'Button1', value: 1 },
  { text: 'Button2', value: 2, disabled: true, tip: '因为 xxx 原因被禁用' },
  { text: 'Button3', value: 3 }
])
</script>

<style scoped>
.mt-12 {
  margin-top: 12px;
}
</style>
