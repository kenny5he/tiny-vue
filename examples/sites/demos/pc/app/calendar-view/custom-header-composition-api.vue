<template>
  <tiny-calendar-view :events="eventslist" :year="2023" :month="5">
    <template #header="{ slotScope }">
      <p>{{ slotScope.date }} {{ slotScope.weekDay }}</p>
    </template>
  </tiny-calendar-view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TinyCalendarView } from '@opentiny/vue'

const eventslist = ref([
  {
    title: '前端周会 1',
    start: '2023-05-15 8:00:00',
    end: '2023-05-15 9:00:00',
    content: '日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注',
    theme: 'blue'
  },
  {
    title: '前端周会 2',
    start: '2023-05-15 10:00:00',
    end: '2023-05-15 12:00:00',
    content: '日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注',
    theme: 'blue'
  },
  {
    title: '前端周会 2-1',
    start: '2023-05-15 13:00:00',
    end: '2023-05-15 15:00:00',
    content: '日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注',
    theme: 'blue'
  },
  {
    title: '前端周会 3',
    start: '2023-05-16 9:00:00',
    end: '2023-05-16 10:00:00',
    content: '日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注',
    theme: 'blue'
  },
  {
    title: '前端周会 4',
    start: '2023-05-16 11:00:00',
    end: '2023-05-16 14:00:00',
    content: '日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注',
    theme: 'blue'
  },
  {
    title: '前端周会 5',
    start: '2023-05-25 8:00:00',
    end: '2023-05-25 9:00:00',
    content: '日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注',
    theme: 'blue'
  },
  {
    title: '前端周会 6',
    start: '2023-05-26 8:00:00',
    end: '2023-05-26 11:30:00',
    content: '日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注',
    theme: 'blue'
  },
  {
    title: '前端周会 7',
    start: '2023-05-27 8:30:00',
    end: '2023-05-27 9:30:00',
    content: '日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注',
    theme: 'blue'
  },
  {
    title: '节假日 25-28',
    start: '2023-05-25 10:30:00',
    end: '2023-05-28 03:30:00',
    content: '日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注',
    theme: 'green'
  }
])
</script>
