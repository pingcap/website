import '../../styles/pages/download/community.scss'

import React, { useCallback, useState, useEffect } from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { graphql } from 'gatsby'
import Link from '../../components/IntlLink'

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'

const Community = ({ data }) => {
  const { tidbLogoPNG, rocketIconSVG, linuxIconSVG } = data
  const [selVersion, setSelVersion] = useState('')
  const [selPkg, setSelPkg] = useState('')
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
      <SEO title=" Download TiDB Community " description="" />
      <article className="PingCAP-Download-TiDB-Enterprise">
        <section className="section">
          <div className="container enterprise-wrapper">
            <div className="tidb-logo">
              <img src={tidbLogoPNG.publicURL} alt="rocket icon" />
            </div>
            <div className="card">
              <div className="header">
                <div className="rocket-icon">
                  <img src={rocketIconSVG.publicURL} alt="rocket icon" />
                </div>
                <h1>Get Started with TiDB</h1>
              </div>
              <div className="title-field">
                <p>Download the community edition</p>
                <img
                  className="lazy linux-icon"
                  src={linuxIconSVG.publicURL}
                  alt="Linux icon"
                />
              </div>
              <FormControl className="form-control" variant="outlined">
                <InputLabel htmlFor="uncontrolled-native">
                  Select TiDB version
                </InputLabel>
                <Select
                  value={selVersion}
                  onChange={handleVersionChange}
                  label="Select TiDB version"
                >
                  {versions.map((v) => (
                    <MenuItem key={v} value={v}>
                      {v}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl className="form-control" variant="outlined">
                <InputLabel>Select software package</InputLabel>
                <Select
                  value={selPkg}
                  onChange={handlePackageChange}
                  label="Select software package"
                >
                  {pkgs.map((p) => (
                    <MenuItem key={p} value={p}>
                      {p}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {pkgDesc && <div className="pkg-desc">{pkgDesc}</div>}
              <Checkbox
                checked={termsChecked}
                onChange={handleTermsChange}
                color="primary"
                className="checkbox"
              />
              I agree to the{' '}
              <Link to="/community-license-agreement">
                PingCAP Community Software License Agreement.
              </Link>
              <div>
                <button
                  className="button is-primary is-rounded"
                  onClick={downloadPackage}
                >
                  {downloadURL ? (
                    <a href={downloadURL} download>
                      Download
                    </a>
                  ) : (
                    'Download'
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
    linuxIconSVG: file(relativePath: { eq: "download/linux-icon.svg" }) {
      publicURL
    }
  }
`

export default Community
