import Code from '../../images/community/code.svg'
import Help from '../../images/community/help-buoy.svg'
import Writer from '../../images/community/writer.svg'
import Bullhorn from '../../images/community/bullhorn.svg'
import DevCon2020ThumbNail from '../../images/events/devcon2020.jpg'
import UsabilityThumbNail from '../../images/events/usability-challenge.svg'

const contributionGrow = [
  {
    icon: Code,
    title: 'Contribute to the code ',
    collapseList: [
      'Report an <a href="https://github.com/pingcap/tidb/issues" target="_blank">issue</a>',
      'Fix a <a href="https://github.com/pingcap/tidb/issues?q=is%3Aissue+is%3Aopen+label%3Atype%2Fbug" target="_blank">bug</a>',
      'Propose a <a href="https://github.com/pingcap/tidb/tree/master/docs/design" target="_blank">feature</a>'
    ]
  },
  {
    icon: Help,
    title: 'Help others',
    collapseList: [
      'Join the community <a href="https://slack.tidb.io/invite?team=tidb-community&channel=everyone&ref=pingcap" target="_blank">Slack</a>',
      'Answer questions on <a href="https://stackoverflow.com/questions/tagged/tidb" target="_blank">Stack overflow</a>'
    ]
  },
  {
    icon: Writer,
    title: 'Write about TiDB',
    collapseList: [
      'Improve TiDB <a href="https://github.com/pingcap/docs" target="_blank">docs</a>',
      'Contribute a <a href="https://github.com/pingcap/blog" target="_blank">blog post</a>',
      'Help translate docs or blogs'
    ]
  },
  {
    icon: Bullhorn,
    title: 'Advocate for TiDB',
    collapseList: ['Organize an event', 'Speak for us in an event']
  }
]

const communityActivities = [
  {
    thumbnail: DevCon2020ThumbNail,
    name: 'TiDB DevCon 2020',
    eventType: 'Virtual Conference',
    time: 'July 6 - July 7, 2020 (Ended)',
    desc:
      'TiDB DevCon is the annual developer conference for the TiDB community. This 2-day event aims to provide a venue where we showcase the evolution of product and technology in the past year and the latest progress in the TiDB ecosystem.',
  },
  {
    thumbnail: UsabilityThumbNail,
    name: 'TiDB Usability Challenge',
    eventType: 'Communtiy Activity',
    time: 'March 02 - May 30, 2020 (Ended)',
    desc:
      'Season 2 of the TiDB Challenge Program focuses on improving the usability of TiDB and its related projects.',
    readMoreLink: 'https://github.com/pingcap/community/blob/master/challenge-programs/challenge-program-season-2.md',
    outboundLink: true
  }
]

export { contributionGrow, communityActivities }
