import communityEditionSVG from '../../images/download/community-edition.svg'
import enterpriseSubscriptionSVG from '../../images/download/enterprise-subscription.svg'

const downloadTiDB = [
    {
        icon: communityEditionSVG,
        title: 'Community Edition',
        desc: 'Core components (TiDB, TIKV, PD) with ecosystem tools',
        detailList: [
            'Distributed SQL with horizontal scalability',
            'Elastic scaling',
            'Easy deployment via TiUP or on Kubernetes',
            'Community support'
        ],
        buttonText: 'Free Download',
        buttonLink: '/download/community'
    },
    {
        icon: enterpriseSubscriptionSVG,
        title: 'Enterprise Subscription',
        desc: 'Commercial support and warranty; no vendor lock-in',
        detailList: [
            'TiDB Enterprise toolkits',
            'Enterprise-grade support',
            'Technical training and consulting',
            'Stable releases with up-to-date security enhancements'
        ],
        buttonText: 'FREE 30-DAY TRIAL',
        buttonLink: '/download/enterprise'
    }
]

export { downloadTiDB }
