<template>
  <div>
    <div class="title">待办事项：</div>
    <div
      v-for="item in options"
      :key="item.title"
      :class="{
        is_disabled: item.disabled,
        list: true
      }"
      v-auto-tip="item.disabled ? { always: true, content: item.disabledReason, effect: 'dark' } : false"
    >
      {{ item.text }}
    </div>
  </div>
</template>

<script setup lang="jsx">
import { AutoTip } from '@opentiny/vue-directive'

const VAutoTip = AutoTip

const options = [
  { text: '去游泳馆游泳', disabled: false },
  { text: '去羽毛球馆打羽毛球', disabled: true, disabledReason: '羽毛球拍坏了' },
  {
    text: '去爬山/海边沙滩',
    disabled: true,
    disabledReason: (
      <span>
        还没有选择项目，现在去{' '}
        <a href="javascript:void(0)" style="color:#f80">
          选择
        </a>
      </span>
    )
  }
]
</script>

<style scoped>
.title {
  font-size: 16px;
  font-weight: bolder;
  margin-bottom: 20px;
}
.list {
  width: 260px;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px solid #ccc;
  margin-top: 10px;
}
.is_disabled {
  cursor: not-allowed;
  text-decoration: line-through;
}
</style>
