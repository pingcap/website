import React, { useCallback, useState, useEffect } from 'react'
import { graphql, Link } from 'gatsby'

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'

import Layout from '../../../components/layout'
import SEO from '../../../components/seo'

import '../../../styles/pages/zh/download/community.scss'

const Community = ({ data }) => {
  const { tidbLogoPNG, rocketIconSVG, linuxIconSVG } = data
  const [selVersion, setSelVersion] = useState('')
  const [selPkg, setSelPkg] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [pkgDesc, setPkgDesc] = useState('')
  const [termsChecked, setTermsChecked] = useState(false)
  const [downloadURL, setDownloadURL] = useState('')
  const [wrongMsg, setWrongMsg] = useState([])
  const versions = ['v4.0.0', 'v4.0.1', 'v4.0.2', 'v4.0.3', 'v4.0.4', 'v4.0.5']
  const pkgs = ['tidb-community-server', 'tidb-community-toolkit']

  const validateForm = useCallback(() => {
    setWrongMsg([])
    let errMsg = []

    if (!selVersion) {
      errMsg.push('version')
    }

    if (!selPkg) {
      errMsg.push('package')
    }

    if (!termsChecked) {
      errMsg.push('agreement check')
    }

    if (errMsg.length === 0) {
      setDownloadURL(
        `https://download.pingcap.org/${selPkg}-${selVersion}-linux-amd64.tar.gz`
      )
    } else {
      setDownloadURL('')
    }

    return errMsg
  }, [selPkg, selVersion, termsChecked])

  const downloadPackage = () => {
    let errMsg = validateForm()
    setWrongMsg(errMsg)
  }

  const handleVersionChange = (e) => {
    setSelVersion(e.target.value)
  }

  const handlePackageChange = (e) => {
    const val = e.target.value
    switch (val) {
      case 'tidb-community-server':
        setPkgDesc('Get the one-click TiDB server installation kit')
        break

      case 'tidb-community-toolkit':
        setPkgDesc('Get the TiDB toolkit')
        break

      default:
        break
    }
    setSelPkg(e.target.value)
  }

  const handleTermsChange = () => {
    setTermsChecked(!termsChecked)
  }

  useEffect(() => {
    validateForm()
  }, [validateForm])

  return (
    <Layout>
      <SEO title="Download TiDB Community" description="" />
      <article className="PingCAP-Download-TiDB-Community-ZH">
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
                <p>社区版下载</p>
                <img
                  className="lazy linux-icon"
                  src={linuxIconSVG.publicURL}
                  alt="Linux icon"
                />
              </div>
              <FormControl
                className="form-control"
                variant="outlined"
                margin="dense"
              >
                <InputLabel htmlFor="uncontrolled-native">
                  选择 TiDB 版本
                </InputLabel>
                <Select
                  value={selVersion}
                  onChange={handleVersionChange}
                  label="选择 TiDB 版本"
                  classes={{ select: 'download-select' }}
                >
                  {versions.map((v) => (
                    <MenuItem key={v} value={v}>
                      {v}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl
                className="form-control"
                variant="outlined"
                margin="dense"
              >
                <InputLabel>选择软件下载包</InputLabel>
                <Select
                  value={selPkg}
                  onChange={handlePackageChange}
                  label="选择软件下载包"
                >
                  {pkgs.map((p) => (
                    <MenuItem key={p} value={p}>
                      {p}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div className="agreement">
                <Checkbox
                  checked={termsChecked}
                  onChange={handleTermsChange}
                  color="primary"
                  className="checkbox"
                />
                我同意&nbsp;
                <Link to="/zh/licenses">PingCAP 社区软件许可协议</Link>
                与&nbsp;
                <Link to="/zh/privacy-policy/">隐私协议</Link>
              </div>
              <div>
                <button className="button is-primary" onClick={downloadPackage}>
                  {downloadURL ? (
                    <a href={downloadURL} download>
                      下载
                    </a>
                  ) : (
                    '下载'
                  )}
                </button>
              </div>
              {wrongMsg.length > 0 && (
                <div className="err-msg">
                  <span>Warning:</span> {Array.from(wrongMsg).join(', ')}{' '}
                  <span>required</span>
                </div>
              )}
            </div>
            <div className="more-info">
              <p>查看更多信息</p>
              <a
                href="https://docs.pingcap.com/zh/tidb/v4.0/production-deployment-using-tiup"
                target="_blank"
                rel="noreferrer noopener"
              >
                如何安装
              </a>
              <a
                href="https://docs.pingcap.com/zh/tidb/v4.0/upgrade-tidb-using-tiup"
                target="_blank"
                rel="noreferrer noopener"
              >
                如何升级
              </a>
              <a
                href="https://docs.pingcap.com/zh/tidb/v4.0/release-notes"
                target="_blank"
                rel="noreferrer noopener"
              >
                Release Note
              </a>
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
    linuxIconSVG: file(relativePath: { eq: "zh/download/linux-icon.svg" }) {
      publicURL
    }
  }
`

export default Community
