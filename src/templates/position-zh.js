import '../styles/templates/position-zh.scss'

import { graphql } from 'gatsby'
import Link from '../components/IntlLink'
import React, { useEffect, useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const Blog = ({ data }) => {
  const {
    markdownRemark: { html },
  } = data

  const currentCategory = data.markdownRemark.frontmatter.tags[0]
  const categories = data.categories.group.map((i) => i.category)

  return (
    <Layout>
      <SEO
        title="TiDB Position"
        description=""
        link={[
          {
            rel: 'stylesheet',
            href:
              'https://cdn.jsdelivr.net/gh/sindresorhus/github-markdown-css@3.0.1/github-markdown.css',
          },
        ]}
      />
      <article className="PingCAP-PositionZH">
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-3 categories">
                <Link to={`/careers/join`}>All</Link>
                {categories.map((category) => (
                  <Link
                    key={category}
                    className={category === currentCategory ? 'active' : ''}
                    to={`/careers/${category}`}
                  >
                    {category}
                  </Link>
                ))}
              </div>
              <div
                className="column is-8 is-offset-1 markdown-body position-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($title: String, $positionsPath: String) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        tags
      }
      tableOfContents(absolute: false, pathToSlugField: "frontmatter.title")
    }
    categories: allMarkdownRemark(
      filter: { fields: { collection: { eq: $positionsPath } } }
    ) {
      group(field: frontmatter___tags) {
        category: fieldValue
      }
    }
  }
`

export default Blog
