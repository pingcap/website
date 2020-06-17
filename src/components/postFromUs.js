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

const Field = () => (
  <div className="field has-addons">
    <div className="control">
      <input className="input" type="text" placeholder="Email" />
    </div>
    <div className="control">
      <Button color="primary">Subscribe</Button>
    </div>
  </div>
)

const PostFromUs = () => (
  <NormalBox as="section" className="PingCAP-PostFromUs" shadowless>
    <Img />
    <h4 className="title is-6">Subscribe to Stay Informed!</h4>
    <Field />
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
      <div className="subtitle is-6">
        Features, releases, showcases, meetups, talks...
      </div>
    </div>
    <Img />
    <Field />
  </NormalBox>
)

export default PostFromUs
