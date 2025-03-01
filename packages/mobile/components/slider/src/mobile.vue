<!--
 * Copyright (c) 2022 - present TinyVue Authors.
 * Copyright (c) 2022 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 -->
<template>
  <div style="position: relative">
    <div
      ref="slider"
      :class="['tiny-mobile-slider', { 'tiny-mobile-slider__vertical': vertical, disabled }]"
      :style="{ height: vertical ? height : '' }"
      @touchstart="bindMouseDown"
    >
      <div
        :class="['tiny-mobile-slider__range', vertical ? 'tiny-mobile-slider__down' : 'tiny-mobile-slider__left']"
        :style="state.barStyle"
      ></div>
      <div
        class="tiny-mobile-slider__handle"
        tabindex="0"
        v-if="state.leftBtnShow"
        :style="state.leftBtnStyle"
        :class="{ 'handle-focus': state.activeIndex === 0 }"
        @mouseenter="displayTip"
        @mouseleave="hideTip"
        @keydown="bindKeyDown"
      ></div>
      <div
        class="tiny-mobile-slider__handle"
        tabindex="0"
        v-if="state.rightBtnShow"
        :style="state.rightBtnStyle"
        :class="{ 'handle-focus': state.activeIndex === 1 }"
        @mouseenter="displayTip"
        @mouseleave="hideTip"
        @keydown="bindKeyDown"
      ></div>
      <div ref="sliderTip" class="tiny-mobile-slider__tips" v-show="showTip && state.showTip" :style="state.tipStyle">
        {{ state.tipValue }}
      </div>
    </div>
    <template v-if="showInput && !state.isDouble">
      <div class="tiny-mobile-slider__input">
        <slot :slot-scope="state.activeValue">
          <input type="text" v-model="state.activeValue" :disabled="disabled" @change="inputOnChange" />
          <span class="tiny-mobile-slider__per">%</span>
        </slot>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { renderless, api } from './renderless/vue'
import { $prefix, setup, defineComponent } from '../../../vue-common'
import type { ISliderApi } from './slider'
import { sliderProps } from './slider'
import '@opentiny/vue-theme-mobile/slider/index.less'

export default defineComponent({
  name: $prefix + 'Slider',
  componentName: 'Slider',
  emits: ['update:modelValue', 'change', 'start', 'stop'],
  props: sliderProps,
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as ISliderApi
  }
})
</script>
