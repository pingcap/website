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
                  you control through an intuitive dashboard. You’ll be able to
                  easily deploy on Amazon Web Services or Google Cloud to
                  quickly build mission critical applications.
                </p>
                <p>
                  TiDB Cloud allows developers and DBAs with little or no
                  training to handle once-complex tasks such as infrastructure
                  management and cluster deployment. And by scaling TiDB
                  clusters in or out with a simple click of a button, you’ll no
                  longer waste costly resources because you’ll be able to
                  provision your databases for exactly how much and how long you
                  need them.
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
                <ul className="">
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
                  <span className="underline">without changing any code</span>.
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
                4. How does TiDB Cloud support strong consistency?
              </h2>
              <div className="answer">
                <p>
                  The TiDB database uses the Raft consensus algorithm to ensure
                  data consistency.
                </p>
                <p>
                  TiKV (the transactional storage of TiDB) uses Raft to perform
                  data replication, and each Raft Group consists of three
                  replicas stored on different nodes by default. When you need
                  to write some data, TiKV sends the request to the Raft Leader.
                  The Leader copies the entry to other Followers through the
                  Raft algorithm. After the Follower receives the entry, it will
                  also perform an Append operation, and in the meantime inform
                  the Leader that the Append operation is successful. When the
                  Leader finds that the entry has been appended by the majority
                  of nodes, it considers that the entry is Committed.
                </p>
                <p>
                  Since one Raft Group only processes a limited amount of data,
                  we split the data into multiple Raft Groups, each of which
                  corresponds to a Region. Splitting is done by slicing within a
                  data range. With multiple Raft groups, TiDB guarantees strong
                  consistency among multiple regions.
                </p>
              </div>
            </div>
            <div className="faq">
              <h2 className="question">
                5. Where can I run TiDB Cloud? (vendor lock-in)
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
                6. What versions of TiDB are supported on TiDB Cloud?
              </h2>
              <div className="answer">
                <p>
                  TiDB Cloud always has the latest version of TiDB applied
                  automatically or at your own schedule. Please refer to our{' '}
                  <a
                    href="https://docs.pingcap.com/tidbcloud/beta/release-notes/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    release note
                  </a>{' '}
                  for more information about the latest version of TiDB we
                  support.
                </p>
              </div>
            </div>
            <div className="faq">
              <h2 className="question">
                7. What language is TiDB/TiKV written in?
              </h2>
              <div className="answer">
                <p>
                  TiKV (transactional storage) is written in Rust. TiDB (compute
                  node) and PD (placement driver) are written in Go.
                </p>
              </div>
            </div>
            <div className="faq">
              <h2 className="question">8. How can I learn about TiDB Cloud?</h2>
              <div className="answer content">
                <p>
                  The best way to learn about TiDB is to follow our step-by-step
                  tutorial. Please check out the following topics to get
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
                9. What companies are using TiDB/TiDB Cloud in production?
              </h2>
              <div className="answer">
                <p>
                  TiDB is trusted by 1500+ global enterprises across industries
                  such as financial services, gaming, and e-commerce. Our{' '}
                  <a
                    href="https://pingcap.com/case-studies/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    customers
                  </a>{' '}
                  include Square (US), Paypay (Japan), Colopl (Japan), and China
                  UnionPay (China). Please refer to TiDB’s{' '}
                  <a
                    href="https://pingcap.com/case-studies/"
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
                10. How does TiDB Cloud ensure high availability?
              </h2>
              <div className="answer">
                <p>
                  TiDB uses the Raft consensus algorithm to ensure that data is
                  highly available and safely replicated throughout storage in
                  Raft groups. Data is redundantly copied between TiKV nodes and
                  placed in different AZs to protect against machine or data
                  center failure. Our system will automatically fail over,
                  ensuring that your applications continue to work seamlessly.
                </p>
              </div>
            </div>
            <div className="faq">
              <h2 className="question">
                11. How does TiDB Cloud secure my data?
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
                <img src={CloudProviders} alt="tidb cloud providers"/>
                <p>
                  As a Software as a Service (SaaS) provider, we take data
                  security seriously. We've established strict information
                  security policies and procedures required by the Service
                  Organization Control (SOC) 2 Type 1 compliance. This ensures
                  that our customers' data is secure, available, and
                  confidential.
                </p>
              </div>
            </div>
            <div className="faq">
              <h2 className="question">
                12. What kind of support is available for customers?
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
                13. There are different components in my TiDB Cluster. What are
                PD, TiDB, TiKV, and TiFlash nodes for?
              </h2>
              <div className="answer">
                <p>
                  Placement Driver (PD) is "the brain" of the entire TiDB
                  cluster as it stores the metadata of the cluster. It sends
                  data scheduling commands to specific TiKV nodes according to
                  the data distribution state reported by TiKV nodes in real
                  time.
                </p>
                <p>
                  TiDB is the SQL compute layer that aggregate data from queries
                  returned from TiKV or TiFlash stores. TiDB is horizontally
                  scalable, and increasing the number of TiDB nodes will
                  increase the number of concurrent queries the cluster can
                  handle.
                </p>
                <p>
                  TiKV is the transactional store used to store OLTP data. All
                  the data in TiKV is automatically maintained in multiple
                  replicas (three replicas by default), so TiKV has native high
                  availability and supports automatic failover. TiKV is
                  horizontally scalable, increasing the number of transactional
                  stores will increase OLTP throughput.
                </p>
                <p>
                  TiFlash is the analytical storage that synchronizes data from
                  Transactional Store (TiKV) in real-time and supports real-time
                  analytics workloads. Unlike TiKV nodes, TiFlash stores data in
                  columns to accelerate analytical processing. TiFlash is also
                  horizontally scalable, and increasing TiFlash nodes will
                  increase OLAP storage and compute capacity.
                </p>
                <img src={OLAPWorklaod} alt="tidb olap oltp workload" />
              </div>
            </div>
            <div className="faq">
              <h2 className="question">
                14. How does TiDB synchronize data between the TiKV nodes?
              </h2>
              <div className="answer">
                <p>
                  TiKV divides the whole key-value space into key ranges, and
                  each key range is treated as a “region”. In TiKV, data is
                  distributed among all nodes in the cluster and use regions as
                  the basic unit (PD is responsible for spreading regions as
                  evenly as possible across all nodes in the cluster).
                </p>
                <p>
                  TiDB uses the Raft consensus algorithm to replicate data by
                  regions. Multiple replicas of a Region are stored in different
                  nodes to form a Raft Group.
                </p>
                <p>
                  When there are data changes, each data change will be recorded
                  in a Raft log. Through Raft log replication, data is safely
                  and reliably replicated to multiple nodes of the Raft group.
                </p>
              </div>
            </div>
            <div className="faq">
              <h2 className="question">
                15. How do I make use of TiDB Cloud’s HTAP capabilities?
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
                  For further HTAP scenarios, please refer to{' '}
                  <Link to="/blog/how-we-build-an-htap-database-that-simplifies-your-data-platform#applying-tidb-in-htap-scenarios">
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
