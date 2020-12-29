const path = require('path')
const replaceTitle = require('./utils').replaceTitle
const langConfig = require('../lang.config.json')

const createCaseStudies = async ({ graphql, createPage, createRedirect }) => {
  const caseStudyTemplate = path.resolve(
    `${__dirname}/../src/templates/caseStudy.js`
  )
  const { data } = await graphql(`
    query {
      caseStudies: allMdx(
        filter: {
          fileAbsolutePath: { regex: "${langConfig.languages.en.blogsPath}" }
          frontmatter: { customer: { ne: null } }
        }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              customerCategory
              redirectTag
              aliases
            }
            parent {
              ... on File {
                relativePath
              }
            }
          }
        }
      }
      caseStudiesWithoutReadMore: allCaseStudiesJson {
        edges {
          node {
            name
          }
        }
      }
      caseStudiesZH: allMdx(
        filter: {
          fileAbsolutePath: { regex: "${langConfig.languages.zh.blogsPath}" }
          frontmatter: { category: { eq: "case" } }
        }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              title
              customerCategory
              aliases
            }
            parent {
              ... on File {
                relativePath
              }
            }
          }
        }
      }
      categories: allMdx(
          filter: {
            fileAbsolutePath: { regex: "${langConfig.languages.en.blogsPath}"}
            frontmatter: { customer: { ne: null } }
          }
        ) {
          industries: group(field: frontmatter___customerCategory) {
            industry: fieldValue
          }
          companies: group(field: frontmatter___customer) {
            company: fieldValue
          }
          tags: group(field: frontmatter___tags) {
            tag: fieldValue
          }
      }
      categoriesZH: allMdx(
          filter: {
            fileAbsolutePath: { regex: "${langConfig.languages.zh.blogsPath}"}
            frontmatter: { customer: { ne: null } }
          }
        ) {
          industries: group(field: frontmatter___customerCategory) {
            industry: fieldValue
          }
          companies: group(field: frontmatter___customer) {
            company: fieldValue
          }
          tags: group(field: frontmatter___tags) {
            tag: fieldValue
          }
      }
    }
  `)

  const industries = data.categories.industries.map((node) => node['industry'])
  const companies = data.categories.companies.map((node) => node['company'])
  const tags = data.categories.tags.map((node) => node['tag'])
  const industriesZH = data.categoriesZH.industries.map(
    (node) => node['industry']
  )
  const companiesZH = data.categoriesZH.companies.map((node) => node['company'])
  const tagsZH = data.categoriesZH.tags.map((node) => node['tag'])

  data.caseStudies.edges.forEach(({ node }) => {
    const _path = `case-studies/${replaceTitle(node.parent.relativePath)}`
    createPage({
      path: _path,
      component: caseStudyTemplate,
      context: {
        title: node.frontmatter.title,
        industries,
        companies,
        tags,
        language: 'en',
        ...langConfig.languages['en'],
      },
    })

    // create redirect
    if (node.frontmatter.aliases) {
      const aliasesArr = node.frontmatter.aliases

      aliasesArr.forEach((alias) => {
        createRedirect({
          fromPath: `${alias}`,
          toPath: _path,
          isPermanent: true,
        })
      })
    }

    if (node.frontmatter.redirectTag) {
      const redirectTagArr = node.frontmatter.redirectTag

      redirectTagArr.forEach((tag) => {
        createRedirect({
          fromPath: `/case-studies/category/tags/${tag}`,
          toPath: '/case-studies',
          isPermanent: true,
        })
      })
    }
  })

  data.caseStudiesZH.edges.forEach(({ node }) => {
    const _path = `zh/case-studies/${replaceTitle(node.parent.relativePath)}`
    createPage({
      path: _path,
      component: caseStudyTemplate,
      context: {
        title: node.frontmatter.title,
        industries: industriesZH,
        companies: companiesZH,
        tags: tagsZH,
        language: 'zh',
        ...langConfig.languages['zh'],
      },
    })

    // create redirect
    if (node.frontmatter.aliases) {
      const aliasesArr = node.frontmatter.aliases

      aliasesArr.forEach((alias) => {
        createRedirect({
          fromPath: `${alias}`,
          toPath: _path,
          isPermanent: true,
        })
      })
    }
  })

  const categoriesOfStudies = [
    ...new Set(
      data.caseStudies.edges
        .map(({ node }) => node.frontmatter.customerCategory || 'All')
        .concat(
          data.caseStudiesWithoutReadMore.edges.map(({ node }) => node.name),
          'All'
        )
    ),
  ]
  categoriesOfStudies.forEach((c) => {
    const pagePath = `case-studies/${c.split(' ').join('-')}`

    createPage({
      path: pagePath,
      matchPath: pagePath,
      component: path.resolve(`${__dirname}/../src/pages/case-studies.js`),
      context: {
        language: 'en',
        ...langConfig.languages['en'],
      },
    })
  })

  const categoriesOfStudiesZH = [
    ...new Set([
      '全部行业',
      ...data.caseStudiesZH.edges.map(
        ({ node }) => node.frontmatter.customerCategory || '全部行业'
      ),
    ]),
  ]

  categoriesOfStudiesZH.forEach((c) => {
    const pagePath = `zh/case-studies/${c.split(' ').join('-')}`

    createPage({
      path: pagePath,
      matchPath: pagePath,
      component: path.resolve(`${__dirname}/../src/pages/zh/case-studies.js`),
      context: {
        language: 'zh',
        ...langConfig.languages['zh'],
      },
    })
  })
}

module.exports = createCaseStudies
