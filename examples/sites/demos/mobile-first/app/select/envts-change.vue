<template>
  <tiny-select
    v-model="value"
    placeholder="请选择"
    clearable
    @change="change"
    @clear="clear"
    @blur="blur"
    @focus="focus"
    @dropdown-click="dropdownClick"
    title="标题"
  >
    <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </tiny-option>
  </tiny-select>
</template>

<script>
import { TinySelect, TinyOption, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinySelect,
    TinyOption
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
    change() {
      TinyModal.message({
        message: 'changes事件'
      })
    },
    clear() {
      TinyModal.message({
        message: 'clear事件'
      })
    },
    focus() {
      TinyModal.message({
        message: 'focus事件'
      })
    },
    blur() {
      TinyModal.message({
        message: 'blur事件'
      })
    },
    dropdownClick() {
      TinyModal.message({
        message: 'dropdown-click事件'
      })
    }
  }
}
</script>
