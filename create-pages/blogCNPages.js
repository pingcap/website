const createBlogCNPages = ({ page, actions }) => {
  // create page /blog-cn/* for redirection
  const { createPage } = actions
  if (page.path.match(/^\/blog-cn/)) {
    page.matchPath = '/blog-cn/*'
    createPage(page)
  }
}

module.exports = createBlogCNPages
