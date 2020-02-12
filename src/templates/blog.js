import React, { useEffect, useState } from 'react'

import BlogHeader from '../components/blogHeader'
import BlogTags from '../components/blogTags'
import { Button } from '@seagreenio/react-bulma'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Socials from '../components/socials'
import { graphql } from 'gatsby'

const Blog = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html, tableOfContents } = markdownRemark
  const category = frontmatter.categories
    ? frontmatter.categories[0]
    : 'No Category'

  const [readingProgress, setReadingProgress] = useState(0)
  const [fixedSocials, setFixedSocials] = useState(true)

  useEffect(() => {
    const footer = document.querySelector('.footer.PingCAP-Footer')
    const footerHeight = footer.getBoundingClientRect().height

    let isReachFooter = false
    window.addEventListener('scroll', () => {
      const winScrollHeight = document.documentElement.scrollHeight
      const winClientHeight = document.documentElement.clientHeight
      const winScrollTop = document.documentElement.scrollTop
      const toFooter = winScrollHeight - winClientHeight - footerHeight

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
    })
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
        <progress
          className="progress is-primary blog-progress"
          value={readingProgress}
          max="100"
        >
          50%
        </progress>
        <section className="section section-blog">
          <div className="container">
            <div className="columns">
              <div className="column is-7">
                <div className="under-category">{'Blog > ' + category}</div>
                <BlogHeader frontmatter={frontmatter} />
                <div
                  className="markdown-body blog-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
                <BlogTags tags={frontmatter.tags} />
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
                  <div className="title is-7 toc-title">
                    What's on this page
                  </div>
                  <div
                    className="toc-content"
                    dangerouslySetInnerHTML={{ __html: tableOfContents }}
                  />
                </div>
                <div
                  className="follow-us"
                  style={{ display: fixedSocials ? 'block' : 'none' }}
                >
                  <div className="title is-7">Follow to Join Us!</div>
                  <div className="socials">
                    <Socials />
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
        author
        tags
        categories
      }
      tableOfContents(absolute: false, pathToSlugField: "frontmatter.title")
    }
  }
`

export default Blog
