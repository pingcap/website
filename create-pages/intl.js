const langConfig = require('../lang.config.json')
const defaultLang = langConfig.defaultLang
const langMapKeys = Object.keys(langConfig.languagesSimple)
const dev404Page = '/dev-404-page'

const createIntlPages = ({ page, actions }) => {
  const pagePath = page.path

  if (pagePath.startsWith(dev404Page)) {
    return
  }

  const { createPage, deletePage } = actions

  const pageLang = langMapKeys.find((lang) => pagePath.startsWith(`/${lang}`))

  deletePage(page)
  createPage({
    ...page,
    context: {
      ...page.context,
      language: pageLang || defaultLang,
      ...langConfig.languages[pageLang || defaultLang],
    },
  })

  // if (pageLang) {
  //   return
  // }

  // langMapKeys
  //   .filter((lang) => lang !== defaultLang)
  //   .forEach((lang) =>
  //     createPage({
  //       ...page,
  //       path: `/${lang}${pagePath}`,
  //       context: {
  //         ...page.context,
  //         language: lang,
  //         ...langConfig.languages[lang],
  //       },
  //     })
  //   )
}

module.exports = createIntlPages
