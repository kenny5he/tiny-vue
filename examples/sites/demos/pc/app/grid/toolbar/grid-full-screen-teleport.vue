<template>
  <tiny-teleport to="body" :disabled="!isFullscreen">
    <tiny-grid :data="tableData" :style="fullscreenStyle" @toolbar-button-click="toolbarButtonClick">
      <template #toolbar>
        <tiny-grid-toolbar :buttons="toolbarButtons"></tiny-grid-toolbar>
      </template>
      <tiny-grid-column field="name" title="名称"></tiny-grid-column>
      <tiny-grid-column field="area" title="所属区域"></tiny-grid-column>
      <tiny-grid-column field="address" title="地址"></tiny-grid-column>
      <tiny-grid-column field="introduction" title="公司简介" show-overflow></tiny-grid-column>
    </tiny-grid>
  </tiny-teleport>
</template>

<script>
import { Teleport } from '@opentiny/vue-common'
import { TinyGrid, TinyGridColumn, TinyGridToolbar } from '@opentiny/vue'

export default {
  components: {
    TinyTeleport: Teleport,
    TinyGrid,
    TinyGridColumn,
    TinyGridToolbar
  },
  data() {
    return {
      isFullscreen: false,
      fullscreenStyle: '',
      toolbarButtons: [
        { code: 'enterFullscreen', name: '进入全屏模式' },
        { code: 'exitFullscreen', name: '退出全屏模式' }
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
        }
      ]
    }
  },
  methods: {
    toolbarButtonClick({ code, $grid }) {
      this.isFullscreen = false
      this.fullscreenStyle = ''

      if (code === 'enterFullscreen') {
        this.isFullscreen = true
        this.fullscreenStyle = 'position:fixed;width:100vw;height:100vh;z-index:9999;top:0;left:0;'
      }

      this.$nextTick(() => $grid.recalculate())
    }
  }
}
</script>
