import '../styles/pages/community.scss'

import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { contributionGrow, communityActivities } from '../data/community'
import { graphql } from 'gatsby'

const Community = ({ data }) => {
  const {
    communityHeroSVG,
    onBoardWithTiDBSVG,
    shareStoriesSVG,
    codeConductSCG
  } = data

  function collapse(e) {
    const collapseContent = e.currentTarget.parentElement
    collapseContent.classList.toggle('show-content')
  }

  return (
    <Layout>
      <SEO title="TiDB Community" />
      <article className="PingCAP-TiDB-Community">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title section-title">
                Let’s build the database of the future together!
              </h1>
              <h2 className="section-subtitle">
                Join our community to learn, contribute, grow, and connect with
                TiDB contributors and users all around the world!
              </h2>
              <img src={communityHeroSVG.publicURL} alt="Community Hero" />
              <div className="buttons">
                <a href="/" target="_blank">
                  <button className="button join-slack is-primary is-rounded">
                    Join Our Slack
                  </button>
                </a>
                <a href="/" target="_blank">
                  <button className="button become-a-contributor is-primary is-rounded">
                    Become a Contributor
                  </button>
                </a>
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
                <h2 className="section-title onboard-title">
                  Get onboard with TiDB
                </h2>
                <p className="p-in-section">
                  As a distributed system, TiDB can be a challenging project to
                  work on. Don’t panic. We‘ve got everything ready for you!
                  Check out our documentation, engineering blogs, contribution
                  map, and tons of other materials to help you get around!
                </p>
                <div className="buttons">
                  <button className="button-in-section">Quick Start</button>
                  <button className="button-in-section">
                    Engineering Blogs
                  </button>
                  <button className="button-in-section">
                    Contribution Map
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section contribution-grow-section">
          <div className="container">
            <h2 className="title section-title">Contribute and grow</h2>
            <h2 className="section-subtitle">
              Since day one, TiDB has been a community-driven project. TiDB
              would not be what it is today without the talent, enthusiasm, and
              drive of its contributors around the world.
            </h2>
            <div className="collapse-items">
              {contributionGrow.map(c => (
                <div className="content" key={c.title}>
                  <div className="collapsable" onClick={collapse}>
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

        <section className="section share-stories-section">
          <div className="container">
            <div className="columns is-variable is-8">
              <div className="column">
                <img src={shareStoriesSVG.publicURL} alt="Share stories" />
              </div>
              <div className="column is-8">
                <h2 className="title section-title">Share your stories</h2>
                <p className="p-in-section">
                  We want companies around the world to enjoy TiDB's great
                  benefits. Have you deployed it yet? If so, tell us and the
                  community how TiDB powers your business and your success. And
                  also let us know how we can help you more.
                </p>
                <button className="button-in-section">Share Now</button>
              </div>
            </div>
          </div>
        </section>

        <section className="section community-activity-section">
          <div className="container">
            <h2 className="title section-title">Community Activity</h2>
            <h3 className="section-subtitle">
              Join us at our TiDB community events
            </h3>
            <div className="columns is-variable is-8">
              {communityActivities.map(activity => (
                <div className="column is-4" key={activity.name}>
                  <div className="card">
                    <div className="card-image">
                      <figure className="image">
                        <img
                          src="https://bulma.io/images/placeholders/1280x960.png"
                          alt="Placeholder"
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="name">{activity.name}
                          </p>
                          <p className="time">
                            {activity.eventType}/{activity.time}</p>
                        </div>
                      </div>

                      <div className="content">{activity.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section code-conduct-section">
          <div className="container">
            <div className="columns is-variable is-8">
              <div className="column">
                <div className="side-icon">
                  <img src={codeConductSCG.publicURL} alt="Code conduct" />
                </div>
              </div>
              <div className="column is-8">
                <h2 className="title section-title">Code of conduct</h2>
                <p className="p-in-section">
                  The TiDB Community values respect, inclusiveness, open
                  collaboration, and communication. The TiDB Code of Conduct is
                  enforced to guide all interactions within the community. If
                  you notice any form of violation at an event, in Slack, on
                  GitHub, or in another communication mechanism, contact the
                  Project Management Committee (PMC) at
                  <a href="mailto:pmc@tidb.io">pmc@tidb.io</a>
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
