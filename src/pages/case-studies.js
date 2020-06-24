import '../styles/pages/caseStudies.scss'
import '../lib/graphql/image'

import { graphql } from 'gatsby'
import { Link, useIntl } from '@std4453/gatsby-plugin-intl'
import React, { useEffect } from 'react'
import { replaceTitle, truncate } from '../lib/string'

import Img from 'gatsby-image'
import Layout from '../components/layout'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { Router } from '@reach/router'
import SEO from '../components/seo'
import Swiper from 'swiper'

const CaseStudies = ({ data, path }) => {
  const {
    BannerSVG,
    quoteMarkSVG,
    placeholderSVG,
    caseStudies,
    caseStudiesWithoutReadMore
  } = data
  const intl = useIntl()
  const categoriesOfStudies = [
    ...new Set(
      caseStudies.edges
        .filter(({ node }) => node.frontmatter.locale === intl.locale)
        .map(({ node }) => node.frontmatter.customerCategory)
        .concat(caseStudiesWithoutReadMore.edges.map(({ node }) => node.name))
    )
  ]
  const studiesByCategory = categoriesOfStudies.map(c => ({
    category: c.split(' ').join('-'),
    studies: caseStudies.edges
      .filter(({ node }) => node.frontmatter.customerCategory === c)
      .concat(
        caseStudiesWithoutReadMore.edges
          .filter(({ node }) => node.name === c)[0]
          .node.customers.map(customer => ({
            node: {
              frontmatter: {
                customer: customer.name,
                summary: customer.summary
              }
            }
          }))
      )
  }))

  useEffect(() => {
    new Swiper('.swiper-container', {
      autoplay: {
        delay: 6000
      },
      loop: true,
      pagination: {
        el: '.swiper-custom-pagination',
        clickable: true,
        bulletClass: 'bullet',
        bulletActiveClass: 'active',
        renderBullet: () => `<span class="bullet"></span>`
      },
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
      }
    })
  }, [])

  const base = path.substring(0, path.indexOf('/case-studies'))

  return (
    <Layout>
      <SEO title="Case Studies" description="" />
      <article className="PingCAP-CaseStudies">
        <div className="top-banner-wrapper">
          <Img
            fluid={BannerSVG.childImageSharp.fluid}
            className="banner"
            alt="banner"
          />
          <div className="titles">
            <h1>
              <div className="title is-2">Trusted and Verified by</div>
              <div className="title is-2">Web-scale Innovation Leaders</div>
            </h1>
          </div>
        </div>
        <div className="container section">
          <h2 className="title section-title title-under-banner">
            Featured Testimonials
          </h2>
          <div className="card swiper-container">
            <div className="swiper-wrapper top">
              {caseStudies.edges
                .slice(0, 3)
                .map(({ node }) => node.frontmatter)
                .map(study => (
                  <div key={study.customer} className="swiper-slide">
                    <div className="intro">
                      <div className="subtitle is-7">{study.customer}</div>
                      <div className="summary">
                        {truncate.apply(study.summary, [250, true])}
                      </div>
                      <Link
                        to={`/case-studies/${replaceTitle(study.title)}`}
                        className="see-case-study"
                      >
                        See case study
                      </Link>
                    </div>
                    <div className="placeholder" />
                  </div>
                ))}
            </div>
            <div className="fixed-intro">
              <img
                className="quote-mark"
                src={quoteMarkSVG.publicURL}
                alt="quote-mark"
              />
            </div>
            <img
              className="fixed-placeholder"
              src={placeholderSVG.publicURL}
              alt="placeholder"
            />
            <div className="bottom">
              <NavigateBeforeIcon className="swiper-prev" />
              <div className="swiper-custom-pagination" />
              <NavigateNextIcon className="swiper-next" />
            </div>
          </div>
          <h2 className="title section-title title-under-swiper">
            Petabytes of Data Across Industries
          </h2>
          <div className="customer-categories">
            {categoriesOfStudies.map(c => (
              <Link
                key={c}
                to={`/case-studies/${c.split(' ').join('-')}`}
                className="button is-small"
              >
                {c}
              </Link>
            ))}
          </div>
          <Router basepath={`${base}/case-studies`}>
            <Logos key="/" path="/" logos={studiesByCategory[0].studies} />
            {studiesByCategory.map(r => (
              <Logos
                key={r.category}
                path={`/${r.category}`}
                logos={r.studies}
              />
            ))}
          </Router>
        </div>
      </article>
    </Layout>
  )
}

function Logos({ logos }) {
  return (
    <div className="columns is-multiline logos">
      {logos
        .map(({ node }) => node.frontmatter)
        .map((logo, i) => (
          <div key={logo.customer + '-' + i} className="column is-3">
            <div className="detail-card">
              <div className="title column-or-card-title has-text-left">
                {logo.customer}
              </div>
              <div
                className={`${logo.customer.replace(/[\d/+/.\s&]/g, '-')}-logo`}
              />
              <div className="paragraph">
                {truncate.apply(logo.summary, [200, true])}
              </div>
              {logo.title && (
                <Link
                  to={`/case-studies/${replaceTitle(logo.title)}`}
                  className="read-more"
                >
                  Read more >
                </Link>
              )}
            </div>
            <div className="simple-card">
              <div
                className={`${logo.customer.replace(/[\d/+/.\s]/g, '-')}-logo`}
              />
              <div className="title is-6">{logo.customer}</div>
            </div>
          </div>
        ))}
    </div>
  )
}

export const query = graphql`
  query {
    BannerSVG: file(relativePath: { eq: "case-studies/banner.png" }) {
      ...FluidUncompressed
    }
    quoteMarkSVG: file(relativePath: { eq: "case-studies/quote-mark.svg" }) {
      publicURL
    }
    placeholderSVG: file(relativePath: { eq: "case-studies/placeholder.svg" }) {
      publicURL
    }
    caseStudies: allMarkdownRemark(
      filter: {
        fields: { collection: { glob: "markdown-pages/blogs/*" } }
        frontmatter: { customer: { ne: null } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            customer
            customerCategory
            summary
          }
          fields {
            collection
          }
        }
      }
    }
    caseStudiesWithoutReadMore: allCaseStudiesJson {
      edges {
        node {
          name
          customers {
            name
            summary
          }
        }
      }
    }
  }
`

export default CaseStudies
