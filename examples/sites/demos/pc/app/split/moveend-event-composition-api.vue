<template>
  <div class="demo-split">
    <tiny-split v-model="split1" @moveend="moveend">
      <template #left>
        <div class="demo-split-pane">左面板</div>
      </template>
      <template #right>
        <div class="demo-split-pane">右面板</div>
      </template>
    </tiny-split>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import { TinySplit, TinyModal } from '@opentiny/vue'

const split1 = ref(0.3)

function moveend() {
  TinyModal.message('拖拽结束')
}
</script>

<style scoped>
.demo-split {
  height: 200px;
  margin-bottom: 20px;
}

.demo-split-pane {
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100%;
}
</style>
