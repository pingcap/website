import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import BlogHeader from '../components/blogHeader'
import BlogTags from '../components/blogTags'

const Blogs = ({ data }) => {
  const blogs = data.allMarkdownRemark.edges

  return (
    <Layout>
      <SEO title="Blogs" />
      <article className="PingCAP-Blogs">
        <section className="section section-blogs">
          <div className="container">
            <div className="columns">
              <div className="column is-8">
                {blogs.map(({ node }) => (
                  <div key={node.frontmatter.title} className="blog-preview">
                    <BlogHeader frontmatter={node.frontmatter} isTitleLink />
                    <div className="tmp-green-box" />
                    <div className="summary">{node.frontmatter.summary}</div>
                    <BlogTags tags={node.frontmatter.tags} />
                  </div>
                ))}
              </div>
              <div className="column is-4"></div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "markdown-pages/blogs" } } }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            author
            tags
            categories
            summary
          }
        }
      }
    }
  }
`

export default Blogs
