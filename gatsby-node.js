/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const axios = require('axios').default

const isDev = process.env.NODE_ENV === 'development'
const baseURL = `${process.env.ROCKET_SERVER_URL ||
  'http://localhost:8001'}/api/v1`

const http = axios.create({
  baseURL,
})

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  let blogs = (await http.get('/blogs')).data
  if (isDev) {
    blogs = [blogs[0]]
  }

  blogs = await Promise.all(
    blogs.map(async blog => (await http.get(`/blogs/${blog.name}`)).data)
  )

  // Create blog pages
  blogs.forEach(blog => {
    createPage({
      path: `/blog/${blog.name.split('.')[0]}`,
      component: path.resolve('./src/templates/blog.js'),
      context: {
        name: blog.name,
        content: blog.content,
      },
    })
  })
}
