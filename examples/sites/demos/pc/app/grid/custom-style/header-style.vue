<template>
  <div class="header-style">
    <h4 class="title">自定义表头行样式：</h4>
    <tiny-grid :data="tableData" :header-row-class-name="headerRowClassName">
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column type="selection" width="60"></tiny-grid-column>
      <tiny-grid-column field="name" title="公司名称"></tiny-grid-column>
      <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
      <tiny-grid-column field="createdDate" title="创建日期"></tiny-grid-column>
      <tiny-grid-column field="city" title="城市"></tiny-grid-column>
    </tiny-grid>
    <h4 class="title">自定义表头单元格样式：</h4>
    <tiny-grid :data="tableData" :header-cell-class-name="headerCellClassName">
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column type="selection" width="60"></tiny-grid-column>
      <tiny-grid-column field="name" title="公司名称"></tiny-grid-column>
      <tiny-grid-column field="employees" title="员工数"></tiny-grid-column>
      <tiny-grid-column field="createdDate" :header-class-name="headerClassName" title="创建日期"></tiny-grid-column>
      <tiny-grid-column field="city" title="城市"></tiny-grid-column>
    </tiny-grid>
  </div>
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
      tableData: [
        {
          id: '1',
          name: 'GFD 科技 YX 公司',
          city: '福州',
          employees: 800,
          createdDate: '2014-04-30 00:56:00'
        },
        {
          id: '2',
          name: 'WWW 科技 YX 公司',
          city: '深圳',
          employees: 300,
          createdDate: '2016-07-08 12:36:22'
        },
        {
          id: '3',
          name: 'RFV 有限责任公司',
          city: '中山',
          employees: 1300,
          createdDate: '2014-02-14 14:14:14'
        },
        {
          id: '4',
          name: 'TGB 科技 YX 公司',
          city: '龙岩',
          employees: 360,
          createdDate: '2013-01-13 13:13:13'
        },
        {
          id: '5',
          name: 'YHN 科技 YX 公司',
          city: '韶关',
          employees: 810,
          createdDate: '2012-12-12 12:12:12'
        },
        {
          id: '6',
          name: 'WSX 科技 YX 公司',
          city: '黄冈',
          employees: 800,
          createdDate: '2011-11-11 11:11:11'
        },
        {
          id: '7',
          name: 'KBG 物业 YX 公司',
          city: '赤壁',
          employees: 400,
          createdDate: '2016-04-30 23:56:00'
        },
        {
          id: '8',
          name: '深圳市福德宝网络技术 YX 公司',
          city: '厦门',
          employees: 540,
          createdDate: '2016-06-03 13:53:25'
        }
      ]
    }
  },
  methods: {
    headerRowClassName({ $rowIndex }) {
      if ($rowIndex === 0) {
        return 'header__row--red'
      }
    },
    headerCellClassName({ column }) {
      if (column.property === 'name') {
        return 'header__cell--blue'
      }
    },
    headerClassName() {
      return 'header-blue'
    }
  }
}
</script>

<style scoped>
.title {
  font-size: 16px;
  padding: 15px;
  font-weight: bolder;
  color: #444;
}
.header-style :deep(.tiny-grid-header__row.header__row--red) {
  background-color: palevioletred;
}
.header-style :deep(.tiny-grid-header__column.header__cell--blue) {
  background-color: #2db7f5;
  color: #fff;
}
.header-style :deep(.header-blue) {
  background-color: #2db7f5;
  color: #fff;
}
</style>
