/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const createBlogs = require('./create-pages/blog')
const createBlogPagination = require('./create-pages/blogs')
const createBlogTags = require('./create-pages/blogTags')
const createBlogCategories = require('./create-pages/blogCategories')
const createCaseStudies = require('./create-pages/caseStudies')
const createPositions = require('./create-pages/position')
const createPositionsZH = require('./create-pages/position-zh')
const createPositionsPagination = require('./create-pages/positions')
const createPositionsAllPagination = require('./create-pages/positionsAll')
const createPolicyTerms = require('./create-pages/policyTerms')
const createIntlPages = require('./create-pages/intl')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions

  await Promise.all([
    createBlogs({ graphql, createPage, createRedirect }),
    createBlogPagination({ graphql, createPage }),
    createBlogTags({ graphql, createPage }),
    createBlogCategories({ graphql, createPage }),
    createPositionsZH({ graphql, createPage, createRedirect }),
    createPositionsPagination({ graphql, createPage }),
    createPositionsAllPagination({ graphql, createPage }),
    createCaseStudies({ graphql, createPage, createRedirect }),
    createPositions({ graphql, createPage, createRedirect }),
    createPolicyTerms({ graphql, createPage }),
  ])
}

exports.onCreateNode = ({ actions, node, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `mdx`) {
    const parent = getNode(node.parent)

    createNodeField({
      node,
      name: 'collection',
      value: parent.sourceInstanceName,
    })
  }
}

exports.onCreatePage = ({ page, actions }) => {
  createIntlPages({ page, actions })

  // create page /blog-cn/* for redirection
  const { createPage } = actions
  if (page.path.match(/^\/blog-cn/)) {
    page.matchPath = '/blog-cn/*'
    createPage(page)
  }
}
