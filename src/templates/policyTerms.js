import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, useStaticQuery } from 'gatsby'

const PrivacyPolicy = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  const policyContent = html
  const policyTitle = frontmatter.title

  return (
    <Layout>
      <SEO
        title={policyTitle}
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
              dangerouslySetInnerHTML={{ __html: policyContent }}
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
      }
    }
  }
`

export default PrivacyPolicy
