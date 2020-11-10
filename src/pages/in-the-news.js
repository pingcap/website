import React from 'react'
import Banner from '../components/banner'
import { graphql, Link } from 'gatsby'
import SEO from '../components/seo'
import Layout from '../components/layout'

import '../styles/pages/in-the-news.sass'

import news from '../../data/news.json'

const InTheNews = React.memo(({ data }) => {
  const { banner, iconDate } = data
  const className = `PingCAP-InTheNews`
  return (
    <Layout>
      <SEO
        title="In The News"
        description="Get the latest information about PingCAP"
      />
      <article className={className}>
        <Banner backgroundImage={banner.publicURL}>PingCAP in the News</Banner>
        <CatalogueSwitch
          items={[
            {
              name: 'IN THE NEWS',
              url: '/in-the-news',
            },
            {
              name: 'PRESS RELEASES',
              url: '/press-releases',
            },
          ]}
        />
        <News iconDate={iconDate} />
      </article>
    </Layout>
  )
})

const CatalogueSwitch = React.memo(({ items }) => {
  const className = `CatalogueSwitch`
  const classNameItem = `${className}-item`
  const classNameItemLink = `${classNameItem}-link`
  const classNameItemLinkActive = `${classNameItemLink}-active`
  return (
    <ul className={className}>
      {items.map((v, k) => (
        <li key={v.url} className={classNameItem}>
          <Link
            to={v.url}
            className={classNameItemLink}
            activeClassName={classNameItemLinkActive}
          >
            {v.name}
          </Link>
        </li>
      ))}
    </ul>
  )
})

const News = React.memo(({ iconDate }) => {
  const className = `News`
  return (
    <section className={`${className} container`}>
      {news.map((v, k) => (
        <NewsItem key={v.link} data={v} iconDate={iconDate} />
      ))}
    </section>
  )
})

const NewsItem = React.memo(({ data, iconDate }) => {
  const className = `NewsItem`
  const classNameLeft = `${className}-left`
  const classNameRight = `${className}-right`
  const classNameLogo = `${classNameLeft}-logo`
  const classNameDate = `${classNameRight}-date`
  const classNameTitle = `${classNameRight}-title`
  return (
    <li className={className}>
      <div className={classNameLeft}>
        <div className={classNameLogo}>
          <img src={'https://download.pingcap.com' + data.logo} alt="" />
        </div>
      </div>
      <div className={classNameRight}>
        <div className={classNameDate}>
          <img src={iconDate.publicURL} alt={data.date} />{' '}
          <span>{data.date}</span>
        </div>
        <div className={classNameTitle}>
          <a href={data.link}>{data.title}</a>
        </div>
      </div>
    </li>
  )
})

export const query = graphql`
  query {
    banner: file(relativePath: { eq: "in-the-news/banner.png" }) {
      publicURL
    }
    iconDate: file(relativePath: { eq: "in-the-news/icon-date.png" }) {
      publicURL
    }
  }
`

export default InTheNews
