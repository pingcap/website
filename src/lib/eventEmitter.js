class EventEmitter {
  constructor() {
    this.handlers = {}
  }

  static getInstance() {
    if (!EventEmitter.instance) {
      EventEmitter.instance = new EventEmitter()
    }
    return EventEmitter.instance
  }

  on(eventName, cb) {
    if (!this.handlers[eventName]) {
      this.handlers[eventName] = [cb]
    } else {
      this.handlers[eventName].push(cb)
    }
  }

  emit(eventName, ...args) {
    if (this.handlers[eventName]) {
      this.handlers[eventName].forEach((cb) => cb(...args))
    }
  }

  getListenerNumber(eventName) {
    return this.handlers[eventName] ? this.handlers[eventName].length : 0
  }
}

export default EventEmitter
