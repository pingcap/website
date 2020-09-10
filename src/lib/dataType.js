const isObject = (data) => {
  return Object.prototype.toString.call(data) === '[object Object]'
}

const isArray = (data) => {
  return Array.isArray(data)
}

const isPrimitive = (data) => {
  return !(isObject(data) || isArray(data))
}

const isUndefined = (data) => {
  return typeof data === 'undefined'
}

export { isObject, isArray, isPrimitive, isUndefined }
