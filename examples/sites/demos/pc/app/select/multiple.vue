<template>
  <div>
    <div>场景 1：多选</div>
    <br />
    <tiny-select v-model="value1" multiple searchable>
      <tiny-option
        v-for="item in options1"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
        :required="item.required"
      >
      </tiny-option>
    </tiny-select>
    <br />
    <br />
    <div>场景 2：必选</div>
    <br />
    <tiny-select v-model="value2" multiple>
      <tiny-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
        :required="item.required"
      >
      </tiny-option>
    </tiny-select>
    <br />
    <br />
    <div>场景 3：配置式必选</div>
    <br />
    <tiny-select v-model="value3" multiple :options="options2"> </tiny-select>
    <br />
    <br />
    <div>场景 4：多选个数限制</div>
    <br />
    <tiny-select v-model="value4" :options="options1" multiple :multiple-limit="2" show-limit-text> </tiny-select>
    <br />
    <br />
    <div>场景 5：自定义图标 + 自定义样式</div>
    <br />
    <tiny-select
      v-model="value4"
      multiple
      :options="options1"
      :dropdown-icon="iconPopup"
      :drop-style="{ width: '200px', 'min-width': '200px' }"
    >
    </tiny-select>
    <br />
    <br />
    <div>场景 6：禁用</div>
    <br />
    <tiny-select v-model="value5" multiple :options="options1" disabled> </tiny-select>
    <br />
    <br />
    <div>场景 7：只展示</div>
    <br />
    <tiny-select v-model="value5" multiple :options="options1" display-only> </tiny-select>
    <br />
    <br />
    <div>场景 8：显示全选文本</div>
    <br />
    <tiny-select v-model="value5" multiple :options="options1" show-all-text-tag> </tiny-select>
    <br />
    <br />
    <tiny-select v-model="value5" multiple :options="options1" show-all-text-tag disabled> </tiny-select>
    <br />
    <br />
    <div>场景 9：折叠 tag + 必选项 + 禁用项</div>
    <br />
    <tiny-select v-model="value5" multiple :options="options1" collapse-tags> </tiny-select>
    <br />
    <br />
    <div>场景 10：悬浮展开 + 必选项 + 禁用项</div>
    <br />
    <tiny-select v-model="value5" multiple :options="options1" hover-expand> </tiny-select>
    <br />
    <br />
    <br />
    <div>场景 11：点击展开 + 必选项 + 禁用项</div>
    <br />
    <tiny-select v-model="value5" multiple :options="options1" click-expand> </tiny-select>
  </div>
</template>

<script>
import { TinySelect, TinyOption } from '@opentiny/vue'
import { iconPopup } from '@opentiny/vue-icon'

export default {
  components: {
    TinySelect,
    TinyOption
  },
  data() {
    return {
      options1: [
        { value: '选项 1', label: '北京 (禁用)', disabled: true }, // 禁用项
        { value: '选项 2', label: '上海 (必选)', required: true }, // 必选项
        { value: '选项 3', label: '天津' },
        { value: '选项 4', label: '重庆' },
        { value: '选项 5', label: '深圳' },
        { value: '选项 6', label: '南京' },
        { value: '选项 7', label: '成都' }
      ],
      options2: [
        { value: '选项 1', label: '北京' },
        { value: '选项 2', label: '上海' },
        { value: '选项 3', label: '天津' },
        { value: '选项 4', label: '重庆' },
        { value: '选项 5', label: '深圳 (必选)', required: true },
        { value: '选项 6', label: '南京' },
        { value: '选项 7', label: '成都' }
      ],
      value1: ['选项 1', '选项 2'],
      value2: ['选项 1', '选项 2'],
      value3: ['选项 1', '选项 2'],
      value4: [],
      value5: ['选项 1', '选项 2', '选项 3', '选项 4', '选项 5', '选项 6', '选项 7'],
      iconPopup: iconPopup()
    }
  }
}
</script>

<style lang="less" scoped>
.tiny-select {
  width: 280px;
}
</style>
