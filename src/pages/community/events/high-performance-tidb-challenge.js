import '../../../styles/pages/community/events/high-performance-tidb-challenge.scss'
import { Button } from '@seagreenio/react-bulma'
import React, { useState, useEffect } from 'react'
import Link from '../../../components/IntlLink'
import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import {
  noticeItemData,
  noticeDetailsData,
  materialsData,
} from '../../../data/community/events/hptc'
import axios from 'axios'

import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

const HPTC = ({ data }) => {
  const {
    heroBg,
    taskCard,
    taskCardMobile,
    step1Bg,
    step4Bg,
    usabilityCard,
    performanceCard,
  } = data
  const trackViews = (event, category) => {
    trackCustomEvent({
      category: category,
      action: 'click',
      label: event,
    })
  }

  const [rankList, setRankList] = useState([])
  const [signUpBannerLink, setSignUpBannerLink] = useState('')
  const [signUpStepLink, setSignUpStepLink] = useState('')
  const http = axios.create({
    baseURL: 'http://bots.tidb.io/ti-challenge-bot/program/2/ranks',
  })

  const getURLParams = () => {
    let utmSource = 'pingcap'
    let utmMediuBanner = 'banner'
    let utmMediumStep = 'step'
    let utmCampaign = 'hptc'
    let params = window.location.search.slice(1).split('&')

    let paramsObj = {}
    if (params.length > 1) {
      params.forEach((p) => {
        paramsObj[p.split('=')[0]] = p.split('=')[1]
      })

      utmSource = paramsObj['utm_source']
      utmMediuBanner = paramsObj['utm_medium']
      utmMediumStep = paramsObj['utm_medium']
      utmCampaign = paramsObj['utm_campaign']
    }

    let registerBtnURLBanner =
      'https://forms.pingcap.com/f/high-performance-challenge-cn?' +
      'utm_source=' +
      utmSource +
      '&utm_medium=' +
      utmMediuBanner +
      '&utm_campaign=' +
      utmCampaign

    let registerBtnURLStep =
      'https://forms.pingcap.com/f/high-performance-challenge-cn?' +
      'utm_source=' +
      utmSource +
      '&utm_medium=' +
      utmMediumStep +
      '&utm_campaign=' +
      utmCampaign

    setSignUpBannerLink(registerBtnURLBanner)
    setSignUpStepLink(registerBtnURLStep)
  }

  useEffect(() => {
    getURLParams()
  }, [signUpBannerLink, signUpStepLink])

  useEffect(() => {
    async function getRankList() {
      try {
        const rankListData = (await http.get()).data.data
        setRankList(rankListData)
      } catch (e) {
        console.log('Get Rank List Failed', e)
        return
      }
    }

    getRankList()
  }, [])

  const openNoticeDetail = (idx) => {
    let className = 'show-detail'
    if (window.matchMedia('(max-width:550px)').matches) {
      className = 'detail-mobile'
    }

    const allEle = document.getElementsByClassName(className)
    Array.from(allEle).forEach((ele) => {
      ele.classList.remove(className)
    })

    document.getElementsByClassName(`detail-${idx}`)[0].classList.add(className)
  }

  const openGradingDetail = () => {
    document.getElementsByClassName('grading')[0].classList.add('show')
  }

  const closeGradingDetail = () => {
    document.getElementsByClassName('grading')[0].classList.remove('show')
  }

  return (
    <Layout>
      <SEO title="High Performance TiDB Challenge" description="" />
      <article className="PingCAP-HPTC">
        <section className="hero is-medium is-bold">
          <div className="hero-body">
            <div className="container reverse">
              <div className="title-and-entry">
                <div className="title-wrapper">
                  <div className="date">Sept.17 - Nov. 21, 2020</div>
                </div>
                <h1 className="title">
                  High Performance <br />
                  TiDB Challenge
                </h1>
                <div className="buttons columns">
                  <Button
                    as="a"
                    href="/"
                    target="_blank"
                    rounded
                    className="rules-btn"
                  >
                    About
                  </Button>
                  <Button
                    as="a"
                    href={signUpBannerLink}
                    target="_blank"
                    rounded
                    className="signUp-btn"
                    onClick={trackViews('banner', 'hptc')}
                  >
                    Sign Up
                  </Button>
                </div>
              </div>
              <div className="image-wrapper">
                <img
                  src={heroBg.publicURL}
                  alt="High Performance TiDB Challenge"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="intro">
          <div className="intro-body">
            <div className="container">
              <div className="intro-and-desc">
                <div className="title-wrapper">
                  <div className="title">
                    High Performance TiDB Challenge is now officially launched!
                  </div>
                </div>
                <div className="desc">
                  This time we focus on workload optimization to bring TiDB
                  performance to a higher level! Several typical workloads in
                  need of optimization are now open for participants to discuss
                  and work on! Completion of each challenge task under the
                  selected workload is recognized through challenge points,
                  which could be redeemed into cash awards and swags.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="task">
          <div className="task-body">
            <div className="container">
              <div className="title-wrapper">
                <div className="title">TASKS</div>
              </div>
              <div className="task-card">
                <img
                  src={taskCard.publicURL}
                  className="show-pc"
                  alt="HPTC task"
                />
                <img
                  src={taskCardMobile.publicURL}
                  className="show-mobile"
                  alt="HPTC task"
                />
              </div>
              <Button
                as="a"
                href="/"
                target="_blank"
                rounded
                className="signUp-btn"
              >
                All Tasks
              </Button>
            </div>
          </div>
        </section>

        <section className="how">
          <div className="how-body">
            <div className="container">
              <div className="title-wrapper">
                <div className="title">HOW</div>
              </div>
              <div className="step-list">
                <div className="step image-wrapper show-pc">
                  <img src={step1Bg.publicURL} alt="hptc background" />
                </div>

                <div className="step">
                  <div className="numb">Step 1</div>
                  <div className="name">
                    Challenge Application (available until Nov.15)
                  </div>
                  <div className="desc">
                    Make sure you read the <a href="/">Participation Notes</a>{' '}
                    before you apply for the program. To apply, fill in the form
                    below and submit. Note that once the form is submitted, it
                    cannot be modified.
                  </div>
                  <Button
                    as="a"
                    href={signUpStepLink}
                    target="_blank"
                    rounded
                    className="signUp-btn"
                    onClick={trackViews('step', 'hptc')}
                  >
                    Sign Up
                  </Button>
                </div>

                <div className="step">
                  <div className="numb">Step 2</div>
                  <div className="name">
                    Team Bonding and Coding (Sept.17- Nov.15)
                  </div>
                  <div className="desc">
                    In this period, you get to know your teammates and mentors
                    and work together on diagnosing performance bottlenecks.
                    Once the bottlenecks are identified, you need to create the
                    corresponding issues and start coding to optimize.
                  </div>
                </div>

                <div className="step">
                  <div className="numb">Step 3</div>
                  <div className="name">Code Submission (before Nov.15)</div>
                  <div className="desc">
                    Submit the code change before Nov.15. PRs merged after
                    Nov.15 will not be counted for the points.
                  </div>
                </div>

                <div className="step">
                  <div className="numb">Step 4</div>
                  <div className="desc">
                    Submit your presentation slides before 10:00 (China Standard
                    Time), Nov.20. The team leader presents the optimization
                    process and results at 13:00-17:00 on Nov.21 (online).
                  </div>
                  <Button
                    rounded
                    className="grading-btn"
                    onClick={openGradingDetail}
                  >
                    Evaluation criteria
                  </Button>
                  <div className="grading">
                    <div className="close" onClick={closeGradingDetail}></div>
                    <div className="grading-title">Evaluation criteria</div>
                    <div className="item">
                      <p className="criterion">Performance improvement (65%)</p>
                      <p className="detail">
                        The percentage of performance improvement compared with
                        the base Master branch when the program started
                      </p>
                    </div>
                    <div className="item">
                      <p className="criterion">PR points of the team (30%)</p>
                      <p className="detail">
                        The validated PRs merged into Master
                      </p>
                    </div>
                    <div className="item">
                      <p className="criterion">Presentation (5%)</p>
                      <p className="detail">Presentation performance</p>
                    </div>
                  </div>
                </div>

                <div className="step image-wrapper">
                  <img src={step4Bg.publicURL} alt="hptc background" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="awards">
          <div className="awards-body">
            <div className="container">
              <div className="awards-and-desc">
                <div className="title-wrapper">
                  <div className="title">AWARS</div>
                </div>
                <div className="awards-list">
                  <div className="item">
                    <div className="award">1st prize</div>
                    <div className="desc">
                      <span className="strong">7,000</span> US dollars for the
                      team; <span className="strong">1,350</span> US dollars for
                      the mentor
                    </div>
                  </div>
                  <div className="item">
                    <div className="award">2nd prize</div>
                    <div className="desc">
                      <span className="strong">4,250</span> dollars for the
                      team; <span className="strong">1,350</span> US dollars for
                      the mentor
                    </div>
                  </div>
                  <div className="item">
                    <div className="award">3rd prize</div>
                    <div className="desc">
                      <span className="strong">1,350</span> US dollars for the
                      team
                    </div>
                  </div>
                </div>
                <div className="annotation">
                  Note: Teams that finish the final presentation will be
                  evaluated by the judges, among which no more than five winning
                  teams will be generated. The winning teams will be awarded as
                  described above. Each member of the finisher team can get a
                  special swag. If the winning team does not have a mentor, the
                  mentor prize will be automatically added to the team.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="materials">
          <div className="materials-body">
            <div className="container">
              <div className="title-wrapper">
                <div className="title">MATERIALS</div>
              </div>
              <div className="card-list">
                {materialsData.map((material) => (
                  <div className="learning-card" key={material.title}>
                    <div className="header"></div>
                    <Link to={material.link} type="aHrefLink">
                      <div className="content">
                        <div className="thumb-img">
                          <img src={material.thumbImg} />
                        </div>
                        <div className="name">{material.title}</div>
                        <div className="desc">{material.desc}</div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="leader-board">
          <div className="leader-board-body">
            <div className="container">
              <div className="title-wrapper">
                <div className="title">LEADR BOARD</div>
              </div>
              <div className="terminal">
                <div className="terminal-header">
                  <div className="season-score">PR Points Ranking</div>
                </div>
                <div className="terminal-body">
                  <div id="ranking-list">
                    {rankList ? (
                      <>
                        {rankList
                          .sort((a, b) => b.score - a.score)
                          .map((data, idx) => (
                            <div className="ranking-item" key={idx}>
                              <div
                                className={`medal ${
                                  idx < 3 ? `medal-${idx + 1}` : 'normal-rank'
                                }`}
                              ></div>
                              <div className="progress-wrapper">
                                <div className="team-name">
                                  {data.team.teamName}
                                </div>
                                <div className="score">{data.score}</div>
                                <progress
                                  className="progress"
                                  value={data.score}
                                  max="10000"
                                />
                              </div>
                            </div>
                          ))}
                      </>
                    ) : (
                      <>The ranking board update from 2020.9.17 to 2020.11.15</>
                    )}
                  </div>
                  <div className="annotation">
                    Note: The leaderboard does not indicate the final group
                    rankings.{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="notice">
          <div className="notice-body">
            <div className="container">
              <div className="notice-and-list">
                <div className="title-wrapper">
                  <div className="title">NOTICE</div>
                </div>
                <div className="notice-list">
                  <>
                    {noticeItemData.map((notice, i) => (
                      <div
                        className="list-card"
                        key={i}
                        onClick={() => openNoticeDetail(i)}
                      >
                        {notice}
                      </div>
                    ))}
                    {noticeItemData.map((item, i) => (
                      <div className={`detail detail-${i} detail-js`} key={i}>
                        {noticeDetailsData[`details${i}`].map((detail, idx) => (
                          <div className="item" key={idx}>
                            <p className="numb">{idx + 1}.</p>
                            <p className="desc">{detail}</p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="review">
          <div className="review-body">
            <div className="container">
              <div className="title-wrapper">
                <div className="title">往期回顾</div>
              </div>
              <div className="cards">
                <div className="usability">
                  <a href="/community/tidb-usability-challenge/">
                    <img src={usabilityCard.publicURL} alt="TiDB usability" />
                  </a>
                </div>
                <div className="performance">
                  <a href="/community/tidb-performance-challenge/">
                    <img
                      src={performanceCard.publicURL}
                      alt="TiDB performance"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    heroBg: file(relativePath: { eq: "community/events/hptc/hero-bg.svg" }) {
      publicURL
    }

    taskCard: file(
      relativePath: { eq: "community/events/hptc/scenes-overview.svg" }
    ) {
      publicURL
    }

    taskCardMobile: file(
      relativePath: { eq: "community/events/hptc/scenes-overview-mobile.svg" }
    ) {
      publicURL
    }

    step1Bg: file(relativePath: { eq: "community/events/hptc/step1-bg.svg" }) {
      publicURL
    }

    step4Bg: file(relativePath: { eq: "community/events/hptc/step4-bg.svg" }) {
      publicURL
    }

    usabilityCard: file(
      relativePath: { eq: "community/events/hptc/usability.svg" }
    ) {
      publicURL
    }

    performanceCard: file(
      relativePath: { eq: "community/events/hptc/performance.svg" }
    ) {
      publicURL
    }
  }
`

export default HPTC
