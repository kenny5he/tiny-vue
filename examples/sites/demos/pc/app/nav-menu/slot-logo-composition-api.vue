<template>
  <div class="preview">
    <tiny-nav-menu :data="menuData">
      <template #logo>
        <tiny-icon-total class="icon-logo"></tiny-icon-total>
      </template>
    </tiny-nav-menu>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinyNavMenu } from '@opentiny/vue'
import { iconTotal } from '@opentiny/vue-icon'

const menuData = ref([
  {
    title: '首页',
    url: '',
    id: '1'
  },
  {
    title: '指南',
    url: '',
    id: '2',
    children: [
      {
        title: '引入组件',
        url: '',
        id: '2-1'
      },
      {
        title: '后端适配器',
        url: '',
        id: '2-2'
      }
    ]
  },
  {
    title: '组件',
    url: '',
    id: '3',
    children: [
      {
        title: '表单组件',
        url: '',
        id: '3-1',
        children: [
          {
            title: 'Datepicker 日期',
            url: 'datepicker',
            id: '3-1-1'
          },
          {
            title: 'Cascader 级联选择器',
            url: 'cascader',
            id: '3-1-2'
          },
          {
            title: 'DropTimes 下拉时间',
            url: 'droptimes',
            id: '3-1-3'
          }
        ]
      },
      {
        title: '数据展示',
        url: '',
        id: '3-2',
        children: [
          {
            title: 'Card 卡片',
            url: 'card',
            id: '3-2-1'
          },
          {
            title: 'Collapse 折叠面板',
            url: 'collapse',
            id: '3-2-2'
          },
          {
            title: 'Guide 引导',
            url: 'guide',
            id: '3-2-3'
          }
        ]
      },
      {
        title: '导航组件',
        url: '',
        id: '3-3',
        children: [
          {
            title: 'ToggleMenu 收缩菜单',
            url: 'toggleMenu',
            id: '3-3-1'
          },
          {
            title: 'TreeMenu 树型菜单',
            url: 'treemenu',
            id: '3-3-2'
          },
          {
            title: 'Breadcrumb 面包屑',
            url: 'breadcrumb',
            id: '3-3-3'
          }
        ]
      },
      {
        title: '业务组件',
        url: '',
        id: '3-4',
        children: [
          {
            title: 'Amount 金额',
            url: 'amount',
            id: '3-4-1'
          },
          {
            title: 'Area 片区',
            url: 'area',
            id: '3-4-2'
          },
          {
            title: 'Company 公司',
            url: 'company',
            id: '3-4-3'
          }
        ]
      }
    ]
  },
  {
    title: '其他',
    url: 'crop',
    id: '4'
  }
])

const TinyIconTotal = iconTotal()
</script>

<style scoped>
.preview {
  min-height: 450px;
}
</style>
