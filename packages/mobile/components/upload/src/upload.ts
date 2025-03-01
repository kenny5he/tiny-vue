import uploadAjax from '@opentiny/mobile-utils/deps/upload-ajax'
import type { ExtractPropTypes } from 'vue'
import type {
  ISharedRenderlessFunctionParams,
  ISharedRenderlessParamUtils,
  ITinyVm,
  ISharedRenderlessParamHooks
} from '../../../types/shared.type'
import type {
  isImage,
  abort,
  getFormData,
  handleClick,
  onBeforeDestroy,
  handleUpdate,
  handlePaste,
  uploadFiles,
  post,
  handleChange,
  handleKeydown,
  upload,
  mounted
} from './renderless'
import type {
  IFileUploadVm,
  IFileUploadConstants,
  IFileUploadFile,
  IFileUploadModalVm
} from '../../file-upload/src/file-upload'

export const uploadProps = {
  accept: String,
  action: {
    type: String,
    default: ''
  },
  autoUpload: Boolean,
  beforeUpload: Function,
  pasteUpload: Boolean,
  data: Object,
  disabled: Boolean,
  drag: Boolean,
  edmToken: {
    type: Object,
    default: () => ({})
  },
  fileList: {
    type: Array,
    default: () => []
  },
  headers: Object,
  httpRequest: {
    type: Function,
    default: uploadAjax
  },
  isFolder: {
    type: Boolean,
    default: false
  },
  limit: Number,
  listType: String,
  multiple: Boolean,
  name: {
    type: String,
    default: 'file'
  },
  onError: Function,
  onExceed: Function,
  onPreview: {
    type: Function,
    default: () => {}
  },
  onProgress: Function,
  onRemove: {
    type: Function,
    default: () => {}
  },
  onStart: Function,
  onSuccess: Function,
  type: String,
  withCredentials: Boolean,
  isHidden: {
    type: Boolean,
    default: false
  },
  scale: {
    type: [Number, String],
    default: 1
  },
  sourceType: {
    type: String,
    default: 'picture',
    validator(val: string) {
      return val.split('/').every((type) => ['picture', 'video', 'audio'].includes(type))
    }
  },
  displayOnly: {
    type: Boolean,
    default: false
  },
  customClass: [String, Object, Array],
  handleTriggerClick: {
    type: Function,
    default: () => {}
  },
  mode: String,
  showTitle: Boolean,
  isHwh5: {
    type: Boolean,
    default: false
  }
}

export type { IFileUploadVm, IFileUploadConstants, IFileUploadFile, ISharedRenderlessParamHooks, IFileUploadModalVm }

export type IUploadStateHeader = { [propName: string]: string } | undefined

export interface IUploadState {
  mouseover: boolean
  reqs: {
    uid?: string
  }
  uploader: IFileUploadVm
  accecpt: string
  isEdm: boolean
  openEdmDownload: boolean
  headers: IUploadStateHeader
  formData: object
  cancelToken: object
  updateId: string
  updateInput: null | HTMLInputElement
}

export interface IUploadApi {
  state: IUploadState
  isImage: typeof isImage
  abort: ReturnType<typeof abort>
  getFormData: ReturnType<typeof getFormData>
  handleClick: ReturnType<typeof handleClick>
  onBeforeDestroy: ReturnType<typeof onBeforeDestroy>
  handleUpdate: ReturnType<typeof handleUpdate>
  handlePaste: ReturnType<typeof handlePaste>
  uploadFiles: ReturnType<typeof uploadFiles>
  post: ReturnType<typeof post>
  handleChange: ReturnType<typeof handleChange>
  handleKeydown: ReturnType<typeof handleKeydown>
  upload: ReturnType<typeof upload>
  mounted: ReturnType<typeof mounted>
}

export type IUploadProps = ExtractPropTypes<typeof uploadProps>

export type IUploadRenderlessParamUtils = ISharedRenderlessParamUtils<IFileUploadConstants>

export type IUploadRenderlessParams = ISharedRenderlessFunctionParams<IFileUploadConstants> & {
  state: IUploadState
  props: IUploadProps
  api: IUploadApi
}

export interface IUploadRenderlessOtherParams {
  rawFile: IFileUploadFile
  uploaderInner: ITinyVm<IFileUploadConstants>
  uid: string
}

export interface IUploadFormData extends FormData {
  append(name: string, value: boolean | string | number | Blob, fileName?: string): void
}

export interface IUploadOptionsOfPost {
  headers: object
  withCredentials: boolean
  file: File
  data: IUploadFormData | undefined | Record<string, any>
  filename: string
  action?: string // 涉及到删除，所以为可选；底下同理
  onSuccess: (res: object) => void
  onProgress?: (event: Event) => void
  onError: (error: object) => void
  [x: string]: any // 允许动态添加属性
}

export interface IUploadOptionsOfHwh5 {
  edmAuth: {
    edmToken: string
    appId: string
  }
  filePath: string
  progress: number
  onProgress: (data: object) => void
  onSuccess: (res: object) => void
  onError: (error: object) => void
}
