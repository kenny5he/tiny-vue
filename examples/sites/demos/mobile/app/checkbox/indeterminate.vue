<template>
  <div class="checkbox-wrap">
    <tiny-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @click="all">全选</tiny-checkbox>
    <tiny-checkbox-group v-model="checkboxGroup">
      <tiny-checkbox v-for="(city, index) in cities" :label="city" :key="index">{{ city }}</tiny-checkbox>
    </tiny-checkbox-group>
  </div>
</template>

<script>
import { TinyCheckbox, TinyCheckboxGroup } from '@opentiny/vue-mobile'

export default {
  components: {
    TinyCheckbox,
    TinyCheckboxGroup
  },
  data() {
    return {
      checkboxGroup: ['北京'],
      cities: ['上海', '北京', '广州', '深圳']
    }
  },
  methods: {
    all() {
      this.checkAll = this.isIndeterminate
    }
  },
  computed: {
    isIndeterminate: {
      get() {
        return !(this.checkboxGroup.length === 0 || this.checkboxGroup.length === this.cities.length)
      }
    },
    checkAll: {
      get() {
        return this.checkboxGroup.length === this.cities.length
      },
      set(val) {
        if (val) {
          this.checkboxGroup = [...this.cities]
        } else {
          this.checkboxGroup = []
        }
      }
    }
  }
}
</script>

<style scoped>
.checkbox-wrap {
  padding: 20px;
}
</style>
