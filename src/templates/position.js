import '../styles/templates/blog.scss'

import { graphql } from 'gatsby'
import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Position = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

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
        <section className="section section-position">
          <div className="container">
            <div className="columns">
              <div className="column is-7">
                <div
                  className="markdown-body blog-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
            </div>
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

export default Position
