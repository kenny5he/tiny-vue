<template>
  <div class="demo-form">
    <div class="title">
      <div>错误文本类型：<tiny-button-group :data="messageTypeList" v-model="messageType"></tiny-button-group></div>
    </div>
    <tiny-form
      ref="ruleFormRef"
      :model="createData"
      :rules="rules"
      label-width="60px"
      validate-type="text"
      :message-type="messageType"
    >
      <tiny-form-item label="必填" prop="users">
        <tiny-input v-model="createData.users"></tiny-input>
      </tiny-form-item>
      <tiny-form-item label="日期" prop="datepicker">
        <tiny-date-picker v-model="createData.datepicker"></tiny-date-picker>
      </tiny-form-item>
      <tiny-form-item label="邮件" prop="email">
        <tiny-input v-model="createData.email"></tiny-input>
      </tiny-form-item>
      <tiny-form-item>
        <tiny-button type="primary" @click="handleSubmit"> 提交 </tiny-button>
      </tiny-form-item>
    </tiny-form>
  </div>
</template>

<script>
import { TinyForm, TinyFormItem, TinyInput, TinyDatePicker, TinyButton, TinyButtonGroup } from '@opentiny/vue'

export default {
  components: {
    TinyForm,
    TinyFormItem,
    TinyInput,
    TinyDatePicker,
    TinyButton,
    TinyButtonGroup
  },
  data() {
    return {
      createData: {
        users: '',
        email: '',
        datepicker: ''
      },

      messageType: 'block',

      messageTypeList: [
        { text: '块级', value: 'block' },
        { text: '行内', value: 'inline' },
        { text: '绝对定位', value: 'absolute' }
      ],
      rules: {
        users: { required: true, message: '必填', trigger: 'blur' },
        datepicker: { required: true, type: 'date', message: '必填' },
        email: { required: true, type: 'email' }
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.ruleFormRef.validate((valid) => {})
    }
  }
}
</script>

<style scoped>
.demo-form {
  width: 400px;
}

.demo-form :deep(.tiny-date-container) {
  width: 280px;
  display: inline-block;
}

.demo-form :deep(.tiny-input) {
  width: 280px;
}

.title {
  margin-bottom: 16px;
  font-size: 14px;
}
</style>
