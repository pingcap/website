/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import './src/styles/global.scss'


export { wrapPageElement } from './create-pages/wrapPage'

// export const shouldUpdateScroll = ({
//   prevRouterProps: { location },
//   getSavedScrollPosition,
// }) => {
//   console.log('location', location)
//   if (
//     location.pathname.match(
//       /^\/case-studies\/?(Internet|Gaming|Financial-Services)?\/?$/g
//     )
//   ) {
//     const prevPosition = getSavedScrollPosition(location)
//     window.scrollTo(...(prevPosition || [0, 0]))

//     return false
//   }

//   return true
// }


export const onRouteUpdate = ({ location }) => {
  const pathname = location.pathname
  const caseStudiesSubPath = /^(\/zh)?\/case-studies\/.*/
  if (caseStudiesSubPath.test(pathname)) {
    try {
      const anchor = document.getElementsByClassName('title-under-swiper')[0]
      const navbar = document.getElementsByClassName('navbar')[0]
      const scrollOffset = anchor.getBoundingClientRect().top
      const navbarHeight = navbar.offsetHeight
      window.scrollTo(0, scrollOffset + window.scrollY - navbarHeight)
      return false
    } catch (e) {}
    return true
  }
}
