import { func } from 'prop-types'

export function truncate(n, useWordBoundary = false) {
  if (this.length <= n) {
    return this
  }

  const subString = this.substr(0, n - 1)

  return (
    (useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(' '))
      : subString) + ' ...'
  )
}

export function replaceTitle(title) {
  if (title.endsWith('.md')) {
    return title.replace('.md', '')
  } else {
    return title.replace(/[^\w-]/g, '-')
  }
}

export function replaceSpaceToMiddleLine(s) {
  return s.replace(/\s+/g, '-')
}
