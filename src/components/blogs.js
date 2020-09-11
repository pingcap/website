import '../styles/templates/blogs.scss'

import Link from './IntlLink'
import React, { useState, useEffect } from 'react'
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
import { MenuGenerator } from './menu'
import { replaceTitle, replaceSpaceWithDash } from '../lib/string'
import { getBaseSchemaProxyHandler } from '../lib/proxy'
import { categoryMenuItemForBlogAndCase } from '../lib/menuCfgGenerator'
import Labels from '../components/labels'

const Blogs = ({
  data,
  pageContext,
  PaginationPathPrefix,
  isTagPage,
  isBlog = true,
  isIndustryPage = false,
  isCompanyPage = false,
}) => {
  const [isFirstRender, setIsFirstRender] = useState(true)
  useEffect(() => {
    setIsFirstRender(false)
  }, [])

  const articles = data.allMdx.edges
  const {
    currentPage,
    numPages,
    tag,
    category,
    industry,
    company,
    hasBlogCategories,
  } = pageContext

  const categories = data.categories
    ? data.categories.group.map((i) => i.category)
    : null
  const industries = data.industries
    ? data.industries.group.map((i) => i.industry)
    : null
  const companies = data.companies
    ? data.companies.group.map((i) => i.company)
    : null
  const tags = data.tags ? data.tags.group.map((i) => i.tag) : null

  if (isFirstRender) {
    categories && categories.unshift('All')
    industries && industries.unshift('All')
    companies && companies.unshift('All')
    tags && tags.unshift('All')
  }

  const currentCategory = category || 'All'
  const currentTag = tag || 'All'
  const currentIndustry = industry || 'All'
  const currentCompany = company || 'All'

  const baseCateMenuCfg = {
    menu: {
      className: 'titles',
      selectedClassName: 'active',
    },
    menuItems: {
      linkedItem: Labels,
      props: {
        className: 'labels',
        selectedClassName: 'active',
      },
    },
  }

  const categoryMenuConfig = isBlog
    ? hasBlogCategories
      ? {
          menu: {
            defaultKey: isTagPage ? 'tag' : 'category',
          },
          menuItems: [
            categoryMenuItemForBlogAndCase(
              'category',
              'title is-6 categories-title',
              'Categories',
              'blog'
            )('category')(categories, currentCategory),
            categoryMenuItemForBlogAndCase(
              'tag',
              'title is-6',
              'Tags',
              'blog'
            )('tag')(tags, currentTag),
          ],
        }
      : {
          menu: {
            defaultKey: 'tag',
          },
          menuItems: [
            categoryMenuItemForBlogAndCase(
              'tag',
              'title is-6',
              'Tags',
              'blog'
            )('tag')(tags, currentTag),
          ],
        }
    : {
        menu: {
          defaultKey: isIndustryPage
            ? 'industry'
            : isCompanyPage
            ? 'company'
            : 'tag',
        },
        menuItems: [
          categoryMenuItemForBlogAndCase(
            'industry',
            'title is-6 categories-title',
            'Industries',
            'case'
          )('industry')(industries, currentIndustry),
          categoryMenuItemForBlogAndCase(
            'company',
            'title is-6 categories-title',
            'Companies',
            'case'
          )('company')(companies, currentCompany),
          categoryMenuItemForBlogAndCase(
            'tag',
            'title is-6 categories-title',
            'Tags',
            'case'
          )('tag')(tags, currentTag),
        ],
      }

  const cateMenuCfgMergedWithBase = new Proxy(
    categoryMenuConfig,
    getBaseSchemaProxyHandler(baseCateMenuCfg)
  )

  const CategoryMenu = ({ isDesktop = true }) => {
    return (
      <div
        className={`categories-and-tags${isDesktop ? ' desktop' : ' mobile'}`}
      >
        <MenuGenerator menuConfig={cateMenuCfgMergedWithBase} />
      </div>
    )
  }

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
                <CategoryMenu isDesktop={false} />
                {articles.map(({ node }) => (
                  <div key={node.frontmatter.title} className="blog-preview">
                    <BlogHeader
                      frontmatter={node.frontmatter}
                      filePath={node.parent.relativePath}
                      isTitleLink
                      isCaseStudy={!isBlog}
                      hasBlogCategories={hasBlogCategories}
                    />
                    {node.frontmatter.image && (
                      <Link
                        to={`${
                          isBlog ? '/blog/' : '/case-study/'
                        }${replaceTitle(node.parent.relativePath)}`}
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
                  <CategoryMenu />
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
