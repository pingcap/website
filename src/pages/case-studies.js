import '../styles/pages/caseStudies.scss'
import '../lib/graphql/image'

import { graphql, Link } from 'gatsby'
import React, { useEffect, useState, useRef } from 'react'

import { replaceTitle, truncate } from '../lib/string'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import ColumnsForDebugging from '../components/columnsForDebugging'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { Router } from '@reach/router'
import SEO from '../components/seo'
import Swiper from 'swiper'
import flatten from 'lodash.flatten'

const CaseStudies = ({ data, location }) => {
  const { pathname } = location
  const currentCategory =
    pathname.slice(
      pathname.search('case-studies') + 'case-studies'.length + 1
    ) || 'All'
  const {
    BannerSVG,
    placeholderSVG,
    caseStudies,
    caseStudiesWithoutReadMore,
  } = data

  const categoriesOfStudies = [
    'All',
    ...new Set(
      caseStudies.edges
        .map(({ node }) => node.frontmatter.customerCategory)
        .concat(caseStudiesWithoutReadMore.edges.map(({ node }) => node.name))
    ),
  ]

  const studiesByCategory = categoriesOfStudies.map((c) => {
    let withoutReadMoreNodes = caseStudiesWithoutReadMore.edges
      .filter(({ node }) => c === 'All' || node.name === c)
      .map((edge) => {
        return edge.node.customers.map((customer) => ({
          node: {
            frontmatter: {
              customer: customer.name,
              summary: customer.summary,
            },
          },
        }))
      })
    withoutReadMoreNodes =
      withoutReadMoreNodes.length === 1
        ? withoutReadMoreNodes[0]
        : flatten(withoutReadMoreNodes)
    return {
      category: c.split(' ').join('-'),
      studies: caseStudies.edges
        .filter(
          ({ node }) => c === 'All' || node.frontmatter.customerCategory === c
        )
        .concat(withoutReadMoreNodes),
    }
  })

  useEffect(() => {
    new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-custom-pagination',
        clickable: true,
        bulletClass: 'bullet',
        bulletActiveClass: 'active',
        renderBullet: () => `<span class="bullet"></span>`,
      },
      navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
      },
    })
  }, [])

  return (
    <Layout>
      <ColumnsForDebugging></ColumnsForDebugging>
      <SEO
        title="TiDB Case Studies"
        description="As a distributed, NewSQL, Hybrid Transactional/Analytical Processing database, TiDB is trusted and verified by web-scale application leaders."
      />
      <article className="PingCAP-CaseStudies">
        <Banner bannerSVG={BannerSVG} />
        <div className="container section">
          <h2 className="title title-under-banner">Featured Testimonials</h2>
          <CaseSwiper
            caseStudies={caseStudies}
            placeholderSVG={placeholderSVG}
          ></CaseSwiper>
          <h2 className="title title-under-swiper">
            Petabytes of Data Across Industries
          </h2>
          <Dropdown
            className="customer-categories"
            items={categoriesOfStudies}
            selectedItem={currentCategory}
          ></Dropdown>
          <Router basepath="/case-studies">
            <Logos key="/" path="/" logos={studiesByCategory[0].studies} />
            {studiesByCategory.map((r) => (
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

const Banner = ({ bannerSVG }) => {
  return (
    <div className="top-banner-wrapper">
      <Img
        fluid={bannerSVG.childImageSharp.fluid}
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
  )
}

const CaseSwiper = ({ caseStudies, placeholderSVG }) => {
  return (
    <div className="card swiper-container">
      <div className="swiper-wrapper top">
        {caseStudies.edges
          .slice(0, 3)
          .map(({ node }) => ({
            ...node.frontmatter,
            ...(node.parent ? { relativePath: node.parent.relativePath } : {}),
          }))
          .map((study) => (
            <div key={study.customer} className="swiper-slide">
              <div className="intro">
                <div className="subtitle is-7">{study.customer}</div>
                <div className="summary">
                  {truncate.apply(study.summary, [250, true])}
                </div>
                <Link
                  to={`/case-studies/${replaceTitle(study.relativePath)}`}
                  className="see-case-study"
                >
                  See case study
                </Link>
              </div>
              <div className="placeholder"></div>
            </div>
          ))}
      </div>
      <img
        src={placeholderSVG.publicURL}
        alt="placeholder"
        className="fixed-placeholder"
      />
      <div className="bottom">
        <NavigateBeforeIcon className="swiper-prev" />
        <div className="swiper-custom-pagination" />
        <NavigateNextIcon className="swiper-next" />
      </div>
    </div>
  )
}

const Dropdown = ({ className, items, selectedItem }) => {
  const [dropped, setDropped] = useState(false)
  const buttonRef = useRef(null)
  const blurHandler = () => setDropped(false)
  const dropdownClass =
    (dropped ? 'dropdown is-active' : 'dropdown') + ` ${className}`
  const arrowIconClass = dropped ? 'down-arrow' : 'up-arrow'
  return (
    <div
      role="button"
      tabIndex={0}
      className={dropdownClass}
      onClick={() => setDropped(!dropped)}
      onKeyDown={() => setDropped(!dropped)}
    >
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onBlur={blurHandler}
          ref={buttonRef}
        >
          <span>{selectedItem}</span>
          <div className={arrowIconClass}></div>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          {items.map((item) => {
            const className =
              item === selectedItem
                ? 'dropdown-item is-active'
                : 'dropdown-item'
            return (
              <Link
                className={className}
                to={`/case-studies/${item.split(' ').join('-')}`}
                onMouseDown={(e) => {
                  e.preventDefault()
                }}
              >
                {item}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

function Logos({ logos }) {
  return (
    <div className="columns is-multiline is-gapless logos">
      {logos
        .map(({ node }) => ({
          ...node.frontmatter,
          ...(node.parent ? { relativePath: node.parent.relativePath } : {}),
        }))
        .map((logo, i) => (
          <div key={logo.customer + '-' + i} className="column is-3">
            <div className="detail-card">
              <div className="title column-title has-text-left">
                {logo.customer}
              </div>
              <div
                className={`${logo.customer.replace(/[\d/+/.\s&]/g, '-')}-logo`}
              />
              <div className="paragraph">
                {truncate.apply(logo.summary, [200, true])}
              </div>
              {logo.relativePath && (
                <Link
                  to={`/case-studies/${replaceTitle(logo.relativePath)}`}
                  className="read-more"
                >
                  Read more
                </Link>
              )}
            </div>
            <div className="simple-card">
              <div
                className={`${logo.customer.replace(/[\d/+/.\s&]/g, '-')}-logo`}
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
    placeholderSVG: file(relativePath: { eq: "case-studies/placeholder.svg" }) {
      publicURL
    }
    caseStudies: allMarkdownRemark(
      filter: {
        fields: { collection: { eq: "markdown-pages/blogs" } }
        frontmatter: { customer: { ne: null }, notShowOnLogoWall: { ne: true } }
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
          parent {
            ... on File {
              relativePath
            }
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
