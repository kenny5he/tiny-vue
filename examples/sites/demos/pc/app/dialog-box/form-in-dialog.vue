<template>
  <div>
    <tiny-button @click="boxVisibility = true">弹出表单</tiny-button>
    <tiny-dialog-box
      :visible="boxVisibility"
      @update:visible="boxVisibility = $event"
      resize
      title="消息"
      width="30%"
      :is-form-reset="false"
    >
      <tiny-form :model="formData" label-width="100px" label-position="top">
        <tiny-form-item label="人员姓名" prop="name">
          <tiny-input type="text" v-model="formData.name"></tiny-input>
        </tiny-form-item>
        <tiny-form-item label="岗位" prop="type">
          <tiny-radio-group v-model="formData.type">
            <tiny-radio :label="0">研发</tiny-radio>
          </tiny-radio-group>
        </tiny-form-item>
        <tiny-form-item label="特长" prop="goodAt">
          <tiny-checkbox :indeterminate="isIndeterminate" v-model="checkAll">全部</tiny-checkbox>
          <tiny-checkbox-group v-model="formData.goodAt">
            <tiny-checkbox
              v-for="(goodAtItem, index) in goodAtOptions[formData.type]"
              :label="goodAtItem"
              :key="goodAtItem + index"
              >{{ goodAtItem }}</tiny-checkbox
            >
          </tiny-checkbox-group>
        </tiny-form-item>
        <tiny-form-item label="技能" prop="skill">
          <tiny-select v-model="value">
            <tiny-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </tiny-option>
          </tiny-select>
        </tiny-form-item>
      </tiny-form>
      <template #footer>
        <tiny-button type="primary" :loading="btnSubmit.loading" @click="handleSubmit">{{
          btnSubmit.text[btnSubmit.loading]
        }}</tiny-button>
      </template>
    </tiny-dialog-box>
  </div>
</template>

<script lang="jsx">
import {
  TinyButton,
  TinyDialogBox,
  TinyForm,
  TinyFormItem,
  TinyInput,
  TinyRadio,
  TinyRadioGroup,
  TinyCheckbox,
  TinyCheckboxGroup,
  TinyNotify,
  TinySelect,
  TinyOption
} from '@opentiny/vue'

export default {
  components: {
    TinyButton,
    TinyDialogBox,
    TinyForm,
    TinyFormItem,
    TinyInput,
    TinyRadio,
    TinyRadioGroup,
    TinyCheckbox,
    TinyCheckboxGroup,
    TinySelect,
    TinyOption
  },
  data() {
    return {
      options: [
        { value: 'js', label: 'js' },
        { value: 'java', label: 'java' }
      ],
      value: '',
      btnSubmit: {
        loading: false,
        text: {
          true: '提交中',
          false: '确定'
        }
      },
      boxVisibility: false,
      formData: {
        name: '',
        type: 0,
        goodAt: []
      },
      goodAtOptions: [
        ['架构', '算法', '自动化'],
        ['UI 设计', 'EXCEL', 'PPT 制作']
      ]
    }
  },
  methods: {
    handleSubmit() {
      this.btnSubmit.loading = true
      this.mockPost().then((response) => {
        if (response.status === 200) {
          this.btnSubmit.loading = false
          this.boxVisibility = false
          TinyNotify({
            title: '成功',
            message: '表单已成功提交！',
            offset: 0
          })
        }
      })
    },
    mockPost() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ status: 200 })
        }, 800)
      })
    },
    resetForm() {
      this.formData = {
        name: '',
        type: 0,
        goodAt: []
      }
    }
  },
  computed: {
    checkAll: {
      get() {
        return this.formData.goodAt.length === this.goodAtOptions[this.formData.type].length
      },
      set(val) {
        this.formData.goodAt = val ? [...this.goodAtOptions[this.formData.type]] : []
      }
    },
    isIndeterminate: {
      get() {
        return (
          this.formData.goodAt.length > 0 && this.formData.goodAt.length < this.goodAtOptions[this.formData.type].length
        )
      }
    }
  }
}
</script>
