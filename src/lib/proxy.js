import { isObject, isArray, isPrimitive, isUndefined } from './dataType'

const getProxyHandler = (base) => {
  const handler = {
    base,
    get(target, name) {
      if (name === Symbol.for('allProps')) {
        return {
          ...this.base,
          ...target,
        }
      } else if (name === Symbol.for('isProxy')) {
        return true
      }
      const isBasePropObject = isObject(this.base[name])
      if (name in target && isPrimitive(target[name])) {
        return target[name]
      } else if (name in target && !isPrimitive(target[name])) {
        if (isArray(target[name]) && isBasePropObject) {
          target[name].forEach((el, index) => {
            target[name][index] = isPrimitive(el)
              ? el
              : new Proxy(
                  {
                    ...el,
                  },
                  getHandlerWithNewBase(handler, this.base[name])
                )
          })
        } else if (isObject(target[name]) && isBasePropObject) {
          target[name] = new Proxy(
            {
              ...target[name],
            },
            getHandlerWithNewBase(handler, this.base[name])
          )
        } else if (isPrimitive(target[name])) {
          return target[name]
        }
      } else if (isBasePropObject) {
        // name does not in target
        target[name] = new Proxy(
          {
            ...target[name],
            ...this.base[name],
          },
          getHandlerWithNewBase(handler, this.base[name])
        )
      } else if (!isUndefined(this.base[name])) {
        target[name] = this.base[name]
      } else {
        // name does not in target or base neither
        return undefined
      }
      return target[name]
    },
  }
  return handler
}

const getHandlerWithNewBase = (handler, newBase) => {
  return {
    ...handler,
    base: newBase,
  }
}

export default getProxyHandler
