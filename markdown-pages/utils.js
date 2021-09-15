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
    /<div class="trackable-btns">(.+?)<\/div>/gs,
    (trackCode, middle) => {
      const regx = /<a href="(.+?)" onclick="trackViews\('(.+?)', '(.*?)'\)"><button>(.+?)<\/button><\/a>/gs
      const btns = [...middle.matchAll(regx)]
      let btnHrefs = ''
      let btnLabels = ''
      let btnTypes = ''
      let btnTexts = ''
      btns.forEach((btn) => {
        btnHrefs = btnHrefs + btn[1] + ','
        btnLabels = btnLabels + btn[2] + ','
        btnTypes = btnTypes + btn[3] + ','
        btnTexts = btnTexts + btn[4] + ','
      })
      return `<TrackGABtns btnHrefs="${btnHrefs}" btnLabels="${btnLabels}" btnTypes="${btnTypes}" btnTexts="${btnTexts}" />`
    }
  )
}
