import { Link, graphql, useStaticQuery } from 'gatsby'
import React, { useState, useEffect } from 'react'

import BlogHeader from '../components/blogHeader'
import BlogTags from '../components/blogTags'
import Layout from '../components/layout'
import Pagination from '../components/pagination'
import PostFromUs from '../components/postFromUs'
import SEO from '../components/seo'
import Socials from '../components/socials'

const Blogs = ({
  data,
  pageContext,
  PaginationPathPrefix,
  isTagPage,
  isCategoryPage,
}) => {
  const blogs = data.allMarkdownRemark.edges
  const {
    currentPage,
    numPages,
    tag: currentTag,
    category: currentCategory,
  } = pageContext

  const title = isTagPage
    ? pageContext.tag
    : isCategoryPage
    ? pageContext.category
    : 'Blogs'

  const query = useStaticQuery(graphql`
    query {
      categories: allMarkdownRemark {
        group(field: frontmatter___categories) {
          category: fieldValue
        }
      }
      tags: allMarkdownRemark {
        group(field: frontmatter___tags) {
          tag: fieldValue
        }
      }
    }
  `)

  const categories = query.categories.group.map(i => i.category)
  const tags = query.tags.group.map(i => i.tag)

  const [showCategories, setShowCategories] = useState(true)

  useEffect(() => {
    if (isTagPage) {
      setShowCategories(false)
    }
  }, [isTagPage])

  const handleShowCategories = bool => _ => setShowCategories(bool)

  return (
    <Layout>
      <SEO title={title} />
      <article className="PingCAP-Blogs">
        <section className="section section-blogs">
          <div className="container">
            <div className="columns">
              <div className="column is-8">
                {blogs.map(({ node }) => (
                  <div key={node.frontmatter.title} className="blog-preview">
                    <BlogHeader frontmatter={node.frontmatter} isTitleLink />
                    <div className="tmp-green-box" />
                    <div className="summary">{node.frontmatter.summary}</div>
                    <BlogTags tags={node.frontmatter.tags} />
                  </div>
                ))}
                <Pagination
                  pathPrefix={PaginationPathPrefix}
                  currentPage={currentPage}
                  numPages={numPages}
                />
              </div>
              <div className="column is-4 right-column">
                <div className="main">
                  <PostFromUs />
                  <div className="follow-us">
                    <div className="title is-7">Follow to Join Us!</div>
                    <div className="socials">
                      <Socials />
                    </div>
                  </div>
                  <div className="categories-and-tags">
                    <div className="titles">
                      <div
                        role="button"
                        tabIndex={0}
                        className={`title is-7 categories-title${
                          showCategories ? ' active' : ''
                        }`}
                        onClick={handleShowCategories(true)}
                        onKeyDown={handleShowCategories(true)}
                      >
                        Categories
                      </div>
                      <div
                        role="button"
                        tabIndex={0}
                        className={`title is-7${
                          !showCategories ? ' active' : ''
                        }`}
                        onClick={handleShowCategories(false)}
                        onKeyDown={handleShowCategories(false)}
                      >
                        Tags
                      </div>
                    </div>
                    <div className="labels">
                      {showCategories
                        ? categories.map(c => (
                            <Link
                              key={c}
                              className={currentCategory === c ? 'active' : ''}
                              to={`/blog/category/${c}`}
                            >
                              {c}
                            </Link>
                          ))
                        : tags.map(t => (
                            <Link
                              key={t}
                              className={currentTag === t ? 'active' : ''}
                              to={`/blog/tag/${t}`}
                            >
                              {t}
                            </Link>
                          ))}
                    </div>
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

export default Blogs
