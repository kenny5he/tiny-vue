<template>
  <div>
    <tiny-button @click="click" style="margin-bottom: 15px"> 设置value值 </tiny-button>
    <tiny-select v-model="value" ref="drop" placeholder="请选择" multiple title="标题">
      <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
    </tiny-select>
  </div>
</template>

<script>
import { TinySelect, TinyOption, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinySelect,
    TinyOption,
    TinyButton
  },
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      value: ''
    }
  },
  methods: {
    click() {
      this.value = ['选项4']
    }
  }
}
</script>
