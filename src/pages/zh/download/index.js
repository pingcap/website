import React from 'react'
import { Button } from '@seagreenio/react-bulma'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import communityEditionSVG from '../../../../images/zh/download/community-edition.svg'
import enterpriseSubscriptionSVG from '../../../../images/zh/download/enterprise-subscription.svg'
import Link from '../../../components/IntlLink'

import '../../../styles/pages/zh/download/index.scss'

const Download = ({ data }) => {
  return (
    <Layout>
      <SEO title="Download TiDB" description="" />
      <article className="PingCAP-Download-TiDB">
        <section className="section download-section">
          <div className="container">
            <div className="deploy-on-premise">
              <h2 className="title section-title">开始体验 TiDB</h2>
              <div className="columns">
                <div className="column">
                  <div className="card">
                    <h2 className="column-title">社区版下载</h2>
                    <img src={communityEditionSVG} alt="" />
                    <ul>
                      <li>
                        <div className="icon disc-icon" />
                        社区订阅免费试用
                      </li>
                      <li>
                        <div className="icon disc-icon" />
                        极速便捷安装
                      </li>
                      <li>
                        <div className="icon disc-icon" />
                        用户社区&nbsp;
                        <a
                          href="https://asktug.com/"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          AskTUG
                        </a>
                      </li>
                      <li className="more">
                        <a
                          href="https://docs.pingcap.com/zh/tidb/stable"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <ArrowForwardIcon className="icon more-icon" />
                          了解更多 TiDB 信息新一代分布式，HTAP 数据库
                        </a>
                      </li>
                    </ul>
                    <Button
                      as={Link}
                      to="/download/community"
                      className="is-primary"
                    >
                      社区版免费下载
                    </Button>
                  </div>
                </div>
                <div className="column">
                  <div className="card">
                    <h2 className="column-title">企业版试用</h2>
                    <img src={enterpriseSubscriptionSVG} alt="" />
                    <ul>
                      <li>
                        <div className="icon disc-icon" />
                        企业级最佳实践
                      </li>
                      <li>
                        <div className="icon disc-icon" />
                        企业级服务支持
                      </li>
                      <li>
                        <div className="icon disc-icon" />
                        全面加强的安全特性
                      </li>
                      <li className="more">
                        <Link to="/case-studies">
                          <ArrowForwardIcon className="icon more-icon" />
                          了解更多 TiDB 客户解决方案
                        </Link>
                      </li>
                    </ul>
                    <Button
                      as={Link}
                      to="/download/enterprise"
                      className="is-primary"
                    >
                      30 天免费试用
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default Download
