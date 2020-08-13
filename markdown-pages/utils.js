const replaceStream = require('replacestream')

const BLOG_IMAGE_CDN_BASE_URL = 'https://download.pingcap.com/images/blog/'
const BLOG_IMAGE_CDN_BASE_URL_CN =
  'https://download.pingcap.com/images/blog-cn/'

exports.createReplaceBlogImagePathStream = function (locale) {
  return replaceStream(
    /\(media\//g,
    '(' +
      {
        en: BLOG_IMAGE_CDN_BASE_URL,
        zh: BLOG_IMAGE_CDN_BASE_URL_CN,
      }[locale]
  )
}

exports.createReplaceCopyableStream = function () {
  return replaceStream(/{{<\scopyable(.+)>}}/g, (match, copyMsg) => {
    return `<WithCopy tag="${copyMsg.replace(/"/g, '').trim()}" />`
  })
}
