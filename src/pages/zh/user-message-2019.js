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
      pagination: {
        el: '.pages-pagination',
        clickable: true,
        bulletClass: 'bullet',
        bulletActiveClass: 'active',
        renderBullet: function (index, className) {
          return `<span class="${className} page-${index + 1}-bullet"></span>`
        },
      },
      mousewheel: {
        releaseOnEdges: true,
      },

      watchSlidesProgress: true,
      virtualTranslate: true,
      on: {
        setTransition: function (transitionSpeed) {
          for (const slide of Array.from(this.slides)) {
            slide.style.transition = `transform cubic-bezier(0.25, 0.46, 0.45, 0.94) ${transitionSpeed}ms`
            slide.style.setProperty(
              '--transition-speed',
              `${transitionSpeed}ms`
            )
          }
        },
        setTranslate: function () {
          for (const slide of Array.from(this.slides)) {
            const translate =
              -slide.swiperSlideOffset -
              slide.progress * (slide.progress > 0 ? 0.3 : 1) * this.height
            slide.style.transform = `translate3d(0, ${translate}px, 0)`
            slide.style.setProperty(
              '--backdrop-opacity',
              Math.max(0, Math.min(slide.progress, 1))
            )
          }
        },
        paginationUpdate: function () {
          if (this.activeIndex === 0 || this.activeIndex === 4) {
            this.pagination.el.classList.add('hidden')
          } else {
            this.pagination.el.classList.remove('hidden')
          }
        },
      },
    })
  })

  return (
    <Layout>
      <SEO
        title="About PingCAP"
        description="Story about PingCAP, the team behind TiDB"
      />
      <article className="PingCAP-UserMessage2019">
        <div className="page swiper-container swiper-pages">
          <div className="pages-pagination" />
          <div className="swiper-wrapper">
            <div className="swiper-slide page page-1">
              <div className="title">TiDB 非官方使用指南</div>
              <div className="content">
                我们邀请了 48 位用户代表
                <br />
                汇成了这份“非官方使用指南”
                <br />
                这些实操中闯过的关和踩过的坑
                <br />
                创造了 TiDB 的更多可能
                <br />
                <br />
                一切伟大，都源于开始
                <br />
                2020 到来了，感谢大家
              </div>
            </div>
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
            <div className="swiper-slide page page-5" />
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default UserMessage2019
