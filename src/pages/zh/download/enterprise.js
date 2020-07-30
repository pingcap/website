import React, { useCallback, useRef, useState } from 'react'
import { graphql } from 'gatsby'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'

import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import checkCircleSVG from '../../../../images/zh/download/check-circle.svg'

import '../../../styles/pages/zh/download/community.scss'

function validateForm(name, phone, email, company) {
  let errors = {}
  const phoneRegx = /^1[3456789]\d{9}$/
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  let hasErrors = false

  // check name validation
  if (name === '') {
    errors.name = '姓名为必填选项'
    hasErrors = true
  } else if (name.length > 64) {
    errors.name = '名字长度不得超过 64 个字符'
    hasErrors = true
  }

  // check phone
  if (phone === '') {
    errors.phone = '手机为必填选项'
    hasErrors = true
  } else if (!phoneRegx.test(phone)) {
    errors.phone = '请输入正确手机号'
    hasErrors = true
  }

  if (email === '') {
    errors.email = '邮箱为必填选项'
    hasErrors = true
  } else if (!re.test(String(email).toLowerCase())) {
    errors.email = '请输入正确邮箱'
    hasErrors = true
  }

  // check company
  if (company === '') {
    errors.company = '公司名称为必填选项'
    hasErrors = true
  } else if (company.length > 255) {
    errors.company = '公司名称长度不得超过 255 个字符'
    hasErrors = true
  }

  if (hasErrors) return errors
  else return null
}

const Enterprise = ({ data }) => {
  const { tidbLogoPNG, rocketIconSVG } = data
  const [mode, setMode] = useState('waiting')
  const [errors, setErrors] = useState(null)
  const [errMsg, setErrMsg] = useState('')
  const formRef = useRef()
  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      if (!formRef.current) return
      const formData = new FormData(formRef.current)
      const name = formData.get('name')
      const phone = formData.get('phone')
      const email = formData.get('email')
      const company = formData.get('company')
      const errors = validateForm(name, phone, email, company)
      if (errors) {
        setErrors(errors)
        return
      }
      try {
        const { data, status } = await axios.post(
          'https://accounts.pingcap.com/api/customer-support/business-download-leads',
          {
            name,
            phone,
            email,
            company,
          }
        )
        setMode('success')
      } catch (e) {
        if (e.response && e.response.data.detail) {
          setErrMsg(e.response.data.detail)
        } else {
          setErrMsg('未知错误')
        }
        setMode('failure')
      }
    },
    [formRef]
  )
  const onBack = useCallback((e) => {
    e.preventDefault()
    setMode('waiting')
  }, [])

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
              <div className="textfields">
                <div className="title-field">
                  <p>企业版，申请 30 天免费评估！</p>
                </div>
                <form onSubmit={onSubmit} ref={formRef}>
                  <TextField
                    label="姓名"
                    className="form-control"
                    variant="outlined"
                    margin="dense"
                    name="name"
                    error={errors && Boolean(errors.name)}
                    helperText={errors && errors.name}
                  />
                  <TextField
                    label="手机号码"
                    className="form-control"
                    variant="outlined"
                    margin="dense"
                    name="phone"
                    error={errors && Boolean(errors.phone)}
                    helperText={errors && errors.phone}
                  />
                  <TextField
                    label="公司邮箱"
                    className="form-control"
                    variant="outlined"
                    margin="dense"
                    name="email"
                    error={errors && Boolean(errors.email)}
                    helperText={errors && errors.email}
                  />
                  <TextField
                    label="公司名称"
                    className="form-control"
                    variant="outlined"
                    margin="dense"
                    name="company"
                    error={errors && Boolean(errors.company)}
                    helperText={errors && errors.company}
                  />
                  {mode === 'success' && (
                    <div className="result-container">
                      <div className="result-title">
                        <img
                          className="check-icon"
                          src={checkCircleSVG}
                          alt=""
                        />
                        提交成功
                      </div>
                      <div className="result-desc">
                        您的申请已成功提交，我们的支持团队会在 24
                        小时内与您联系试用事宜，如需帮助，请联系&nbsp;
                        <a href="mailto:tidb-support@pingcap.com">
                          tidb-support@pingcap.com
                        </a>
                      </div>
                    </div>
                  )}
                  {mode === 'failure' && (
                    <div className="result-container">
                      <div className="result-title">提交失败</div>
                      <div className="result-desc">{errMsg}</div>
                    </div>
                  )}
                  <div>
                    <input
                      type="submit"
                      className="button is-primary"
                      value={
                        { waiting: '提交', success: '返回', failure: '返回' }[
                          mode
                        ]
                      }
                      onClick={
                        mode === 'success' || mode === 'failure' ? onBack : null
                      }
                    />
                  </div>
                </form>
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
    tidbLogoPNG: file(relativePath: { eq: "zh/download/tidb-logo.png" }) {
      publicURL
    }
    rocketIconSVG: file(relativePath: { eq: "zh/download/rocket-icon.svg" }) {
      publicURL
    }
  }
`

export default Enterprise
