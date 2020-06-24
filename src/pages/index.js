import '../styles/pages/index.scss'

import { Box, Button, withNormalHelpers } from '@seagreenio/react-bulma'
import { graphql, Link } from 'gatsby'
import React, { useEffect, useRef } from 'react'
import { benefitsData, celebrateYourGrowthData, logos } from '../data'

import Layout from '../components/layout'
import { PostFromUsInHome } from '../components/postFromUs'
import SEO from '../components/seo'
import { replaceTitle } from '../lib/string'
import SectionUseCases from '../components/sectionUseCases'
import LinkWithArrow from '../components/linkWithArrow'
import StartTiDBRibbon from '../components/startTiDBRibbon'
import { navigate } from '@std4453/gatsby-plugin-intl'

const NormalBox = withNormalHelpers(Box)

const caseLogos = [
  'lenovo',
  'tencent',
  'oppo',
  'bigo',
  'blued',
  'paypay',
  'shopee',
  'bookmyshow',
  'bank-of-beijing',
  'hulu',
  'qiy',
  'netease-games',
  'jd-cloud',
  'mi',
  'webank'
]

const IndexPage = ({ data }) => {
  const {
    tidbSQLAtScaleSVG,
    tidbFeaturesPNG,
    tidbFeaturesMP4,
    last3Blogs
  } = data

  const titlesRef = useRef()
  const benefitsRef = useRef()
  const architectureRef = useRef()

  useEffect(() => {
    Array.from(titlesRef.current.children).forEach(c =>
      c.classList.add('animate-in')
    )

    scrollToDisplay()
  }, [])

  const scrollToDisplay = () => {
    const array = [
      {
        style: 'opacity: 0; transform: translateY(25%)',
        displayStyle: 'opacity: 1; transform: translateY(0)',
        children: Array.from(benefitsRef.current.children),
        timeout: false,
        triggerHeightRatio: [4 / 5, 0.25]
      },
      {
        style: 'opacity: 0; transform: translateX(-12.5%)',
        displayStyle: 'opacity: 1; transform: translateX(0)',
        children: [architectureRef.current],
        timeout: true,
        triggerHeightRatio: [4 / 5, 0.25]
      }
    ]
    let begin = 0

    function bind(el, index, displayStyle, timeout, triggerHeightRatio) {
      const listener = () => {
        if (index !== begin) {
          return
        }

        const { top, height } = el.getBoundingClientRect()
        const triggerHeight = window.matchMedia('(max-width: 768px)').matches
          ? -height * (triggerHeightRatio ? triggerHeightRatio[1] : 0.25)
          : -height * (triggerHeightRatio ? triggerHeightRatio[0] : 0.75)

        if (top - document.documentElement.clientHeight < triggerHeight) {
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
      }

      window.addEventListener('scroll', listener)
    }

    let index = 0
    array.forEach(a => {
      const style = a.style

      a.children.forEach(b => {
        const top = b.getBoundingClientRect().top

        if (top > document.documentElement.clientHeight) {
          bind(b, index++, a.displayStyle, a.timeout, a.triggerHeightRatio)

          Array.from(b.children).forEach(c => {
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

  const onCardClick = href => () => navigate(href)

  return (
    <Layout>
      <SEO title="Home" description="" />
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
                <h2 className="subtitle is-5">
                  An open-source, cloud-native, distributed SQL database for
                  elastic scale and real-time analytics
                </h2>
                <div className="buttons">
                  <Button
                    as="a"
                    color="primary"
                    href="https://docs.pingcap.com/tidb/v4.0/quick-start-with-tidb"
                    target="_blank"
                    rounded
                  >
                    Get Started
                  </Button>
                  <Button
                    as={Link}
                    color="primary"
                    to="/contact-us"
                    rounded
                    outlined
                  >
                    Ask an Expert
                  </Button>
                </div>
              </div>
              <div className="video-wrapper">
                <img src={tidbFeaturesPNG.publicURL} alt="TiDB features" />
                <video
                  src={tidbFeaturesMP4.publicURL}
                  type="video/mp4"
                  playsInline
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-case-studies has-light-background">
          <div className="container">
            <h2 className="title section-title">
              Trusted and Verified by Innovation Leaders
            </h2>
            <div className="logos">
              {caseLogos.map(logo => (
                <div key={logo} className={`${logo}-logo`} />
              ))}
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
            <h2 className="title section-title">Why TiDB?</h2>
            <div className="columns is-variable is-6">
              {celebrateYourGrowthData.map(d => (
                <div key={d.name} className="column">
                  <NormalBox className="outer" shadowless>
                    <img
                      src={d.placeholder}
                      alt={d.name}
                      className="placeholder"
                    />
                    <h3 className="title is-spaced column-or-card-title">
                      {d.name}
                    </h3>
                    <div className="paragraph has-text-centered">{d.desc}</div>
                  </NormalBox>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-benefits">
          <div className="container">
            <h2 className="title section-title">
              The Benefits of Distributed SQL
            </h2>
            <div ref={benefitsRef} className="benefits">
              {benefitsData.map(d => (
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
                  <div className="divider" />
                  <div className="intro">
                    <div className="title is-spaced column-or-card-title has-text-left">
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

        <SectionUseCases hasLightBg={false} />

        <StartTiDBRibbon />

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
            <h2 className="title section-title">
              Learn More in Engineering Blogs
            </h2>
            <div className="columns is-variable is-6">
              {last3Blogs.edges.map(({ node: { frontmatter } }) => (
                <div key={frontmatter.title} className="column">
                  <div
                    role="button"
                    tabIndex={0}
                    className="card"
                    onClick={onCardClick(
                      `/blog/${replaceTitle(frontmatter.title)}`
                    )}
                    onKeyDown={onCardClick(
                      `/blog/${replaceTitle(frontmatter.title)}`
                    )}
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
                      <div className="title is-spaced column-or-card-title has-text-left">
                        {frontmatter.title}
                      </div>
                      <div className="subtitle card-media-title">
                        By{' '}
                        {(frontmatter.author && frontmatter.author[0]) ||
                          'PingCAP'}
                      </div>
                      <div className="paragraph">{frontmatter.summary}</div>
                    </div>
                  </div>
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
            <h2 className="title section-title">Get Started with TiDB</h2>
            <div className="columns is-variable is-6">
              <div className="column">
                <NormalBox className="outer" shadowless>
                  <h3 className="title column-or-card-title">Self-hosted</h3>
                  <div className="strikethrough-primary" />

                  <Box className="logo">
                    <img src={logos.kubernetes} alt="Kubernetes logo" />
                  </Box>
                  <Box className="logo tiup">
                    <img src={logos.tiup} alt="TiUP logo" />
                  </Box>

                  <Button
                    as="a"
                    href="https://docs.pingcap.com/tidb/v4.0/production-deployment-using-tiup"
                    target="_blank"
                    color="primary"
                  >
                    See Documenatation
                  </Button>
                </NormalBox>
              </div>
              <div className="column">
                <NormalBox className="outer" shadowless>
                  <h3 className="title column-or-card-title">
                    On Public Cloud
                  </h3>
                  <div className="strikethrough-primary" />
                  <Box className="logo aws">
                    <img src={logos.aws} alt="AWS logo" />
                  </Box>
                  <Box className="logo">
                    <img
                      src={logos.googleCloudPlatform}
                      alt="Google Cloud Platform logo"
                    />
                  </Box>
                  <Button
                    as="a"
                    href="https://docs.pingcap.com/tidb-in-kubernetes/v1.1/get-started"
                    target="_blank"
                    color="primary"
                  >
                    See Documenation
                  </Button>
                </NormalBox>
              </div>
              <div className="column">
                <NormalBox className="outer" shadowless>
                  <h3 className="title column-or-card-title">
                    Database as a Service
                  </h3>
                  <div className="strikethrough-primary" />
                  <Box className="logo tidb-cloud">
                    <img src={logos.tidbCloud} alt="TiDB Cloud logo" />
                  </Box>
                  <Button
                    as="a"
                    href="https://docs.pingcap.com/tidbcloud/beta/tidb-cloud-quickstart"
                    target="_blank"
                    color="primary"
                  >
                    Get Started
                  </Button>
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
  query($language: String!) {
    tidbSQLAtScaleSVG: file(
      relativePath: { eq: "home/tidb-sql-at-scale.svg" }
    ) {
      publicURL
    }
    tidbFeaturesPNG: file(relativePath: { eq: "home/tidb-features.png" }) {
      publicURL
    }
    tidbFeaturesMP4: file(relativePath: { eq: "home/tidb-features.mp4" }) {
      publicURL
    }
    last3Blogs: allMarkdownRemark(
      filter: {
        fields: { collection: { eq: "markdown-pages/blogs" } }
        frontmatter: { customer: { eq: null }, locale: { eq: $language } }
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
        }
      }
    }
  }
`

export default IndexPage
