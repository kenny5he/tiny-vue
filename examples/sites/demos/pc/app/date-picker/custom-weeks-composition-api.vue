<template>
  <div>
    <p>默认隐藏周次序号：</p>
    <br />
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value"></tiny-date-picker>
    </div>
    <br />

    <p>显示周次序号：</p>
    <br />
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" show-week-number></tiny-date-picker>
    </div>
    <br />

    <p>自定义周次序号的格式：</p>
    <br />
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" show-week-number :format-weeks="formatWeeks"></tiny-date-picker>
    </div>
    <br />
    <p>weekFirstDays: {{ eachWeekFirstDay }}</p>
    <br />
    <p>自定义每周第一天是星期几：</p>
    <br />
    <div class="demo-date-picker-wrap">
      <tiny-date-picker v-model="value" :picker-options="pickerOptions"></tiny-date-picker>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyDatePicker } from '@opentiny/vue'

const eachWeekFirstDay = ref([])
const value = ref('')
const pickerOptions = ref({
  firstDayOfWeek: 1
})

function formatWeeks(customWeeks, weekFirstDays) {
  eachWeekFirstDay.value = weekFirstDays
  return customWeeks + 'w'
}
</script>

<style scoped>
.demo-date-picker-wrap {
  width: 360px;
}
</style>
