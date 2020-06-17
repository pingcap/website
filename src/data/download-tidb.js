import communityEditionSVG from '../../images/download/community-edition.svg'
import enterpriseSubscriptionSVG from '../../images/download/enterprise-subscription.svg'

const downloadTiDB = [
    {
        icon: communityEditionSVG,
        title: 'Open Source Download',
        desc: 'Core components (TiDB, TiKV, PD) and ecosystem tools',
        detailList: [
            'Distributed SQL with horizontal scalability',
            'Elastic scaling',
            'Easy deployment via TiUP or on Kubernetes',
            'Community support'
        ],
        buttonText: 'FREE DOWNLOAD',
        buttonLink: '/download/community'
    },
    {
        icon: enterpriseSubscriptionSVG,
        title: 'Enterprise Subscription',
        desc: 'Commercial support and warranty',
        detailList: [
            'No vendor lock-in',
            'Enterprise-grade support',
            'Technical training and consulting',
            'Stable releases with up-to-date security enhancements'
        ],
        buttonText: '30-DAY FREE TRIAL',
        buttonLink: '/download/enterprise'
    }
]

export { downloadTiDB }
