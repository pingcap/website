---
title: TiDB 4.0 新特性尝鲜指南
author: ['PingCAP']
date: 2020-04-10
summary: 在 TiDB 4.0 中我们实现了 很多具有里程碑意义的功能，这里为大家列一份「新特性尝鲜指南」。
tags: ['TiDB 4.0 新特性','社区动态','TiDB']
---
>在 TiDB 4.0 中我们实现了 [很多具有里程碑意义的功能](https://pingcap.com/blog-cn/the-overview-of-tidb-4.0/)，这里为大家列一份「新特性尝鲜指南」。

## TiUP：一键安装工具

**试玩第一步当然是安装部署：如何在 1 分钟内快速部署、单机启动 TiDB 集群？**

我们专门为 TiDB 4.0 做了一个全新的组件管理工具—— [TiUP](https://tiup.io)。

当然我们要先安装 TiUP，使用如下命令：

```
curl --proto '=https' --tlsv1.2 -sSf https://tiup-mirrors.pingcap.com/install.sh | sh
```

装完之后，控制台会提示使用 tiup playground 来在单机启动一个 TiDB 集群，然后我们就可以使用 MySQL 客户端连接 TiDB 集群，并且愉快地开始测试了！

当然如果在生产环境，大家也可以方便地使用 TiUP cluster 功能，依然可以 1 分钟部署 TiDB 集群，具体方法可以参考 [这篇文章](https://pingcap.com/blog-cn/the-overview-of-tidb-4.0/)。

点击查看 [TiUP 官方操作文档](https://pingcap.com/docs-cn/stable/how-to/deploy/orchestrated/tiup/)。

## TiDB Dashboard

TiDB 4.0 新提供 TiDB Dashboard 图形化界面，内置各种有力工具方便 DBA 同学诊断、监视和管理集群。

![](https://download.pingcap.com/images/blog/tidb-4.0-new-features-tasting-guide/1-tidb-dashboard.gif)

比如， [Key Visualizer](https://pingcap.com/blog-cn/tidb-4.0-key-visualizer/)（简称 KeyViz）就是 TiDB Dashboard 包含的工具之一，它可以用于观察业务模式的变化、快速直观地查看热点读写情况，提升 [系统的可观测性](https://pingcap.com/blog-cn/observability-of-distributed-system/)。除此之外，TiDB Dashboard 还包含其他工具，如集群诊断报告、SQL 语句分析（Statements）、日志搜索和导出、节点性能分析（Profiling）等，详情可阅读 [这篇文章](https://pingcap.com/blog-cn/tidb-4.0-tidb-dashboard/)。

## TiFlash

TiFlash 是配合 TiDB 体系的列存引擎，它和 TiDB 无缝结合，在线 DDL、无缝扩容、自动容错等等方便运维的特点也在 TiFlash 中得到继承。其次，TiFlash 可以**实时**与行存保持同步。
关于 TiFlash 的性能与架构原理，可以参考以下几篇文章：

*   [一两个节点、一两条命令，轻松让 TiDB 分析场景无痛提速十倍](https://pingcap.com/blog-cn/10x-improving-analytical-processing-ability-of-tidb-with-tiflash/)

*   [为了证明它的速度，我们一口气对比了 Oracle、MySQL、MariaDB、Greenplum、Apache Spark](https://pingcap.com/blog-cn/tidb-and-tiflash-vs-mysql-mariadb-greenplum-apache-spark/)

*   [TiFlash：并非另一个 T+1 列存数据库](https://pingcap.com/blog-cn/tiflash-column-database/)

点击查看 [TiFlash 官方操作文档](https://pingcap.com/docs-cn/stable/reference/tiflash/overview/)。

## 悲观锁

TiDB 不仅仅在互联网行业广泛使用，更在一些传统金融行业开花结果，而悲观事务是在多数金融场景不可或缺的一个特性。在 TiDB 4.0 中我们提供多种方式打开悲观锁，详情可以阅读 [这篇文章](https://pingcap.com/blog-cn/tidb-4.0-pessimistic-lock/)。

点击查看 [悲观锁官方操作文档](https://pingcap.com/docs-cn/stable/reference/transactions/transaction-pessimistic/)。

## 快速备份恢复

TiDB 4.0 提供了分布式备份恢复工具  **Backup&Restore**（BR），经过内部测试，10T 数据的备份恢复速度可以达到 1 GB/s 级别。如果你业务产生海量数据，并极度重视数据安全、备份恢复的效率，那么 TiDB + BR 值得一试，从此再也不怕“删库跑路、恢复缓慢”，详情可参考 [这篇文章](https://pingcap.com/blog-cn/cluster-data-security-backup/)。

点击查看 [BR 官方操作文档](https://pingcap.com/docs-cn/stable/reference/tools/br/br/)。

## SQL Hint & SQL Plan Management

TiDB 已支持 Optimizer Hints 语法，它基于 MySQL 5.7 中介绍的类似 comment 的语法，例如 `/*+ HINT_NAME(t1, t2) */`。当 TiDB 优化器选择的不是最优查询计划时，建议使用 Optimizer Hints。

点击查看 [官方操作文档](https://pingcap.com/docs-cn/stable/reference/performance/optimizer-hints/)。

用户虽然可以通过 Hint 的方式选择指定的执行计划，但有的时候需要在不修改 SQL 语句的情况下干预执行计划的选择。在 TiDB 4.0 中执行计划绑定提供了一系列功能，使得可以在不修改 SQL 语句的情况下选择指定的执行计划。此外，随着数据的变更，有可能原先绑定的执行计划已经不是最优的了，这时候，**自动演进绑定功能**可以自动优化已经绑定的执行计划，详情可以查看这篇文章：[「再也不用担心我的 SQL 突然变慢了」](https://pingcap.com/blog-cn/tidb-4.0-sql-plan-management/)。

点击查看 [官方操作文档](https://pingcap.com/docs-cn/stable/reference/performance/execution-plan-bind/)。

## View

TiDB 支持视图，视图是一张虚拟表，该虚拟表的结构由创建视图时的 SELECT 语句定义。使用视图一方面可以对用户只暴露安全的字段及数据，进而保证底层表的敏感字段及数据的安全。另一方面，将频繁出现的复杂查询定义为视图，可以使复杂查询更加简单便捷。

点击查看 [View 官方操作文档](https://pingcap.com/docs-cn/stable/reference/sql/view/)。

## 更多新特性等你探索！

1. [大事务支持](https://pingcap.com/docs-cn/stable/reference/configuration/tidb-server/configuration-file/#txn-total-size-limit)

2. [支持  utf8\_general\_ci 和 utf8mb4\_general\_ci collation](https://pingcap.com/docs-cn/stable/reference/sql/character-set/)

3. [AutoRandom Key](https://pingcap.com/docs-cn/stable/reference/sql/attributes/auto-random/)

4. [LOAD DATA 功能完善与优化](https://pingcap.com/docs-cn/stable/reference/sql/statements/load-data/)

5. [基于角色的访问控制（role-based-access-control）](https://pingcap.com/docs-cn/stable/reference/security/role-based-access-control/)

6. [ADMIN DDL 支持 [like_or_where]](https://pingcap.com/docs-cn/stable/reference/sql/statements/admin/)

7. ……

---

🎁即日起，投稿「TiDB 4.0 试玩体验」 的同学可以有机会得到 TiDB 限量周边奖励哦～

投稿渠道：

* 方式一：进入 [AskTUG](https://asktug.com)  发帖，标题格式：【TiDB 4.0 试玩体验】……，即可与广大 TiDB 用户们一起交流讨论！

* 方式二：加入「TiDB 4.0 尝鲜群」，在群内分享你的博客链接并 @TiDB Robot，可以实时与大家分享试玩心得、反馈建议。加群方式：点击【[这里](http://t.cn/A6h5LjZR)】添加 TiDB Robot 为好友，回复“新特性”即可入群！