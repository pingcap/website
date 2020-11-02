import '../../../styles/pages/community/events/high-performance-tidb-challenge.scss'
import { Button } from '@seagreenio/react-bulma'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import Link from '../../../components/IntlLink'
import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import { graphql } from 'gatsby'
import {
  noticeItemData,
  noticeDetailsData,
  judgesData,
  materialsData,
  sponsorsData,
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

  // track sign up button click event
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
  const gradingModalRef = useRef(null)
  const http = axios.create({
    baseURL: 'https://bots.tidb.io/ti-challenge-bot/program/2/ranks',
  })

  const noticeRef = useRef(null)

  // append params to track media source
  const getURLParams = () => {
    let utmSource = 'pingcap'
    let utmMediuBanner = 'banner'
    let utmMediumStep = 'step'
    let utmCampaign = 'hptc'
    let params = window.location.search.slice(1).split('&')
    const baseURL = 'https://forms.pingcap.com/f/high-performance-challenge-en?'

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
      baseURL +
      'utm_source=' +
      utmSource +
      '&utm_medium=' +
      utmMediuBanner +
      '&utm_campaign=' +
      utmCampaign

    let registerBtnURLStep =
      baseURL +
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const openNoticeDetail = useCallback((idx) => {
    let className = 'show-detail'
    if (window.matchMedia('(max-width:550px)').matches) {
      className = 'detail-mobile'
    }

    const allEle = noticeRef.current.children
    Array.from(allEle).forEach((ele) => {
      ele.classList.remove(className)
    })

    noticeRef.current.children[idx + 3].classList.add(className)
  })

  const toggleGradingDetail = () => {
    gradingModalRef.current.classList.toggle('show')
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
                  <div className="date">Sept 17 - Dec 5, 2020</div>
                </div>
                <h1 className="title">
                  High Performance <br />
                  TiDB Challenge
                </h1>
                <div className="buttons columns">
                  <Button
                    as="a"
                    href="https://github.com/pingcap/community/blob/master/challenge-programs/high-performance-tidb-challenge.md"
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
                  High-Performance TiDB Challenge is a mentoring program which
                  focuses on workload optimization to bring TiDB performance to
                  a higher level.Several typical workloads in need of
                  optimization are now open for participants to discuss and work
                  on. Completion of each challenge task under the selected
                  workload is recognized through challenge points, which could
                  be redeemed into cash awards and swags.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="task">
          <div className="task-body">
            <div className="container">
              <div className="title-wrapper">
                <div className="title">Tasks</div>
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
                href="https://github.com/pingcap/community/blob/master/challenge-programs/high-performance-tidb-challenge.md#step-1-sign-up"
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
                <div className="title">How to Challenge</div>
              </div>
              <div className="step-list">
                <div className="step image-wrapper show-pc">
                  <img src={step1Bg.publicURL} alt="hptc background" />
                </div>

                <div className="step">
                  <div className="numb">Step 1</div>
                  <div className="name">Challenge Application</div>
                  <div className="desc">
                    Make sure you read the{' '}
                    <a href="https://github.com/pingcap/community/blob/master/challenge-programs/high-performance-tidb-challenge.md#participation-notes">
                      Participation Notes
                    </a>{' '}
                    before you apply for the program. To apply, click the{' '}
                    <strong>Sign Up</strong> button below and fill in the
                    application form. Note that once the form is submitted, it
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
                  <div className="name">Team Bonding and Coding</div>
                  <div className="desc">
                    In this period, you get to know your teammates and mentors
                    and work together on diagnosing performance bottlenecks.
                    Once the bottlenecks are identified, you need to create the
                    corresponding issues and start coding to optimize.
                  </div>
                  <Button
                    as="a"
                    href="https://github.com/pingcap/community/blob/master/challenge-programs/high-performance-tidb-challenge.md"
                    target="_blank"
                    rounded
                    className="signUp-btn"
                  >
                    About Challenge
                  </Button>
                </div>

                <div className="step">
                  <div className="numb">Step 3</div>
                  <div className="name">Code Submission</div>
                  <div className="desc">
                    Submit the code change before Nov 29. PRs merged after Nov
                    29 will not be counted for the points.
                  </div>
                </div>

                <div className="step">
                  <div className="numb">Step 4</div>
                  <div className="name">Presentation</div>
                  <div className="desc">
                    Submit your presentation slides before 10:00 (China Standard
                    Time), Dec 4. The team leader presents the optimization
                    process and results at 13:00-17:00 on Dec 5(online).
                  </div>
                  <Button
                    rounded
                    className="grading-btn"
                    onClick={toggleGradingDetail}
                  >
                    Evaluation criteria
                  </Button>
                  <div className="grading" ref={gradingModalRef}>
                    {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                    <div
                      className="close"
                      role="button"
                      tabIndex={0}
                      onKeyDown={toggleGradingDetail}
                      onClick={toggleGradingDetail}
                    ></div>
                    <div className="grading-title">Evaluation criteria</div>
                    <div className="item">
                      <p className="criterion">Performance improvement (65%)</p>
                      <p className="detail">
                        The performance improvement (percentage) of your working
                        branch compared with the base Master branch when the
                        program started
                      </p>
                    </div>
                    <div className="item">
                      <p className="criterion">PR points of the team (30%)</p>
                      <p className="detail">
                        The validated PRs merged into the Master branch
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
                  <div className="title">Awards</div>
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
                      <span className="strong">4,250</span> US dollars for the
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
                  <div className="item">
                    <div className="award">Follow-up updates</div>
                    <div className="desc">
                      The committee has decided to offer more resources for the
                      teams, including benchmark facilities on cloud platforms
                      and TiDB Cloud credit coupons! Refer to About Challenge
                      for more details.
                    </div>
                  </div>
                </div>
                <div className="annotation content">
                  <strong>Note:</strong>
                  <ul>
                    <li>
                      Teams that finish the final presentation will be evaluated
                      by the judges, among which no more than five winning teams
                      will be generated.
                    </li>
                    <li>
                      If the winning team does not have a mentor, the mentor
                      prize will be automatically added to the team.
                    </li>
                    <li>
                      Each member of the finisher team can get a special swag.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="judges">
          <div className="judges-body">
            <div className="container">
              <div className="title-wrapper">
                <div className="title">Judges</div>
              </div>
              <div className="judge-list">
                {judgesData.map((judge) => (
                  <div className="judge" key={judge.name}>
                    <div className="avatar">
                      <img
                        className="avatar"
                        src={judge.avatar}
                        alt="judge avatar"
                      />
                      <div className="name">{judge.name}</div>
                      <div className="desc">{judge.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="materials">
          <div className="materials-body">
            <div className="container">
              <div className="title-wrapper">
                <div className="title">Learning materials</div>
              </div>
              <div className="card-list">
                {materialsData.map((material) => (
                  <div className="learning-card" key={material.title}>
                    <div className="header"></div>
                    <Link to={material.link} type="aHrefLink">
                      <div className="content">
                        <div className="thumb-img">
                          <img src={material.thumbImg} alt="material thumb" />
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
                <div className="title">Leaderboard</div>
              </div>
              <div className="terminal">
                <div className="terminal-header">
                  <div className="season-score">PR points ranking</div>
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
                </div>
              </div>
              <div className="annotation">
                Note: The leaderboard does not indicate the final group ranking.
              </div>
            </div>
          </div>
        </section>

        <section className="notice">
          <div className="notice-body">
            <div className="container">
              <div className="notice-and-list">
                <div className="title-wrapper">
                  <div className="title">Participation notes</div>
                </div>
                <div className="notice-list" ref={noticeRef}>
                  <>
                    {noticeItemData.map((notice, i) => (
                      <div
                        role="button"
                        tabIndex={0}
                        className="list-card"
                        key={i}
                        onKeyDown={() => openNoticeDetail(i)}
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
                            <p
                              className="desc"
                              dangerouslySetInnerHTML={{
                                __html: detail,
                              }}
                            />
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
                <div className="title">
                  Previous TiDB performance challenges
                </div>
              </div>
              <div className="cards">
                <div className="usability">
                  <a
                    href="https://github.com/pingcap/community/blob/master/challenge-programs/challenge-program-season-2.md"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={usabilityCard.publicURL} alt="TiDB usability" />
                  </a>
                </div>
                <div className="performance">
                  <a
                    href="https://github.com/pingcap/community/blob/master/challenge-programs/challenge-program-season-1.md"
                    target="_blank"
                    rel="noreferrer"
                  >
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

        <section className="sponsors">
          <div className="sponsors-body">
            <div className="container">
              <div className="title-wrapper">
                <div className="title">Partners</div>
              </div>
              <div className="sponsors-list">
                {sponsorsData.map((d) => (
                  <div className="sponsors-wrapper" key={d.subTitle}>
                    <p className="sponsors-title">{d.subTitle}</p>
                    <div className="logos">
                      {d.logos.map((logo) => (
                        <img src={logo.logo} alt={logo.alt} key={logo.alt} />
                      ))}
                    </div>
                  </div>
                ))}
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
