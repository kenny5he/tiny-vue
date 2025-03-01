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
<script lang="tsx">
import { renderless, api } from './renderless/vue'
import { setup, h, defineComponent } from '../../../vue-common'
import UploadList from '../../upload-list'
import Upload from '../../upload'
import { iconUpload } from '@opentiny/vue-icon'
import '@opentiny/vue-theme-mobile/file-upload/index.less'
import '@opentiny/vue-theme-mobile/upload-list/index.less'
import '@opentiny/vue-theme-mobile/upload-dragger/index.less'
import '@opentiny/vue-theme-mobile/upload/index.less'
import type { IFileUploadApi } from './file-upload'
import { fileUploadProps } from './file-upload'

export default defineComponent({
  inheritAttrs: false,
  props: fileUploadProps,
  setup(props, context) {
    return setup({ props, context, renderless, api }) as unknown as IFileUploadApi
  },
  components: {
    UploadList,
    Upload,
    IconUpload: iconUpload()
  },
  render() {
    const { exceed = () => {}, preview = () => {} } = this.state.listeners
    const { fileTitle, headerShow, successStatistics, uploadIcon } = this
    let uploadList
    const uploaArr = this.state.uploadFiles
    let successNum = 0
    let pictureArr = []

    uploaArr &&
      uploaArr.map((item) => {
        if (this.listType === 'picture-card' && item.url) {
          pictureArr.push(item.url)
        }

        if (item.status === 'success') {
          successNum += 1
        }
        return pictureArr
      })

    if (this.showFileList) {
      const listData = {
        props: {
          disabled: this.state.uploadDisabled,
          listType: this.listType,
          files: this.state.uploadFiles,
          filesIcon: this.fileIconList,
          display: this.display,
          srcList: pictureArr,
          handlePreview: preview
        },
        on: {
          remove: this.handleRemove
        }
      }

      uploadList = h(UploadList, { ...listData }, (props) => {
        if (this.slots.file) {
          return this.slots.file({
            file: props.file
          })
        }
      })
    }

    const uploadData = {
      props: {
        type: this.type,
        drag: this.drag,
        action: this.state.url,
        multiple: this.multiple,
        withCredentials: this.withCredentials,
        headers: this.headers,
        name: this.name,
        data: this.data,
        accept: this.accept,
        fileList: this.state.uploadFiles,
        autoUpload: this.autoUpload,
        listType: this.listType,
        disabled: this.state.uploadDisabled,
        limit: this.limit,
        onExceed: exceed,
        onStart: this.handleStart,
        onProgress: this.handleProgress,
        onSuccess: this.handleSuccess,
        onError: this.handleError,
        onPreview: preview,
        httpRequest: this.state.httpRequest,
        size: this.size
      },

      ref: 'upload-inner'
    }

    const trigger = (this.slots.trigger && this.slots.trigger()) || this.slots.default()

    const uploadComponent = !headerShow || this.listType === 'picture-card' ? h(Upload, { ...uploadData }, trigger) : ''

    let header = (
      <div class="tiny-mobile-file-upload__header">
        <div class="tiny-mobile-file-upload__header-title">{fileTitle}</div>
        <div class="tiny-mobile-file-upload__header-upload">
          {successStatistics ? (
            <span class="upload-status">
              {successNum}/{uploaArr.length}
            </span>
          ) : (
            ''
          )}
          {this.listType !== 'picture-card' && uploadIcon ? (
            <span class="upload-icon">{h(Upload, { ...uploadData }, trigger || <icon-upload />)}</span>
          ) : (
            ''
          )}
        </div>
      </div>
    )

    return (
      <div class={['tiny-mobile-file-upload', this.$attrs.class]} ref="fileUpload">
        {headerShow ? header : ''}
        <div
          class={{
            'tiny-mobile-file-upload__wrap': true,
            'is-card': this.listType === 'picture-card'
          }}>
          {this.listType === 'picture-card' ? uploadList : ''}
          {this.slots.trigger ? [uploadComponent, this.slots.default && this.slots.default()] : uploadComponent}
          {this.slots.tip && this.slots.tip()}
          {this.listType !== 'picture-card' ? uploadList : ''}
        </div>
      </div>
    )
  }
})
</script>
