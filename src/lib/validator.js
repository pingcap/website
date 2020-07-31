const nullValidator = (label, value) => {
  if (value === '' || value === undefined || value === null) {
    return `该项不能为空`
  }
  return null
}

const regexpValidator = (regexp) => (label, value) => {
  if (!regexp.test(value)) {
    return `请输入正确的${label}`
  }
  return null
}

const agreeValidator = (label, value) => {
  if (value === false) {
    return `您必须同意该协议`
  }
  return null
}

export { nullValidator, regexpValidator, agreeValidator }
