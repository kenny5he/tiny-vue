<template>
  <div>
    <tiny-line :options="options"></tiny-line>
  </div>
</template>

<script lang="jsx">
import { TinyHuichartsLine } from '@opentiny/vue'

export default {
  components: {
    TinyLine: TinyHuichartsLine
  },
  data() {
    return {
      options: {
        padding: [50, 30, 50, 20],
        step: true, // true 属性配置阶梯线
        legend: {
          show: true,
          icon: 'line'
        },
        data: [
          { Month: 'Jan', Domestic: 33, Abroad: 1 },
          { Month: 'Feb', Domestic: 27, Abroad: 39 },
          { Month: 'Mar', Domestic: 31, Abroad: 20 },
          { Month: 'Apr', Domestic: 30, Abroad: 15 },
          { Month: 'May', Domestic: 37, Abroad: 1 },
          { Month: 'Jun', Domestic: 36, Abroad: 17 },
          { Month: 'Jul', Domestic: 42, Abroad: 22 },
          { Month: 'Aug', Domestic: 22, Abroad: 12 },
          { Month: 'Sep', Domestic: 17, Abroad: 30 },
          { Month: 'Oct', Domestic: 40, Abroad: 33 },
          { Month: 'Nov', Domestic: 42, Abroad: 22 },
          { Month: 'Dec', Domestic: 32, Abroad: 1 }
        ],
        xAxis: 'Month',
        yAxis: {
          name: 'Units(Number)'
        }
      }
    }
  }
}
</script>
