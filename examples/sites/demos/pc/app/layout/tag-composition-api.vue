<template>
  <tiny-layout class="tiny-layout-tag1">
    <tiny-row tag="span">
      <tiny-col :span="3">
        <div class="col">span（行标签已改为 span）</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">span（行标签已改为 span）</div>
      </tiny-col>
      <tiny-col :span="3">
        <div class="col">span（行标签已改为 span）</div>
      </tiny-col>
    </tiny-row>
  </tiny-layout>
</template>

<script setup>
import { TinyLayout, TinyRow, TinyCol } from '@opentiny/vue'
</script>

<style scoped>
.col {
  line-height: 30px;
  text-align: center;
  color: #fff;
  background: #1f9ed8;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
