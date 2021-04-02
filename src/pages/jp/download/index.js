import '../../../styles/pages/download/index.scss'

import React, { useState, useEffect } from 'react'
import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import { Link } from 'gatsby'
import { logos } from '../../../data/download-tidb'
import Prism from 'prismjs'
import WithCopy from '../../../components/shortcodes/withCopy'
import Button from '../../../components/button'

const useMenu = (menuItems, defaultKey) => {
  const [selectedKey, setSelectedKey] = useState(defaultKey)
  const selectedMenuItem = menuItems[selectedKey]
  return [selectedKey, selectedMenuItem, setSelectedKey]
}

const Download = ({ data }) => {
  const menuItems = {
    community: CommunityEdition,
    enterprise: EnterpriseSubscription,
    tidbCloud: TiDBCloud,
  }
  const defaultKey = 'community'
  const [selectedKey, selectedMenuItem, setSelectedKey] = useMenu(
    menuItems,
    defaultKey
  )
  return (
    <Layout>
      <SEO title="Download TiDB" description="" />
      <article className="PingCAP-Download-TiDB">
        <section className="section slogan-section">
          <h1 className="slogan">TiDBを使い始める</h1>
        </section>
        <section className="section download-menu-section">
          <div className="container">
            <div className="content-wrapper">
              <Menu
                selectedKey={selectedKey}
                setSelectedKey={setSelectedKey}
                className="catalogue-wrapper"
                selectedClassName="catalogue-item--selected"
              >
                <MenuItem
                  key="community"
                  menuKey="community"
                  className="catalogue-item"
                >
                  Community Edition
                </MenuItem>
                <MenuItem
                  key="enterprise"
                  menuKey="enterprise"
                  className="catalogue-item"
                >
                  Enterprise Subscription
                </MenuItem>
                <MenuItem
                  key="tidbCloud"
                  menuKey="tidbCloud"
                  className="catalogue-item"
                >
                  TiDB Cloud
                </MenuItem>
              </Menu>
              {React.createElement(selectedMenuItem)}
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}

const Menu = ({
  children,
  selectedKey,
  setSelectedKey,
  className,
  selectedClassName,
}) => {
  return (
    <div className={className}>
      {children.map((child) => {
        const props = {
          className:
            selectedKey === child.key
              ? child.props.className + ' ' + selectedClassName
              : child.props.className,
          onSelect: setSelectedKey,
        }
        const el = React.cloneElement(child, props)
        return el
      })}
    </div>
  )
}

const MenuItem = ({ children, onSelect, menuKey, className }) => {
  return (
    <div
      role="button"
      tabIndex={0}
      className={className}
      onKeyDown={() => {
        onSelect(menuKey)
      }}
      onClick={() => {
        onSelect(menuKey)
      }}
    >
      {children}
    </div>
  )
}

const CodeSnippet = ({ lang, copyable = true, children }) => {
  const className = `language-${lang}`
  return (
    <div className="gatsby-highlight">
      {copyable && <WithCopy></WithCopy>}
      <pre className={className}>
        <code className={className}>{children}</code>
      </pre>
    </div>
  )
}

const CommunityEdition = () => {
  const menuItems = {
    tiup: TiUP,
    kubernetes: Kubernetes,
    aws: AWS,
    googlecloud: GoogleCloud,
  }
  const defaultKey = 'tiup'
  const [selectedKey, selectedMenuItem, setSelectedKey] = useMenu(
    menuItems,
    defaultKey
  )
  useEffect(() => {
    Prism.highlightAll()
  })
  return (
    <>
      <p className="intro-text">
        Apache
        2.0ライセンスの下でリリースされ、コミュニティによってサポートされているオープンソースのTiDBプラットフォーム。
      </p>
      <Menu
        selectedKey={selectedKey}
        setSelectedKey={setSelectedKey}
        className="deployment-wrapper"
        selectedClassName="deployment-item--selected"
      >
        <MenuItem key="tiup" menuKey="tiup" className="deployment-item">
          <img src={logos.tiup} alt="tiup"></img>
        </MenuItem>
        <MenuItem
          key="kubernetes"
          menuKey="kubernetes"
          className="deployment-item kubernetes-item"
        >
          <img src={logos.kubernetes} alt="kubernetes"></img>
        </MenuItem>
        <MenuItem key="aws" menuKey="aws" className="deployment-item">
          <img src={logos.aws} alt="aws"></img>
        </MenuItem>
        <MenuItem
          key="googlecloud"
          menuKey="googlecloud"
          className="deployment-item"
        >
          <img src={logos.googlecloud} alt="googlecloud"></img>
        </MenuItem>
      </Menu>
      {React.createElement(selectedMenuItem)}
    </>
  )
}

const EnterpriseSubscription = () => {
  return (
    <section className="enterprise-section">
      <h1 className="desc-title enterprise-desc-title">
        PingCAPによって提供される有償サポートを備えたTiDBプラットフォーム
      </h1>
      <ul>
        <li className="desc-li-text">ベンダーロックインなし</li>
        <li className="desc-li-text">
          24時間365日のエンタープライズグレードのサポート
        </li>
        <li className="desc-li-text">技術トレーニングとコンサルティング</li>
        <li className="desc-li-text">
          最新のセキュリティ拡張機能を備えた安定したリリース
        </li>
      </ul>
      <Button as={Link} to="/download/enterprise">
        今すぐ登録
      </Button>
    </section>
  )
}

const TiDBCloud = () => {
  return (
    <section className="tidb-cloud-section">
      <p className="tidb-desc">
        フルマネージド型のDatabase-as-a-Service（DBaaS）は、TiDBの優れた機能をすべてクラウド上で使用することができます。お客様はデータベースの複雑さを気にすることなく、アプリケーションに集中することができます。
        AWSとGCPで利用することが出来ます。
      </p>
      <ul>
        <li className="desc-li-text">簡単な導入方法</li>
        <li className="desc-li-text">常に最新バージョン</li>
        <li className="desc-li-text">高信頼性、安全性</li>
        <li className="desc-li-text">視覚的な診断と監視が可能</li>
        <li className="desc-li-text">スケジュールされたバックアップ</li>
      </ul>
      <Button
        as={Link}
        to="/products/tidbcloud/trial"
        className="tidb-cloud-trial-btn"
      >
        無料トライアルを申し込む
      </Button>
      <p className="tidb-cloud-full-edition-text">
        4500ドル相当のクレジットとTiDBクラウドの力を！
      </p>
    </section>
  )
}

const TiUP = () => {
  return (
    <>
      <section className="desc-section">
        <div className="desc-title-wrapper">
          <h1 className="desc-title">
            TiUPを使用してベアメタルにTiDBをデプロイする
          </h1>
          <a
            href="https://docs.pingcap.com/tidb/stable/production-deployment-using-tiup"
            className="link-to-full-doc"
            rel="noopener"
          >
            フルドキュメントの参照
          </a>
        </div>
        <p className="desc-paragraph">
          TiUPは、TiDBクラスターの展開を容易にするクラスター運用および保守ツールです。
          下記のコマンドは、TiUPの"playground"
          コンポーネントを使用して単純なローカルクラスターをデプロイします。
        </p>
        <p className="desc-paragraph">
          TiUPを使用して複数のホストにクラスターを展開する方法の詳細については、TiUPのドキュメントを参照してください。
        </p>
        <ol>
          <li>
            <h3 className="step-title">Deploy TiDB</h3>
            <CodeSnippet lang="shell">tiup playground</CodeSnippet>
          </li>
          <li>
            <h3 className="step-title">Access TiDB</h3>
            <CodeSnippet lang="shell">
              mysql --host 127.0.0.1 --port 4000 -u root
            </CodeSnippet>
          </li>
        </ol>
        <p className="desc-paragraph">
          コミュニティサポートについては、
          <a
            href="https://slack.tidb.io/invite?team=tidb-community&channel=everyone&ref=download"
            className="link-to-full-doc"
            rel="noopener"
          >
            TiDB Community Slack
          </a>
          に参加してください
        </p>
      </section>
    </>
  )
}

const Kubernetes = () => {
  return (
    <>
      <section className="desc-section">
        <div className="desc-title-wrapper">
          <h1 className="desc-title">KubernetesにTiDBをデプロイする</h1>
          <a
            href="https://docs.pingcap.com/tidb-in-kubernetes/stable/configure-a-tidb-cluster"
            className="link-to-full-doc"
            rel="noopener"
          >
            フルドキュメントの参照
          </a>
        </div>
        <p className="desc-paragraph">
          TiDBはTiDB
          Operatorを使用してKubernetes環境に、簡単にデプロイすることができます。これらのコマンドはTiDB
          Operator
          CRDを既存のKubernetesクラスターにインストールし、基本的なTiDBクラスターをデプロイします。デプロイメントをカスタマイズする方法の詳細については、TiDB
          Operator のドキュメントを参照してください。
        </p>
        <ol>
          <li>
            <h3 className="step-title">Install TiDB Operator</h3>
            <CodeSnippet lang="shell">{`kubectl apply -f https://raw.githubusercontent.com/pingcap/tidb-operator/{tidb-operator version}/manifests/crd.yaml
helm repo add pingcap https://charts.pingcap.org/
helm install tidb-operator pingcap/tidb-operator --version {​tidb-operator version}
`}</CodeSnippet>
          </li>
          <li>
            <h3 className="step-title">Deploy TiDB and TiDB Monitor</h3>
            <CodeSnippet lang="shell">
              {`kubectl apply -f https://raw.githubusercontent.com/pingcap/tidb-operator/master/examples/basic/tidb-cluster.yaml
kubectl apply -f https://raw.githubusercontent.com/pingcap/tidb-operator/master/examples/basic/tidb-monitor.yaml`}
            </CodeSnippet>
          </li>
          <li>
            <h3 className="step-title">Access the database</h3>
            <CodeSnippet lang="shell">
              {`kubectl port-forward svc/basic-tidb 4000 > pf4000.out &
mysql -h 127.0.0.1 -P 4000 -u root`}
            </CodeSnippet>
          </li>
        </ol>
      </section>
    </>
  )
}

const AWS = () => {
  return (
    <>
      <section className="desc-section">
        <div className="desc-title-wrapper">
          <h1 className="desc-title">AWS EKSにTiDBをデプロイする</h1>
          <a
            href="https://docs.pingcap.com/tidb-in-kubernetes/stable/deploy-on-aws-eks"
            className="link-to-full-doc"
            rel="noopener"
          >
            フルドキュメントの参照
          </a>
        </div>
        <p className="desc-paragraph">
          TiDBはTiDB Operatorを使用してAWS
          EKSに簡単にデプロイすることができ、EKSインフラストラクチャを管理できます。これらのコマンドは基本的なEKSクラスターを作成し、TiDB
          Operatorをインストールして、TiDBクラスターをデプロイします。デプロイメントをカスタマイズする方法の詳細については、TiDB
          Operatorのドキュメントを参照してください。
        </p>
        <ol>
          <li>
            <h3 className="step-title">
              Deploy EKS, TiDB Operator, and TiDB cluster node pool
            </h3>
            <CodeSnippet lang="shell">
              {`git clone --depth=1 https://github.com/pingcap/tidb-operator && \
cd tidb-operator/deploy/aws
cp demo.tfvars terraform.tfvars
terraform init
terraform apply
`}
            </CodeSnippet>
          </li>
          <li>
            <h3 className="step-title">Deploy TiDB cluster and monitor</h3>
            <CodeSnippet lang="shell">
              {`sed "s/CLUSTER_NAME/\${cluster_name}/g" manifests/db.yaml.example > db.yaml
sed "s/CLUSTER_NAME/\${cluster_name}/g" manifests/db-monitor.yaml.example > db-monitor.yaml
kubectl --kubeconfig credentials/kubeconfig_\${eks_name} create -f db.yaml
kubectl --kubeconfig credentials/kubeconfig_\${eks_name} create -f db-monitor.yaml
`}
            </CodeSnippet>
          </li>
          <li>
            <h3 className="step-title">Access the database</h3>
            <CodeSnippet lang="shell">
              {`ssh -i credentials/\${eks_name}.pem centos@\${bastion_ip}
mysql -h \${tidb_lb} -P 4000 -u root`}
            </CodeSnippet>
          </li>
        </ol>
      </section>
    </>
  )
}

const GoogleCloud = () => {
  return (
    <>
      <section className="desc-section">
        <div className="desc-title-wrapper">
          <h1 className="desc-title">GCP GKEにTiDBをデプロイする</h1>
          <a
            href="https://docs.pingcap.com/tidb-in-kubernetes/stable/deploy-on-gcp-gke"
            className="link-to-full-doc"
            rel="noopener"
          >
            フルドキュメントの参照
          </a>
        </div>
        <p className="desc-paragraph">
          TiDBはTiDB Operatorを使用して、GCP
          GKEに簡単にデプロイできます。これらのコマンドは、基本的なGKEクラスターを作成し、TiDB
          Operatorをインストールして、TiDBクラスターをデプロイします。デプロイメントをカスタマイズする方法の詳細については、TiDB
          Operatorのドキュメントを参照してください。
        </p>
        <ol>
          <li>
            <h3 className="step-title">
              Deploy GKE, TiDB Operator, and TiDB cluster node pool
            </h3>
            <CodeSnippet lang="shell">
              {`git clone --depth=1 https://github.com/pingcap/tidb-operator && \
cd tidb-operator/deploy/gcp
cat small.tfvars >> terraform.tfvars
terraform init
terraform apply
`}
            </CodeSnippet>
          </li>
          <li>
            <h3 className="step-title">Deploy TiDB cluster and monitor</h3>
            <CodeSnippet lang="shell">
              {`sed "s/CLUSTER_NAME/tidb-cluster/g" manifests/db.yaml.example > db.yaml
sed "s/CLUSTER_NAME/tidb-cluster/g" manifests/db-monitor.yaml.example > db-monitor.yaml
kubectl --kubeconfig credentials/kubeconfig_\${gke_name} create -f db.yaml
kubectl --kubeconfig credentials/kubeconfig_\${gke_name} create -f db-monitor.yaml
`}
            </CodeSnippet>
          </li>
          <li>
            <h3 className="step-title">Access the database</h3>
            <CodeSnippet lang="shell">
              {`gcloud compute ssh \${gke_cluster_name}-bastion --zone \${zone}
mysql -h \${tidb_lb} -P 4000 -u root`}
            </CodeSnippet>
          </li>
        </ol>
      </section>
    </>
  )
}

export default Download
