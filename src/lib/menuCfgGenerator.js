const categoryMenuItemForBlogAndCase = (
  key,
  className,
  children,
  articleType
) => {
  const menuItemConstructor = ((key, className, children) => (props) => {
    return {
      key,
      className,
      children,
      props,
    }
  })(key, className, children)

  switch (articleType) {
    case 'blog':
      return (categoryType) => {
        const labelPathMap = {
          All: '/blog',
        }
        switch (categoryType) {
          case 'category':
            return (categories, currentCategory) => {
              return menuItemConstructor({
                labels: categories,
                currentLabel: currentCategory,
                pathPrefix: '/blog/category',
                labelPathMap,
              })
            }
          case 'tag':
            return (tags, currentTag) => {
              return menuItemConstructor({
                labels: tags,
                currentLabel: currentTag,
                pathPrefix: '/blog/tag',
                labelPathMap,
              })
            }
        }
      }
    case 'case':
      return (categoryType) => {
        const labelPathMap = {
          All: '/case-studies/category',
        }
        switch (categoryType) {
          case 'industry':
            return (industries, currentIndustry) => {
              return menuItemConstructor({
                labels: industries,
                currentLabel: currentIndustry,
                pathPrefix: '/case-studies/category/industry',
                labelPathMap,
              })
            }
          case 'company':
            return (companies, currentCompany) => {
              return menuItemConstructor({
                labels: companies,
                currentLabel: currentCompany,
                pathPrefix: '/case-studies/category/company',
                labelPathMap,
              })
            }
          case 'tag':
            return (tags, currentTag) => {
              return menuItemConstructor({
                labels: tags,
                currentLabel: currentTag,
                pathPrefix: '/case-studies/category/tags',
                labelPathMap,
              })
            }
        }
      }
  }
}

export { categoryMenuItemForBlogAndCase }
