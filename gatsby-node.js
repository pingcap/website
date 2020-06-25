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
const caseStudies = require('./create-pages/caseStudies')
const createPositions = require('./create-pages/position')
const createPolicyTerms = require('./create-pages/policyTerms')
const createIntlPages = require('./create-pages/intl')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  createBlogs({ graphql, createPage })
  createBlogPagination({ graphql, createPage })
  createBlogTags({ graphql, createPage })
  createBlogCategories({ graphql, createPage })
  caseStudies({ graphql, createPage })
  createPositions({ graphql, createPage })
  createPolicyTerms({ graphql, createPage })
}

exports.onCreateNode = ({ actions, node, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
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
