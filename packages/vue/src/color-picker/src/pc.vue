<template>
  <div
    :class="[
      {
        'tiny-color-picker': true
      },
      state.size ? 'tiny-color-picker--' + state.size : ''
    ]"
    @click="() => changeVisible(!state.isShow)"
  >
    <div
      class="tiny-color-picker__inner"
      :style="{
        background: state.hex ?? ''
      }"
    >
      <IconChevronDown />
    </div>
    <Transition name="tiny-zoom-in-top">
      <color-select
        @confirm="onConfirm"
        @cancel="onCancel"
        v-model="state.hex"
        :visible="state.isShow"
        :alpha="alpha"
        :predefine="state.predefineStack"
        :history="state.stack"
        :format="format"
        :style="{
          'min-width': '420px'
        }"
        :enable-history="state.enableHistory"
        :enable-predefine-color="state.enablePredefineColor"
      />
    </Transition>
  </div>
</template>

<script>
import { renderless, api } from '@opentiny/vue-renderless/color-picker/vue'
import { props, setup, defineComponent } from '@opentiny/vue-common'
import { IconChevronDown } from '@opentiny/vue-icon'
import colorSelect from '@opentiny/vue-color-select-panel'
import '@opentiny/vue-theme/color-picker/index.less'

export default defineComponent({
  emits: ['update:modelValue', 'confirm', 'cancel'],
  props: [
    ...props,
    'modelValue',
    'visible',
    'alpha',
    'predefine',
    'history',
    'size',
    'format',
    'enableHistory',
    'enablePredefineColor'
  ],
  components: {
    IconChevronDown: IconChevronDown(),
    ColorSelect: colorSelect
  },
  setup(props, context) {
    return setup({ props, context, renderless, api })
  }
})
</script>
