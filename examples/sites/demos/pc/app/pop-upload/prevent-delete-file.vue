<template>
  <tiny-pop-upload :action="action" :before-remove="handleRemove"></tiny-pop-upload>
</template>

<script lang="jsx">
import { TinyPopUpload, TinyModal } from '@opentiny/vue'

export default {
  components: {
    TinyPopUpload
  },
  data() {
    return {
      action: 'http://localhost:3000/api/upload'
    }
  },
  methods: {
    handleRemove(file) {
      // return false  支持同步返回 也支持 Promise 异步返回
      return new Promise((resolve, reject) => {
        TinyModal.confirm(`确定移除 ${file.name}？`).then((res) => {
          res === 'confirm' ? resolve() : reject(new Error())
        })
      })
    }
  }
}
</script>
