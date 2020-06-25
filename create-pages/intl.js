const langConfig = require('../lang.config.json')
const defaultLang = langConfig.defaultLang
const langMapKeys = Object.keys(langConfig.languages)
const dev404Page = '/dev-404-page'

const ignores = ['/blog']

const createIntlPages = ({ page, actions }) => {
  const pagePath = page.path

  if (pagePath.startsWith(dev404Page)) {
    return
  }

  const { createPage, deletePage } = actions

  console.log(pagePath)
  const pageLang =
    langMapKeys.find((lang) => pagePath.startsWith(lang)) || defaultLang

  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      locale: pageLang,
      ...langConfig.languages[pageLang],
    },
  })

  if (
    ignores.some((ignore) => pagePath.startsWith(ignore)) ||
    langMapKeys.some((lang) => pagePath.startsWith(lang))
  ) {
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
