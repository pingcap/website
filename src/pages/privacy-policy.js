import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Link, graphql, useStaticQuery } from 'gatsby'

const PrivacyPolicy = () => {
  const data = useStaticQuery(graphql`
    query {
      privacyPolicy: allMarkdownRemark(
        filter: {
          fields: { collection: { eq: "markdown-pages/pages" } }
          frontmatter: { title: { eq: "Privacy Policy" } }
        }
      ) {
        edges {
          node {
            html
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)

  const privacyPolicyContent = data.privacyPolicy.edges[0].node.html
  const privacyPolicyTitle = data.privacyPolicy.edges[0].node.frontmatter.title
  return (
    <Layout>
      <SEO
        title="daf"
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
              dangerouslySetInnerHTML={{ __html: privacyPolicyContent }}
            />
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default PrivacyPolicy
