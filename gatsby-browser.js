/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import './src/styles/global.scss'

export const shouldUpdateScroll = ({ prevRouterProps, routerProps }) => {
  const caseStudiesPath = /^\/case-studies((\/)|((\/Internet)|(\/Gaming)|(\/Financial-Services)|(\/All))(\/)?)?$/
  const caseStudiesSubPath = /^\/case-studies((\/)|((\/Internet)|(\/Gaming)|(\/Financial-Services)|(\/All))(\/)?)$/

  if (
    prevRouterProps &&
    caseStudiesPath.test(prevRouterProps.location.pathname) &&
    caseStudiesSubPath.test(routerProps.location.pathname)
  ) {
    // const prevPosition = getSavedScrollPosition(location)
    // prevPostion is always 0, maybe getSavedScrollPostion's problem
    console.log('prev router', prevRouterProps)
    console.log('curr router', routerProps)
    // prev scroll-y pos, which was stored in sessionStorage by gatsby
    const location = prevRouterProps.location
    const sessionKey = `@@scroll|${location.key}|${location.key}`
    const scrollPosY = sessionStorage.getItem(sessionKey)
    sessionStorage.removeItem(sessionKey)
    /* it will scroll to 0 if you switch route continually, even though last pos-y is not 0
       this is a bug, but it's inevitable because reading/writing session is async io operation
    */

    window.scrollTo(0, scrollPosY || 0)
    return false
  }
  return true
}
