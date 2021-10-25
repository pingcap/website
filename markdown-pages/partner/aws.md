---
title: PingCAP - AWS IVS Partner
---

PingCAP is an enterprise-grade software service provider committed to delivering an open-source, cloud-native, one-stop database for growth oriented clients. PingCAP is a certified [AWS Independent Software Vendor (ISV) partner](https://aws.amazon.com/partners/isv/).

<div class="columns">
 <div class="column is-6 is-offset-one-quarter">
<img src="https://download.pingcap.com/images/partner/partner_aws.png" alt="partner badge" />
</div>
</div>

[TiDB](https://github.com/pingcap/tidb) is an open-source distributed SQL database that supports Hybrid Transactional and Analytical Processing (HTAP) workloads. Designed for the cloud, TiDB provides flexible scalability, reliability, and security on the cloud platform. Cloud service users can easily implement remote disaster recovery over TiDB, further improving business continuity and availability.

[TiDB Cloud](https://pingcap.com/products/tidbcloud), the fully-managed database service for TiDB, is also available on AWS.

![TiDB Cloud](https://download.pingcap.com/images/partner/tidbcloud_aws.png)

## TiDB with AWS: maximizing the value of data for cloud service users

With more and more TiDB users building their technology stacks on the cloud, the combined solution of TiDB + AWS allows cloud service users to easily implement remote disaster recovery on TiDB, further improving business continuity and availability.

TiDB's cloud-native design and AWS's professional cloud services are well integrated to enable users to automate scaling on the cloud. With the close collaborations of both parties, TiDB can reach more customers more quickly, while continuing to hone its products to meet customers' needs for digital transformation.

Currently, TiDB supports more than 60 types of Amazon EC2 instances on AWS, with 7*24 enterprise-grade support that includes:

* Online support ticketing service and telephone support that cover product database operation, and maintenance related issues
* Media download of products, product upgrade packages, hotfixes, and patches
* Product security-related alarms and notifications
* Dedicated emergency response support channel for P1 grade faults

## Success story with TiDB + AWS from Xiaohongshu

[Xiaohongshu](https://en.wikipedia.org/wiki/Xiaohongshu) is a popular social media and e-commerce platform in China. The Xiaohongshu app allows users to post and share product reviews, travel blogs, and lifestyle stories via short videos and photos. Xiaohongshu receives more than 100 million rows of data every day.

### A growing business—and growing challenges

For data reports, Xiaohongshu previously used the Hadoop data warehouse to pre-aggregate the data, and then aggregate the high-dimensional data and put it in MySQL for query. However, with the rapid growth of their business, the types of reports became more diverse. The scalability of MySQL was also a challenging issue.

The sharded MySQL database solution brought along high complexities and maintenance difficulties, making it hard to run complex and distributed queries.

In the anti-fraud data analytics scenario, the traditional data warehouse in T+1 mode had a delayed time to insights. They need a database solution with real-time analytics processing capabilities.

### The TiDB HTAP solution

To try and solve the challenges mentioned above, Xiaohongshu introduced the [TiDB HTAP](https://docs.pingcap.com/tidb/v3.0/key-features#minimize-etl-with-htap) solution into their application architecture.

![TiDB HTAP with Xiaohongshu](https://download.pingcap.com/images/partner/xiaohongshu_aws.png)

In the data report scenario, TiDB replaces MySQL. The horizontal scalability of TiDB solves the complicated problem of scaling out MySQL as the business grows.

For complex queries, Xiaohongshu replicated MySQL data to TiDB via Binlog in real time and merged the tens of thousands of sharded tables to one large table in TiDB. Complicated queries, ACID transactions, and join operations could be done in real-time on TiDB without affecting the primary MySQL database.

For anti-fraud analytic processing, Xiaohongshu changed the T+1mode for writes to writing with SQL statements in Apache Flink in real time. Their peak queries per second (QPS) can reach 30,000 or 40,000. A single table may receive about 500 million rows of data per day. By bypassing the Hadoop data warehouse and doing real-time queries in TiDB, an analyst can see the coupon distribution status within a few minutes.

Xiaohongshu aggregates other data into a data lake built upon Amazon S3 and EMR, and then loads it into a TiDB cluster for unified and efficient operational analysis.

## Related Resources

* [Deploy TiDB on AWS EKS](https://docs.pingcap.com/tidb-in-kubernetes/stable/deploy-on-aws-eks?_ga=2.202706578.2084552120.1634196065-205052314.1597370956)
* [TiDB on AWS Marketplace](https://awsmarketplace.amazonaws.cn/marketplace/pp/prodview-idxqhvltxosqc?qid=1634194259707&sr=0-1&ref_=srh_res_product_title)
* [Achieve Better Price to Performance for TiDB on Amazon EKS with Graviton2 Processors](https://aws.amazon.com/cn/blogs/startups/achieve-better-price-to-performance-for-tidb-graviton2-processors/)
* [Best Practices for TiDB on AWS Cloud](https://en.pingcap.com/blog/best-practices-for-tidb-on-aws-cloud)
