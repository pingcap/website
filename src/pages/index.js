import '../styles/pages/index.scss'

import {
  Box,
  Button,
  Buttons,
  withNormalHelpers
} from '@seagreenio/react-bulma'
import { graphql, navigate, Link } from 'gatsby'
import React, { useEffect, useRef } from 'react'
import { benefitsData, celebrateYourGrowthData, logos } from '../data'

import Layout from '../components/layout'
import { PostFromUsInHome } from '../components/postFromUs'
import SEO from '../components/seo'
import { replaceTitle } from '../lib/string'
import SectionUseCases from '../components/sectionUseCases'
import LinkWithArrow from '../components/linkWithArrow'

const NormalBox = withNormalHelpers(Box)

const caseLogos = [
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
      <SEO title="Home" />
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
                  <a
                    href="https://docs.pingcap.com/tidb/v4.0/quick-start-with-tidb"
                    target="_blank"
                  >
                    <Button as="a" color="primary" rounded>
                      Get Started
                    </Button>
                  </a>
                  <Link to="/contact-us/">
                    <Button as="a" color="primary" rounded outlined>
                      Ask an Expert
                    </Button>
                  </Link>
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
            <h2 className="title home-title">
              Distributed SQL database, trusted and verified by innovation
              leaders
            </h2>
            <div className="logos">
              {caseLogos.map(logo => (
                <div key={logo} className={`${logo}-logo`} />
              ))}
            </div>
            <div className="has-text-centered">
              <LinkWithArrow
                to="/case-studies"
                linkText="More case studies"
                outboundLink={false}
              />
            </div>
          </div>
        </section>

        <section className="section section-celebrate-your-growth">
          <div className="container">
            <h2 className="title home-title">
              Accelerate your growth with operational analytics
            </h2>
            <div className="columns is-variable is-6">
              {celebrateYourGrowthData.map(d => (
                <div key={d.name} className="column">
                  <NormalBox className="outer" shadowless>
                    <img
                      src={d.placeholder}
                      alt={d.name}
                      className="placeholder"
                    />
                    <h3 className="title is-6 is-spaced">{d.name}</h3>
                    <div className="subtitle is-7 desc">{d.desc}</div>
                  </NormalBox>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-benefits">
          <div className="container">
            <h2 className="title home-title">
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
                    <div className="title section-subtitle is-4 is-spaced has-pingcap-style-underline">
                      {d.name}
                    </div>
                    <div className="subtitle p-in-section desc">{d.desc}</div>
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

        <section className="section section-get-started">
          <div className="container">
            <h2 className="title is-3 has-text-white">
              Ready to get started with TiDB?
            </h2>
            <Buttons>
              <Link to="/contact-us">
                <Button
                  className="contact-us"
                  as="a"
                  color="primary"
                  rounded
                  inverted
                  outlined
                >
                  Contact Us
                </Button>
              </Link>
              <Link to="/download">
                <Button className="get-tidb" as="a" rounded>
                  Get TiDB
                </Button>
              </Link>
            </Buttons>
          </div>
        </section>

        <section className="section section-architecture">
          <div className="container">
            <h2 className="title home-title">Architecture</h2>
            <div ref={architectureRef} className="images has-light-background">
              <div className="left" />
              <div className="center" />
              <div className="right" />
            </div>
          </div>
        </section>

        <section className="section section-learn-more">
          <div className="container">
            <h2 className="title home-title">Learn More</h2>
            <div className="columns is-variable is-5">
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
                      <div className="title is-5 is-spaced">
                        {frontmatter.title}
                      </div>
                      <div className="subtitle author">
                        By{' '}
                        {(frontmatter.author && frontmatter.author[0]) ||
                          'PingCAP'}
                      </div>
                      <div className="summary">{frontmatter.summary}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="has-text-centered view-more-wrapper">
              <LinkWithArrow
                to="/blog"
                linkText="View more..."
                outboundLink={false}
              />
            </div>
          </div>
        </section>

        <section className="section section-get-started-with-tidb">
          <div className="container">
            <h2 className="title home-title">Get Started with TiDB</h2>
            <div className="columns is-variable is-6">
              <div className="column">
                <NormalBox className="outer" shadowless>
                  <h3 className="title is-6">On Private Data Center</h3>
                  <div className="strikethrough-primary" />
                  <div className="title is-7">COMMUNITY</div>

                  <Box className="logo">
                    <img src={logos.kubernetes} alt="Kubernetes logo" />
                  </Box>
                  <Box className="logo tiup">
                    <img src={logos.tiup} alt="TiUP logo" />
                  </Box>

                  <Button as="a" color="primary">
                    See Guides
                  </Button>
                </NormalBox>
              </div>
              <div className="column">
                <NormalBox className="outer" shadowless>
                  <h3 className="title is-6">On Public Cloud</h3>
                  <div className="strikethrough-primary" />
                  <div className="title is-7">COMMUNITY</div>
                  <Box className="logo aws">
                    <img src={logos.aws} alt="AWS logo" />
                  </Box>
                  <Box className="logo">
                    <img
                      src={logos.googleCloudPlatform}
                      alt="Google Cloud Platform logo"
                    />
                  </Box>
                  <Button as="a" color="primary">
                    See Guides
                  </Button>
                </NormalBox>
              </div>
              <div className="column">
                <NormalBox className="outer" shadowless>
                  <h3 className="title is-6">Database as a Service</h3>
                  <div className="strikethrough-primary" />
                  <div className="title is-7">ENTERPRISE</div>
                  <Box className="logo tidb-cloud">
                    <img src={logos.tidbCloud} alt="TiDB Cloud logo" />
                  </Box>
                  <Button
                    as={Link}
                    color="primary"
                    className="start-trial-button"
                    to="/products/tidb-cloud/trial"
                  >
                    Sign Up for a Trial
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
  query {
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
        }
      }
    }
  }
`

export default IndexPage
