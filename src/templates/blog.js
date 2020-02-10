import React, { useEffect, useState } from 'react'

import { Button } from '@seagreenio/react-bulma'
import Create from '@material-ui/icons/CreateOutlined'
import DateRange from '@material-ui/icons/DateRange'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { footerSocials } from '../data/footer'
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
    window.onscroll = () => {
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
    }
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
              <div className="column is-8">
                <div className="under-category">{'Blog > ' + category}</div>
                <h4 className="title is-4 is-spaced blog-title">
                  {frontmatter.title}
                </h4>
                <div className="subtitle is-7 blog-subtitle">
                  <span>
                    <DateRange />
                    {frontmatter.date}
                  </span>
                  <span>
                    <Create />
                    {frontmatter.author || 'PingCAP'}
                  </span>
                  <span>{category}</span>
                </div>
                <div
                  className="markdown-body blog-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
                <div className="blog-tags">
                  {frontmatter.tags.map(tag => (
                    <Button key={tag} as="a">
                      {tag}
                    </Button>
                  ))}
                </div>
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
              <div className="column is-4 right-column">
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
                    {footerSocials.map(social => (
                      <div key={social.name} className={social.name} />
                    ))}
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
