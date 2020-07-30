import '../../styles/pages/about.scss'
import '../../lib/graphql/image'

import React from 'react'
import { graphql, Link } from 'gatsby'
import { Button } from '@seagreenio/react-bulma'
import Particles from 'react-particles-js'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import ScrollTopButton from '../../components/scrollTopButton'
import AroundParticles from '../../components/particles'
import { workEnv } from '../../data/zh/career-work-env'
import { offices, contacts } from '../../data/zh/contact-us'

const About = ({ data }) => {
  const { aboutHeroSVG, timeLineSVG, mobileTimeLineSVG } = data
  const particleConfig = {
    particles: {
      color: {
        value: '#000000',
      },
      line_linked: {
        color: {
          value: '#000000',
        },
      },
      number: {
        value: 50,
      },
      size: {
        value: 3,
      },
    },
  }
  const introVideoConfig = {
    src: 'https://download.pingcap.com/videos/pingcap-intro-v2.mp4',
    type: 'video/mp4',
    poster: 'https://download.pingcap.com/images/video-poster.jpg',
    controls: true,
    playsInline: true,
  }
  return (
    <Layout>
      <SEO
        title="About PingCAP"
        description="Story about PingCAP, the team behind TiDB"
      />
      <article className="PingCAP-About PingCAP-About-ZH">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <img src={aboutHeroSVG.publicURL} alt="Community Hero" />
            </div>
          </div>
        </section>

        <section className="section intro-section">
          <div className="container">
            <h1 className="title">关于我们</h1>
            <p className="paragraph">
              PingCAP是一家开源的新型分布式数据库公司，秉承开源是基础软件的未来这一理念，
              PingCAP持续扩大社区影响力，致力于前沿技术领域的创新实现。其研发的分布式关系型数据库
              TiDB项目，具备「分布式强一致性事务、在线弹性水平扩展、故障自恢复的高可用、
              跨数据中心多活」等核心特性，是大数据时代理想的数据库集群和云数据库解决方案。
              目前，已被近1000家不同行业的领先企业应用在实际生产环境，涉及互联网、游戏、
              银行、保险、证券、航空、制造业、电信、新零售、政府等多个行业，包括美国、欧洲、
              日本、东南亚等海外用户。
            </p>
            <Button
              as={Link}
              to="/zh/recruit"
              className="button is-primary is-rounded"
            >
              <span>加入我们</span>
            </Button>
          </div>
        </section>

        <section className="section timeline-section">
          <div className="container">
            <h2 className="title">发展历程</h2>
            <picture>
              <source
                media="(max-width: 768px)"
                srcset={mobileTimeLineSVG.publicURL}
              ></source>
              <img src={timeLineSVG.publicURL} alt="time line" />
            </picture>
          </div>
        </section>

        <section className="section intro-video-section">
          <div className="container">
            <Particles params={particleConfig} className="particles" />
            <video {...introVideoConfig} className="intro-video"></video>
          </div>
        </section>

        <section className="section working-env-section">
          <div className="container">
            <h2 className="title">企业文化</h2>
            <p className="paragraph">
              PingCAP
              是一个年轻开放、崇尚自由的团队，集合了一群充满好奇心、有追求、技艺高超、
              梦想用科技改变世界的小伙伴。他们每个人都是这个行业的佼佼者，也是PingCAP团队最核心的价值。
              为了更好的追求梦想，我们为每一位小伙伴提供了最自由且舒适的工作环境。
            </p>
            <div className="col-container">
              {workEnv.map((w) => {
                return (
                  <div className="col env-desc-container" key={w.name}>
                    <div className={w.icon}></div>
                    <h3>{w.name}</h3>
                    <p>{w.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section contact-us-section">
          <div className="container">
            <h2 className="title">联系我们</h2>
            <div className="columns">
              <div className="column is-9 left-column">
                {offices.map((office) => {
                  return (
                    <div className="office-info" key="office.name">
                      <span className="address-title">{office.name}: </span>
                      <span className="address">{office.address}</span>
                    </div>
                  )
                })}
              </div>
              <div className="column is-3 contact-info-container">
                {contacts.map((contact) => {
                  return (
                    <div className="contact-info" key="contact.way">
                      <div className="contact-title">{contact.way}:</div>
                      <div className="contact">{contact.address}</div>
                    </div>
                  )
                })}
                <a
                  href="http://pingcaptidb.mikecrm.com/LxRiDG8"
                  target="_blank"
                  className="consult-link"
                >
                  或让我们与您联系
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section join-section">
          <div className="container">
            <h1 className="title">赶紧加入我们吧</h1>
            <Button
              as={Link}
              to="/zh/recruit"
              className="button is-primary is-rounded"
            >
              <AroundParticles className="around-particles" />
              <span>立刻申请</span>
            </Button>
          </div>
        </section>
        <ScrollTopButton className="scroll-top-button"></ScrollTopButton>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    aboutHeroSVG: file(relativePath: { eq: "zh/about/about-hero.svg" }) {
      publicURL
    }
    timeLineSVG: file(relativePath: { eq: "zh/about/timeline.svg" }) {
      publicURL
    }
    mobileTimeLineSVG: file(
      relativePath: { eq: "zh/about/mobile-timeline.svg" }
    ) {
      publicURL
    }
  }
`

export default About
