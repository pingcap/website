/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const createBlogs = require('./create-pages/blog')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  createBlogs({ graphql, createPage })
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
