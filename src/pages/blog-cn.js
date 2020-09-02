import React from 'react'
import { Router, useLocation } from '@reach/router'
import { navigate } from 'gatsby'

const BlogCN = () => {
  const location = useLocation()
  const blogTag = location.hash.slice(1)
  const blogPathName = location.pathname.split('/')[2]

  const RedirectBlogCNPath = () => {
    // redirect /blog-cn/#tag
    if (blogTag) {
      navigate(`/zh/blog/tag/${blogTag}`)
    } else if (blogPathName) {
      // redirect /blog-cn/BLOG_PATH
      navigate(`/zh/blog/${blogPathName}`)
    } 
    return null
  }

  return (
    <Router basepath="/blog-cn">
      <RedirectBlogCNPath path="/*" />
    </Router>
  )
}

export default BlogCN
