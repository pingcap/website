import '@styles/pages/community/events/devcon2021.scss'
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@components/layout'
import SEO from '@components/seo'

const DevCon2021 = ({ data }) => {
  const {
    slogan,
    heroBg,
    logo,
    bgEl1,
    bgEl2,
    bgEl3,
    liuqi,
    huangdongxu,
    shenli,
    chris,
    julian,
    xulianghong,
    reynoldxin,
    sergio,
    zhoumin,
  } = data

  const speakers = [
    {
      name: 'Max Liu',
      company: 'PingCAP',
      title: 'CEO & Cofounder',
      avatar: liuqi,
    },
    {
      name: 'Ed Huang',
      company: 'PingCAP',
      title: 'CTO & Cofounder',
      avatar: huangdongxu,
    },
    {
      name: 'Li Shen',
      company: 'PingCAP',
      title: 'GM, International Business',
      avatar: shenli,
    },
    {
      name: 'Chris Aniszczyk',
      company: 'CNCF',
      title: 'CTO',
      avatar: chris,
    },
    {
      name: 'Dr. Julian Kuiyu CHANG',
      company: 'MOHT Singapore',
      title: 'Principal Data Engineer',
      avatar: julian,
    },
    {
      name: 'Lianghong Xu',
      company: 'Pinterest',
      title: 'Engineering Manager',
      avatar: xulianghong,
    },
    {
      name: 'Reynold Xin',
      company: 'Databricks',
      title: 'Co-founder & Chief Architect',
      avatar: reynoldxin,
    },
    {
      name: 'Sergio Méndez',
      company: 'San Carlos University of Guatemala',
      title: 'System Engineer and Professor of Operating Systems',
      avatar: sergio,
    },
    {
      name: 'Min Zhou',
      company: 'Databricks',
      title: 'Staff Engineer',
      avatar: zhoumin,
    },
  ]

  const schedules = [
    {
      time: '',
      topic: 'Open x Connect x Envision',
      speaker: 'Max Liu',
    },
    {
      time: '',
      topic: 'From Databricks',
      speaker: 'Reynold Xin',
    },
    {
      time: '',
      topic: 'From Ninja Van',
      speaker: '',
    },
    {
      time: '',
      topic: 'From CNCF',
      speaker: 'Chris Aniszczyk',
    },
    {
      time: '',
      topic: 'The Future of Database',
      speaker: 'Ed Huang',
    },
    {
      time: '',
      topic: 'Fireside Chat: The innovation within the open source ecosystem',
      speaker: 'Hosted by Ed Huang',
    },
    {
      time: '',
      topic: 'TiDB at Databricks',
      speaker: 'Min Zhou | Databricks',
    },
    {
      time: '',
      topic: 'The Exploration of Distributed SQL at Pinterest',
      speaker: 'Lianghong Xu | Pinterest',
    },
    {
      time: '',
      topic: 'Building a Data Platform for Health Analytics at MOHT Singapore',
      speaker: 'Julian Kuiyu CHANG | MOHT Singapore',
    },
    {
      time: '',
      topic: 'Power the Future with TiDB on Kubernetes',
      speaker: 'Mengnan Gong | Ninja Van',
    },
    {
      time: '',
      topic: 'Chaos Engineering with Chaos Mesh® and Linkerd',
      speaker: 'Sergio Méndez | University of San Carlos of Guatemala',
    },
  ]

  return (
    <Layout>
      <SEO title="DevCon 2021 | PingCAP" description="" />
      <div className="devcon2021">
        <section className="devcon2021-hero">
          <div className="devcon2021-container">
            <div className="bg-el-1"></div>
            <div className="bg-el-2"></div>
            <div className="bg-el-3"></div>
            <div className="bg-el-4"></div>
            <div className="hero-pc">
              <div className="devcon2021-column">
                <img className="logo" src={logo.publicURL} alt="" />
                <img className="slogan" alt="" src={slogan.publicURL} />
                <a
                  href=" https://share.hsforms.com/1PDj1YcTaQjG4XUZeBxqDWg2npzm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="button signup-btn">Sign Up</div>
                </a>
                <p>2021.7.23 - 24 | Beijing</p>
              </div>
              <div className="devcon2021-column">
                <img src={heroBg.publicURL} alt="" />
              </div>
            </div>

            <div className="hero-mobile">
              <img src={heroBg.publicURL} alt="" />
              <img className="slogan" src={slogan.publicURL} alt="" />
              <a
                href=" https://share.hsforms.com/1PDj1YcTaQjG4XUZeBxqDWg2npzm"
                target="_blank"
                rel="noreferrer"
              >
                <div className="button signup-btn">Sign Up</div>
              </a>
              <p>2021.7.23 - 24 | Beijing</p>
              <img className="logo" alt="" src={logo.publicURL} />
            </div>
          </div>
        </section>

        <section className="devcon2021-intro has-grey-bg">
          <div className="devcon2021-container">
            <div className="intro">
              <img className="img1" src={bgEl3.publicURL} alt="" />
              <p>
                "PingCAP DevCon" is an annual top-level data technology event
                held by PingCAP. The conference has been held for three
                consecutive years and has become a vane for observing
                forward-looking trends in the open source industry and
                databases. The purpose of this conference is to explore the
                integration of cutting-edge technology and digital trends,
                interpret the views of industry leaders, share the practical
                experience of technical experts, showcase the diversified
                innovation of user scenarios, and show the diversified data
                technology ecology.
              </p>
              <img className="img2" src={bgEl1.publicURL} alt="" />
            </div>
          </div>
        </section>

        <section className="devcon2021-schedule">
          <div className="container">
            <h2 id="agenda" className="section-title">
              Schedule
            </h2>
            <div className="schedule">
              <table className="schedule-table">
                <thead>
                  <tr className="head">
                    <th>Time</th>
                    <th>Topic</th>
                    <th>Speaker</th>
                  </tr>
                </thead>
                <tbody>
                  {schedules.map((schedule) => (
                    <tr key={schedule.topic}>
                      <td>{schedule.time}</td>
                      <td>{schedule.topic}</td>
                      <td>{schedule.speaker}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="devcon2021-speakers">
          <div className="devcon2021-container">
            <h2 id="speaker" className="section-title">
              Speakers
            </h2>
            <div className="tutor-list">
              {speakers.map((speaker) => (
                <div className="tutor" key={speaker.name}>
                  <div className="tutor-avatar">
                    <img
                      className="lazy"
                      src={speaker.avatar.publicURL}
                      alt=""
                    />
                  </div>
                  <div className="name">{speaker.name}</div>
                  <div className="title">
                    {speaker.company} | {speaker.title || null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="devcon2021-signup">
          <div className="sign-up">
            <div className="btn-wrap">
              <p>Sign up for PingCAP DevCon 2021</p>
              <a
                href=" https://share.hsforms.com/1PDj1YcTaQjG4XUZeBxqDWg2npzm"
                target="_blank"
                rel="noreferrer"
                style={{ display: 'flex' }}
              >
                <div className="button signup-btn">Sign Up</div>
              </a>
            </div>
            <img className="devcon2021-el1" src={bgEl2.publicURL} alt="" />
            <img className="devcon2021-el2" src={bgEl3.publicURL} alt="" />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    slogan: file(
      relativePath: { eq: "community/events/devcon2021/slogan.svg" }
    ) {
      publicURL
    }

    heroBg: file(
      relativePath: { eq: "community/events/devcon2021/hero-bg.svg" }
    ) {
      publicURL
    }

    logo: file(
      relativePath: { eq: "community/events/devcon2021/pingcap-tidb-logo.png" }
    ) {
      publicURL
    }

    bgEl1: file(
      relativePath: { eq: "community/events/devcon2021/bg-el-1.svg" }
    ) {
      publicURL
    }

    bgEl2: file(
      relativePath: { eq: "community/events/devcon2021/bg-el-2.svg" }
    ) {
      publicURL
    }

    bgEl3: file(
      relativePath: { eq: "community/events/devcon2021/bg-el-3.svg" }
    ) {
      publicURL
    }

    liuqi: file(relativePath: { eq: "community/events/devcon2021/liuqi.png" }) {
      publicURL
    }
    huangdongxu: file(
      relativePath: { eq: "community/events/devcon2021/huangdongxu.png" }
    ) {
      publicURL
    }
    shenli: file(
      relativePath: { eq: "community/events/devcon2021/shenli.png" }
    ) {
      publicURL
    }
    chris: file(relativePath: { eq: "community/events/devcon2021/chris.png" }) {
      publicURL
    }
    julian: file(
      relativePath: { eq: "community/events/devcon2021/julian.png" }
    ) {
      publicURL
    }
    xulianghong: file(
      relativePath: { eq: "community/events/devcon2021/xulianghong.png" }
    ) {
      publicURL
    }
    reynoldxin: file(
      relativePath: { eq: "community/events/devcon2021/reynoldxin.png" }
    ) {
      publicURL
    }
    sergio: file(
      relativePath: { eq: "community/events/devcon2021/sergio.png" }
    ) {
      publicURL
    }
    zhoumin: file(
      relativePath: { eq: "community/events/devcon2021/zhoumin.png" }
    ) {
      publicURL
    }
  }
`
export default DevCon2021
