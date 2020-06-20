import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

const PrivacyPolicy = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.title}
        link={[
          {
            rel: 'stylesheet',
            href:
              'https://cdn.jsdelivr.net/gh/sindresorhus/github-markdown-css@3.0.1/github-markdown.css'
          }
        ]}
      />
      <article className="PingCAP-Blog">
        <section className="section section-position">
          <div className="container">
            <div
              className="markdown-body blog-content position-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </section>
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
        summary
      }
    }
  }
`

export default PrivacyPolicy
