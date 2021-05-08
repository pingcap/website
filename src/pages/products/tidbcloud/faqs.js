import '../../../styles/pages/products/faq.scss'
import React from 'react'

import Layout from '../../../components/layout'
import Link from '../../../components/IntlLink'
import SEO from '../../../components/seo'
import CloudProviders from '../../../../images/products/tidbcloud/cloud-provider-region.png'
import OLAPWorklaod from '../../../../images/products/tidbcloud/oltp-olap-workload.png'

const FAQ = () => {
  return (
    <Layout NavbarProps={{ showBanner: true }}>
      <SEO
        title="TiDB Cloud FAQ"
        description="Fully Managed TiDB service. TiDB Cloud lets you focus on your applications, not the complexities of your database."
      />
      <main className="PingCAP-TiDBCloud-FAQ">
        <section className="section section-faq">
          <div className="container">
            <h1 className="title section-title">FAQ</h1>
            <div className="faq">
              <h2 className="question">1. What is TiDB Cloud?</h2>
              <div className="answer">
                <p>
                  TiDB Cloud makes deploying, managing and maintaining your TiDB
                  clusters even simpler with a fully managed cloud instance that
                  you control through an intuitive console. You’ll be able to
                  easily deploy on Amazon Web Services or Google Cloud to
                  quickly build mission critical applications.
                </p>
                <p>
                  TiDB Cloud allows developers and DBAs with little or no
                  training to handle once-complex tasks such as infrastructure
                  management and cluster deployment with ease, to focus on your
                  applications, not the complexities of your database. And by
                  scaling TiDB clusters in or out with a simple click of a
                  button, you’ll no longer waste costly resources because you’ll
                  be able to provision your databases for exactly how much and
                  how long you need them.
                </p>
              </div>
            </div>
            <div className="faq">
              <h2 className="question">
                2. How is TiDB different from other relational databases like
                MySQL?
              </h2>
              <div className="answer content">
                <p>
                  TiDB is a next-generation, distributed relational database.
                  TiDB can scale both computing and storage capacity simply by
                  adding new nodes. This makes infrastructure capacity scaling
                  easier and more flexible compared to traditional relational
                  databases that only scale vertically.
                </p>
                <p className>TiDB’s advantages over MySQL:</p>
                <ul>
                  <li>
                    TiDB has a distributed architecture with flexible and
                    elastic scalability. It automatically takes care of dynamic
                    distribution, allowing you to easily scale your TiDB cluster
                    horizontally with just a few clicks.
                  </li>
                  <li>
                    TiDB supports high availability with automatic failover,
                    ensuring business continuity with auto-backups regardless of
                    disk or machine failures.
                  </li>
                  <li>
                    TiDB is a Hybrid Transactional/Analytical Processing (HTAP)
                    database that handles both OLTP and OLAP workloads within
                    one database.
                  </li>
                </ul>
                <p>
                  TiDB supports the MySQL protocol and dialect. You can replace
                  MySQL with TiDB to power your applications{' '}
                  <span className="underline">
                    without changing any code in most cases
                  </span>
                  .
                </p>
              </div>
            </div>
            <div className="faq">
              <h2 className="question">
                3. What is the relationship between TiDB and TiDB Cloud?
              </h2>
              <div className="answer">
                <p>
                  TiDB is an open-source database and is the best option for
                  organizations who want to run TiDB on-premises or in their own
                  data centers.
                </p>
                <p>
                  TiDB Cloud is a fully managed cloud service
                  (Database-as-a-Service) of TiDB. It has an easy-to-use
                  web-based management console to let you manage TiDB clusters
                  for mission-critical production environments.
                </p>
              </div>
            </div>
            <div className="faq">
              <h2 className="question">
                4. How is TiDB Cloud compatible with MySQL?
              </h2>
              <div className="answer">
                <p>
                  Currently, TiDB supports the majority of MySQL 5.7 syntax, but
                  does not support trigger, stored procedures, user-defined
                  functions, and foreign keys. For more details, see{' '}
                  <a
                    href="https://docs.pingcap.com/tidb/v3.0/mysql-compatibility"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Compatibility with MySQL
                  </a>
                  .
                </p>
                <p>
                  If you use the MySQL 8.0 client and it fails to connect to
                  TiDB, try to add the <code>default-auth</code> and{' '}
                  <code>default-character-set</code> options:
                </p>
                <code>
                  mysql -h 127.0.0.1 -u root -P 4000
                  --default-auth=mysql_native_password
                  --default-character-set=utf8
                </code>
                <div className="gatsby-highlight">
                  <pre className="language-bash shell-regular">
                    <code className="language-bash">
                      mysql -h 127.0.0.1 -u root -P 4000
                      --default-auth=mysql_native_password
                      --default-character-set=utf8
                    </code>
                  </pre>
                </div>
                <p>
                  This problem occurs because MySQL 8.0 changes the default
                  authentication plugin in MySQL 5.7. To solve this problem, you
                  need to add the options above to specify using the old
                  encryption method.
                </p>
              </div>
            </div>
            <div className="faq">
              <h2 className="question">
                5. What programming language can I use to work with TiDB Cloud?
              </h2>
              <div className="answer">
                <p>Any language supported by the MySQL client or driver.</p>
              </div>
            </div>
            <div className="faq">
              <h2 className="question">
                6. How does TiDB Cloud support strong consistency?
              </h2>
              <div className="answer">
                <p>
                  TiDB implements Snapshot Isolation consistency, which it
                  advertises as REPEATABLE-READ for compatibility with MySQL.
                  Data is redundantly copied between TiKV nodes using the{' '}
                  <a
                    href="https://raft.github.io/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Raft consensus algorithm
                  </a>{' '}
                  to ensure recoverability should a node failure occur.
                </p>
                <p>
                  At the bottom layer, TiKV uses a model of replication log +
                  State Machine to replicate data. For the write requests, the
                  data is written to a Leader and the Leader then replicates the
                  command to its Followers in the form of log. When the majority
                  of nodes in the cluster receive this log, this log is
                  committed and can be applied into the State Machine.
                </p>
              </div>
            </div>
            <div className="faq">
              <h2 className="question">
                7. Where can I run TiDB Cloud? (vendor lock-in)
              </h2>
              <div className="answer">
                <p>
                  TiDB Cloud is currently available on Amazon Web Services and
                  Google Cloud.
                </p>
              </div>
            </div>
            <div className="faq">
              <h2 className="question">
                8. What versions of TiDB are supported on TiDB Cloud?
              </h2>
              <div className="answer">
                <p>
                  For the currently supported TiDB version, see{' '}
                  <a
                    href="https://docs.pingcap.com/tidbcloud/beta/release-notes"
                    rel="noreferrer"
                    target="_blank"
                  >
                    TiDB Cloud Release Notes
                  </a>
                  .
                </p>
              </div>
            </div>
            <div className="faq">
              <h2 className="question">9. How can I learn about TiDB Cloud?</h2>
              <div className="answer content">
                <p>
                  The best way to learn about TiDB Cloud is to follow our
                  step-by-step tutorial. Check out the following topics to get
                  started:
                </p>
                <ul>
                  <li>
                    <a
                      href="https://docs.pingcap.com/tidbcloud/beta/tidb-cloud-intro"
                      target="_blank"
                      rel="noreferrer"
                    >
                      TiDB Cloud Introduction
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.pingcap.com/tidbcloud/beta/tidb-cloud-quickstart#overview"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Get Started
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.pingcap.com/tidbcloud/beta/create-tidb-cluster"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Create a TiDB Cluster
                    </a>
                  </li>
                </ul>
                <p>Look out for TiDB University coming soon!</p>
              </div>
            </div>
            <div className="faq">
              <h2 className="question">
                10. What companies are using TiDB/TiDB Cloud in production?
              </h2>
              <div className="answer">
                <p>
                  TiDB is trusted by 1500+ global enterprises across industries
                  such as financial services, gaming, and e-commerce. Our users
                  include Square (US), PayPay (Japan), Shopee (Singapore), and
                  China UnionPay (China). See TiDB’s
                  <a
                    href="https://pingcap.com/case-studies"
                    target="_blank"
                    rel="noreferrer"
                  >
                    case studies
                  </a>{' '}
                  or{' '}
                  <a
                    href="https://pingcap.com/contact-us/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    contact us
                  </a>{' '}
                  for further details.
                </p>
              </div>
            </div>
            <div className="faq">
              <h2 className="question">
                11. How does TiDB Cloud ensure high availability?
              </h2>
              <div className="answer">
                <p>
                  TiDB uses the Raft consensus algorithm to ensure that data is
                  highly available and safely replicated throughout storage in
                  Raft Groups. Data is redundantly copied between TiKV nodes and
                  placed in different Availability Zones to protect against
                  machine or data center failure. With automatic failover, TiDB
                  Cloud ensures that your service is always on.
                </p>
              </div>
            </div>
            <div className="faq">
              <h2 className="question">
                12. How does TiDB Cloud secure my data?
              </h2>
              <div className="answer">
                <p>
                  TiDB Cloud offers enterprise-grade security by deploying
                  clusters in dedicated Virtual Private Cloud (VPC) networks.
                  Each tenant on TiDB Cloud has its own isolated network, and
                  your application service and the TiDB database service use
                  independent VPC networks as well.
                </p>
                <p>
                  Connections between TiDB clients and servers are encrypted
                  using TLS, as are connections between all TiDB component
                  nodes. Data encryption on disk (also known as "at rest") is
                  also enabled by default for all your persisted data and
                  backups.
                </p>
                <img src={CloudProviders} alt="tidb cloud providers" />
                <p>
                  As a Software as a Service (SaaS) provider, we take data
                  security seriously. We've established strict information
                  security policies and procedures required by the{' '}
                  <a
                    href="https://pingcap.com/blog/pingcap-successfully-completes-soc-2-type-1-examination-for-tidb-cloud"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Service Organization Control (SOC) 2 Type 1 compliance
                  </a>
                  . This ensures that our customers' data is secure, available,
                  and confidential.
                </p>
              </div>
            </div>
            <div className="faq">
              <h2 className="question">
                13. What kind of support is available for customers?
              </h2>
              <div className="answer">
                <p>
                  TiDB Cloud is supported by the same team behind TiDB, which
                  has run mission-critical use cases for over 1500 global
                  enterprises across industries including financial services,
                  e-commerce, enterprise applications, and gaming. Support is
                  available 24/7 for TiDB Cloud users.
                </p>
              </div>
            </div>
            <div className="faq">
              <h2 className="question">
                14. There are different components in my TiDB Cluster. What are
                PD, TiDB, TiKV, and TiFlash nodes for?
              </h2>
              <div className="answer">
                <p>
                  The Placement Driver (PD) is "the brain" of the entire TiDB
                  cluster as it stores the metadata of the cluster. It sends
                  data scheduling commands to specific TiKV nodes according to
                  the data distribution state reported by TiKV nodes in real
                  time.
                </p>
                <p>
                  TiDB is the SQL computing layer that aggregates data from
                  queries returned from TiKV or TiFlash stores. TiDB is
                  horizontally scalable, and increasing the number of TiDB nodes
                  will increase the number of concurrent queries the cluster can
                  handle.
                </p>
                <p>
                  TiKV is the transactional store used to store OLTP data. All
                  the data in TiKV is automatically maintained in multiple
                  replicas (three replicas by default), so TiKV has native high
                  availability and supports automatic failover. TiKV is
                  horizontally scalable, and increasing the number of
                  transactional stores will increase OLTP throughput.
                </p>
                <p>
                  TiFlash is the analytical storage that replicates data from
                  the transactional store (TiKV) in real time and supports
                  real-time analytics workloads. Unlike TiKV, TiFlash stores
                  data in columns to accelerate analytical processing. TiFlash
                  is also horizontally scalable, and increasing TiFlash nodes
                  will increase OLAP storage and computing capacity.
                </p>
                <img src={OLAPWorklaod} alt="tidb olap oltp workload" />
              </div>
            </div>
            <div className="faq">
              <h2 className="question">
                15. How does TiDB replicate data between the TiKV nodes?
              </h2>
              <div className="answer">
                <p>
                  TiKV divides the whole key-value space into key ranges, and
                  each key range is treated as a “Region”. In TiKV, data is
                  distributed among all nodes in the cluster and uses Region as
                  the basic unit (PD is responsible for spreading Regions as
                  evenly as possible across all nodes in the cluster).
                </p>
                <p>
                  TiDB uses the Raft consensus algorithm to replicate data by
                  Regions. Multiple replicas of a Region stored in different
                  nodes form a Raft Group.
                </p>
                <p>
                  Each data change will be recorded as a Raft log. Through Raft
                  log replication, data is safely and reliably replicated to
                  multiple nodes of the Raft Group.
                </p>
              </div>
            </div>
            <div className="faq">
              <h2 className="question">
                16. How do I make use of TiDB Cloud’s HTAP capabilities?
              </h2>
              <div className="answer">
                <p>
                  Traditionally, there are two types of databases: Online
                  Transactional Processing (OLTP) databases and Online
                  Analytical Processing (OLAP) databases. OLTP and OLAP requests
                  are often processed in different and isolated databases. With
                  this traditional architecture, migrating data from an OLTP
                  database to a data warehouse or data lake is a long and
                  error-prone process.
                </p>
                <p>
                  As a Hybrid Transactional Analytical Processing (HTAP)
                  database, TiDB Cloud helps you simplify your system
                  architecture, reduce maintenance complexity, and support
                  real-time analytics on transactional data by automatically
                  replicating data reliably between the OLTP (TiKV) store and
                  OLAP (TiFlash) store. Typical HTAP use cases are user
                  personalization, AI recommendation, fraud detection, business
                  intelligence, and real-time reporting.
                </p>
                <p>
                  For further HTAP scenarios, refer to{' '}
                  <Link to="/blog/how-we-build-an-htap-database-that-simplifies-your-data-platform">
                    How We Build an HTAP Database That Simplifies Your Data
                    Platform.
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default FAQ
