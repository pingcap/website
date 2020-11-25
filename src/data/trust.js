import DataAccessControlsSVG from '../../images/security-and-trust-center/data-access-controls.svg'
import DataEncryptionSVG from '../../images/security-and-trust-center/data-encryption.svg'
import AuthenticationSVG from '../../images/security-and-trust-center/authentication.svg'
import WorkloadIsolationSVG from '../../images/security-and-trust-center/workload-isolation.svg'

export default {
  featuresList: [
    {
      icon: DataAccessControlsSVG,
      title: 'Data access controls ',
      list: ['VPC peering connection', 'IP allowlist'],
    },
    {
      icon: DataEncryptionSVG,
      title: 'Data Encryption',
      list: [
        'In-transit encryption (TLS/SSL)',
        'Encryption at rest (AES256) for TiKV, TiFlash, and backup data.',
      ],
    },
    {
      icon: AuthenticationSVG,
      title: 'Authentication',
      list: [
        'Inter-node identity authentication (mTLS)',
        'Client identity authentication',
      ],
    },
    {
      icon: WorkloadIsolationSVG,
      title: 'Workload Isolation',
      list:
        'Dedicated VPC for your TiDB clusters to guarantee data confidentiality and integrity.',
    },
  ],
}
