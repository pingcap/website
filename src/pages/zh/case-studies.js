import '../../styles/pages/caseStudies.scss'
import '../../lib/graphql/image'

import { graphql, Link } from 'gatsby'
// import Link from '../../components/IntlLink'
import React, { useEffect, useState, useRef, useMemo } from 'react'
import { replaceTitle, truncate } from '../../lib/string'

import Img from 'gatsby-image'
import Layout from '../../components/layout'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { Router } from '@reach/router'
import SEO from '../../components/seo'
import Swiper from 'swiper'

const CaseStudies = ({ data, location }) => {
  const pathname = decodeURI(location.pathname)
  const currentCategory =
    pathname.slice(
      pathname.search('case-studies') + 'case-studies'.length + 1
    ) || '全部行业'
  const { BannerSVG, placeholderSVG, caseStudies } = data
  const categoriesOfStudies = useMemo(
    () => [
      ...new Set([
        '全部行业',
        ...caseStudies.edges.map(
          ({ node }) => node.frontmatter.customerCategory || '全部行业'
        ),
      ]),
    ],
    [caseStudies]
  )

  const studiesByCategory = useMemo(
    () =>
      categoriesOfStudies.map((c) => {
        return {
          category: c.split(' ').join('-'),
          studies: caseStudies.edges.filter(
            ({ node }) =>
              c === '全部行业' || node.frontmatter.customerCategory === c
          ),
        }
      }),
    [categoriesOfStudies, caseStudies]
  )

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
      <SEO
        title="TiDB Case Studies"
        description="As a distributed, NewSQL, Hybrid Transactional/Analytical Processing database, TiDB is trusted and verified by web-scale application leaders."
      />
      <article className="PingCAP-CaseStudies">
        <Banner bannerSVG={BannerSVG} />
        <div className="container section">
          <h2 className="title title-under-banner title-under-banner-zh">
            精选案例
          </h2>
          <CaseSwiper
            caseStudies={caseStudies}
            placeholderSVG={placeholderSVG}
          ></CaseSwiper>
          <h2 className="title title-under-swiper title-under-swiper-zh">
            TiDB现已被近1000家不同行业的领先企业应用于生产环境
          </h2>
          <Dropdown
            className="customer-categories"
            items={categoriesOfStudies}
            selectedItem={currentCategory}
          ></Dropdown>
          <Router basepath="/zh/case-studies">
            <Logos key="/" path="/" logos={studiesByCategory[0].studies} />
            {studiesByCategory.map((r) => (
              <Logos
                key={r.category}
                path={`/${encodeURIComponent(r.category)}`}
                logos={r.studies}
              />
            ))}
          </Router>
        </div>
      </article>
    </Layout>
  )
}

const Banner = React.memo(({ bannerSVG }) => {
  return (
    <div className="top-banner-wrapper">
      <Img
        fluid={bannerSVG.childImageSharp.fluid}
        className="banner"
        alt="banner"
      />
      <div className="titles">
        <h1>
          <div className="title-zh">被全球众多领域的领先企业认可并信任</div>
        </h1>
      </div>
    </div>
  )
})

const CaseSwiper = React.memo(({ caseStudies, placeholderSVG }) => {
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
                  to={`/zh/case-studies/${replaceTitle(study.relativePath)}`}
                  className="see-case-study"
                >
                  查看更多案例
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
})

const Dropdown = ({ className, items, selectedItem }) => {
  const [dropped, setDropped] = useState(false)
  const buttonRef = useRef(null)
  const blurHandler = () => setDropped(false)
  const dropdownClass =
    (dropped ? 'dropdown is-active' : 'dropdown') + ` ${className}`
  const arrowIconClass = dropped ? 'down-arrow' : 'up-arrow'
  return (
    <div className={dropdownClass} onClick={() => setDropped(!dropped)}>
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
                to={`/zh/case-studies/${encodeURIComponent(
                  item.split(' ').join('-')
                )}`}
                key={item}
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
    <div className="columns is-multiline logos">
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
                style={{
                  background: `url(https://download.pingcap.com${logo.logo}) center no-repeat`,
                  backgroundSize: 'contain',
                  position: 'absolute',
                  top: '-0.75rem',
                  right: '0',
                  width: '30%',
                  height: '30%',
                }}
                className="detail-card-logo"
              ></div>
              <div className="paragraph">
                {truncate.apply(logo.summary, [120, true])}
              </div>
              {logo.relativePath && (
                <Link
                  to={`/zh/case-studies/${replaceTitle(logo.relativePath)}`}
                  className="read-more"
                >
                  查看更多
                </Link>
              )}
            </div>
            <div className="simple-card">
              <div
                style={{
                  background: `url(https://download.pingcap.com${logo.logo}) 50% no-repeat`,
                  backgroundSize: 'contain',
                  width: '30%',
                  height: '30%',
                }}
              ></div>
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
    caseStudies: allMdx(
      filter: {
        fileAbsolutePath: { regex: "/markdown-pages/zh/blogs/" }
        frontmatter: { category: { eq: "case" } }
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
            logo
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

export default CaseStudies
