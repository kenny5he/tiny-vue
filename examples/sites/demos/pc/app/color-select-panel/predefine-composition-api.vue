<template>
  <div>
    <tiny-button @click="changeVisible">Show Color select panel</tiny-button>
    <tiny-button @click="addPredefineColor">Append predefine color</tiny-button>
    <tiny-button @click="popPredefineColor">Pop predefine color</tiny-button>
    <tiny-button @click="enablePredefineColor = !enablePredefineColor">Toggle Predefine color visibility</tiny-button>
    <div style="position: relative">
      <tiny-color-select-panel
        v-model="color"
        :visible="visible"
        @confirm="onConfirm"
        @cancel="onCancel"
        :predefine="predefine"
        :enable-predefine-color="enablePredefineColor"
        alpha
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyColorSelectPanel, TinyButton } from '@opentiny/vue'

const color = ref('#66ccff')
const visible = ref(false)
const changeVisible = () => (visible.value = !visible.value)
const hidden = () => (visible.value = false)
const enablePredefineColor = ref(false)
const onConfirm = () => {
  hidden()
}
const onCancel = () => {
  hidden()
}
const randomHex = () =>
  '#' +
  Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')
const predefine = ref(new Array(8).fill(0).map(() => randomHex()))
const addPredefineColor = () => {
  predefine.value.push(randomHex())
}
const popPredefineColor = () => {
  predefine.value.pop()
}
</script>
