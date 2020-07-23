import React, { useEffect, useState, useCallback, useMemo } from 'react'
import Swiper from 'swiper'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import data from '../../data/zh/user-message-2019.json'

import '../../styles/pages/zh/user-message-2019.scss'

const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return width
}

const useMobile = (breakpoint = 768) => {
  const width = useWidth()
  const mobile = width >= breakpoint
  return mobile
}

const Card = ({ quoteClass, content, title, author, avatar }) => {
  return (
    <div className="swiper-slide slide-card">
      <div className="wrapper">
        <div className="inner">
          <div className={`quote ${quoteClass}`} />
          <div className="content">{content}</div>
          <div className="author">{author}</div>
          <div className="title">{title}</div>
          <img src={avatar} className="avatar" alt={author} />
        </div>
      </div>
    </div>
  )
}

const SliderPage = ({ pageClass, title, messages }) => {
  useEffect(() => {
    new Swiper(`.${pageClass}-swiper`, {
      loop: false,
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 56,
      navigation: {
        nextEl: `.${pageClass}-next`,
        prevEl: `.${pageClass}-prev`,
      },
      pagination: {
        el: `.${pageClass}-pagination`,
        clickable: true,
        bulletClass: 'bullet',
        bulletActiveClass: 'active',
      },
    })
  }, [])

  return (
    <div className={`swiper-slide page ${pageClass}`}>
      <div className="container">
        <div className="page-title">{title}</div>
        <div className={`${pageClass}-pagination pagination`} />
        <div className={`${pageClass}-prev navigation navigation-prev`} />
        <div className={`cards swiper-container ${pageClass}-swiper`}>
          <div className="swiper-wrapper">
            {messages.map(({ name, company, title, words, avatar }, i) => (
              <Card
                quoteClass={`${pageClass}-quote`}
                title={`${company} / ${title}`}
                author={name}
                content={words}
                avatar={avatar}
                id={i}
              />
            ))}
          </div>
        </div>
        <div className={`${pageClass}-next navigation navigation-next`} />
      </div>
    </div>
  )
}

const UserMessage2019 = () => {
  // const isMobile = useMobile()

  useEffect(() => {
    new Swiper('.swiper-pages', {
      direction: 'vertical',
      loop: false,
      // pagination: {
      //     el: '.swiper-custom-pagination',
      //     clickable: true,
      //     bulletClass: 'bullet',
      //     bulletActiveClass: 'active',
      //     renderBullet: () => `<span className="bullet"></span>`,
      // },
      mousewheel: {
        releaseOnEdges: true,
      },
    })

    new Swiper('.swiper-1', {
      loop: false,
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 56,
      navigation: {
        nextEl: '.swiper-1-next',
        prevEl: '.swiper-1-prev',
      },
      pagination: {
        el: '.swiper-1-pagination',
        clickable: true,
        bulletClass: 'bullet',
        bulletActiveClass: 'active',
      },
    })
  }, [])

  return (
    <Layout>
      <SEO
        title="About PingCAP"
        description="Story about PingCAP, the team behind TiDB"
      />
      <article className="PingCAP-UserMessage2019">
        <div className="page swiper-container swiper-pages">
          <div className="swiper-wrapper">
            <div className="swiper-slide page page-1"></div>
            <SliderPage
              messages={data.section1}
              pageClass="page-2"
              title="他们说 TiDB 解决了很多问题，希望这里也有你的燃眉之急"
            />
            <SliderPage
              messages={data.section2}
              pageClass="page-3"
              title="这里汇聚了 TiDB 的多种玩法，有惊喜，也有灵感"
            />
            <SliderPage
              messages={data.section3}
              pageClass="page-4"
              title="面对大家的期待，我们还在努力完善，也希望能得到更多的反馈"
            />
            <div className="swiper-slide page page-3"></div>
            <div className="swiper-slide page page-4"></div>
            <div className="swiper-slide page page-5"></div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default UserMessage2019
