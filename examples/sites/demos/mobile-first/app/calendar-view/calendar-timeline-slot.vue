<template>
  <tiny-calendar-view :events="eventslist" :year="2023" :month="5">
    <template #timeline1="{ slotScope }">
      <div
        class="text-color-success bg-color-success-subtler border-l-2 border-color-success mt-10"
        v-for="(event, index) in slotScope.events"
        :key="index"
      >
        <p class="text-sm mb-1">{{ event.title }}</p>
        <p class="text-xs">{{ event.content }}</p>
      </div>
    </template>
    <template #timeline2="{ slotScope }">
      <div
        class="text-color-success bg-color-success-subtler border-l-2 border-color-success mt-10"
        v-for="(event, index) in slotScope.events"
        :key="index"
      >
        <p class="text-sm mb-1">{{ event.title }}</p>
        <p class="text-xs">{{ event.content }}</p>
      </div>
    </template>
  </tiny-calendar-view>
</template>

<script>
import { TinyCalendarView } from '@opentiny/vue'

export default {
  components: {
    TinyCalendarView
  },
  data() {
    return {
      eventslist: [
        {
          title: '前端周会1',
          start: '2023-05-15 8:30:00',
          end: '2023-05-15 9:00:00',
          content: '日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注',
          theme: 'blue'
        },
        {
          title: '前端周会2',
          start: '2023-05-15 10:00:00',
          end: '2023-05-15 12:00:00',
          content: '日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注',
          theme: 'green'
        },
        {
          title: '前端周会2-1',
          start: '2023-05-15 13:00:00',
          end: '2023-05-15 15:00:00',
          content: '日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注',
          theme: 'red'
        },
        {
          title: '前端周会3',
          start: '2023-05-16 9:00:00',
          end: '2023-05-16 10:00:00',
          content: '日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注',
          theme: 'yellow'
        },
        {
          title: '前端周会4',
          start: '2023-05-16 11:00:00',
          end: '2023-05-16 14:00:00',
          content: '日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注',
          theme: 'purple'
        },
        {
          title: '前端周会5',
          start: '2023-05-25 8:00:00',
          end: '2023-05-25 9:00:00',
          content: '日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注',
          theme: 'cyan'
        },
        {
          title: '前端周会6',
          start: '2023-05-26 8:00:00',
          end: '2023-05-26 11:30:00',
          content: '日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注',
          theme: 'blue'
        },
        {
          title: '前端周会6-1',
          start: '2023-05-26 12:00:00',
          end: '2023-05-26 13:30:00',
          content: '日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注',
          theme: 'cyan'
        },
        {
          title: '前端周会7',
          start: '2023-05-27 8:30:00',
          end: '2023-05-27 9:30:00',
          content: '日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注',
          theme: 'blue'
        },
        {
          title: '节假日25-28',
          start: '2023-05-25 10:30:00',
          end: '2023-05-28 03:30:00',
          content: '日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注',
          theme: 'green'
        },
        {
          title: '前端周会8',
          start: '2023-06-26 8:00:00',
          end: '2023-06-26 11:30:00',
          content: '日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注',
          theme: 'blue'
        },
        {
          title: '前端周会9',
          start: '2023-07-26 8:00:00',
          end: '2023-07-26 11:30:00',
          content: '日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注',
          theme: 'blue'
        },
        {
          title: '前端周会10',
          start: '2023-08-26 8:00:00',
          end: '2023-08-26 11:30:00',
          content: '日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注',
          theme: 'blue'
        },
        {
          title: '前端周会11',
          start: '2023-09-26 8:00:00',
          end: '2023-09-26 11:30:00',
          content: '日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注',
          theme: 'blue'
        },
        {
          title: '前端周会12',
          start: '2023-10-26 8:00:00',
          end: '2023-10-26 11:30:00',
          content: '日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注日程备注',
          theme: 'blue'
        }
      ]
    }
  }
}
</script>
