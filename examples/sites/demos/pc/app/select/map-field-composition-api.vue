<template>
  <div>
    <p>场景 1：配置式配置映射字段</p>
    <br />
    <tiny-select v-model="value1" multiple :options="options" value-field="val" text-field="text"> </tiny-select>
    <br /><br />
    <p>场景 2：嵌套表格配置映射字段</p>
    <br />
    <tiny-select
      v-model="value2"
      multiple
      value-field="id"
      text-field="city"
      render-type="grid"
      :grid-op="gridOp"
    ></tiny-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinySelect } from '@opentiny/vue'

const value1 = ref(['选项 1', '选项 2'])
const value2 = ref(['001', '002'])
const gridOp = ref({
  data: [
    { id: '001', area: '华南区', province: '广东省', city: '广州市' },
    { id: '002', area: '华南区', province: '广东省', city: '深圳市' },
    { id: '003', area: '华南区', province: '广东省', city: '珠海市' },
    { id: '004', area: '华南区', province: '广东省', city: '佛山市' },
    { id: '005', area: '华南区', province: '广东省', city: '中山市' }
  ],
  columns: [
    { type: 'selection', title: '' },
    { field: 'area', title: '区域', width: 90 },
    { field: 'province', title: '省份', width: 60 },
    { field: 'city', title: '城市', width: 60 }
  ]
})

const options = ref([
  { val: '选项 1', text: '北京' },
  { val: '选项 2', text: '上海' },
  { val: '选项 3', text: '天津' },
  { val: '选项 4', text: '重庆' },
  { val: '选项 5', text: '深圳' },
  { val: '选项 6', text: '南京' },
  { val: '选项 7', text: '成都' }
])
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
p {
  font-size: 14px;
  line-height: 1.5;
}
</style>
