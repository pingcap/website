import { Link, graphql } from 'gatsby'
import React, { useEffect, useState } from 'react'

import BlogHeader from '../components/blogHeader'
import { Button } from '@seagreenio/react-bulma'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Socials from '../components/socials'

const CaseStudy = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html, tableOfContents } = markdownRemark
  const category = frontmatter.customerCategory

  const [showProgress, setShowProgress] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)
  const [fixedSocials, setFixedSocials] = useState(true)

  useEffect(() => {
    const footer = document.querySelector('.footer.PingCAP-Footer')
    const footerHeight = footer.getBoundingClientRect().height

    let isReachFooter = false

    const scrollListener = () => {
      const winScrollHeight = document.documentElement.scrollHeight
      const winClientHeight = document.documentElement.clientHeight
      const winScrollTop = document.documentElement.scrollTop
      const toFooter = winScrollHeight - winClientHeight - footerHeight

      setShowProgress(winScrollTop > 0)

      if (winScrollTop > toFooter && !isReachFooter) {
        setFixedSocials(false)
        isReachFooter = true
      }

      if (winScrollTop < toFooter && isReachFooter) {
        setFixedSocials(true)
        isReachFooter = false
      }

      const height = winScrollHeight - winClientHeight
      const scrolled = ((winScrollTop / height) * 100).toFixed()
      setReadingProgress(scrolled)
    }

    window.addEventListener('scroll', scrollListener)

    return () => window.removeEventListener('scroll', scrollListener)
  }, [])

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        link={[
          {
            rel: 'stylesheet',
            href:
              'https://cdn.jsdelivr.net/gh/sindresorhus/github-markdown-css@3.0.1/github-markdown.css',
          },
        ]}
      />
      <article className="PingCAP-Blog">
        {showProgress && (
          <progress
            className="progress is-primary blog-progress"
            value={readingProgress}
            max="100"
          >
            {readingProgress}
          </progress>
        )}
        <section className="section section-blog">
          <div className="container">
            <div className="columns">
              <div className="column is-7">
                <div className="under-category">
                  <Link to="/case-studies">Case Studies</Link>
                  <span> > </span>
                  <Link to={`/case-studies/${category}`}>{category}</Link>
                </div>
                <BlogHeader frontmatter={frontmatter} isCaseStudy />
                <div
                  className="markdown-body blog-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
                <section className="section get-started-with-tidb">
                  <div className="title">Ready to get started with TiDB?</div>
                  <div className="destinations">
                    <Button as="a" className="get-started" outlined rounded>
                      Get Started
                    </Button>
                    <Button as="a" outlined rounded>
                      Contact Us
                    </Button>
                  </div>
                </section>
              </div>
              <div className="column is-4 is-offset-1 right-column">
                <div className="toc">
                  <div className="title is-6">What's on this page</div>
                  <div
                    className="toc-content"
                    dangerouslySetInnerHTML={{ __html: tableOfContents }}
                  />
                </div>
                <div
                  className="follow-us"
                  style={{ display: fixedSocials ? 'block' : 'none' }}
                >
                  <div className="title is-6">Welcome to share this post!</div>
                  <div className="socials">
                    <Socials type="share" title={frontmatter.title} />
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

export const query = graphql`
  query($title: String) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        customer
        customerCategory
      }
      tableOfContents(absolute: false, pathToSlugField: "frontmatter.title")
    }
  }
`

export default CaseStudy
