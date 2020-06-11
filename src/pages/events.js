import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { totalEvents } from '../data/events'

const Events = () => {
  return (
    <Layout>
      <SEO title="Download TiDB Community" />
      <article className="PingCAP-Events">
        <section className="section">
          <div className="container">
            <div className="columns is-variable is-8">
              {totalEvents.map(event => (
                <div className="column is-4" key={event.name}>
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
                          <p className="name">{event.name}
                          </p>
                          <p className="time">
                            {event.eventType}/{event.time}</p>
                        </div>
                      </div>

                      <div className="content">{event.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default Events
