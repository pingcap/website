import '../styles/templates/blogs.scss'

import Link from './IntlLink'
import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'

import BlogHeader from './blogHeader'
// import BlogSearch from './blogSearch'
import BlogTags from './blogTags'
import Layout from './layout'
import Pagination from './pagination'
import PostFromUs from './postFromUs'
import PostFromUsZH from './zh/postFromUs'
import SEO from './seo'
import Socials from './socials'
import { replaceTitle, replaceSpaceToMiddleLine } from '../lib/string'

const Blogs = ({ data, pageContext, PaginationPathPrefix, isTagPage }) => {
  const blogs = data.allMdx.edges
  const {
    currentPage,
    numPages,
    tag: currentTag,
    category: currentCategory,
    hasBlogCategories,
  } = pageContext

  const categories = data.categories.group.map((i) => i.category)
  const tags = data.tags.group.map((i) => i.tag)

  const [showCategories, setShowCategories] = useState(hasBlogCategories)

  useEffect(() => {
    if (isTagPage) {
      setShowCategories(false)
    }
  }, [isTagPage])

  const handleShowCategories = (bool) => (_) => setShowCategories(bool)

  const CategoriesAndTags = ({ isDesktop = true }) => (
    <div className={`categories-and-tags${isDesktop ? ' desktop' : ' mobile'}`}>
      <div className="titles">
        {hasBlogCategories && (
          <div
            role="button"
            tabIndex={0}
            className={`title is-6 categories-title${
              showCategories ? ' active' : ''
            }`}
            onClick={handleShowCategories(true)}
            onKeyDown={handleShowCategories(true)}
          >
            Categories
          </div>
        )}
        <div
          role="button"
          tabIndex={0}
          className={`title is-6${!showCategories ? ' active' : ''}`}
          onClick={handleShowCategories(false)}
          onKeyDown={handleShowCategories(false)}
        >
          Tags
        </div>
      </div>
      <div className="labels">
        {showCategories
          ? categories.map((c) => (
              <Link
                key={c}
                className={currentCategory === c ? 'active' : ''}
                to={`/blog/category/${replaceSpaceToMiddleLine(c)}`}
              >
                {c}
              </Link>
            ))
          : tags.map((t) => (
              <Link
                key={t}
                className={currentTag === t ? 'active' : ''}
                to={`/blog/tag/${replaceSpaceToMiddleLine(t)}`}
              >
                {t}
              </Link>
            ))}
      </div>
    </div>
  )

  const { locale } = useIntl()

  return (
    <Layout>
      <SEO
        title="TiDB Blog"
        description="PingCAP blog is where we share everything about TiDB - open-source community, HTAP, distributed SQL, cloud-native, engineering journey, best practices, etc."
      />
      <article className="PingCAP-Blogs">
        <section className="section section-blogs">
          <div className="container">
            <div className="columns">
              <div className="column is-7">
                {/* <BlogSearch className="search-mobile" /> */}
                <CategoriesAndTags isDesktop={false} />
                {blogs.map(({ node }) => (
                  <div key={node.frontmatter.title} className="blog-preview">
                    <BlogHeader
                      frontmatter={node.frontmatter}
                      filePath={node.parent.relativePath}
                      isTitleLink
                      hasBlogCategories={hasBlogCategories}
                    />
                    {node.frontmatter.image && (
                      <Link
                        to={`/blog/${replaceTitle(node.parent.relativePath)}`}
                      >
                        <img
                          className="banner"
                          src={`https://download.pingcap.com${node.frontmatter.image}`}
                          alt="banner"
                        />
                      </Link>
                    )}
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
              <div className="column is-4 is-offset-1 right-column">
                <div className="main">
                  {/* <BlogSearch className="search-desktop" /> */}
                  {locale === 'zh' ? <PostFromUsZH /> : <PostFromUs />}
                  <div className="follow-us">
                    <h3 className="title is-6">Follow to Join Us!</h3>
                    <div className="socials">
                      <Socials type="follow" />
                    </div>
                  </div>
                  <CategoriesAndTags />
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
