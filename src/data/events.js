import { communityActivities } from './community'
import UsabilityThumbNail from '../../images/events/usability-challenge.svg'

const events = [
  {
    thumbnail: UsabilityThumbNail,
    name: 'TiKV Monthly Updates',
    eventType: 'Virtual',
    time: 'Monthly on the fourth Thursday',
    desc:
      'Monthly community meeting by video conference to discuss the status of TiKV and demo the new features. Anyone is welcome to join.',
    readMoreLink: 'https://docs.google.com/document/d/1CWUAkBrcm9KPclAu8fWHZzByZ0yhsQdRggnEdqtRMQ8/edit#',
    outboundLink: true
  }
]

const totalEvents = events.concat(communityActivities)

export { totalEvents }
