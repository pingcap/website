import Code from '../../images/community/code.svg'
import Help from '../../images/community/help-buoy.svg'
import Writer from '../../images/community/writer.svg'
import Bullhorn from '../../images/community/bullhorn.svg'

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
    thumbnail: '',
    name: 'TiDB DevCon 2020',
    eventType: 'Conference',
    time: 'July 6 - July 7, 2020 (Ended)',
    desc:
      'TiDB DevCon is the annual developer conference for the TiDB community.'
  },
  {
    thumbnail: '',
    name: 'TiDB Usability Challenge',
    eventType: 'Communtiy Activity',
    time: 'March 02 - May 30, 2020 (Ended)',
    desc:
      'TiDB Challenge Program is a series program where issues of the specified theme will be opened for the participants to discuss and solve together. Season 2 focuses on TiDB usability.'
  }
]

export { contributionGrow, communityActivities }
