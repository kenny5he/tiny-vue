<template>
  <div class="demo-milestone">
    <tiny-milestone
      :data="milestoneData"
      :milestones-status="statusMap"
      time-field="date"
      name-field="name"
      status-field="progress"
      flag-status-field="progress"
      flag-name-field="title"
      completed-field="completed"
      flag-content-field="describe"
      flag-field="flags"
    ></tiny-milestone>
  </div>
</template>

<script lang="jsx">
import { TinyMilestone } from '@opentiny/vue'

export default {
  components: {
    TinyMilestone
  },
  data() {
    return {
      statusMap: {
        completed: '#f0f7ff',
        doing: '#e8faff',
        back: '#edf7df',
        end: '#faad14',
        cancel: '#f230301A'
      },
      milestoneData: [
        {
          name: 'POR1', // name-field 设置的键名
          date: '2018-9-7', // time-field 设置的键名
          progress: 'completed', // status-field 设置的键名，completed-field 设置的键值
          // flag-field 设置的键名
          flags: [
            {
              progress: 'completed', // flag-status-field 设置的键名
              title: '第一阶段', // flag-name-field 设置的键名
              describe: 'flag-content-field' // flag-content-field 设置的键名
            }
          ]
        },
        {
          name: 'POR2',
          date: '2018-9-8',
          progress: 'completed',
          flags: [
            {
              progress: 'back',
              title: '第二阶段',
              describe: 'flag-content-field'
            }
          ]
        },
        {
          name: 'POR3',
          date: '2018-9-10',
          progress: 'doing',
          content: null
        },
        {
          name: 'POR4',
          date: '2018-9-9',
          progress: 'cancel',
          flags: [
            {
              progress: 'back',
              describe: 'flag-content-field',
              title: '第四阶段 1'
            },
            {
              progress: 'doing',
              describe: 'flag-content-field',
              title: '第四阶段 2'
            }
          ]
        },
        {
          name: 'POR5',
          date: '2018-9-11',
          progress: 'back',
          flags: [
            {
              progress: 'completed',
              describe: 'flag-content-field',
              title: '第五阶段'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.demo-milestone ::v-deep .tiny-milestone__description-status {
  margin-top: 4px;
}
</style>
