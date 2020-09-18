import Heart from '../../images/community/heart.svg'
import Help from '../../images/community/help-buoy.svg'
import Writer from '../../images/community/writer.svg'
import Learn from '../../images/community/learn.svg'
import DevCon2020ThumbNail from '../../images/events/devcon2020.jpg'
import UsabilityThumbNail from '../../images/events/usability-challenge.svg'
import MonthlyMeeting from '../../images/events/monthly-meeting.svg'
import HPTCThumbNail from '../../images/events/high-performance-tidb-challenge.png'

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
    thumbnail: HPTCThumbNail,
    name: 'High Performance TiDB Challenge',
    eventType: 'Communtiy Activity',
    time: 'Step 17 - Nov 21, 2020',
    desc: '',
    readMoreLink: '/community/events/high-performance-tidb-challenge',
    outboundLink: false,
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
    outboundLink: true,
  },
  {
    thumbnail: MonthlyMeeting,
    name: 'TiKV Monthly Updates',
    eventType: 'Virtual',
    time: 'Monthly on the fourth Thursday',
    desc:
      'Monthly community meeting by video conference to discuss the status of TiKV and demo the new features. Anyone is welcome to join.',
    readMoreLink:
      'https://docs.google.com/document/d/1CWUAkBrcm9KPclAu8fWHZzByZ0yhsQdRggnEdqtRMQ8/edit#',
    outboundLink: true,
  },
]

export { contributionGrow, communityActivities }
