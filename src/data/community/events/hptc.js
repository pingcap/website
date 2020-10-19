import Juejin from '../../../../images/community/events/hptc/juejin.svg'
import DataFun from '../../../../images/community/events/hptc/datafun.svg'
import GoCN from '../../../../images/community/events/hptc/gocn.svg'
import CSDN from '../../../../images/community/events/hptc/csdn.svg'
import UCloud from '../../../../images/community/events/hptc/ucloud.svg'
import PingAnTech from '../../../../images/community/events/hptc/pingankeji.png'
import Segmengfault from '../../../../images/community/events/hptc/segmentfault.png'
import Oschina from '../../../../images/community/events/hptc/oschina.svg'

const noticeItemData = [
  'About team-up',
  'About challenge points',
  'About mentors',
]

const noticeDetailsData = {
  details0: [
    'You need to team up before submitting the application form. One team could only select one workload for optimization. Once the form is submitted, no information can be modified.',
    'Up to six participants are allowed in a team (mentor included). Cross team-up is not allowed.',
    'If you have trouble teaming up, give a shout in the <a href="https://slack.tidb.io/invite?team=tidb-community&channel=tidb-challenge-program&ref=website-en">Slack channel</a> for help. Or you can sign up as a one-person team.',
  ],
  details1: [
    'Your team only earns points when you resolve the issues that you proposed for workload optimization. If the issues resolved are not relevant, there will be no points granted. ',
    'The team points are the sum of the points of all the tasks completed by your team members.',
  ],
  details2: [
    'Only one mentor is allowed in a team and one mentor could only provide instructions to one team. ',
    'Besides providing regular mentoring instructions, the mentor is allowed to claim the tasks to submit PRs. As such, in addition to the mentor prize, the mentor is eligible to share the team prize.',
    'The team that needs mentoring could contact the organizing committee in the <a href="https://slack.tidb.io/invite?team=tidb-community&channel=tidb-challenge-program&ref=website-en">Slack channel</a>.',
  ],
}

const judgesData = [
  {
    avatar:
      'https://download.pingcap.com//images/community/high-performance-tidb/huangdongxu.png',
    name: 'Ed Huang',
    title: 'CTO & Co-founder at PingCAP',
  },
  {
    avatar:
      'https://download.pingcap.com//images/community/high-performance-tidb/wangyang.png',
    name: 'Yang Wang',
    title: 'Head of Database Product Department at Ping An Technology',
  },
  {
    avatar:
      'https://download.pingcap.com//images/community/high-performance-tidb/sunxiaoguang.png',
    name: 'Xiaoguang Sun',
    title: 'Head of Technology Platform at Zhihu',
  },
  {
    avatar:
      'https://download.pingcap.com//images/community/high-performance-tidb/xuchengxuan.png',
    name: 'Chengxuan Xu',
    title: 'Head of Database Infrastructure at PalFish',
  },
  {
    avatar:
      'https://download.pingcap.com//images/community/high-performance-tidb/tangliu.png',
    name: 'Siddon Tang',
    title: 'Chief Engineer at PingCAP',
  },
]

const materialsData = [
  {
    thumbImg:
      'https://download.pingcap.com/images/community/high-performance-tidb/video-course.svg',
    title: 'Performance Tuning Package',
    desc:
      'This package provides workload-related background knowledge and commonly used tuning tools for participants to better understand TiDB performance workloads.',
    link:
      'https://github.com/pingcap/community/blob/master/challenge-programs/performance-tuning-package.md',
  },
  {
    thumbImg:
      'https://download.pingcap.com/images/community/high-performance-tidb/doc-package.svg',
    title: 'PingCAP Talent Plan',
    desc:
      'This is a series of training courses about writing distributed systems in Go and Rust with no previous experience of TiDB or TiKV required.',
    link: 'https://github.com/pingcap/talent-plan',
  },
]

const sponsorsData = [
  {
    subTitle: 'Cloud computing equipment support',
    logos: [
      { logo: UCloud, alt: 'ucloud logo' },
      { logo: PingAnTech, alt: 'Ping An Technology' },
    ],
  },
  {
    subTitle: 'Community support',
    logos: [
      { logo: Oschina, alt: 'os china logo' },
      { logo: Juejin, alt: 'jue jin logo' },
      { logo: DataFun, alt: 'data fun logo' },
      { logo: CSDN, alt: 'csdn logo' },
      { logo: Segmengfault, alt: 'segmentfault logo' },
      { logo: GoCN, alt: 'go cn logo' },
    ],
  },
]

export {
  noticeItemData,
  noticeDetailsData,
  judgesData,
  materialsData,
  sponsorsData,
}
