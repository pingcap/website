import React from 'react'
import { graphql } from 'gatsby'
import TextField from '@material-ui/core/TextField'

import Layout from '../../../components/layout'
import SEO from '../../../components/seo'

import '../../../styles/pages/zh/download/community.scss'

const Enterprise = ({ data }) => {
  const { tidbLogoPNG, rocketIconSVG } = data

  return (
    <Layout>
      <SEO title="Download TiDB" description="" />
      <article className="PingCAP-Download-TiDB-Enterprise-ZH">
        <section className="section">
          <div className="container enterprise-wrapper">
            <div className="tidb-logo">
              <img src={tidbLogoPNG.publicURL} alt="rocket icon" />
            </div>
            <div className="card">
              <div className="header">
                <h1>开始体验 TiDB</h1>
                <div className="rocket-icon">
                  <img src={rocketIconSVG.publicURL} alt="rocket icon" />
                </div>
              </div>
              <div className="title-field">
                <p>企业版，申请 30 天免费评估！</p>
              </div>
              <TextField
                label="姓名"
                className="form-control"
                variant="outlined"
                margin="dense"
              />
              <TextField
                label="手机号码"
                className="form-control"
                variant="outlined"
                margin="dense"
              />
              <TextField
                label="公司邮箱"
                className="form-control"
                variant="outlined"
                margin="dense"
              />
              <TextField
                label="公司名称"
                className="form-control"
                variant="outlined"
                margin="dense"
              />
              <div>
                <button className="button is-primary">提交</button>
              </div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    tidbLogoPNG: file(relativePath: { eq: "download/tidb-logo.png" }) {
      publicURL
    }
    rocketIconSVG: file(relativePath: { eq: "download/rocket-icon.svg" }) {
      publicURL
    }
  }
`

export default Enterprise
