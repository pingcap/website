import Heart from '../../images/community/heart.svg'
import Help from '../../images/community/help-buoy.svg'
import Writer from '../../images/community/writer.svg'
import Learn from '../../images/community/learn.svg'
import UsabilityThumbNail from '../../images/events/usability-challenge.svg'
import HPTCThumbNail from '../../images/events/high-performance-tidb-challenge.png'
import Hackathon2020 from '../../images/events/tidb-hackathon2020.jpg'

const contributionGrow = [
  {
    icon: Help,
    title: 'Help each other',
    collapseList: [
      'Join the community <a href="https://slack.tidb.io/invite?team=tidb-community&channel=everyone&ref=pingcap" target="_blank">Slack</a>',
      'Answer questions on <a href="https://stackoverflow.com/questions/tagged/tidb" target="_blank">Stack overflow</a>',
    ],
  },
  {
    icon: Heart,
    title: 'Contribute the Way You Like',
    collapseList: [
      'Join a <a href="https://github.com/pingcap/community/tree/master/special-interest-groups" target="_blank">Special Interest Group</a> (SIG)',
      'Improve TiDB <a href="https://github.com/pingcap/docs" target="_blank">docs</a>',
      'Fix a <a href="https://github.com/pingcap/tidb/issues?q=is%3Aissue+is%3Aopen+label%3Atype%2Fbug" target="_blank">bug</a>',
      'Propose a <a href="https://github.com/pingcap/tidb/tree/master/docs/design" target="_blank">feature</a>',
    ],
  },
  {
    icon: Writer,
    title: 'Give Feedback',
    collapseList: [
      'Report an <a href="https://github.com/pingcap/tidb/issues" target="_blank">issue</a>',
      'Review a <a href="https://github.com/pingcap/tidb/pulls" target="_blank">pull request</a>',
      'Write a <a href="https://github.com/pingcap/blog" target="_blank">blog post</a>',
    ],
  },
  {
    icon: Learn,
    title: 'Learn and Grow',
    collapseList: [
      'Join the <a href="https://github.com/pingcap/talent-plan" target="_blank">Talent Plan</a>',
      'Grow along a guided <a href="https://github.com/pingcap/community/tree/master/architecture" target="_blank">path</a>',
      'Speak about TiDB in an event',
    ],
  },
]

const communityActivities = [
  {
    thumbnail: Hackathon2020,
    name: 'TiDB Hackathon 2020',
    eventType: 'Communtiy Activity',
    time: 'Dec 15, 2020 - Jan 17, 2021',
    desc:
      'The theme of Hackathon this year is [∞], by which we expect participants to innovate, to challenge, and to unlock the infinite power of TiDB.',
    readMoreLink: 'https://pingcap.com/community/events/hackathon2020',
    boundType: 'outBoundLink',
  },
  {
    thumbnail: HPTCThumbNail,
    name: 'High Performance TiDB Challenge',
    eventType: 'Communtiy Activity',
    time: 'Sept 17 - Dec 5, 2020',
    desc:
      'High Performance TiDB Challenge is a mentoring program which focuses on workload optimization to bring TiDB performance to a higher level!',
    readMoreLink: '/community/events/high-performance-tidb-challenge',
    boundType: '',
  },
  {
    thumbnail: UsabilityThumbNail,
    name: 'TiDB Usability Challenge',
    eventType: 'Communtiy Activity',
    time: 'March 02 - May 30, 2020 (Ended)',
    desc:
      'Season 2 of the TiDB Challenge Program focuses on improving the usability of TiDB and its related projects.',
    readMoreLink:
      'https://github.com/pingcap/community/blob/master/challenge-programs/challenge-program-season-2.md',
    boundType: 'outBoundLink',
  },
]

export { contributionGrow, communityActivities }
