import '../../styles/pages/404.scss'

import Layout from '../../components/layout'
import React from 'react'
import SEO from '../../components/seo'
import Link from '../../components/IntlLink'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not Found" />
    <div className="PingCAP-404-Page">
      <section className="container">
        <h1>抱歉... 404!</h1>
        <p>
          当前页面可能被移除或不存在，你可以返回上一页继续浏览或者直接访问
          <Link to="/">首页</Link>
        </p>
      </section>
    </div>
  </Layout>
)

export default NotFoundPage
