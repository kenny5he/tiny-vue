<template>
  <tiny-tree-select v-model="value" :tree-op="treeOp" multiple></tiny-tree-select>
</template>

<script setup>
import { ref } from 'vue'
import { TinyTreeSelect } from '@opentiny/vue'

const value = ref([9, 6])

const treeOp = ref({
  data: [
    {
      value: 1,
      label: '一级 1',
      children: [
        {
          value: 4,
          label: '二级 1-1',
          children: [
            {
              value: 9,
              label: '三级 1-1-1'
            },
            {
              value: 10,
              label: '三级 1-1-2'
            }
          ]
        }
      ]
    },
    {
      value: 2,
      label: '一级 2',
      children: [
        {
          value: 5,
          label: '二级 2-1'
        },
        {
          value: 6,
          label: '二级 2-2'
        }
      ]
    }
  ]
})
</script>

<style scoped>
.tiny-tree-select {
  width: 280px;
}
</style>
