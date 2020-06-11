import { communityActivities } from './community'

const events = [
  {
    thumbnail: '',
    name: 'TiDB DevCon 2020',
    eventType: 'Conference',
    time: 'July 6 - July 7, 2020 (Ended)',
    desc:
      'TiDB DevCon is the annual developer conference for the TiDB community. '
  }
]

const totalEvents = events.concat(communityActivities)

export { totalEvents }
