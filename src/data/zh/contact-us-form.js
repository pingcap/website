import React from 'react'
import {
  nullValidator,
  mailValidator,
  telValidator,
  agreeValidator,
} from '../../lib/validator'

const formConfig = [
  {
    label: '姓名',
    name: 'name',
    validators: [nullValidator],
    className: 'form-item--text',
    default: '',
    renderItem: () => <input type="text"></input>,
  },
  {
    label: '邮箱',
    name: 'mail',
    validators: [nullValidator, mailValidator],
    className: 'form-item--text',
    default: '',
    renderItem: () => <input type="text"></input>,
  },
  {
    label: '电话号码',
    name: 'tel',
    validators: [nullValidator, telValidator],
    className: 'form-item--text',
    default: '',
    renderItem: () => <input type="text"></input>,
  },
  {
    label: '公司',
    name: 'company',
    validators: [nullValidator],
    className: 'form-item--text',
    default: '',
    renderItem: () => <input type="text"></input>,
  },
  {
    label: '职业',
    name: 'occupation',
    validators: [nullValidator],
    className: 'form-item--text',
    default: '',
    renderItem: () => <input type="text"></input>,
  },
  {
    label:
      '请描述您遇到的使用情况、商业规模和问题，以便我们更好地为您提供帮助。',
    name: 'description',
    validators: [nullValidator],
    className: 'form-item--textarea',
    default: '',
    renderItem: () => <textarea></textarea>,
  },
  {
    label:
      '我同意隐私条款和使用协议，这里的文字可能有点长，以便我们更好地为您提供帮助',
    name: 'agreement',
    validators: [agreeValidator],
    className: 'form-item--radio',
    default: false,
    renderItem: () => <input type="radio" name="agreement"></input>,
  },
]

export default formConfig
