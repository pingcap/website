import { Box, Button, withNormalHelpers } from '@seagreenio/react-bulma'
import { graphql, useStaticQuery } from 'gatsby'
import MailchimpSubscribe from 'react-mailchimp-subscribe'

import React, { useRef } from 'react'

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

const Field = () => {
  const emailRef = useRef()
  return (
    <MailchimpSubscribe
      url="//pingcap.us16.list-manage.com/subscribe/post?u=ab57beb8a88391cf6193c1b48&amp;id=7c67af4f9d"
      render={({ subscribe, status, message }) => (
        <form
          onSubmit={(e) => {
            e.preventDefault()
            if (emailRef.current) subscribe({ EMAIL: emailRef.current.value })
          }}
          className={status === null || status === 'error' ? '' : 'pending'}
        >
          <div className="field has-addons">
            <div className="control">
              <input
                ref={emailRef}
                className="input"
                type="text"
                placeholder="email@pingcap.com"
                name="EMAIL"
              />
            </div>
            <div className="control">
              <Button color="primary">
                {status === 'sending'
                  ? '提交中……'
                  : status === 'error'
                  ? '提交失败'
                  : status === 'success'
                  ? '提交成功'
                  : '提交'}
              </Button>
            </div>
          </div>
        </form>
      )}
    />
  )
}

const PostFromUs = () => (
  <NormalBox
    as="section"
    className="PingCAP-PostFromUs PingCAP-PostFromUs-Block-ZH"
    shadowless
  >
    <Img />
    <h4 className="title is-5">订阅我们</h4>
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
      <h2 className="title is-4 is-spaced">订阅我们的信息</h2>
      <div className="subtitle is-7">功能，发布，展示，聚会，演讲...</div>
    </div>
    <div className="poster-wrapper-zh">
      <Img />
      <Field />
    </div>
  </NormalBox>
)

export default PostFromUs
