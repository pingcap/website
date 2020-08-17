import React from 'react'
import { nullValidator, mailValidator, telValidator } from '../../lib/validator'

const withNullValidator = (formConfig) =>
  formConfig.map((conf) => {
    if (conf.required) {
      conf.validators.unshift(nullValidator)
    }
    return conf
  })

const formConfig = [
  {
    label: '姓名',
    name: 'name',
    required: true,
    validators: [],
    className: 'form-item--text',
    default: '',
    renderItem: () => <input type="text"></input>,
  },
  {
    label: '邮箱',
    name: 'mail',
    required: true,
    validators: [mailValidator],
    className: 'form-item--text',
    default: '',
    renderItem: () => <input type="text"></input>,
  },
  {
    label: '电话号码',
    name: 'tel',
    required: true,
    validators: [telValidator],
    className: 'form-item--text',
    default: '',
    renderItem: () => <input type="text"></input>,
  },
  {
    label: '公司',
    name: 'company',
    required: true,
    validators: [],
    className: 'form-item--text',
    default: '',
    renderItem: () => <input type="text"></input>,
  },
  {
    label: '职业',
    name: 'occupation',
    required: true,
    validators: [],
    className: 'form-item--text',
    default: '',
    renderItem: () => <input type="text"></input>,
  },
  {
    label:
      '请描述您遇到的使用情况、商业规模和问题，以便我们更好地为您提供帮助。',
    name: 'description',
    required: true,
    validators: [],
    className: 'form-item--textarea',
    default: '',
    renderItem: () => <textarea></textarea>,
  },
  {
    label: '我同意接收来自 PingCAP 的产品，服务，事件，博客等信息。',
    name: 'agreement',
    required: false,
    validators: [],
    className: 'form-item--checkbox-radio',
    default: false,
    renderItem: () => <input type="checkbox" name="agreement"></input>,
  },
]

export default withNullValidator(formConfig)
