import '../../styles/pages/index.scss'

import { Box, Button, withNormalHelpers } from '@seagreenio/react-bulma'
import { graphql, navigate, Link } from 'gatsby'
import React, { useEffect, useRef } from 'react'
import Swiper from 'swiper'
import { benefitsData, celebrateYourGrowthData, logos } from '../../data/zh'

import Layout from '../../components/layout'
import { PostFromUsInHome } from '../../components/zh/postFromUs'
import SEO from '../../components/seo'
import { replaceTitle } from '../../lib/string'
import LinkWithArrow from '../../components/linkWithArrow'
import StartTiDBRibbon from '../../components/startTiDBRibbon'

import campus2021 from '../../../images/home/banners/zh/campus-2021.jpg'
import askTug from '../../../images/home/banners/zh/home-asktug-carousel.jpg'
import university from '../../../images/home/banners/zh/university-carousel-img.png'
import userMessage from '../../../images/home/banners/zh/user-message-2019-banner.png'

import banner1 from '../../../images/home/banners/banner-1.svg'
import banner2 from '../../../images/home/banners/banner-2.svg'
import banner3 from '../../../images/home/banners/banner-3.svg'

const NormalBox = withNormalHelpers(Box)

const caseLogos = [
  'bank-of-china',
  'pingan',
  'guangda',
  'bank-of-beijing',
  'webank',
  'lufax',
  'ke-finance',
  'tencent',
  'meituan',
  'xiaomi',
  'netease-games',
  'iqiyi',
  'wuba',
  'zhihu',
  'china-mobile',
  'china-telecom',
  'china-unicom',
  'people',
  'oppo',
  'yumchina',
  'zto-express',
  'paypay',
  'zalopay',
  'shopee',
  'bookmyshow',
  'hulu',
  'u-next',
  'dailymotion',
]

const banners = [
  { img: campus2021, url: '/zh/careers/Campus' },
  { img: askTug, url: 'https://asktug.com/t/topic/33760' },
  { img: university, url: 'https://university.pingcap.com/' },
  { img: userMessage, url: '/zh/user-message-2019/' },
]

const IndexPage = ({ data }) => {
  const { tidbSQLAtScaleSVG, last3Blogs } = data

  const titlesRef = useRef()
  const benefitsRef = useRef()
  const architectureRef = useRef()

  useEffect(() => {
    Array.from(titlesRef.current.children).forEach((c) =>
      c.classList.add('animate-in')
    )

    scrollToDisplay()
  }, [])

  useEffect(() => {
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
    })
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
      // {
      //   style: 'opacity: 0; transform: translateX(-12.5%)',
      //   displayStyle: 'opacity: 1; transform: translateX(0)',
      //   children: [architectureRef.current],
      //   timeout: true,
      //   triggerHeightRatio: [4 / 5, 0.25],
      // },
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
    array.forEach((a) => {
      const style = a.style

      a.children.forEach((b) => {
        const top = b.getBoundingClientRect().top

        if (top > document.documentElement.clientHeight) {
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

  const onCardClick = (href) => () => navigate(href)

  return (
    <Layout>
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
                <h2 className="subtitle is-7">
                  TiDB 是一款同时支持在线事务处理与在线分析处理 (Hybrid
                  Transactional and Analytical Processing,
                  HTAP）的融合型分布式数据库产品，具备水平扩容或者缩容、金融级高可用、实时
                  HTAP、云原生的分布式数据库、兼容 MySQL 5.7 协议和 MySQL
                  生态等重要特性。向用户提供一站式 OLTP、OLAP、HTAP
                  解决方案，适合高可用、一致性要求高、数据规模较大等各种应用场景。
                </h2>
                <div className="buttons">
                  <Button
                    as="a"
                    color="primary"
                    href="https://docs.pingcap.com/zh/tidb/stable/quick-start-with-tidb"
                    target="_blank"
                    rounded
                  >
                    立即开始
                  </Button>
                  <Button
                    as={Link}
                    color="primary"
                    to="/zh/contact-us"
                    rounded
                    outlined
                  >
                    联系我们
                  </Button>
                </div>
              </div>
              <div className="swiper-outer">
                <div className="swiper-container">
                  <div className="swiper-wrapper top">
                    {banners.map(({ img, url }, i) => (
                      <div key={i} className="swiper-slide">
                        <a href={url} rel="noopener" target="_blank">
                          <img src={img} alt="" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="swiper-custom-pagination" />
              </div>
            </div>
          </div>
        </section>

        <section className="section section-case-studies has-light-background zh">
          <div className="container">
            <h2 className="title section-title is-4">用户案例</h2>
            <div className="logos">
              {caseLogos.map((logo) => (
                <div key={logo} className={`${logo}-logo-zh`} />
              ))}
            </div>
            <div className="has-text-centered">
              <LinkWithArrow
                to="/case-studies"
                linkText="查看更多案例"
                outboundLink={false}
              />
            </div>
          </div>
        </section>

        <section className="section section-celebrate-your-growth">
          <div className="container">
            <h2 className="title section-title is-4">为什么选择 TiDB</h2>
            <div className="columns is-variable is-6">
              {celebrateYourGrowthData.map((d) => (
                <div key={d.name} className="column">
                  <NormalBox className="outer">
                    <img
                      src={d.placeholder}
                      alt={d.name}
                      className="placeholder"
                    />
                    <h3 className="title is-spaced card-title is-7 zh">
                      {d.name}
                    </h3>
                    <div className="paragraph desc zh">{d.desc}</div>
                  </NormalBox>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-benefits">
          <div className="container">
            <h2 className="title section-title is-4">分布式 SQL 的优势</h2>
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
                  {/* <div className="divider" /> */}
                  <div className="intro">
                    <div className="title is-spaced column-title has-text-left is-5 zh">
                      {d.name}
                    </div>
                    <div className="paragraph zh">{d.desc}</div>
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

        <section className="section section-architecture">
          <div className="container">
            <h2 className="title section-title is-4">架 构</h2>
            <div ref={architectureRef} className="images">
              <div className="center-zh" />
            </div>
          </div>
        </section>

        <section className="section section-learn-more">
          <div className="container">
            <h2 className="title section-title is-4 zh">了解更多</h2>
            <div className="columns is-variable is-6">
              {last3Blogs.edges.map(({ node: { frontmatter, parent } }, i) => (
                <div key={frontmatter.title} className="column">
                  <div
                    role="button"
                    tabIndex={0}
                    className="card"
                    onClick={onCardClick(
                      `/zh/blog/${replaceTitle(parent.relativePath)}`
                    )}
                    onKeyDown={onCardClick(
                      `/zh/blog/${replaceTitle(parent.relativePath)}`
                    )}
                  >
                    <div className="card-image">
                      <figure className="image">
                        <img
                          src={
                            frontmatter.image
                              ? `https://download.pingcap.com${frontmatter.image}`
                              : [banner1, banner2, banner3][i]
                          }
                          alt={frontmatter.title}
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="title is-spaced card-title has-text-left zh">
                        {frontmatter.title}
                      </div>
                      <div className="subtitle card-media-title zh">
                        By{' '}
                        {(frontmatter.author && frontmatter.author[0]) ||
                          'PingCAP'}
                      </div>
                      <div className="paragraph zh">{frontmatter.summary}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="has-text-centered view-more-wrapper">
              <LinkWithArrow
                to="/blog"
                linkText="查看更多"
                outboundLink={false}
              />
            </div>
          </div>
        </section>

        {/* <section className="section section-get-started-with-tidb zh">
          <div className="container">
            <h2 className="title section-title is-4">开始试用 TiDB</h2>
            <div className="columns is-variable is-6">
              <div className="column">
                <NormalBox className="outer" shadowless>
                  <h3 className="title column-title is-5">在数据中心</h3>
                  <div className="strikethrough-primary" />

                  <Box className="logo k8s">
                    <img src={logos.kubernetes} alt="Kubernetes logo" />
                  </Box>
                  <Box className="logo tiup">
                    <img src={logos.tiup} alt="TiUP logo" />
                  </Box>

                  <Button
                    as="a"
                    href="https://docs.pingcap.com/zh/tidb/stable/production-deployment-using-tiup"
                    target="_blank"
                    color="primary"
                  >
                    查看手册
                  </Button>
                </NormalBox>
              </div>
              <div className="column">
                <NormalBox className="outer" shadowless>
                  <h3 className="title column-title is-5">在公有云上</h3>
                  <div className="strikethrough-primary" />
                  <Box className="logo aws">
                    <img src={logos.aws} alt="AWS logo" />
                  </Box>
                  <Box className="logo gcp">
                    <img
                      src={logos.googleCloudPlatform}
                      alt="Google Cloud Platform logo"
                    />
                  </Box>
                  <Button
                    as="a"
                    href="https://docs.pingcap.com/zh/tidb/stable/production-deployment-using-tiup"
                    target="_blank"
                    color="primary"
                  >
                    查看手册
                  </Button>
                </NormalBox>
              </div>
              <div className="column">
                <NormalBox className="outer" shadowless>
                  <h3 className="title column-title is-5">数据库即服务</h3>
                  <div className="strikethrough-primary" />
                  <Box className="logo tidb-cloud">
                    <img src={logos.database} alt="Database" />
                  </Box>
                  <Button
                    as="a"
                    href="https://docs.pingcap.com/tidbcloud/beta/tidb-cloud-quickstart"
                    target="_blank"
                    color="primary"
                  >
                    敬请期待
                  </Button>
                </NormalBox>
              </div>
            </div>
          </div>
        </section> */}

        <section className="section">
          <section className="container">
            <h2 className="title section-title is-4">
              体验全新的分布式 HTAP 数据库？
            </h2>
            <Button
              as="a"
              color="primary"
              href="https://docs.pingcap.com/zh/tidb/stable/quick-start-with-tidb"
              target="_blank"
              rounded
              style={{
                display: 'block',
                width: '9.375rem',
                margin: '4rem auto 0',
              }}
            >
              立即开始
            </Button>
          </section>
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
    tidbFeaturesPNG: file(relativePath: { eq: "home/tidb-features.png" }) {
      publicURL
    }
    tidbFeaturesMP4: file(relativePath: { eq: "home/tidb-features.mp4" }) {
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
