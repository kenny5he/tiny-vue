<template>
  <div>
    <tiny-chart-process :options="options"></tiny-chart-process>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyHuichartsProcess as TinyChartProcess } from '@opentiny/vue'

const options = ref({
  // 图表名称
  name: 'ProcessBarChart',
  // 主题，默认值'light'
  theme: 'light',
  // Padding 控制图表距离容器的上、右、下、左 padding 值
  padding: [32, 32, 0, 32], // 颜色组，循环使用
  color: ['#fa2a2d', '#ff7500', '#ffbf00', '#41ba41', '#00aaee'],
  barWidth: 25,
  unit: '',
  calibrationValue: 200,
  // 数据
  data: [
    { name: 'UniEPMgr', value: 80 },
    { name: 'SMLoglic', value: 65 },
    { name: 'SSO', value: 45 },
    { name: 'APIMgr', value: 20 },
    { name: 'Logtransfer', value: 12 }
  ]
})
</script>
