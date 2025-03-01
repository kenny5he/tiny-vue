<script setup lang="jsx">
import { onMounted, reactive, nextTick } from 'vue'
import { Repl, useStore, File } from '@opentiny/vue-repl'
import '@opentiny/vue-repl/dist/style.css'

import Editor from '@vue/repl/codemirror-editor'
import { TinyButtonGroup, TinyButton, TinySelect, TinyOption, TinySwitch, Notify } from '@opentiny/vue'
import { staticDemoPath, getWebdocPath } from '@/views/components/cmp-config'
import { fetchDemosFile } from '@/tools/utils'
import logoUrl from './assets/opentiny-logo.svg?url'
import GitHub from './icons/Github.vue'
import Share from './icons/Share.vue'

const VERSION = 'tiny-vue-version-3.21'
const NOTIFY_KEY = 'tiny-vue-playground-notify'
const LAYOUT = 'playground-layout'
const LAYOUT_REVERSE = 'playground-layout-reverse'

const searchObj = new URLSearchParams(location.search)
const tinyMode = searchObj.get('mode')
const tinyTheme = searchObj.get('theme')
const isMobileFirst = tinyMode === 'mobile-first'
const isSaas = tinyTheme === 'saas'
const isPreview = searchObj.get('openMode') === 'preview' // 是否多端弹窗预览

const versions = ['3.21', '3.20', '3.19']
const getVersion = () => {
  if (isPreview) {
    return versions[0]
  }
  if (versions.includes(localStorage.getItem(VERSION))) {
    localStorage.getItem(VERSION)
  }
  return versions[0]
}
const latestVersion = getVersion()
const cdnHost = localStorage.getItem('setting-cdn')

const versionDelimiter = cdnHost.includes('npmmirror') ? '/' : '@'
const fileDelimiter = cdnHost.includes('npmmirror') ? 'files/' : ''

let notify
const showNotify = () => {
  if (localStorage.getItem(NOTIFY_KEY) !== 'true' && !notify) {
    const muteNotify = () => {
      notify.close()
      localStorage.setItem(NOTIFY_KEY, true)
    }
    notify = Notify({
      type: 'info',
      title: '温馨提示：',
      message: () => (
        <div>
          <div>演练场仅保留最新的三个版本可选。</div>
          <div style="text-align: right;margin-top: 12px;">
            <TinyButton onClick={muteNotify} type={'primary'}>
              不再提示
            </TinyButton>
          </div>
        </div>
      ),
      duration: -1,
      position: 'top-right',
      verticalOffset: 200
    })
  }
}

const getRuntime = (version) => `${cdnHost}/@opentiny/vue-runtime${versionDelimiter}${version}/${fileDelimiter}dist3/`

const createImportMap = (version) => {
  const imports = {
    'vue': `${cdnHost}/vue${versionDelimiter}3.4.27/${fileDelimiter}dist/vue.runtime.esm-browser.js`,
    'echarts': `${cdnHost}/echarts${versionDelimiter}5.4.1/${fileDelimiter}dist/echarts.esm.js`,
    '@vue/compiler-sfc': `${cdnHost}/@vue/compiler-sfc${versionDelimiter}3.4.27/${fileDelimiter}dist/compiler-sfc.esm-browser.js`,
    '@opentiny/vue': `${getRuntime(version)}tiny-vue-pc.mjs`,
    '@opentiny/vue-icon': `${getRuntime(version)}tiny-vue-icon.mjs`,
    '@opentiny/vue-locale': `${getRuntime(version)}tiny-vue-locale.mjs`,
    '@opentiny/vue-common': `${getRuntime(version)}tiny-vue-common.mjs`,
    '@opentiny/vue-directive': `${getRuntime(version)}tiny-vue-directive.mjs`,
    '@opentiny/vue-theme/': `${cdnHost}/@opentiny/vue-theme${versionDelimiter}${version}/${fileDelimiter}`,
    '@opentiny/vue-theme-mobile/': `${cdnHost}/@opentiny/vue-theme-mobile${versionDelimiter}${version}/${fileDelimiter}`,
    '@opentiny/vue-renderless/': `${cdnHost}/@opentiny/vue-renderless${versionDelimiter}${version}/${fileDelimiter}`,
    'sortablejs': `${cdnHost}/sortablejs${versionDelimiter}1.15.0/${fileDelimiter}modular/sortable.esm.js`
  }
  if (['aurora', 'saas', 'smb'].includes(tinyTheme)) {
    imports[`@opentiny/vue-design-${tinyTheme}`] =
      `${cdnHost}/@opentiny/vue-design-${tinyTheme}${versionDelimiter}${version}/${fileDelimiter}index.js`
  }
  if (isSaas) {
    imports['@opentiny/vue-icon'] = `${getRuntime(version)}tiny-vue-icon-saas.mjs`
    imports['@opentiny/vue-common'] = `${getRuntime(version)}tiny-vue-saas-common.mjs`
    imports['@opentiny/vue'] = `${getRuntime(version)}tiny-vue-all.mjs`
  }
  return {
    imports
  }
}

const getTinyTheme = (version) => {
  if (isMobileFirst) {
    return `${getRuntime(version)}tailwind.css`
  }
  let theme = tinyTheme
  if (!['aurora', 'saas'].includes(theme)) {
    theme = 'default'
  }
  const tinyThemeMap = {
    default: `${cdnHost}/@opentiny/vue-theme${versionDelimiter}${version}/${fileDelimiter}index.css`,
    aurora: `${cdnHost}/@opentiny/vue-theme${versionDelimiter}${version}/${fileDelimiter}index.css`,
    saas: `${cdnHost}/@opentiny/vue-theme-saas${versionDelimiter}${version}/${fileDelimiter}index.css`
  }
  return tinyThemeMap[theme]
}

// 如果hash有效，它格式为： 3.8.4|eNqIVV9p.............
const hash = location.hash.slice(1)
const shareData = hash.split('|')

// eslint-disable-next-line new-cap
const store = new useStore({
  serializedState: shareData.length === 2 ? shareData[1] : '',
  showOutput: true,
  outputMode: 'preview',
  versions: {
    vue: '3.2.47',
    opentiny: '3.9.1',
    typescript: '5.1.3'
  }
})

// repl 属性
const state = reactive({
  layout: localStorage.getItem(LAYOUT) || 'horizon',
  layoutReverse: localStorage.getItem(LAYOUT_REVERSE) === 'true',
  layoutOptions: [
    { value: 'horizon', text: '水平' },
    { value: 'vertical', text: '垂直' }
  ],
  // 版本切换
  versions: versions.map((item) => ({ value: item })),
  selectVersion: shareData.length === 2 ? shareData[0] : latestVersion,
  previewOptions: {}
})

const designThemeMap = {
  aurora: 'tinyAuroraTheme',
  old: 'tinyOldTheme'
}

function setTinyDesign() {
  let importCode = ''
  let useCode = ''

  if (isMobileFirst) {
    useCode += 'app.provide("TinyMode", "mobile-first");\n'
  }

  if (['aurora', 'saas', 'smb'].includes(tinyTheme)) {
    importCode += `import designConfig from '@opentiny/vue-design-${tinyTheme}';
      import { design } from '@opentiny/vue-common';\n`
    useCode += 'app.provide(design.configKey, designConfig);\n'
  }

  if (['aurora', 'old'].includes(tinyTheme)) {
    const designTheme = designThemeMap[tinyTheme]
    importCode += `import TinyThemeTool from '@opentiny/vue-theme/theme-tool';
      import ${designTheme} from '@opentiny/vue-theme/${tinyTheme}-theme-index.js';\n`
    useCode += `const theme = new TinyThemeTool(${designTheme});\n`
  }

  state.previewOptions.customCode = {
    importCode,
    useCode
  }
}

function selectVersion(version) {
  versionChange(version)
  localStorage.setItem(VERSION, version)
}

function versionChange(version) {
  const importMap = createImportMap(version)
  store.state.files['import-map.json'] = new File('', JSON.stringify(importMap))
  insertStyleDom(version)
}

function insertStyleDom(version) {
  nextTick(() => {
    if (!document.querySelector('iframe')) return

    const iframeWin = document.querySelector('iframe').contentWindow
    const link = iframeWin.document.createElement('link')
    link.id = 'tiny-theme'
    link.rel = 'stylesheet'
    link.href = getTinyTheme(version)
    iframeWin.addEventListener('DOMContentLoaded', () => {
      iframeWin.document.head.append(link)

      // 增加mobile支持，增加mobile的样式表
      const mobileLink = link.cloneNode(true)
      mobileLink.href = `${cdnHost}/@opentiny/vue-theme-mobile${versionDelimiter}${version}/${fileDelimiter}index.css`
      iframeWin.document.head.append(mobileLink)
    })
  })
}

function changeLayout(layout) {
  localStorage.setItem(LAYOUT, layout)
}

function changeReserve(isReserve) {
  insertStyleDom(state.selectVersion)
  localStorage.setItem(LAYOUT_REVERSE, isReserve)
}

function getDemoName(name, apiMode) {
  return name.replace(/\.vue$/, `${apiMode === 'Options' ? '' : '-composition-api'}.vue`)
}

// eslint-disable-next-line unused-imports/no-unused-vars
const getDemoCode = async ({ cmpId, fileName, apiMode, mode }) => {
  const demoName = getDemoName(`${getWebdocPath(cmpId)}/${fileName}`, apiMode)
  const path = tinyMode === 'mobile-first' ? `@demos/mobile-first/app/${demoName}` : `${staticDemoPath}/${demoName}`
  const code = await fetchDemosFile(path)
    .then((code) => {
      return code
    })
    .catch(() => {
      return `${demoName}示例资源不存在，请检查文件名是否正确？`
    })

  return code
}

const loadFileCode = async ({ cmpId, fileName, apiMode, mode }) => {
  const code = await getDemoCode({ cmpId, fileName, apiMode, mode })
  store.state.mainFile = fileName
  store.state.activeFile = fileName
  store.addFile(new File(fileName, code, false))
  versionChange(latestVersion)
}

onMounted(() => {
  setTinyDesign()
  // 初始加载,有分享则加载分享，否则加载默认版本的默认文件
  if (shareData.length === 2) {
    const demoFile = Object.values(store.state.files).find(
      (file) =>
        file.filename.startsWith('src/') &&
        file.filename.endsWith('.vue') &&
        file.filename !== 'src/App.vue' &&
        file.filename !== 'src/PlaygroundMain.vue'
    )

    store.state.mainFile = demoFile.filename
    store.state.activeFile = demoFile
    versionChange(shareData[0])
  } else {
    const fileName = searchObj.get('fileName')
    const cmpId = searchObj.get('cmpId')
    const apiMode = searchObj.get('apiMode')
    const mode = searchObj.get('mode')
    if (fileName && cmpId && apiMode) {
      loadFileCode({ cmpId, fileName, apiMode, mode })
    }
  }
})
// 分享功能
function share() {
  const hash = store.serialize()
  const shareUrl =
    location.origin +
    `${import.meta.env.VITE_PLAYGROUND_URL}?mode=${tinyMode}&theme=${tinyTheme}#` +
    state.selectVersion +
    '|' +
    hash

  navigator.clipboard.writeText(shareUrl)
  Notify({
    type: 'success',
    title: '分享',
    message: '当前URL已被复制到剪贴板.',
    duration: 2000
  })
}
</script>

<template>
  <div class="header">
    <div class="title"><img class="logo" :src="logoUrl" /> <span class="mobile-hide">OpenTiny Vue 演练场</span></div>
    <div>
      <span class="ml20 mobile-hide">
        布局方向:
        <tiny-button-group
          :data="state.layoutOptions"
          v-model="state.layout"
          @change="changeLayout"
        ></tiny-button-group>
      </span>
      <span class="ml20 mobile-hide">
        布局反转:
        <tiny-switch v-model="state.layoutReverse" mini @change="changeReserve"></tiny-switch>
      </span>
      <span class="ml20">
        <span class="mobile-hide">OpenTiny Vue 版本: </span>
        <tiny-select
          v-model="state.selectVersion"
          style="width: 150px"
          :disabled="isPreview"
          @change="selectVersion"
          @click="showNotify"
        >
          <tiny-option v-for="item in state.versions" :key="item.value" :label="item.value" :value="item.value">
          </tiny-option>
        </tiny-select>
      </span>
      <Share @click="share" title="分享" class="share" />
      <a style="display: flex" href="https://github.com/opentiny/tiny-vue" target="_blank">
        <GitHub class="github" />
      </a>
    </div>
  </div>
  <Repl
    :editor="Editor"
    :store="store"
    :preview-options="state.previewOptions"
    :clear-console="false"
    :layout="state.layout"
    :layout-reverse="state.layoutReverse"
  ></Repl>
</template>

<style>
* {
  box-sizing: border-box;
}

/** 小屏幕时隐藏 */
@media screen and (max-width: 640px) {
  .mobile-hide {
    display: none;
  }
}
#header {
  display: none;
}
#app {
  padding-top: 0;
}
.header {
  height: 46px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 6px;
  border-bottom: solid 1px #e1e1e1;
}

.header > div {
  display: flex;
  align-items: center;
}

.logo {
  margin-right: 10px;
}

.title {
  font-size: 20px;
}

.ml20 {
  margin-left: 20px;
}

.vue-repl {
  /* 16px 是body默认margin*/
  height: calc(100vh - 36px - 16px) !important;
}

.github,
.share {
  width: 20px;
  margin-right: 10px;
  cursor: pointer;
}

.share {
  margin-left: 10px;
}
</style>
