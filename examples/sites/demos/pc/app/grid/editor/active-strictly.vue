<template>
  <tiny-grid
    :data="tableData"
    show-overflow="ellipsis"
    :edit-config="{ activeMethod, mode: 'row', activeStrictly: true }"
    :cell-class-name="cellClassName"
  >
    <tiny-grid-column type="index" width="60"></tiny-grid-column>
    <tiny-grid-column field="name" title="名称" :editor="{ component: 'input' }"></tiny-grid-column>
    <tiny-grid-column field="area" title="区域" :editor="{ component: 'select', options }"></tiny-grid-column>
    <tiny-grid-column field="address" title="地址" :editor="{ component: 'input' }"></tiny-grid-column>
    <tiny-grid-column field="introduction" title="公司简介" :editor="{ component: 'input' }"></tiny-grid-column>
  </tiny-grid>
</template>

<script>
import { TinyGrid, TinyGridColumn } from '@opentiny/vue'

export default {
  components: {
    TinyGrid,
    TinyGridColumn
  },
  data() {
    return {
      options: [
        { label: '华北区', value: '华北区' },
        { label: '华东区', value: '华东区' },
        { label: '华南区', value: '华南区' }
      ],
      tableData: [
        {
          id: '1',
          name: 'GFD 科技有限公司',
          area: '华东区',
          address: '福州',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '2',
          name: 'WWWW 科技有限公司',
          area: '华南区',
          address: '深圳福田区',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '3',
          name: 'RFV 有限责任公司',
          area: '华南区',
          address: '中山市',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '4',
          name: 'TGB 有限公司',
          area: '华北区',
          address: '梅州',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '5',
          name: 'YHN 科技有限公司',
          area: '华南区',
          address: '韶关',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        },
        {
          id: '6',
          name: '康康物业有限公司',
          area: '华北区',
          address: '广州天河区',
          introduction: '公司技术和研发实力雄厚，是国家 863 项目的参与者，并被政府认定为“高新技术企业”。'
        }
      ]
    }
  },
  methods: {
    activeMethod({ row, column }) {
      return column.property !== 'name' && row.id !== '3'
    },
    cellClassName({ row, column }) {
      return this.activeMethod({ row, column }) ? '' : 'disable-cell-edit'
    }
  }
}
</script>

<style>
.disable-cell-edit {
  background-color: #e8ebef;
}
</style>
