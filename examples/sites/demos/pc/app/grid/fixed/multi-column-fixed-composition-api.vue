<template>
  <tiny-grid height="500" :data="tableData">
    <tiny-grid-column type="index" width="60" fixed="left"></tiny-grid-column>
    <tiny-grid-column type="selection" width="60" fixed="left"></tiny-grid-column>
    <tiny-grid-column field="name" title="公司名称" width="500"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数" width="500"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数-1" width="500"></tiny-grid-column>
    <tiny-grid-column field="employees" title="员工数-2" width="500"></tiny-grid-column>
    <tiny-grid-column field="city" title="城市" width="200" fixed="right"></tiny-grid-column>
    <tiny-grid-column field="createdDate" title="创建日期" width="500"></tiny-grid-column>
  </tiny-grid>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyGrid, TinyGridColumn } from '@opentiny/vue'

const tableData = ref(
  Array.from({ length: 30 }, (a, i) => {
    return {
      id: `${i + 1}`,
      name: 'GFD 科技 YX 公司',
      city: '福州',
      employees: 800 + i,
      createdDate: '2014-04-30 00:56:00'
    }
  })
)
</script>
