<template>
  <tiny-popeditor v-model="value" :grid-op="gridOp" text-field="name" value-field="id" :conditions="conditions">
    <template #search="slotScope">
      <div class="list">
        <div class="item">
          <span>公司名：</span>{{ params.name }}
          <tiny-input type="text" v-model="params.name"></tiny-input>
        </div>
        <div class="item">
          <span> 城市：</span>
          <tiny-input type="text" v-model="params.city"></tiny-input>
        </div>
      </div>
      <div class="buttons">
        <tiny-button type="primary" @click="slotScope.searchOp.doSearch(params)">Search</tiny-button>
        <tiny-button @click="slotScope.searchOp.doClear(params)">Clear</tiny-button>
      </div>
    </template>
  </tiny-popeditor>
</template>

<script setup>
import { ref } from 'vue'
import { TinyPopeditor, TinyInput, TinyButton } from '@opentiny/vue'

const dataset = [
  {
    id: '1',
    name: 'GFD 科技 YX 公司',
    city: '福州',
    province: '福建'
  },
  {
    id: '2',
    name: 'WWW 科技 YX 公司',
    city: '深圳',
    province: '广东'
  },
  {
    id: '3',
    name: 'RFV 有限责任公司',
    city: '中山',
    province: '广东'
  },
  {
    id: '4',
    name: 'TGB 科技 YX 公司',
    city: '龙岩',
    province: '福建'
  },
  {
    id: '5',
    name: 'YHN 科技 YX 公司',
    city: '韶关',
    province: '广东'
  },
  {
    id: '6',
    name: 'WSX 科技 YX 公司',
    city: '黄冈',
    province: '武汉'
  },
  {
    id: '7',
    name: 'KBG 物业 YX 公司',
    city: '赤壁',
    province: '武汉'
  },
  {
    id: '8',
    name: '深圳市福德宝网络技术 YX 公司',
    province: '广东',
    city: '深圳'
  },
  {
    id: '9',
    name: 'KBG 物业 YX 公司',
    city: '赤壁',
    province: '武汉'
  },
  {
    id: '10',
    name: '深圳市福德宝网络技术 YX 公司',
    province: '广东',
    city: '深圳'
  }
]

const params = ref({
  name: '',
  city: ''
})
const value = ref('')
const gridOp = ref({
  columns: [
    {
      field: 'id',
      title: 'ID',
      width: 50
    },
    {
      field: 'name',
      title: '名称'
    },
    {
      field: 'province',
      title: '省份',
      width: 80
    },
    {
      field: 'city',
      title: '城市',
      width: 80
    }
  ],
  data: dataset
})
const conditions = ref([
  { label: '公司名', field: 'name' },
  { label: '城市', field: 'city' }
])
</script>

<style lang="less" scoped>
.tiny-popeditor__dialog-box {
  .tiny-popeditor-top .list {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 24px;
    line-height: 1.5;

    .item {
      width: 50%;

      &:nth-child(2n + 1) {
        padding-right: 16px;
      }
    }
  }
  .buttons {
    margin-top: 12px;
    text-align: right;
  }
}
</style>
