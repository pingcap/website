import '../../styles/pages/contactUs.scss'

import React, { useState, useReducer } from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
// import BaiduMap from '../../components/baiduMap'
import { Button } from '@seagreenio/react-bulma'
import formConfig from '../../data/zh/contact-us-form'
import axios from 'axios'

const ContactUs = () => {
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
                请留下您的联系方式，我们会在 1 个工作日内稍后联系您
              </div>
            </div>
          </div>
        </section>

        <section className="section form-section-zh">
          <div className="container">
            <ContactUsForm></ContactUsForm>
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
                {/* <BaiduMap></BaiduMap> */}
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
      </article>
    </Layout>
  )
}

const ContactUsForm = () => {
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

  const [submitted, setSubmitted] = useState(false)

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
        url: '/api/external/f/cn-official-website-contact-us/submit',
        headers: {
          contentType: 'application/json',
          acceptLanguage: 'zh-hans',
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
          console.log(res)
          setSubmitted(true)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  return (
    <>
      {submitted ? (
        <div className="submit-text--success">
          感谢联系我们, 我们将很快回复您
        </div>
      ) : (
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
      )}
    </>
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

export default ContactUs
