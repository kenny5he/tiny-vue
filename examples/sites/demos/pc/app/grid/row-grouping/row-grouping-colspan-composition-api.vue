<template>
  <div class="grid-grouping">
    <tiny-grid height="320px" setting :row-group="rowGroup" :data="data">
      <tiny-grid-column type="index" width="60"></tiny-grid-column>
      <tiny-grid-column type="selection" width="60"></tiny-grid-column>
      <tiny-grid-column field="area" title="区域" sortable></tiny-grid-column>
      <!-- <tiny-grid-column field="province" title="省份" sortable></tiny-grid-column> -->
      <tiny-grid-column field="city" title="城市" sortable></tiny-grid-column>
      <tiny-grid-column field="name" title="公司名称" sortable></tiny-grid-column>
      <tiny-grid-column field="telephone" title="联系电话" sortable></tiny-grid-column>
    </tiny-grid>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TinyGrid, TinyGridColumn } from '@opentiny/vue'

const data = ref([
  {
    id: '1',
    name: 'GFD 科技有限公司',
    area: '华东区',
    province: '福建省',
    city: '福州',
    telephone: '15010000001'
  },
  {
    id: '2',
    name: 'WWW 科技有限公司',
    area: '华南区',
    province: '广东省',
    city: '深圳',
    telephone: '15010000002'
  },
  {
    id: '3',
    name: 'RFV 有限责任公司',
    area: '华南区',
    province: '广东省',
    city: '中山',
    telephone: '15010000003'
  },
  {
    id: '4',
    name: 'TGB 科技有限公司',
    area: '华东区',
    province: '福建省',
    city: '龙岩',
    telephone: '15010000004'
  },
  {
    id: '5',
    name: 'YHN 科技有限公司',
    area: '华南区',
    province: '广东省',
    city: '韶关',
    telephone: '15010000005'
  },
  {
    id: '6',
    name: 'WSX 科技有限公司',
    area: '华中区',
    province: '湖北省',
    city: '黄冈',
    telephone: '15010000006'
  },
  {
    id: '7',
    name: 'KBG 物业有限公司',
    area: '华中区',
    province: '湖北省',
    city: '赤壁',
    telephone: '15010000007'
  },
  {
    id: '8',
    name: '深圳市福德宝网络技术有限公司',
    address: '厦门岛内',
    area: '华东区',
    city: '厦门',
    telephone: '15010000008'
  },
  {
    id: '9',
    name: 'UJM 有限责任公司',
    area: '华南区',
    province: '广西省',
    city: '南宁',
    telephone: '15010000009'
  },
  {
    id: '10',
    name: 'IKA 有限责任公司',
    area: '华南区',
    province: '广西省',
    city: '北海',
    telephone: '15510000001'
  },
  {
    id: '11',
    name: 'TIG 管理有限公司',
    area: '华南区',
    province: '广西省',
    city: '桂林',
    telephone: '15510000002'
  },
  {
    id: '12',
    name: 'GGT 科技有限公司',
    area: '西南区',
    province: '云南省',
    city: '昆明',
    telephone: '15510000003'
  }
])

const rowGroup = ref({ field: 'province', colspan: 2 })
</script>

<style>
.grid-grouping .tiny-badge {
  display: inline-block;
  min-width: 20px;
  height: 20px;
  line-height: 20px;
  padding: 0 4px;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
  vertical-align: baseline;
  white-space: nowrap;
  text-align: center;
  background-color: #f5222d;
  border-radius: 50%;
}
</style>
