<template>
  <div
    ref="floatSettings"
    :class="['float-settings', { 'float-settings--aside': isSettingsAside }]"
    :style="settingsStyle"
  >
    <!-- 切换主题样式 暂时隐藏 -->
    <tiny-popover
      width="404"
      v-if="false"
      placement="left-end"
      trigger="click"
      :visible-arrow="false"
      popper-class="theme-settings-popover"
    >
      <div class="theme-settings-menu">
        <div class="theme-settings-title">{{ i18nByKey('changeTheme') }}</div>
        <div
          v-for="(item, index) in themeData"
          :key="item.text + index"
          :class="['theme-option-list', { 'is-active-popover': item.value === currentThemeKey }]"
          :style="{ backgroundImage: 'url(' + item.bgImage + ')' }"
          @click="themeItemClick(item)"
        >
          <div class="theme-option-list-icon" :style="{ backgroundImage: 'url(' + item.icon + ')' }"></div>
          <div>
            <div class="theme-option-list-text">
              {{ item.text }}
            </div>
            <div class="theme-option-list-tips">
              {{ item.tips }}
            </div>
          </div>
        </div>
      </div>
      <template #reference>
        <div class="settings-btn theme-change-button">
          <theme-settings-icon class="settings-icon theme-settings-icon"></theme-settings-icon>
        </div>
      </template>
    </tiny-popover>

    <!-- demo风格设置 -->
    <tiny-popover
      v-if="!templateModeState.isSaas"
      width="180"
      placement="left-end"
      trigger="manual"
      :visible-arrow="false"
      v-model="demoStyleVisible"
      popper-class="opt-menu style-settings-menu theme-settings-popover"
    >
      <div v-for="(item, index) in styleSettings" :key="index" class="style-settings-item">
        <p class="style-settings-title">{{ item.title }}</p>
        <tiny-radio-group
          v-model="apiModeState[item.name]"
          class="style-settings-options-group"
          @change="onSettingsChange(item.name)"
        >
          <tiny-radio v-for="option in item.options" :key="option" :label="option.value">{{ option.text }}</tiny-radio>
        </tiny-radio-group>
      </div>
      <template #reference>
        <div
          class="settings-btn style-settings-btn"
          @click="demoStyleVisible = !demoStyleVisible"
          @blur="demoStyleVisible = false"
        >
          <style-settings-icon class="settings-icon style-settings-icon"></style-settings-icon>
        </div>
      </template>
    </tiny-popover>

    <!-- 返回顶部 -->
    <div v-show="showBackTop" @click="onBackTop">
      <tiny-tooltip
        :content="i18nByKey('backTop')"
        :placement="isSettingsAside ? 'left' : 'right'"
        popper-class="docs-tooltip"
        effect="light"
      >
        <div class="settings-btn back-top-btn">
          <icon-up-ward class="settings-icon"></icon-up-ward>
        </div>
      </tiny-tooltip>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, onMounted, onUnmounted, watch, nextTick, ref } from 'vue'
import { Tooltip, Radio, RadioGroup, Popover, Notify } from '@opentiny/vue'
import { iconUpWard } from '@opentiny/vue-icon'
import debounce from '@opentiny/vue-renderless/common/deps/debounce'
import { i18nByKey, useApiMode, useTemplateMode } from '@/tools'
import useTheme from '@/tools/useTheme'
import { router } from '@/router'
import useStyleSettings from '@/tools/useStyleSettings'
import ThemeSettingsIcon from '@/assets/images/theme-settings.svg'
import StyleSettingsIcon from '@/assets/images/style-settings.svg'

export default defineComponent({
  name: 'FloatSettings',
  components: {
    TinyTooltip: Tooltip,
    TinyRadio: Radio,
    TinyRadioGroup: RadioGroup,
    IconUpWard: iconUpWard(),
    TinyPopover: Popover,
    ThemeSettingsIcon,
    StyleSettingsIcon
  },
  setup() {
    const DEFAULT_BOTTOM_VAL = '10vh'
    const { getThemeData, changeTheme, currentThemeKey } = useTheme()
    const { apiModeState, apiModeFn } = useApiMode()
    const { getStyleSettings } = useStyleSettings()
    const { templateModeState } = useTemplateMode()
    const floatSettings = ref(null)
    const isPlus = import.meta.env.VITE_APP_MODE === 'plus'

    const state = reactive({
      demoStyleVisible: false,
      themeData: [],
      styleSettings: getStyleSettings(i18nByKey),
      settingsStyle: {
        bottom: DEFAULT_BOTTOM_VAL
      },
      showBackTop: false, // 是否显示返回顶部按钮
      initBottomVal: null, // 初始底部偏移
      isSettingsAside: false // 是否贴边
    })
    let isShowTip = false
    const showTip = () => {
      Notify({
        type: 'info',
        title: '请注意',
        message: '主题切换成功，如有部分主题样式不生效，请尝试手动刷新页面即可',
        position: 'bottom-right',
        duration: 3000
      })
      isShowTip = true
    }

    if (isPlus) {
      state.styleSettings = state.styleSettings.filter((item) => item.name !== 'apiMode')
      apiModeState.apiMode = 'Options'
    }

    const funcs = {
      onBackTop() {
        document.getElementById('doc-layout-scroller').scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      },
      onSettingsChange(modeType) {
        switch (modeType) {
          case 'localeMode': {
            apiModeFn.changeLocaleMode(apiModeState[modeType])
            break
          }
          case 'apiMode': {
            apiModeFn.changeApiMode(apiModeState[modeType])
            break
          }
          case 'demoMode': {
            apiModeFn.changeDemoMode(apiModeState[modeType])
            break
          }
        }
      },

      // 主题切换功能
      themeItemClick(node) {
        const val = node?.value || 'tiny-smb-theme'
        changeTheme(val)

        if (!isShowTip) {
          showTip()
        }
      }
    }

    const getThemeOptions = () => {
      const themeData = getThemeData().map((item) => ({
        value: item.value[0],
        text: item.label,
        tips: item.tips,
        icon: item.icon,
        bgImage: item.bgImage
      }))
      state.themeData = themeData
    }

    const setScrollListener = () => {
      nextTick(() => {
        const docLayout = document.getElementById('doc-layout-scroller')
        const nav = document.querySelector('.nav')
        if (docLayout) {
          docLayout.onscroll = debounce(100, false, () => {
            const { scrollTop: layoutScrollTop } = docLayout
            const headerHeight = docLayout.querySelector('header')?.clientHeight || 0
            const footerTop = footer.getBoundingClientRect().top
            const navHeight = nav?.clientHeight || 0
            const currSettingsBottom = parseInt(window.getComputedStyle(floatSettings.value).getPropertyValue('bottom'))

            state.showBackTop = layoutScrollTop > 500
            state.showSettings = footerTop - navHeight - headerHeight > 220

            if (!state.initBottomVal) {
              state.initBottomVal = currSettingsBottom
            }
          })
        }
      })
    }

    const removeScrollListener = () => {
      const docLayout = document.getElementById('doc-layout-scroller') || {}
      docLayout.onscroll = null
    }

    watch(
      () => router.currentRoute.value,
      (newVal) => {
        const { path } = newVal || {}
        state.isSettingsAside = ['overview', 'docs'].find((i) => path.includes(i))
      },
      {
        immediate: true
      }
    )

    onMounted(() => {
      getThemeOptions()
      setScrollListener()
    })

    onUnmounted(() => {
      removeScrollListener()
    })

    return {
      ...toRefs(state),
      ...funcs,
      templateModeState,
      i18nByKey,
      apiModeState,
      currentThemeKey,
      floatSettings
    }
  }
})
</script>

<style lang="less">
.float-settings {
  position: fixed;
  right: 200px;
  height: 140px;
  display: flex;
  flex-direction: column;
  column-gap: 12px;
  z-index: var(--docs-float-settings-zindex);
  transition: all 0.3s linear;

  &.float-settings--aside {
    right: 24px;
  }

  .tiny-dropdown__trigger .tiny-dropdown__title {
    line-height: 1;
    margin-right: 0;
  }

  .settings-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    margin-bottom: 8px;
    border: 1px solid #f0f0f0;
    border-radius: 12px;
    background-color: #fff;
    cursor: pointer;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16);

    &:hover {
      box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.16);

      .settings-icon {
        color: #191919;
        fill: #191919;
      }
    }

    &.style-settings-btn {
      margin-bottom: 24px;
    }

    &.back-top-btn {
      margin-bottom: 0;
    }

    .settings-icon {
      width: 16px;
      height: 16px;
      color: #595959;
    }
  }
}

.opt-menu {
  width: 154px;
  padding: 12px 0;
  border-radius: 12px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);

  &.style-settings-menu {
    padding: 14px;

    .style-settings-item {
      padding-left: 12px;

      .style-settings-title {
        margin-bottom: 2px;
        font-size: 14px;
        line-height: 32px;
        font-weight: 600;
        color: #000000;
      }

      .style-settings-options-group {
        padding-left: 4px;
        margin-bottom: 6px;
        display: flex;
        flex-direction: column;

        .tiny-radio .tiny-radio__label {
          font-size: 14px;
          line-height: 32px;
        }
      }

      &:not(:last-child) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      }
    }
  }
}
.tiny-popover.tiny-popper.theme-settings-popover {
  border-radius: 12px;
  background-color: #ffffff;
}

.theme-settings-menu {
  width: 404px;
  display: flex;
  padding: 15px 32px;
  flex-direction: column;
  margin: 0;
  .theme-settings-title {
    height: 20px;
    line-height: 20px;
    color: #000000;
    font-weight: 700;
  }
}
.theme-option-list {
  display: flex;
  align-items: center;
  justify-content: start;
  background-color: aliceblue;
  cursor: pointer;
  margin-top: 20px;
  width: 308px;
  height: 64px;
  border: 1px solid #ffffff;
  border-radius: 8px;
  background-repeat: no-repeat;
  .theme-option-list-icon {
    width: 32px;
    height: 32px;
    margin: 16px 24px;
  }
  .theme-option-list-text {
    height: 22px;
    line-height: 22px;
    font-size: 14px;
    color: #202e54;
    font-weight: 700;
  }
  .theme-option-list-tips {
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #808080;
    font-weight: 500;
  }
}
.theme-option-list:hover {
  border-color: rgba(0, 0, 0, 0.05);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15);
}
.is-active-popover {
  border-color: #1476ff;
}

@media (max-width: 1279px) {
  .float-settings {
    right: 12px;
  }
}
</style>
