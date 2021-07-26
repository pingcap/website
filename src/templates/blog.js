import '../styles/templates/blog.scss'

import { graphql } from 'gatsby'
import Link from '../components/IntlLink'
import React, { useEffect, useState } from 'react'

import BlogHeader from '../components/blogHeader'
import BlogTags from '../components/blogTags'
import { Button } from '@seagreenio/react-bulma'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Socials from '../components/socials'
import intersection from 'lodash.intersection'
import replaceInternalHref from '../lib/replaceInternalHref'
import { useIntl, FormattedMessage } from 'react-intl'
import { MDXProvider } from '@mdx-js/react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import TOCRenderer from '../components/tocRenderer'
import * as Shortcodes from '../components/shortcodes'
import { replaceSpaceWithDash } from '../lib/string'

const Blog = ({ data, pageContext }) => {
  const { mdx } = data
  const { frontmatter, body: html, tableOfContents } = mdx
  const { filePath, hasBlogCategories } = pageContext
  const category = frontmatter.categories ? frontmatter.categories[0] : ''

  const [showProgress, setShowProgress] = useState(false)
  const [readingProgress, setReadingProgress] = useState(0)
  const [fixedSocials, setFixedSocials] = useState(true)
  const [relatedBlogsRef, setRelatedBlogsRef] = useState(null)

  const intl = useIntl()

  useEffect(() => {
    const footer = document.querySelector('.footer.PingCAP-Footer')
    const footerHeight = footer.getBoundingClientRect().height

    let isReachFooter = false

    const scrollListener = () => {
      const winScrollHeight = document.documentElement.scrollHeight
      const winClientHeight = document.documentElement.clientHeight
      const winScrollTop = document.documentElement.scrollTop
      const toFooter = winScrollHeight - winClientHeight - footerHeight
      const isMobile = matchMedia('(max-width: 768px)').matches

      setShowProgress(winScrollTop > 0)

      if (isMobile) {
        if (winScrollTop > toFooter && !isReachFooter) {
          setFixedSocials(false)
          isReachFooter = true
        }

        if (winScrollTop < toFooter && isReachFooter) {
          setFixedSocials(true)
          isReachFooter = false
        }
      }

      const height = winScrollHeight - winClientHeight
      const scrolled = ((winScrollTop / height) * 100).toFixed()
      setReadingProgress(scrolled)
    }

    window.addEventListener('scroll', scrollListener)

    return () => window.removeEventListener('scroll', scrollListener)
  }, [])

  useEffect(() => {
    setRelatedBlogsRef(
      data.blogs.edges
        .map((edge) => edge.node)
        .filter(
          (node) =>
            intersection(node.frontmatter.tags, frontmatter.tags).length > 0
        )
        .filter((node) => node.frontmatter.title !== frontmatter.title)
        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        )
        .slice(0, 3)
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(
    () => {
      replaceInternalHref('blog')
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.summary}
        link={[
          {
            rel: 'stylesheet',
            href:
              'https://cdn.jsdelivr.net/gh/sindresorhus/github-markdown-css@3.0.1/github-markdown.css',
          },
        ]}
        image={frontmatter.image ? frontmatter.image : null}
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
                  <Link to="/blog">Blog</Link>
                  <span> &gt; </span>
                  <Link to={`/blog/category/${replaceSpaceWithDash(category)}`}>
                    {category}
                  </Link>
                </div>
                <BlogHeader
                  frontmatter={frontmatter}
                  filePath={filePath}
                  hasBlogCategories={hasBlogCategories}
                  isBodyH1Title={true}
                />
                <div className="markdown-body blog-content">
                  <MDXProvider components={Shortcodes}>
                    <MDXRenderer>{html}</MDXRenderer>
                  </MDXProvider>
                </div>
                <BlogTags tags={frontmatter.tags} />
                <section className="section get-started-with-tidb">
                  <h3 className="title">
                    <FormattedMessage
                      id="templates.blog.getStartedTitle"
                      defaultMessage="Ready to get started with TiDB?"
                    />
                  </h3>
                  <div className="destinations">
                    <Button
                      as={Link}
                      to="/download"
                      className="get-started"
                      outlined
                      rounded
                    >
                      <FormattedMessage
                        id="templates.blog.getStartedText"
                        defaultMessage="GET TiDB"
                      />
                    </Button>
                    <Button as={Link} to="/contact-us" outlined rounded>
                      <FormattedMessage
                        id="templates.blog.contactUsText"
                        defaultMessage="CONTACT US"
                      />
                    </Button>
                  </div>
                </section>
              </div>
              <div className="column is-4 is-offset-1 right-column">
                <div className="toc">
                  <h3 className="title is-6">What's on this page</h3>
                  <div className="toc-content">
                    <TOCRenderer>{tableOfContents.items}</TOCRenderer>
                  </div>
                </div>
                {relatedBlogsRef && (
                  <div className="related-blog">
                    <h3 className="title is-6">Related posts</h3>
                    <div className="blogs">
                      {relatedBlogsRef.map((blog) => (
                        <BlogHeader
                          key={blog.frontmatter.title}
                          frontmatter={blog.frontmatter}
                          filePath={blog.parent.relativePath}
                          isTitleLink
                          withIcon={false}
                          hasBlogCategories={hasBlogCategories}
                        />
                      ))}
                    </div>
                  </div>
                )}
                <div
                  className="follow-us"
                  style={{ display: fixedSocials ? 'block' : 'none' }}
                >
                  <h3 className="title is-6">Welcome to share this post!</h3>
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

// TODO: tableOfContents query: absolute: false, pathToSlugField: "frontmatter.title"
export const query = graphql`
  query($title: String, $blogsPath: String) {
    mdx(frontmatter: { title: { eq: $title } }) {
      body
      frontmatter {
        title
        summary
        date(formatString: "YYYY-MM-DD")
        author
        tags
        categories
        image
      }
      tableOfContents
    }
    blogs: allMdx(
      filter: {
        fileAbsolutePath: { regex: $blogsPath }
        frontmatter: { customer: { eq: null } }
      }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            author
            tags
            categories
          }
          parent {
            ... on File {
              relativePath
            }
          }
        }
      }
    }
  }
`

export default Blog
