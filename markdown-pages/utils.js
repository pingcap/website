const replaceStream = require('replacestream')

const BLOG_IMAGE_CDN_BASE_URL = 'https://download.pingcap.com/images/blog/'

exports.createReplaceBlogImagePathStream = function (locale) {
  return replaceStream(
    /\(media\//g,
    '(' +
      {
        en: BLOG_IMAGE_CDN_BASE_URL,
      }[locale]
  )
}

exports.createReplaceCopyableStream = function () {
  return replaceStream(/{{<\scopyable(.+)>}}/g, (match, copyMsg) => {
    return `<WithCopy tag="${copyMsg.replace(/"/g, '').trim()}" />`
  })
}

exports.createReplaceTrackGABtns = function () {
  return replaceStream(
    /<a href="\/download"(.+)<\/button><\/a>/gs,
    (trackCode, middle) => {
      const regx = /(?<=onclick="trackViews\(').*?(?=\', 'download-tidb-btn-middle')/gs
      const blogName = trackCode.match(regx)
      return `<TrackGABtns blogName="${blogName}" />`
    }
  )
}
