import '../styles/pages/index.scss'

import { Box, Button, withNormalHelpers } from '@seagreenio/react-bulma'
import { Link, graphql, navigate } from 'gatsby'
import React, { useEffect, useRef } from 'react'
import { benefitsData, celebrateYourGrowthData, logos } from '../data'

import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import Layout from '../components/layout'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { PostFromUsInHome } from '../components/postFromUs'
import SEO from '../components/seo'
import Swiper from 'swiper'
import { replaceTitle } from '../lib/string'

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
  'webank',
]

const IndexPage = ({ data }) => {
  const {
    tidbSQLAtScaleSVG,
    tidbFeaturesPNG,
    tidbFeaturesMP4,
    last3Blogs,
  } = data

  const titlesRef = useRef()
  const benefitsRef = useRef()
  const architectureRef = useRef()

  useEffect(() => {
    Array.from(titlesRef.current.children).forEach(c =>
      c.classList.add('animate-in')
    )

    new Swiper('.swiper-container', {
      autoplay: {
        delay: 6000,
      },
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

    scrollToDisplay()
  }, [])

  const scrollToDisplay = () => {
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
                  Open-source distributed SQL database for elastic scale and
                  real-time data analytics
                </h2>
                <div className="buttons">
                  <Button as="a" color="primary" rounded>
                    Get Started
                  </Button>
                  <Button as="a" color="primary" rounded outlined>
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
            <h2 className="title home-title">
              Trusted and verified by web-scale application leaders
            </h2>
            <div className="logos">
              {caseLogos.map(logo => (
                <div key={logo} className={`${logo}-logo`} />
              ))}
            </div>
            <div className="has-text-centered">
              <Link className="link-with-arrow" to="/case-studies">
                <ArrowForwardIcon /> <span>More Case Studies</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section section-celebrate-your-growth">
          <div className="container">
            <h2 className="title home-title">Celebrate your growth</h2>
            <div className="swiper-container">
              <div className="top">
                <NavigateBeforeIcon className="swiper-prev" />
                <div className="swiper-custom-pagination" />
                <NavigateNextIcon className="swiper-next" />
              </div>
              <div className="swiper-wrapper">
                {celebrateYourGrowthData.map((d, i) => (
                  <div key={d.name} className="swiper-slide">
                    <div className="placeholder-wrapper">
                      <img
                        className="placeholder"
                        src={d.placeholder}
                        alt={d.name}
                      />
                    </div>
                    <div className="divider" />
                    <div className="intro">
                      <div className="title is-5 has-pingcap-style-underline">
                        <span className="underline" /> 0 {i + 1}
                      </div>
                      <div className="title is-4 is-spaced">{d.name}</div>
                      <div className="subtitle is-5 desc">{d.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-benefits">
          <div className="container">
            <h2 className="title home-title">
              The benefits of Distributed SQL
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
                    <div className="title is-4 is-spaced has-pingcap-style-underline">
                      <span className="underline" /> {d.name}
                    </div>
                    <div className="subtitle is-5 desc">{d.desc}</div>
                    <Link className="link-with-arrow" to={d.href}>
                      <ArrowForwardIcon /> <span>{d.link}</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-get-started">
          <div className="container">
            <h2 className="title is-3 has-text-white">
              Get started with TiDB!
            </h2>
            <Button as="a" color="primary" rounded outlined>
              Free Download
            </Button>
          </div>
        </section>

        <section className="section section-use-cases">
          <div className="container">
            <h2 className="title home-title">Use cases</h2>
            <div className="columns is-multiline oltp-and-htap">
              <div className="column is-full-mobile">
                <Box className="oltp" onClick={onCardClick('/')}>
                  <div className="inner">
                    <h3 className="title is-3 is-spaced">O L T P</h3>
                    <h4 className="title is-4">
                      Scale-out MySQL for business growth
                    </h4>
                    <div className="strikethrough-white" />
                    <div className="subtitle is-5">
                      Scalable online transactional processing
                    </div>
                    <ul>
                      <li>
                        200+ TB production data within a single TiDB cluster
                      </li>
                      <li>Trillions of Rows in a single distributed table</li>
                    </ul>
                    <Link className="link-with-arrow" to="/">
                      <ArrowForwardIcon />{' '}
                      <span>See how modern applications scale</span>
                    </Link>
                  </div>
                </Box>
              </div>
              <div className="column is-full-mobile">
                <Box className="htap" onClick={onCardClick('/')}>
                  <div className="inner">
                    <h3 className="title is-3 is-spaced">H T A P</h3>
                    <h4 className="title is-4">Real-Time Analytics</h4>
                    <div className="strikethrough-white" />
                    <div className="subtitle is-5">
                      Hybrid transactional and analytical processing
                    </div>
                    <ul>
                      <li>Milliseconds response time over trillions of rows</li>
                      <li>
                        No wall between transactional data and analytical
                        reporting
                      </li>
                    </ul>
                    <Link className="link-with-arrow" to="/">
                      <ArrowForwardIcon />{' '}
                      <span>See how modern business makes decisions</span>
                    </Link>
                  </div>
                </Box>
              </div>
            </div>
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
            <h2 className="title home-title">Learn more</h2>
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
                      <div className="title is-6 is-spaced">
                        {frontmatter.title}
                      </div>
                      <div className="subtitle is-7">
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
              <Link className="link-with-arrow" to="/blog">
                <ArrowForwardIcon /> <span>View More</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section section-get-started-with-tidb">
          <div className="container">
            <h2 className="title home-title">Get started with TiDB</h2>
            <div className="columns is-variable is-6">
              <div className="column">
                <NormalBox className="outer" shadowless>
                  <h3 className="title is-6">On Private Data Center</h3>
                  <div className="strikethrough-primary" />
                  <div className="title is-7">OPEN SOURCE</div>

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
                  <div className="title is-7">OPEN SOURCE</div>
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
                  <Button as="a" color="primary">
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
