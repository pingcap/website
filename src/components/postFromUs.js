import { Box, Button, withNormalHelpers } from '@seagreenio/react-bulma'
import { graphql, useStaticQuery } from 'gatsby'

import React from 'react'

const NormalBox = withNormalHelpers(Box)

const Img = () => {
  const { PostFromUsSVG } = useStaticQuery(
    graphql`
      query {
        PostFromUsSVG: file(relativePath: { eq: "blogs/post-from-us.svg" }) {
          publicURL
        }
      }
    `
  )

  return <img src={PostFromUsSVG.publicURL} alt="Post from Us" />
}

// const Field = () => (
//   <div className="field has-addons">
//     <div className="control">
//       <input className="input" type="text" placeholder="Email" />
//     </div>
//     <div className="control">
//       <Button color="primary">Subscribe</Button>
//     </div>
//   </div>
// )

const PostFromUs = () => (
  <NormalBox as="section" className="PingCAP-PostFromUs" shadowless>
    <Img />
    <h4 className="title is-6">Subscribe to Stay Informed!</h4>
    {/* <Field /> */}
    <Button
      as="a"
      href="https://share.hsforms.com/1e2W03wLJQQKPd1d9rCbj_Q2npzm"
      target="_blank"
      color="primary"
    >
      SUBSCRIBE
    </Button>
  </NormalBox>
)

export const PostFromUsInHome = () => (
  <NormalBox
    as="section"
    className="PingCAP-PostFromUs in-home is-borderless is-horizontal"
    shadowless
  >
    <div className="titles">
      <h2 className="title is-4 is-spaced">Subscribe To Our Newsletter</h2>
      <div className="subtitle is-7">
        Features, releases, showcases, meetups, talks...
      </div>
    </div>
    <div className="poster-wrapper">
      <Img />
      {/* <Field /> */}
      <Button
        as="a"
        href="https://share.hsforms.com/1e2W03wLJQQKPd1d9rCbj_Q2npzm"
        target="_blank"
        color="primary"
      >
        SUBSCRIBE
      </Button>
    </div>
  </NormalBox>
)

export default PostFromUs
