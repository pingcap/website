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
const createCaseStudyCategories = require('./create-pages/caseStudyCategories')
const createCaseStudyPagination = require('./create-pages/allCaseStudies')
const createPositions = require('./create-pages/position')
const createPolicyTerms = require('./create-pages/policyTerms')
const createIntlPages = require('./create-pages/intl')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage, createRedirect } = actions

  // remove page: /download/community
  createRedirect({
    fromPath: '/download/community/',
    toPath: '/download',
    redirectInBrowser: true,
    isPermanent: true,
  })

  createRedirect({
    fromPath: '/products/tidbcloud/trial/',
    toPath: '/products/tidbcloud',
    redirectInBrowser: true,
    isPermanent: true,
  })

  await Promise.all([
    createBlogs({ graphql, createPage, createRedirect }),
    createBlogPagination({ graphql, createPage }),
    createBlogTags({ graphql, createPage }),
    createBlogCategories({ graphql, createPage }),
    createCaseStudies({ graphql, createPage, createRedirect }),
    createCaseStudyCategories({ graphql, createPage }),
    createCaseStudyPagination({ graphql, createPage }),
    createPositions({ graphql, createPage, createRedirect }),
    createPolicyTerms({ graphql, createPage, createRedirect }),
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
}
