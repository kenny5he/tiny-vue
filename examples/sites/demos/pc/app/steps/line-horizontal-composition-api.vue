<template>
  <div>
    <p>带描述：</p>
    <tiny-steps line :data="data1" :visible-num="5" :active="active" @click="advancedClick"></tiny-steps>
    <p class="mt24">不带描述：</p>
    <tiny-steps line :data="data2" :active="active" @click="advancedClick"></tiny-steps>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { TinySteps, TinyModal } from '@opentiny/vue'

const active = ref(1)
const data1 = reactive([
  {
    name: 'Basic Info',
    status: 'done',
    description: 'done 已完成'
  },
  { name: 'BOQ Info', status: 'doing', description: 'doing 处理中' },
  { name: '进行中 BOQ Info', status: 'disabled', description: 'disabled 禁用' },
  { name: 'BBQ Info', status: 'error', description: 'error 错误' },
  { name: 'BBQ Info', description: '默认无状态' },
  { name: '隐藏的节点 1', description: '我是隐藏的' },
  { name: '隐藏的节点 2', description: '我也是隐藏的' }
])
const data2 = reactive([
  {
    name: 'Basic Info',
    status: 'done'
  },
  { name: 'BOQ Info', status: 'doing' },
  { name: '进行中 BOQ Info', status: 'disabled' },
  { name: 'BBQ Info', status: 'error' },
  { name: 'BBQ Info' }
])

const advancedClick = (index, node) => {
  active.value = index
  TinyModal.message({ message: `节点 index: ${index}; 节点信息：${JSON.stringify(node)}.`, status: 'info' })
}
</script>
