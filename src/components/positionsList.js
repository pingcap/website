import '../styles/templates/positionsList.scss'

import Link from './IntlLink'
import React, { useEffect, useState } from 'react'

import Layout from './layout'
import Pagination from './pagination'
import SEO from './seo'
import { replaceTitle } from '../lib/string'

const PositionsList = ({ data, pageContext, PaginationPathPrefix }) => {
  const { currentPage, numPages, category: currentCategory } = pageContext

  console.log(data)
  const positions = data.allMarkdownRemark.edges
  const categories = data.categories.group.map((i) => i.category)

  return (
    <Layout>
      <SEO title="TiDB Positions" description="" />
      <article className="PingCAP-PositionsList">
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-3 categories">
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
              <div className="column is-8 is-offset-1 positions">
                {positions.map(
                  (
                    {
                      node: {
                        frontmatter: { title },
                        parent: { relativePath },
                      },
                    },
                    i
                  ) => (
                    <Link to={`/careers/${replaceTitle(relativePath)}`} key={i}>
                      <div className="position-card">
                        <div className="title is-4 is-spaced">{title}</div>
                        <div className="summary">
                          开发基于 Kubernetes 的 TiDB Cloud
                          版自动化部署和运维工具开发基于 Kubernetes 的企业版
                          TiDB 自动化部署工具开发基于 Kubernetes 的 TiDB Cloud
                          版自动化部署和运维工具开发基于 Kubernetes 的企业版
                          TiDB 自动化部署工具…
                        </div>
                      </div>
                    </Link>
                  )
                )}
                <Pagination
                  pathPrefix={PaginationPathPrefix}
                  currentPage={currentPage}
                  numPages={numPages}
                />
              </div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default PositionsList
