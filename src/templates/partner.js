import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import '../styles/pages/contactUs.scss'

const Partner = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body: html } = mdx

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.summary}
        link={[
          {
            rel: 'stylesheet',
            href:
              'https://cdn.jsdelivr.net/gh/sindresorhus/github-markdown-css@3.0.1/github-markdown.css',
          },
        ]}
      />
      <article className="PingCAP-Contact-Us PingCAP-Blog">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container">
              <div className="title section-title section-title-en partner-hero-title">
                PingCAP - AWS ISV Partner
              </div>
            </div>
          </div>
        </section>
        <section className="section section-position">
          <div className="container">
            <div className={`markdown-body blog-content position-content`}>
              <MDXProvider>
                <MDXRenderer>{html}</MDXRenderer>
              </MDXProvider>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($title: String) {
    mdx(frontmatter: { title: { eq: $title } }) {
      body
      frontmatter {
        title
        summary
      }
      parent {
        ... on File {
          relativePath
        }
      }
    }
  }
`

export default Partner
