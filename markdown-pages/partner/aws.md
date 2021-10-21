---
title: PingCAP - AWS IVS Partner
summary: Learn about the PingCAP Community Software License Agreement to be applied when you download or use PingCAP Community Software.
---

# PingCAP - AWS IVS Partner

![partner badge](images/image1.png "image_tooltip")

Amazon Web Services (AWS) is the world’s most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. Millions of customers—including the fastest-growing startups, largest enterprises, and leading government agencies—are using AWS to lower costs, become more agile, and innovate faster.

[TiDB](https://github.com/pingcap/tidb) is an open-source distributed SQL database that supports Hybrid Transactional and Analytical Processing (HTAP) workloads. Designed for the cloud, TiDB provides flexible scalability, reliability and security on the cloud platform. Cloud service users can easily implement remote disaster recovery over TiDB, further improving business continuity and availability.

[TiDB Cloud](https://pingcap.com/products/tidbcloud), the fully-managed database service for TiDB, is also available on AWS.

![alt_text](images/image2.png "image_tooltip")

## TiDB with AWS - Maximizing the value of data for cloud service users

With more and more TiDB users building their technology stacks on the cloud, the combined solution of TiDB + AWS allows cloud service users to easily implement remote disaster recovery on TiDB , further improving business continuity and availability.

TiDB's cloud-native design and AWS's professional cloud services are well integrated to enable users to automate scaling on the cloud. With the close collaborations of both parties, TiDB could reach customers in a more widely and timely manner, while continuing to hone its products to be more catering to customers' needs in digital transformation.

Currently, TiDB supports more than 60 Amazon EC2 types of instances on AWS, with 7*24 enterprise-grade support that includes:

* Online support ticketing service and telephone support that cover product, database operation, and maintenance related issues
* Media download of products, product upgrade packages, hotfixes, and patches
* Product security-related alarms and notifications
* Dedicated emergency response support channel for P1 grade faults

## Success story with TiDB + AWS from Xiaohongshu

[Xiaohongshu](https://en.wikipedia.org/wiki/Xiaohongshu) is a popular social media and e-commerce platform in China. The Xiaohongsu app allows users to post and share product reviews, travel blogs, and lifestyle stories via short videos and photos. Xiaohongshu receives more than 100 million rows of data every day.

### Business challenges

For data reports, Xiaohongshu previously used the Hadoop data warehouse to do pre-aggregation of the data, and then aggregated the high-dimensional data and put it in MySQL for query. However, with the rapid growth of our business, the types of reports became more diverse. The scalability of MySQL was also a challenging issue.

The sharded MySQL database solution brought along high complexities and maintenance difficulties, making it hard to run complex and distributed queries.

In the anti-fraud data analytics scenario, the traditional data warehouse in T+1 mode had a delayed time to insights.  They need a database solution with real-time analytics processing capabilities.

### Solution

To try and solve the challenges mentioned above, Xiaohongshu introduced the[TiDB HTAP](https://docs.pingcap.com/tidb/v3.0/key-features#minimize-etl-with-htap)solution into their application architecture.

![alt_text](images/image3.png "image_tooltip")

In the data report scenario, TiDB replaces MySQL. The horizontal scalability of TiDB solves the complicated problem of scaling out MySQL as the business grows.

For complex queries, Xiaohongshu replicated MySQL data to TiDB via  Binlog in real time and merged the tens of thousands of sharded tables to one large table in TiDB. Complicated queries, ACID transactions and join operations could be done in a real-time manner on TiDB without affecting the primary MySQL database.

For anti-fraud analytic processing, Xiaohongshu changed the T+1 mode for writes to writing with SQL statements in Apache Flink in real time. Their peak queries per second (QPS) can reach 30,000 or 40,000. A single table may receive about 500 million rows of data per day. By bypassing the Hadoop data warehouse and doing real-time queries in TiDB, an analyst is able to see the coupon distribution status within a few minutes.

Xiaohongshu aggregates other data into a data lake built upon Amazon S3 and EMR and then loads it into a TiDB cluster to achieve unified and efficient operational analysis.

## Related Resources

* [Deploy TiDB on AWS EKS](https://docs.pingcap.com/tidb-in-kubernetes/stable/deploy-on-aws-eks?_ga=2.202706578.2084552120.1634196065-205052314.1597370956)
* [TiDB on AWS Marketplace](https://awsmarketplace.amazonaws.cn/marketplace/pp/prodview-idxqhvltxosqc?qid=1634194259707&sr=0-1&ref_=srh_res_product_title)
* [Achieve Better Price to Performance for TiDB on Amazon EKS with Graviton2 Processors](https://aws.amazon.com/cn/blogs/startups/achieve-better-price-to-performance-for-tidb-graviton2-processors/)
* [Best Practices for TiDB on AWS Cloud](https://en.pingcap.com/blog/best-practices-for-tidb-on-aws-cloud)
