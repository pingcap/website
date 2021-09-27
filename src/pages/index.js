import '../styles/pages/index.scss'

import { Box, withNormalHelpers } from '@seagreenio/react-bulma'
import { graphql, Link } from 'gatsby'
import React, { useEffect, useRef, useState } from 'react'
import { benefitsData, celebrateYourGrowthData, logos } from '../data'

import Layout from '../components/layout'
import { PostFromUsInHome } from '../components/postFromUs'
import SEO from '../components/seo'
import { replaceTitle } from '../lib/string'
import SectionUseCases from '../components/sectionUseCases'
import LinkWithArrow from '../components/linkWithArrow'
import StartTiDBRibbon from '../components/startTiDBRibbon'

import throttle from 'lodash.throttle'
import Button from '../components/button'

const NormalBox = withNormalHelpers(Box)

const caseLogos = [
  'square',
  'streak',
  'lenovo',
  'tencent',
  'bigo',
  'colopl',
  'blued',
  'shopee',
  'bookmyshow',
  'bank-of-beijing',
  'hulu',
  'qiy',
  'netease-games',
  'sj-distributor',
  'mi',
  'opera',
  'zalopay',
  'unext',
  'wuba',
  'zhihu',
]

const IndexPage = ({ data }) => {
  const {
    tidbSQLAtScaleSVG,
    tidbFeaturesMP4,
    tidbFeaturesGIF,
    last3Blogs,
  } = data

  const titlesRef = useRef()
  const benefitsRef = useRef()
  const architectureRef = useRef()

  useEffect(() => {
    Array.from(titlesRef.current.children).forEach((c) =>
      c.classList.add('animate-in')
    )

    scrollToDisplay()
  }, [])

  const scrollToDisplay = () => {
    const documentHeight = document.documentElement.clientHeight
    const array = [
      {
        style: 'opacity: 0; transform: translateY(25%)',
        displayStyle: 'opacity: 1; transform: translateY(0)',
        children: Array.from(benefitsRef.current.children),
        timeout: false,
        triggerHeightRatio: [4 / 5, 0.25],
      },
      {
        style: 'opacity: 0; transform: translateX(-12.5%)',
        displayStyle: 'opacity: 1; transform: translateX(0)',
        children: [architectureRef.current],
        timeout: true,
        triggerHeightRatio: [4 / 5, 0.25],
      },
    ]
    let begin = 0

    function bind(el, index, displayStyle, timeout, triggerHeightRatio) {
      const listener = throttle(() => {
        if (index !== begin) {
          return
        }

        const { top, height } = el.getBoundingClientRect()
        const triggerHeight = window.matchMedia('(max-width: 768px)').matches
          ? -height * (triggerHeightRatio ? triggerHeightRatio[1] : 0.25)
          : -height * (triggerHeightRatio ? triggerHeightRatio[0] : 0.75)

        if (top - documentHeight < triggerHeight) {
          Array.from(el.children).forEach((c, i) => {
            if (timeout) {
              setTimeout(() => {
                c.style = displayStyle
              }, i * 200)
            } else {
              c.style = displayStyle
            }
          })

          begin++
          window.removeEventListener('scroll', listener)
        }
      }, 500)
      window.addEventListener('scroll', listener)
    }

    let index = 0
    array.forEach((a) => {
      const style = a.style

      a.children.forEach((b) => {
        const top = b.getBoundingClientRect().top

        if (top > documentHeight) {
          bind(b, index++, a.displayStyle, a.timeout, a.triggerHeightRatio)

          Array.from(b.children).forEach((c) => {
            if (c.className !== 'intro') {
              c.style = style
            }
          })
        } else {
          index++
          begin++
        }
      })
    })
  }

  const [browser, setBrowser] = useState({
    isMiBrowser: false,
    isX5Browser: false,
  })

  useEffect(() => {
    setBrowser({
      isMiBrowser: /MiuiBrowser/gi.test(window.navigator.userAgent),
      isX5Browser: /MicroMessenger/i.test(window.navigator.userAgent),
    })
  }, [])

  return (
    <Layout NavbarProps={{ showBanner: true }}>
      <SEO
        title="TiDB | SQL at Scale"
        description="An open-source, cloud-native, distributed SQL database for elastic scale and real-time analytics"
      />
      <article className="PingCAP-Home">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container">
              <div ref={titlesRef} className="titles-and-entry">
                <h1>
                  <img
                    src={tidbSQLAtScaleSVG.publicURL}
                    alt="PingCAP Home: TiDB | SQL At Scale"
                  />
                </h1>
                <h2 className="subtitle is-4">
                  An open-source, cloud-native, distributed SQL database for
                  elastic scale and real-time analytics
                </h2>
                <div className="buttons">
                  <Button
                    as={Link}
                    to="/download"
                    target="_blank"
                    size="large"
                    type="primary"
                  >
                    GET STARTED
                  </Button>
                  <Button
                    as={Link}
                    to="/contact-us"
                    size="large"
                    type="outline"
                  >
                    ASK AN EXPERT
                  </Button>
                </div>
              </div>
              <div className="video-wrapper">
                {browser.isMiBrowser || browser.isX5Browser ? (
                  // if browser is MiBrowser or WeChat X5 Browser, show GIF for resolving z-index error
                  <img src={tidbFeaturesGIF.publicURL} alt="" />
                ) : (
                  <video loop muted autoPlay>
                    <source src={tidbFeaturesMP4.publicURL} type="video/mp4" />
                    <img src={tidbFeaturesGIF.publicURL} alt="TiDB Features" />
                  </video>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-case-studies has-light-background">
          <div className="container">
            <h2 className="title section-title is-4">
              Trusted and Verified by Innovation Leaders
            </h2>
            <div className="logos">
              {caseLogos.map((logo) => (
                <div key={logo} className={`${logo}-logo`} />
              ))}
              <div className="mobile-fake-logo" />
            </div>
            <div className="has-text-centered">
              <LinkWithArrow
                to="/case-studies"
                linkText="See case studies"
                outboundLink={false}
              />
            </div>
          </div>
        </section>

        <section className="section section-celebrate-your-growth">
          <div className="container">
            <h2 className="title section-title is-4">Why TiDB?</h2>
            <div className="columns is-variable is-6">
              {celebrateYourGrowthData.map((d) => (
                <div key={d.name} className="column">
                  <NormalBox className="outer">
                    <img
                      src={d.placeholder}
                      alt={d.name}
                      className="placeholder"
                    />
                    <h3 className="title is-spaced card-title is-7">
                      {d.name}
                    </h3>
                    <div className="paragraph desc">{d.desc}</div>
                  </NormalBox>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-benefits">
          <div className="container">
            <h2 className="title section-title is-4">
              The Benefits of Distributed SQL
            </h2>
            <div ref={benefitsRef} className="benefits">
              {benefitsData.map((d) => (
                <div
                  key={d.name}
                  className={`benefit${d.reverse ? ' reverse' : ''}`}
                >
                  <div className="placeholder-wrapper">
                    <img
                      className="placeholder"
                      src={d.placeholder}
                      alt={d.name}
                    />
                  </div>
                  <div className="intro">
                    <div className="title is-spaced column-title has-text-left is-5">
                      {d.name}
                    </div>
                    <div className="paragraph">{d.desc}</div>
                    <LinkWithArrow
                      to={d.href}
                      linkText={d.link}
                      outboundLink={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <StartTiDBRibbon />

        <SectionUseCases hasLightBg={false} />

        <section className="section section-architecture">
          <div className="container">
            <div ref={architectureRef} className="images has-light-background">
              <div className="left" />
              <div className="center" />
              <div className="right" />
            </div>
          </div>
        </section>

        <section className="section section-learn-more">
          <div className="container">
            <h2 className="title section-title is-4">
              Learn More in Engineering Blogs
            </h2>
            <div className="columns is-variable is-6">
              {last3Blogs.edges.map(({ node: { frontmatter, parent } }) => (
                <div key={frontmatter.title} className="column">
                  <Link
                    className="card"
                    to={`/blog/${replaceTitle(parent.relativePath)}`}
                  >
                    <div className="card-image">
                      <figure className="image">
                        <img
                          src={`https://download.pingcap.com${frontmatter.image}`}
                          alt={frontmatter.title}
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="title is-spaced card-title has-text-left">
                        {frontmatter.title}
                      </div>
                      <div className="subtitle card-media-title">
                        By{' '}
                        {(frontmatter.author && frontmatter.author[0]) ||
                          'PingCAP'}
                      </div>
                      <div className="paragraph">{frontmatter.summary}</div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div className="has-text-centered view-more-wrapper">
              <LinkWithArrow
                to="/blog"
                linkText="View more blog posts"
                outboundLink={false}
              />
            </div>
          </div>
        </section>

        <section className="section section-get-started-with-tidb">
          <div className="container">
            <h2 className="title section-title is-4">Get Started with TiDB</h2>
            <div className="columns is-variable is-6">
              <div className="column">
                <NormalBox className="outer" shadowless>
                  <h3 className="title column-title is-5">On Bare-metal</h3>
                  <div className="strikethrough-primary" />
                  <a
                    href="https://docs.pingcap.com/tidb-in-kubernetes/stable/get-started#get-started-with-tidb-operator-in-kubernetes"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {' '}
                    <Box className="logo k8s">
                      <img src={logos.kubernetes} alt="Kubernetes logo" />
                    </Box>
                  </a>
                  <a
                    href="https://docs.pingcap.com/tidb/stable/production-deployment-using-tiup"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Box className="logo tiup">
                      <img src={logos.tiup} alt="TiUP logo" />
                    </Box>
                  </a>
                </NormalBox>
              </div>
              <div className="column">
                <NormalBox className="outer" shadowless>
                  <h3 className="title column-title is-5">On Public Cloud</h3>
                  <div className="strikethrough-primary" />
                  <a
                    href="https://docs.pingcap.com/tidb-in-kubernetes/stable/deploy-on-aws-eks"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Box className="logo aws">
                      <img src={logos.aws} alt="AWS logo" />
                    </Box>
                  </a>
                  <a
                    href="https://docs.pingcap.com/tidb-in-kubernetes/stable/deploy-on-gcp-gke"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Box className="logo gcp">
                      <img
                        src={logos.googleCloudPlatform}
                        alt="Google Cloud Platform logo"
                      />
                    </Box>
                  </a>
                </NormalBox>
              </div>
              <div className="column">
                <NormalBox className="outer" shadowless>
                  <h3 className="title column-title is-5">
                    Database as a Service
                  </h3>
                  <div className="strikethrough-primary" />
                  <Link to="https://tidbcloud.com/signup" target="_blank">
                    <Box className="logo tidb-cloud">
                      <img src={logos.tidbCloud} alt="TiDB Cloud logo" />
                    </Box>
                  </Link>
                </NormalBox>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-join-us-newsletter">
          <div className="container">
            <PostFromUsInHome />
          </div>
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($blogsPath: String) {
    tidbSQLAtScaleSVG: file(
      relativePath: { eq: "home/tidb-sql-at-scale.svg" }
    ) {
      publicURL
    }
    tidbFeaturesMP4: file(relativePath: { eq: "home/tidb-features.mp4" }) {
      publicURL
    }
    tidbFeaturesGIF: file(relativePath: { eq: "home/tidb-features.gif" }) {
      publicURL
    }
    last3Blogs: allMdx(
      filter: {
        fileAbsolutePath: { regex: $blogsPath }
        frontmatter: { customer: { eq: null } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 3
    ) {
      edges {
        node {
          frontmatter {
            title
            author
            summary
            image
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

export default IndexPage
