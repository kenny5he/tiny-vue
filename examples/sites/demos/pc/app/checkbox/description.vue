<template>
  <tiny-checkbox-group v-model="checked">
    <tiny-checkbox label="复选框 1"></tiny-checkbox>
    <tiny-checkbox label="复选框 2" text="复选框 2 文本"></tiny-checkbox>
    <tiny-checkbox label="复选框 3" text="复选框 3">复选框 3 文本</tiny-checkbox>
  </tiny-checkbox-group>
</template>

<script>
import { TinyCheckbox, TinyCheckboxGroup } from '@opentiny/vue'

export default {
  components: {
    TinyCheckbox,
    TinyCheckboxGroup
  },
  data() {
    return {
      checked: ['复选框 1', '复选框 2', '复选框 3']
    }
  }
}
</script>
