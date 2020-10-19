import { useEffect } from 'react'
import { useLocation } from '@reach/router'
import { navigate } from 'gatsby'

const BlogCN = () => {
  const location = useLocation()
  const blogTag = location.hash.slice(1)
  const blogPathName = location.pathname.split('/')[2]

  useEffect(() => {
    if (blogTag) {
      // redirect /blog-cn/#tag
      navigate(`/zh/blog/tag/${blogTag}`)
    } else if (blogPathName) {
      // redirect /blog-cn/BLOG_PATH
      navigate(`/zh/blog/${blogPathName}`)
    } else {
      navigate('/zh/blog')
    }
  }, [blogTag, blogPathName])

  return null
}

export default BlogCN
