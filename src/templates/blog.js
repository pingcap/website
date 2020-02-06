import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Blog = ({ pageContext: { name: title, content } }) => {
  return (
    <Layout>
      <SEO title={title} />
      <div>{title}</div>
    </Layout>
  )
}

export default Blog
