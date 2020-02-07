import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

const Blog = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const category = frontmatter.categories
    ? frontmatter.categories[0]
    : 'No Category'

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        link={[
          {
            rel: 'stylesheet',
            href:
              'https://cdn.jsdelivr.net/gh/sindresorhus/github-markdown-css@3.0.1/github-markdown.css',
          },
        ]}
      />
      <article className="PingCAP-Blog">
        <progress
          class="progress is-primary blog-progress"
          value="50"
          max="100"
        >
          50%
        </progress>
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <div className="under-category">{'Blog > ' + category}</div>
              <h4 className="title is-4 is-spaced blog-title">
                {frontmatter.title}
              </h4>
              <div className="subtitle is-7 blog-subtitle">
                <span>{frontmatter.date}</span>
                <span>{frontmatter.author || 'PingCAP'}</span>
                <span>{category}</span>
              </div>
              <div
                className="markdown-body blog-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
            <div className="column is-4"></div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($title: String) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        author
        tags
        categories
      }
    }
  }
`

export default Blog
