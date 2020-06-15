import '../styles/components/eventsCard.scss'

import React from 'react'
import LinkWithArrow from '../components/linkWithArrow'

const EventsCard = prop => {
  const cardsList = prop.cardsList

  return (
    <div className="PingCAP-Event-Card columns is-variable is-8">
      {cardsList.map(card => (
        <div className="column is-4" key={card.name}>
          <div className="card">
            <div className="card-image">
              <figure className="image">
                <img src={card.thumbnail} alt="Placeholder" />
              </figure>
            </div>
            <div className="card-content">
              <div className="media">
                <div className="media-content">
                  <div className="title is-5 is-spaced">{card.name}</div>
                  <p className="subtitle author">
                    {card.eventType}/{card.time}
                  </p>
                </div>
              </div>

              <div className="content">{card.desc}</div>

              {card.readMoreLink && (
                <LinkWithArrow
                  to={card.readMoreLink}
                  linkText="See More"
                  outboundLink={card.outboundLink}
                />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default EventsCard
