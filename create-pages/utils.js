const langConfig = require('../lang.config.json')

exports.replaceTitle = function (title) {
  return title.replace('.md', '')
}

exports.langPrefixes = function (lang) {
  return lang === langConfig.defaultLang ? [''] : [`${lang}/`]
}

exports.replaceSpaceWithDash = function (s) {
  return s.replace(/\s+/g, '-')
}
