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
    if (window.innerWidth >= 768) {
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
    } else {
      new Swiper(`.${pageClass}-swiper`, {
        loop: false,
        centeredSlides: true,
        slidesPerView: 'auto',
        pagination: {
          el: `.${pageClass}-pagination`,
          clickable: true,
          bulletClass: 'bullet',
          bulletActiveClass: 'active',
        },
      })
    }
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
  //   const isMobile = useMobile()

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
      touchReleaseOnEdges: true,

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

          if (transitionSpeed !== 0) {
            let eventTriggered = false
            this.slides.transitionEnd(() => {
              if (eventTriggered) return
              if (!this || this.destroyed) return
              eventTriggered = true
              this.animating = false
            })
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
            <div className="swiper-slide page page-5">
              <div className="container">
                <div className="data-set">
                  <div className="data">
                    <div className="data-image data-image-1" />
                    <div className="data-text">节点规模</div>
                  </div>
                  <div className="data">
                    <div className="data-image data-image-2" />
                    <div className="data-text">单表最大数据规模</div>
                  </div>
                  <div className="data">
                    <div className="data-image data-image-3" />
                    <div className="data-text">单集群最大节点规模</div>
                  </div>
                  <div className="data">
                    <div className="data-image data-image-4" />
                    <div className="data-text">单公司最大集群规模</div>
                  </div>
                </div>
                <div className="desc">
                  2019 年
                  <br />
                  TiDB
                  被广泛应用于海内外互联网、银行、保险、证券、支付、物流、制造业、快消、电信等多个行业
                  <br />
                  经受住了近 1000 家企业的线上环境打磨
                  <br />
                  护航数十家电商、物流及金融机构应对 6.18、11.11 等大促流量高峰
                  <br />
                  <br />
                  TiDB 过硬的产品实力背后，有社区开发者持续贡献的支撑
                  <br />
                  也有一线用户在实操中对其的不断打磨
                  <br />
                  感谢所有热爱、信任 TiDB 的伙伴们
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  )
}

export default UserMessage2019
