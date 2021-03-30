import '../../../styles/pages/community/index.scss'

import React from 'react'
import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import {
  contributionGrowJP,
  communityActivities,
} from '../../../data/community'
import { graphql, Link } from 'gatsby'
import EventsCard from '../../../components/eventsCard'
import { Button } from '@seagreenio/react-bulma'

const Community = ({ data }) => {
  const {
    communityHeroSVG,
    onBoardWithTiDBSVG,
    shareStoriesSVG,
    codeConductSCG,
  } = data

  function collapse(e) {
    const collapseContent = e.currentTarget.parentElement
    collapseContent.classList.toggle('show-content')
  }

  return (
    <Layout>
      <SEO
        title="Community "
        description="Join our community to learn, contribute, grow, and connect with TiDB contributors and users all around the world!"
      />
      <article className="PingCAP-TiDB-Community">
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title section-title">
                一緒に次世代のデータベースを作りましょう！
              </h1>
              <div className="subtitle-under-main-title">
                私たちのコミュニティに参加して、世界中のTiDBのコントリビューターやユーザーと学び、貢献し、成長させ、繋がりましょう！
              </div>
              <img src={communityHeroSVG.publicURL} alt="Community Hero" />
              <div className="buttons">
                <Button
                  as="a"
                  href="https://slack.tidb.io/invite?team=tidb-community&channel=everyone&ref=pingcap"
                  target="_blank"
                  className="join-slack"
                >
                  SLACKに参加する
                </Button>
                <Button
                  as="a"
                  href="https://github.com/pingcap/community/tree/master/contributors"
                  target="_blank"
                  className="become-a-contributor"
                  type="outline"
                >
                  コントリビューターになる
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section onboard-section">
          <div className="container">
            <div className="columns is-variable is-8 reverse">
              <div className="column">
                <div className="side-icon">
                  <img
                    src={onBoardWithTiDBSVG.publicURL}
                    alt="Onboard with TiDB"
                  />
                </div>
              </div>
              <div className="column is-8">
                <h2 className="title section-title">TiDBでオンボードする</h2>
                <p className="paragraph">
                  分散データベースシステムとして、新しいプロジェクトを進める事は時に難しいです。しかし慌てる必要はありません。すべての準備が整っております。ドキュメント、エンジニアリングブログ、コントリビューションマップ、その他多数の資料をチェックして、役立ててください。
                </p>
                <div className="buttons">
                  <Button
                    className="button-white-bg"
                    href="https://docs.pingcap.com/tidb/v4.0/quick-start-with-tidb"
                    target="_blank"
                  >
                    クイックスタート
                  </Button>
                  <Button as={Link} to="/blog" className="button-white-bg">
                    エンジニアブログ
                  </Button>
                  <Button
                    className="button-white-bg"
                    href="https://github.com/pingcap/tidb-map/blob/master/maps/contribution-map.md"
                    target="_blank"
                  >
                    コントリビューティングマップ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section contribution-grow-section">
          <div className="container">
            <h2 className="title section-title">貢献して成長する</h2>
            <div className="subtitle-under-main-title">
              TiDBはコミュニティ主導のプロジェクトです。
              世界中のコントリビューターの才能、熱意、意欲がなければ、今日のようにはなりません。
            </div>
            <div className="collapse-items">
              {contributionGrowJP.map((c) => (
                <div className="content" key={c.title}>
                  <div
                    aria-hidden="true"
                    className="collapsable"
                    onClick={collapse}
                    onKeyDown={collapse}
                  >
                    <img src={c.icon} alt={c.title} />
                    <div className="header">{c.title}</div>
                  </div>
                  <ul>
                    {c.collapseList.map((list, idx) => (
                      <li
                        key={idx}
                        dangerouslySetInnerHTML={{ __html: list }}
                      ></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section share-stories-section"
          id="share-your-stories"
        >
          <div className="container">
            <div className="columns is-variable is-8">
              <div className="column">
                <img src={shareStoriesSVG.publicURL} alt="Share stories" />
              </div>
              <div className="column is-8">
                <h2 className="title section-title">
                  あなたのストーリーを共有する
                </h2>
                <p className="paragraph">
                  私たちは、世界中の企業にTiDBの大きなメリットを享受してもらいたいと考えています。
                  もう展開しましたか？もしそうなら、TiDBがあなたのビジネスとあなたの成功をどのように強化するかを私たちとコミュニティに教えてください
                  。
                </p>
                <Button
                  as={Link}
                  to="/community/share-and-connect"
                  className="button-white-bg"
                >
                  共有
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="section community-activity-section">
          <div className="container">
            <h2 className="title section-title">コミュニティ活動</h2>
            <div className="subtitle-under-main-title">
              TiDBコミュニティイベントにご参加ください
            </div>
            <EventsCard cardsList={communityActivities} />
          </div>
        </section>

        <section className="section code-conduct-section">
          <div className="container">
            <div className="columns is-variable is-8">
              <div className="column code-conduct-wrapper">
                <div className="side-icon">
                  <img src={codeConductSCG.publicURL} alt="Code conduct" />
                </div>
              </div>
              <div className="column is-8">
                <h2 className="title section-title">行動規範</h2>
                <p className="paragraph">
                  TiDBコミュニティは、尊重、包括性、オープンコラボレーション、コミュニケーションを重視しています。
                  TiDB行動規範は、コミュニティ内のすべてのやり取りをガイドするために実施されます。
                  イベント、Slack、GitHub、または別の通信メカニズムで何らかの形の違反に気付いた場合は、プロジェクト管理委員会（PMC）（
                  <a href="mailto:pmc@tidb.io">pmc@tidb.io</a>
                  ）に連絡してください
                </p>
                <p className="paragraph">
                  <a href="https://github.com/pingcap/tidb/blob/master/CODE_OF_CONDUCT.md">
                    こちら
                  </a>
                  の行動規範をお読みください。
                </p>
              </div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query {
    communityHeroSVG: file(
      relativePath: { eq: "community/community-hero.svg" }
    ) {
      publicURL
    }
    onBoardWithTiDBSVG: file(
      relativePath: { eq: "community/onboard-with-tidb.svg" }
    ) {
      publicURL
    }
    shareStoriesSVG: file(relativePath: { eq: "community/share-stories.svg" }) {
      publicURL
    }
    codeConductSCG: file(relativePath: { eq: "community/code-conduct.svg" }) {
      publicURL
    }
  }
`

export default Community
