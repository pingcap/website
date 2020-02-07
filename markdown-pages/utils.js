const replaceStream = require('replacestream')

const BLOG_IMAGE_CDN_BASE_URL = 'https://download.pingcap.com/images/blog/'

exports.createReplaceBlogImagePathStream = function() {
  return replaceStream(/\(media\//g, '(' + BLOG_IMAGE_CDN_BASE_URL)
}
