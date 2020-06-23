import '../styles/components/eventsCard.scss'

import React from 'react'
import { Link } from 'gatsby'

const EventsCard = prop => {
  const cardsList = prop.cardsList

  const Card = ({ card }) => (
    <div className="card">
      <div className="card-image">
        <figure className="image">
          <img src={card.thumbnail} alt="Placeholder" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-spaced card-title has-text-left">
              {card.name}
            </p>
            <p className="card-media-title">
              {card.eventType}/{card.time}
            </p>
          </div>
        </div>

        <div className="content">{card.desc}</div>
      </div>
    </div>
  )

  return (
    <div className="PingCAP-Event-Card columns is-variable is-8 is-multiline">
      {cardsList.map(card => (
        <div className="column is-4" key={card.name}>
          {card.readMoreLink ? (
            <Link to={card.readMoreLink} target="_blank">
              <Card card={card} />
            </Link>
          ) : (
            <Card card={card} />
          )}
        </div>
      ))}
    </div>
  )
}

export default EventsCard
