import { graphql, useStaticQuery } from 'gatsby'

import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import React from 'react'

function SEO({ lang, title, description, meta, image: metaImage, link }) {
  const { site, defaultMetaImg } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        defaultMetaImg: file(relativePath: { eq: "pingcap-icon.png" }) {
          publicURL
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const image = metaImage
    ? `https://download.pingcap.com${metaImage}`
    : defaultMetaImg.publicURL

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:image',
          content: image,
        },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:height',
          content: '400',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:creator',
          content: site.siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
      link={link}
    >
      <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js.hs-scripts.com/4466002.js"
      />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: 'en',
  description: '',
  meta: [],
  link: [],
}

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  image: PropTypes.string,
  link: PropTypes.arrayOf(PropTypes.object),
}

export default SEO
