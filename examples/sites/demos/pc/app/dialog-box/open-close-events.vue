<template>
  <div>
    <tiny-button @click="boxVisibility = true" title="弹出与关闭事件">弹出与关闭事件</tiny-button>
    <tiny-dialog-box
      v-model:visible="boxVisibility"
      title="添加备注"
      width="30%"
      @open="open"
      @close="close"
      @opened="opened"
      @closed="closed"
    >
      <tiny-form label-position="top">
        <tiny-form-item label="备注描述">
          <tiny-input type="textarea" v-model="createData.quantity" :maxlength="1000" show-word-limit></tiny-input>
        </tiny-form-item>
      </tiny-form>
      <template #footer>
        <tiny-button @click="boxVisibility = false">取消</tiny-button>
        <tiny-button type="primary" @click="boxVisibility = false">确定</tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script lang="jsx">
import { TinyButton, TinyDialogBox, TinyNotify, TinyInput, TinyForm, TinyFormItem } from '@opentiny/vue'

export default {
  components: {
    TinyButton,
    TinyDialogBox,
    TinyInput,
    TinyForm,
    TinyFormItem
  },
  data() {
    return {
      boxVisibility: false,
      createData: {
        quantity: '这是描述'
      }
    }
  },
  methods: {
    open() {
      TinyNotify({
        title: '窗口弹出',
        message: this.getTime(new Date()),
        offset: 0
      })
    },
    opened() {
      TinyNotify({
        title: '窗口弹出动画完成',
        message: this.getTime(new Date()),
        offset: 0
      })
    },
    close() {
      TinyNotify({
        title: '窗口关闭',
        message: this.getTime(new Date()),
        offset: 0
      })
    },
    closed() {
      TinyNotify({
        title: '窗口关闭动画完成',
        message: this.getTime(new Date()),
        offset: 0
      })
    },
    getTime(now) {
      return [now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds()].join(':')
    }
  }
}
</script>
