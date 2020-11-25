import React from 'react'
import Hero from '../../components/hero'
import { graphql } from 'gatsby'
import SEO from '../../components/seo'
import Layout from '../../components/layout'

import '../../styles/pages/in-the-news.scss'

import news from '../../../data/zh/news.json'

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
        <Hero backgroundImage={banner.publicURL}>PingCAP 新闻报道</Hero>
        <News iconDate={iconDate} />
      </article>
    </Layout>
  )
})

const News = React.memo(({ iconDate }) => {
  const className = `News`
  return (
    <section className={`${className} container`}>
      {news.map((v) => (
        <NewsItem key={v.link} data={v} iconDate={iconDate} />
      ))}
    </section>
  )
})

const NewsItem = React.memo(({ data, iconDate }) => {
  const className = `NewsItem`
  const classNameLeft = `${className}-left`
  const classNameRight = `${className}-right`
  return (
    <li className={className}>
      <div className={classNameLeft}>
        <div className={`${classNameLeft}-logo`}>
          <img src={'https://download.pingcap.com' + data.logo} alt="" />
        </div>
      </div>
      <div className={classNameRight}>
        <div className={`${classNameRight}-date`}>
          <img src={iconDate.publicURL} alt={data.date} />{' '}
          <span>{data.date}</span>
        </div>
        <div className={`${classNameRight}-title`}>
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            {data.title}
          </a>
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
  }
`

export default InTheNews
