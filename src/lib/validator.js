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

const mailValidator = regexpValidator(
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/m
)

const telValidator = regexpValidator(/^1[345678]\d{9}$/)

const agreeValidator = (label, value) => {
  if (value === false) {
    return `您必须同意该协议`
  }
  return null
}

export {
  nullValidator,
  regexpValidator,
  agreeValidator,
  mailValidator,
  telValidator,
}
