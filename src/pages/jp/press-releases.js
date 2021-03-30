import React from 'react'
import Hero from '../../components/hero'
import { graphql, Link } from 'gatsby'
import SEO from '../../components/seo'
import Layout from '../../components/layout'
import CatalogueSwitch from '../../components/catalogueSwitch'

import '../../styles/pages/press-releases.scss'

const PressReleases = React.memo(({ data }) => {
  const { banner, iconDate, blogs } = data
  const className = `PingCAP-PressReleases`
  return (
    <Layout>
      <SEO
        title="Press Releases"
        description="Get the latest information about PingCAP"
      />
      <article className={className}>
        <Hero backgroundImage={banner.publicURL}>PingCAP関連ニュース</Hero>
        <CatalogueSwitch
          items={[
            {
              name: '関連ニュース',
              url: '/jp/in-the-news',
            },
            {
              name: 'プレスリリース',
              url: '/jp/press-releases',
            },
          ]}
        />
        <News iconDate={iconDate} blogs={blogs} />
      </article>
    </Layout>
  )
})

const News = React.memo(({ iconDate, blogs }) => {
  const className = `PressReleases`
  return (
    <section className={`${className} container`}>
      {blogs.edges.map((v, k) => (
        <NewsItem data={v.node} iconDate={iconDate} />
      ))}
    </section>
  )
})

const NewsItem = React.memo(({ data, iconDate }) => {
  const url = `/blog/${data.parent.relativePath}`.replace('.md', '')

  const className = `PressReleasesItem`
  const classNameRight = `${className}-right`
  return (
    <li className={className}>
      <div className={classNameRight}>
        <div className={`${classNameRight}-date`}>
          <img src={iconDate.publicURL} alt={data.frontmatter.date} />{' '}
          <span>{data.frontmatter.date}</span>
        </div>
        <div className={`${classNameRight}-title`}>
          <Link to={url}>{data.frontmatter.title}</Link>
        </div>
      </div>
    </li>
  )
})

export const query = graphql`
  query {
    banner: file(relativePath: { eq: "in-the-news/banner.jpg" }) {
      publicURL
    }
    iconDate: file(relativePath: { eq: "in-the-news/icon-date.png" }) {
      publicURL
    }
    blogs: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/markdown-pages/blogs/" }
        frontmatter: { customer: { eq: null }, press_release: { eq: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            aliases
          }
          parent {
            ... on File {
              relativePath
            }
          }
        }
      }
    }
  }
`

export default PressReleases
