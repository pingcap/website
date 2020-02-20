import '../styles/pages/caseStudies.scss'
import '../lib/graphql/image'

import { graphql, useStaticQuery } from 'gatsby'

import Img from 'gatsby-image'
import Layout from '../components/layout'
import React from 'react'
import SEO from '../components/seo'

const CaseStudies = () => {
  const { BannerSVG } = useStaticQuery(
    graphql`
      query {
        BannerSVG: file(relativePath: { eq: "case-studies/banner.png" }) {
          ...FluidUncompressed
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Case Studies" />
      <article className="PingCAP-CaseStudies">
        <Img fluid={BannerSVG.childImageSharp.fluid} alt="banner" />
      </article>
    </Layout>
  )
}

export default CaseStudies
