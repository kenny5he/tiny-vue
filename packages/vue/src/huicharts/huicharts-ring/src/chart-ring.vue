<template>
  <div class="hui-chart chart-box">
    <div ref="chartRef" :style="{ width, height }"></div>
    <slot></slot>
  </div>
</template>

<script>
import Core from '@opentiny/vue-huicharts-core'
import { t } from '@opentiny/vue-locale'
import { pie } from './ring'
import { $prefix } from '@opentiny/vue-common'

export default {
  name: $prefix + 'ChartRing',
  mixins: [Core],
  data() {
    return {
      iChartName: 'PieChart'
    }
  },
  methods: {
    updateChart() {
      let { columns = [], rows = [] } = this.data

      const extra = {
        legendVisible: this.legendVisible,
        tooltipVisible: this.tooltipVisible,
        t
      }
      this.huiChartOption = pie(columns, rows, this.settings, extra, true)
    }
  }
}
</script>
