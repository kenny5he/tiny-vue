<template>
  <div>
    <tiny-select v-model="value" placeholder="请选择" title="标题">
      <tiny-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        @click.native="clickItem(item.value)"
        :highlight-class="item._highlightClass"
      ></tiny-option>
    </tiny-select>
  </div>
</template>

<script>
import { TinySelect, TinyOption } from '@opentiny/vue'
import Memorize from '@opentiny/vue-renderless/common/deps/memorize'

const MemorizeInstance = new Memorize({ key: 'test456' })

const options = MemorizeInstance.assemble([
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
])

export default {
  components: {
    TinySelect,
    TinyOption
  },
  data() {
    return {
      options,
      value: '选项3'
    }
  },
  methods: {
    clickItem(value) {
      MemorizeInstance.updateByKey(value)
    }
  }
}
</script>
