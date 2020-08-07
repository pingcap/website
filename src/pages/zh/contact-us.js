import '../../styles/pages/contactUs.scss'

import React, { useState, useReducer } from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import formConfig from '../../data/zh/contact-us-form'
import axios from 'axios'

const ContactUs = ({ data }) => {
  const { submitSuccessSVG, submitFailSVG } = data

  const [submitState, setSubmitState] = useState({
    hasSubmitted: false,
    isWrong: false,
  })

  return (
    <Layout>
      <SEO
        title="Contact "
        description="An open-source, cloud-native, distributed SQL database for elastic scale and real-time analytics"
      />
      <article className="PingCAP-Contact-Us">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title section-title section-title-zh">
                联系 PingCAP
              </h1>
              <div className="subtitle-under-main-title subtitle-under-main-title-zh">
                感谢您对 TiDB 的喜爱
              </div>
              <div className="subtitle-under-main-title subtitle-under-main-title-zh">
                请留下您的联系方式，我们稍后会联系您
              </div>
            </div>
          </div>
        </section>

        {submitState.hasSubmitted ? (
          submitState.isWrong ? (
            <>
              <div className="submit-title-wrapper">
                <img
                  className="submit-icon"
                  src={submitFailSVG.publicURL}
                ></img>
                <h3 className="submit-text--title">提交失败</h3>
              </div>
              <p className="submit-desc">
                提交失败，请发邮件到 info@pingcap.com 寻求帮助
              </p>
            </>
          ) : (
            <>
              <div className="submit-title-wrapper">
                <img
                  className="submit-icon"
                  src={submitSuccessSVG.publicURL}
                ></img>
                <h3 className="submit-text--title">提交成功</h3>
              </div>
              <p className="submit-desc">请耐心等待，我们稍后会联系您</p>
            </>
          )
        ) : (
          <>
            <section className="section form-section-zh">
              <div className="container">
                <ContactUsForm setSubmitState={setSubmitState}></ContactUsForm>
              </div>
            </section>

            <section className="section map-section-zh">
              <div className="container">
                <div className="addr-container">
                  <div className="addr-text">
                    <p className="addr-company-title">公司地址</p>
                    <p className="addr-company-desc">
                      北京市海淀区西小口路 66 号东升科技园 C-1 楼 2 层
                    </p>
                    <p className="addr-tel-title">电话</p>
                    <p className="addr-tel-desc">+86 010-53326356</p>
                  </div>
                  <div className="addr-map">
                    <iframe
                      title="NA office map"
                      width="100%"
                      height="100%"
                      id="gmap_canvas"
                      src="https://download.pingcap.com/contact-us-baidu-map.html"
                      scrolling="no"
                    ></iframe>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </article>
    </Layout>
  )
}

const ContactUsForm = ({ setSubmitState }) => {
  const formData = formConfig.reduce((prev, curr) => {
    return {
      ...prev,
      [curr.name]: {
        value: curr.default,
        isError: false,
        errMsg: '',
      },
    }
  }, {})

  const formDataReducer = (state, action) => {
    return {
      ...state,
      [action.type]: action.data,
    }
  }

  const [formState, dispatch] = useReducer(formDataReducer, formData)

  const submitHandler = (e) => {
    e.preventDefault()

    let isError = false

    formConfig.forEach((config) => {
      const validateRes = validateAll(config.validators)(
        config.label,
        formState[config.name].value
      )
      if (validateRes !== null) {
        isError = true
        dispatch({
          type: config.name,
          data: {
            value: formState[config.name].value,
            isError: true,
            errMsg: validateRes,
          },
        })
      }
    })
    if (!isError) {
      axios({
        method: 'POST',
        url:
          'https://forms.pingcap.com/api/external/f/cn-official-website-contact-us/submit',
        headers: {
          'Accept-language': 'zh-hans',
        },
        data: {
          name: formState.name.value,
          email: formState.mail.value,
          phone: formState.tel.value,
          company: formState.company.value,
          occupation: formState.occupation.value,
          problem_encountered: formState.description.value,
          accept_edm: formData.agreement.value,
        },
      })
        .then((res) => {
          setSubmitState({ hasSubmitted: true, isWrong: false })
        })
        .catch((err) => {
          setSubmitState({ hasSubmitted: true, isWrong: true })
        })
    }
  }

  return (
    <form className="form-container" method="post">
      {formConfig.map((config) => {
        return (
          <FormItem
            config={config}
            dispatch={dispatch}
            data={
              formState[config.name] || {
                value: '',
                isError: false,
                errMsg: '',
              }
            }
            key={config.name}
          ></FormItem>
        )
      })}
      <button className="submit-btn" onClick={submitHandler}>
        提交
      </button>
    </form>
  )
}

const FormItem = React.memo(
  ({
    config: { label, name, validators, className, renderItem },
    dispatch,
    data: { value, isError, errMsg },
  }) => {
    const setFormData = (value) => {
      validateAndDispatch(validateAll(validators), dispatch, name, value, label)
    }

    const eventHandler = (e) => {
      switch (e.target.type) {
        case 'text':
          setFormData(e.target.value)
          return
        case 'textarea':
          setFormData(e.target.value)
          return
        case 'radio':
          setFormData(e.target.checked)
          return
        case 'checkbox':
          setFormData(e.target.checked)
          return
      }
    }

    const children = renderItem()

    const childrenWithMoreProps = {
      ...children,
      props: {
        ...children.props,
        onChange: (e) => eventHandler(e),
        onBlur: (e) => eventHandler(e),
        value: value,
      },
    }

    return (
      <label className={className + (isError ? ' form-item--error' : '')}>
        <p className="form-label">{label}</p>
        {childrenWithMoreProps}
        {isError && <p className="form-text--error">{errMsg}</p>}
      </label>
    )
  }
)

const validateAll = (validators) => (label, value) => {
  for (const validator of validators) {
    const res = validator(label, value)
    if (res !== null) return res
  }
  return null
}

const validateAndDispatch = (validate, dispatch, name, value, label) => {
  const validateRes = validate(label, value)
  if (validateRes !== null) {
    dispatch({
      type: name,
      data: {
        value,
        isError: true,
        errMsg: validateRes,
      },
    })
  } else {
    dispatch({
      type: name,
      data: {
        value,
        isError: false,
        errMsg: '',
      },
    })
  }
}

export const query = graphql`
  query {
    submitSuccessSVG: file(
      relativePath: { eq: "zh/contact-us/submit-success.svg" }
    ) {
      publicURL
    }
    submitFailSVG: file(relativePath: { eq: "zh/contact-us/submit-fail.svg" }) {
      publicURL
    }
  }
`

export default ContactUs
