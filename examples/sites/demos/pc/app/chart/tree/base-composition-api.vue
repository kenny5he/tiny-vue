<template>
  <div>
    <tiny-chart-tree :options="options"></tiny-chart-tree>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyHuichartsTree as TinyChartTree } from '@opentiny/vue'

const options = ref({
  // 图表类型（线型树图）
  type: 'LineTreeChart',

  // padding 控制图表距离容器的上、右、下、左 padding 值
  padding: [20, 80, 20, 80],
  // 图元的大小，默认值 10
  symbolSize: 10,

  // 连线的形状，仅 type 为 LineTreeChart 有效，'curve'或'polyline',默认值'curve'
  lineType: 'curve',

  // 初始树图的展开层级，最小值为 1，默认值 1
  initialTreeDepth: 2,

  // 树图的起点方向，仅 type 为 LineTreeChart 有效，取值'left','right','top','bottom',默认值'left'
  direction: 'left',
  data: [
    {
      name: '节点',
      data: [
        {
          name: 'flares',
          children: [
            {
              name: 'datas',
              children: [
                {
                  name: 'converters',
                  children: [
                    { name: 'Converters', value: 721 },
                    { name: 'DelimitedTextConverter', value: 4291 }
                  ]
                },
                {
                  name: 'DataUtil',
                  value: 3321
                }
              ]
            },
            {
              name: 'display',
              children: [
                { name: 'DirtySprite', value: 8831 },
                { name: 'LineSprite', value: 1731 },
                { name: 'RectSprite', value: 3621 }
              ]
            },
            {
              name: 'flex',
              children: [{ name: 'FlareVis', value: 4111 }]
            },
            {
              name: 'query',
              children: [
                { name: 'AggregateExpression', value: 1611 },
                { name: 'And', value: 1021 },
                { name: 'Arithmetic', value: 3891 },
                { name: 'Average', value: 891 },
                { name: 'BinaryExpression', value: 2891 },
                {
                  name: 'methods',
                  children: [
                    { name: 'add', value: 591 },
                    { name: 'and', value: 331 },
                    { name: 'average', value: 28 },
                    { name: 'count', value: 271 },
                    { name: 'distinct', value: 291 }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
})
</script>
