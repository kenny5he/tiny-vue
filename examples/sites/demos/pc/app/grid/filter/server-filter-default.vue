<template>
  <div>
    <tiny-button class="mb-20" @click="loadData">加载数据</tiny-button>
    <tiny-grid ref="grid" :fetch-data="fetchData" :auto-load="false" remote-filter :pager="pager">
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column type="selection" width="60"></tiny-grid-column>
      <tiny-grid-column field="name" title="公司名称" sortable></tiny-grid-column>
      <tiny-grid-column field="employees" title="员工数" sortable></tiny-grid-column>
      <tiny-grid-column field="createdDate" title="创建日期" sortable></tiny-grid-column>
      <tiny-grid-column field="city" title="城市" :filter="cityFilter" sortable></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script lang="jsx">
import { TinyGrid, TinyGridColumn, TinyPager, TinyButton } from '@opentiny/vue'

export default {
  components: {
    TinyGrid,
    TinyGridColumn,
    TinyButton
  },
  data() {
    return {
      pager: {
        component: TinyPager,
        attrs: {
          currentPage: 1,
          pageSize: 5,
          total: 0,
          pageSizes: [5, 10, 15, 20],
          layout: 'total, sizes, prev, pager, next, jumper'
        }
      },
      cityFilter: {
        multi: true,
        enumable: true,
        defaultFilter: false,
        inputFilter: false,
        condition: {
          type: 'enum',
          value: ['福州']
        }
      },
      fetchData: {
        filter: true,
        api: this.getData
      },
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
          city: '深圳',
          employees: 540,
          createdDate: '2016-06-03 13:53:25'
        }
      ]
    }
  },
  methods: {
    loadData() {
      this.$refs.grid.handleFetch()
    },
    getData({ page, filters }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          // 此处为用户自定义的服务端分页、排序、过滤服务
          const startIndex = (page.currentPage - 1) * page.pageSize
          const allData = this.tableData.filter((item) => {
            return !filters.city || !filters.city.value.length || filters.city.value.includes(item.city)
          })
          const data = {
            result: allData.slice(startIndex, startIndex + page.pageSize),
            page: Object.assign({}, page, { total: allData.length })
          }

          resolve({ result: data.result, page: data.page })
        }, 200)
      })
    }
  }
}
</script>

<style scoped>
.mb-20 {
  margin-bottom: 20px;
}
</style>
