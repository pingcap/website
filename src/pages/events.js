import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { totalEvents } from '../data/events'
import EventsCard from '../components/eventsCard'

const Events = () => {
  return (
    <Layout>
      <SEO title="Download TiDB Community" />
      <article className="PingCAP-Events">
        <section className="section">
          <div className="container">
            <EventsCard cardsList={totalEvents}/>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default Events
