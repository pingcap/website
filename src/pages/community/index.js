import '../../styles/pages/community/index.scss'

import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { contributionGrow, communityActivities } from '../../data/community'
import { graphql, Link } from 'gatsby'
import EventsCard from '../../components/eventsCard'
import { Button } from '@seagreenio/react-bulma'
import PrimaryButton from '../../components/primaryButton'

const Community = ({ data }) => {
  const {
    communityHeroSVG,
    onBoardWithTiDBSVG,
    shareStoriesSVG,
    codeConductSCG,
  } = data

  function collapse(e) {
    const collapseContent = e.currentTarget.parentElement
    collapseContent.classList.toggle('show-content')
  }

  return (
    <Layout>
      <SEO
        title="Community "
        description="Join our community to learn, contribute, grow, and connect with TiDB contributors and users all around the world!"
      />
      <article className="PingCAP-TiDB-Community">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title section-title">
                Let’s build the database of the future together!
              </h1>
              <div className="subtitle-under-main-title">
                Join our community to learn, contribute, grow, and connect with
                TiDB contributors and users all around the world!
              </div>
              <img src={communityHeroSVG.publicURL} alt="Community Hero" />
              <div className="buttons">
                <PrimaryButton
                  as="a"
                  href="https://slack.tidb.io/invite?team=tidb-community&channel=everyone&ref=pingcap"
                  target="_blank"
                  className="join-slack is-primary is-rounded"
                >
                  JOIN OUR SLACK
                </PrimaryButton>
                <PrimaryButton
                  as="a"
                  href="https://github.com/pingcap/community/tree/master/contributors"
                  target="_blank"
                  className="become-a-contributor is-primary is-rounded"
                >
                  BECOME A CONTRIBUTOR
                </PrimaryButton>
              </div>
            </div>
          </div>
        </section>

        <section className="section onboard-section">
          <div className="container">
            <div className="columns is-variable is-8 reverse">
              <div className="column">
                <div className="side-icon">
                  <img
                    src={onBoardWithTiDBSVG.publicURL}
                    alt="Onboard with TiDB"
                  />
                </div>
              </div>
              <div className="column is-8">
                <h2 className="title section-title">Get Onboard with TiDB</h2>
                <p className="paragraph">
                  As a distributed system, TiDB can be a challenging project to
                  work on. Don’t panic. We‘ve got everything ready for you!
                  Check out our documentation, engineering blogs, contribution
                  map, and tons of other materials to help you get around!
                </p>
                <div className="buttons">
                  <Button
                    className="button-white-bg"
                    href="https://docs.pingcap.com/tidb/v4.0/quick-start-with-tidb"
                    target="_blank"
                  >
                    Quick Start
                  </Button>
                  <Button as={Link} to="/blog" className="button-white-bg">
                    Engineering Blogs
                  </Button>
                  <Button
                    className="button-white-bg"
                    href="https://github.com/pingcap/tidb-map/blob/master/maps/contribution-map.md"
                    target="_blank"
                  >
                    Contribution Map
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section contribution-grow-section">
          <div className="container">
            <h2 className="title section-title">Contribute and Grow</h2>
            <div className="subtitle-under-main-title">
              Since day one, TiDB has been a community-driven project. TiDB
              would not be what it is today without the talent, enthusiasm, and
              drive of its contributors around the world.
            </div>
            <div className="collapse-items">
              {contributionGrow.map((c) => (
                <div className="content" key={c.title}>
                  <div
                    aria-hidden="true"
                    className="collapsable"
                    onClick={collapse}
                    onKeyDown={collapse}
                  >
                    <img src={c.icon} alt={c.title} />
                    <div className="header">{c.title}</div>
                  </div>
                  <ul>
                    {c.collapseList.map((list, idx) => (
                      <li
                        key={idx}
                        dangerouslySetInnerHTML={{ __html: list }}
                      ></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section share-stories-section"
          id="share-your-stories"
        >
          <div className="container">
            <div className="columns is-variable is-8">
              <div className="column">
                <img src={shareStoriesSVG.publicURL} alt="Share stories" />
              </div>
              <div className="column is-8">
                <h2 className="title section-title">Share Your Story</h2>
                <p className="paragraph">
                  We want companies around the world to enjoy TiDB's great
                  benefits. Have you deployed it yet? If so, tell us and the
                  community how TiDB powers your business and your success. And
                  also let us know how we can help you more.
                </p>
                <Button
                  as={Link}
                  to="/community/share-and-connect"
                  className="button-white-bg"
                >
                  SHARE NOW
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section community-activity-section">
          <div className="container">
            <h2 className="title section-title">Community Activities</h2>
            <div className="subtitle-under-main-title">
              Join us at our TiDB community events
            </div>
            <EventsCard cardsList={communityActivities} />
          </div>
        </section>

        <section className="section code-conduct-section">
          <div className="container">
            <div className="columns is-variable is-8">
              <div className="column code-conduct-wrapper">
                <div className="side-icon">
                  <img src={codeConductSCG.publicURL} alt="Code conduct" />
                </div>
              </div>
              <div className="column is-8">
                <h2 className="title section-title">Code of Conduct</h2>
                <p className="paragraph">
                  The TiDB Community values respect, inclusiveness, open
                  collaboration, and communication. The TiDB Code of Conduct is
                  enforced to guide all interactions within the community. If
                  you notice any form of violation at an event, in Slack, on
                  GitHub, or in another communication mechanism, contact the
                  Project Management Committee (PMC) at
                  <a href="mailto:pmc@tidb.io"> pmc@tidb.io</a>
                </p>
                <p className="paragraph">
                  Read our Code of Conduct{' '}
                  <a href="https://github.com/pingcap/tidb/blob/master/CODE_OF_CONDUCT.md">
                    here
                  </a>
                  .
                </p>
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
    communityHeroSVG: file(
      relativePath: { eq: "community/community-hero.svg" }
    ) {
      publicURL
    }
    onBoardWithTiDBSVG: file(
      relativePath: { eq: "community/onboard-with-tidb.svg" }
    ) {
      publicURL
    }
    shareStoriesSVG: file(relativePath: { eq: "community/share-stories.svg" }) {
      publicURL
    }
    codeConductSCG: file(relativePath: { eq: "community/code-conduct.svg" }) {
      publicURL
    }
  }
`

export default Community
