const noticeItemData = [
  'About team-up',
  'About challenge points',
  'About mentors',
]

const noticeDetailsData = {
  details0: [
    'You need to team up before submitting the application form. One team could only select one workload for optimization. Once the form is submitted, no information can be modified.',
    'Up to five participants are allowed in a team; cross team-up is not allowed.',
    'If you have trouble teaming up, give a shout in the <a href="https://slack.tidb.io/invite?team=tidb-community&channel=tidb-challenge-program&ref=website-en">Slack channel</a> for help. Or you can sign up as a one-person team.',
  ],
  details1: [
    'Your team only earns points when you resolve the issues that you proposed for workload optimization. If the issues resolved are not relevant, there will be no points granted. ',
    'The team points are the sum of the points of all the tasks completed by your team members.',
  ],
  details2: [
    'Only one mentor is allowed in a team and one mentor could only provide instructions to one team. ',
    'The team that needs mentoring could contact the organizing committee in the <a href="https://slack.tidb.io/invite?team=tidb-community&channel=tidb-challenge-program&ref=website-en">Slack channel</a>.',
  ],
}

const materialsData = [
  {
    thumbImg:
      'https://download.pingcap.com/images/community/high-performance-tidb/video-course.svg',
    title: 'Performance Tuning Package',
    desc:
      'This package provides workload-related background knowledge and commonly used tuning tools for participants to better understand TiDB performance workloads.',
    link: '/',
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

export { noticeItemData, noticeDetailsData, materialsData }
