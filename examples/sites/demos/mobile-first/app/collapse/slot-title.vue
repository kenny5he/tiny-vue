<template>
  <tiny-collapse v-model="activeNames">
    <tiny-collapse-item name="1">
      <template #title>
        <div style="color: #1890ff">一致性 Consistency</div>
      </template>
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
      <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
    </tiny-collapse-item>
    <tiny-collapse-item name="2">
      <template #title>
        <div style="color: #52c41a">反馈 Feedback</div>
      </template>
      <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
      <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
    </tiny-collapse-item>
    <tiny-collapse-item name="3">
      <template #title>
        <div style="color: #faad14">效率 Efficiency</div>
      </template>
      <div>简化流程：设计简洁直观的操作流程；</div>
      <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
      <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
    </tiny-collapse-item>
    <tiny-collapse-item name="4">
      <template #title>
        <div @click.stop style="width: 100%; color: #f5222d">点击标题不折叠，点击图标折叠</div>
      </template>
      <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
      <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
    </tiny-collapse-item>
  </tiny-collapse>
</template>

<script>
import { TinyCollapse, TinyCollapseItem } from '@opentiny/vue'

export default {
  components: {
    TinyCollapse,
    TinyCollapseItem
  },
  data() {
    return {
      activeNames: ['1', '3']
    }
  }
}
</script>
