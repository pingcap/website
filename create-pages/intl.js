const langConfig = require('../lang.config.json')
const defaultLang = langConfig.defaultLang
const langMapKeys = Object.keys(langConfig.languages)
const dev404Page = '/dev-404-page'

const createIntlPages = ({ page, actions }) => {
  const pagePath = page.path

  if (pagePath.startsWith(dev404Page)) {
    return
  }

  const { createPage, deletePage } = actions

  console.log(pagePath)
  const pageLang = langMapKeys.find((lang) => pagePath.startsWith(lang))

  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      locale: pageLang || defaultLang,
      ...langConfig.languages[pageLang || defaultLang],
    },
  })

  if (pageLang) {
    return
  }

  langMapKeys.forEach((lang) =>
    createPage({
      ...page,
      path: `/${lang}${pagePath}`,
      context: {
        ...page.context,
        locale: lang,
        ...langConfig.languages[lang],
      },
    })
  )
}

module.exports = createIntlPages
