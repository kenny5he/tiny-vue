<template>
  <tiny-chart-graph :options="options" height="600px"></tiny-chart-graph>
</template>

<script setup>
import { ref } from 'vue'
import { TinyHuichartsGraph as TinyChartGraph } from '@opentiny/vue'

let axisData = ['周一', '周二', '周三', '很长很长的周四', '周五', '周六', '周日']

const data = [800, 600, 900, 1500, 3200, 4800, 900]

let links = data.map((item, i) => {
  return {
    source: i,
    target: i + 1
  }
})
links.pop()

const options = ref({
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: axisData
  },
  yAxis: {
    type: 'value'
  },
  grid: {
    right: 30,
    left: 50
  },
  series: [
    {
      type: 'graph',
      layout: 'none',
      color: '#42A5F5',
      coordinateSystem: 'cartesian2d',
      symbolSize: 40,
      label: {
        show: true
      },
      edgeSymbol: ['circle', 'arrow'],
      edgeSymbolSize: [4, 10],
      data,
      links,
      lineStyle: {
        color: '#2f4554'
      }
    }
  ]
})
</script>
