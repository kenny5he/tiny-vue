<template>
  <div>
    <tiny-radio-group v-model="value" vertical>
      <tiny-radio label="1">备选项 1</tiny-radio>
      <tiny-radio label="2">备选项 2</tiny-radio>
      <tiny-radio label="3">备选项 3</tiny-radio>
    </tiny-radio-group>
    <tiny-radio-group v-model="value" vertical class="ml-20">
      <tiny-radio-button label="1">备选项 1</tiny-radio-button>
      <tiny-radio-button label="2">备选项 2</tiny-radio-button>
      <tiny-radio-button label="3">备选项 3</tiny-radio-button>
    </tiny-radio-group>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyRadio, TinyRadioGroup, TinyRadioButton } from '@opentiny/vue'

const value = ref('1')
</script>

<style scoped>
.ml-20 {
  margin-left: 20px;
}
</style>
