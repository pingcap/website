import { Box, Button, withNormalHelpers } from '@seagreenio/react-bulma'
import { graphql, useStaticQuery } from 'gatsby'

import React from 'react'

const NormalBox = withNormalHelpers(Box)

const PostFromUs = () => {
  const { PostFromUsSVG } = useStaticQuery(
    graphql`
      query {
        PostFromUsSVG: file(relativePath: { eq: "blogs/post-from-us.svg" }) {
          publicURL
        }
      }
    `
  )

  return (
    <NormalBox as="section" className="PingCAP-PostFromUs" shadowless>
      <img src={PostFromUsSVG.publicURL} alt="Post from Us" />
      <h4 className="title is-6">Never Miss a Post from Us!</h4>
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="text" />
        </div>
        <div className="control">
          <Button color="primary">Subscribe</Button>
        </div>
      </div>
    </NormalBox>
  )
}

export default PostFromUs
