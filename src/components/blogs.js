import BlogHeader from '../components/blogHeader'
import BlogTags from '../components/blogTags'
import Layout from '../components/layout'
import Pagination from '../components/pagination'
import React from 'react'
import SEO from '../components/seo'

const Blogs = ({ data, pageContext, PaginationPathPrefix }) => {
  const blogs = data.allMarkdownRemark.edges
  const { currentPage, numPages } = pageContext

  return (
    <Layout>
      <SEO title="Blogs" />
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
              <div className="column is-4"></div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default Blogs
