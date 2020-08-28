import '../../styles/pages/download/index.scss'

import React, { useState, useEffect } from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import { graphql, Link } from 'gatsby'
import { logos } from '../../data/download-tidb'
import Prism from 'prismjs'
import { Button } from '@seagreenio/react-bulma'

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
          <h1 className="slogan">Get Started with TiDB</h1>
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
      className={className}
      onClick={() => {
        onSelect(menuKey)
      }}
    >
      {children}
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
        The open source TiDB platform released under the Apache 2.0 license, and
        supported by the community.
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
    <section>
      <h1 className="desc-title enterprise-desc-title">
        The TiDB Platform with commercial support provided by PingCAP
      </h1>
      <ul>
        <li className="desc-li-text">No vendor lock-in</li>
        <li className="desc-li-text">24x7 enterprise-grade support</li>
        <li className="desc-li-text">Technical training and consulting</li>
        <li className="desc-li-text">
          Stable releases with up-to-date security enhancements
        </li>
      </ul>
      <Button as={Link} to="/download/enterprise" className="button is-primary">
        Subscribe Now
      </Button>
    </section>
  )
}

const TiDBCloud = () => {
  return (
    <section>
      <p className="tidb-desc">
        Fully-managed Database-as-a-Service (DBaaS) that brings everything great
        about TiDB to your cloud, and lets you focus on your applications, not
        the complexities of your database. Available on AWS and GCP.
      </p>
      <ul>
        <li className="desc-li-text">Easy deployment</li>
        <li className="desc-li-text">Always up-to-date</li>
        <li className="desc-li-text">Higly secure</li>
        <li className="desc-li-text">Visual diagnosis and monitoring</li>
        <li className="desc-li-text">Scheduled backup</li>
      </ul>
      <Button
        as={Link}
        to="/products/tidbcloud/trial"
        className="button is-primary tidb-cloud-trial-btn"
      >
        APPLY FOR FREE TRIAL
      </Button>
      <p className="tidb-cloud-full-edition-text">
        with $4500 worth of credits and full power of TiDB Cloud
      </p>
    </section>
  )
}

const TiUP = () => {
  return (
    <>
      <section className="desc-section">
        <div className="desc-title-wrapper">
          <h1 className="desc-title">Deploy TiDB on bare-metal using TiUP</h1>
          <a
            href="https://docs.pingcap.com/tidb/stable/production-deployment-using-tiup"
            className="link-to-full-doc"
            rel="noopener"
          >
            see Full Doc
          </a>
        </div>
        <p className="desc-paragraph">
          TiUP is a cluster operation and maintenance tool that makes it easy to
          deploy TiDB clusters. The following commands will deploy a simple
          local cluster using TiUP's "playground" component. Refer to the TiUP
          documentation for more information about how to use TiUP to deploy a
          cluster across multiple hosts.
        </p>
        <ol>
          <li>
            <h3 className="step-title">Deploy TiDB</h3>
            <pre className="language-shell">
              <code className="language-shell">tiup playground</code>
            </pre>
          </li>
          <li>
            <h3 className="step-title">Access TiDB</h3>
            <pre className="language-shell">
              <code className="language-shell">
                mysql --host 127.0.0.1 --port 4000 -u root
              </code>
            </pre>
          </li>
        </ol>
      </section>
    </>
  )
}

const Kubernetes = () => {
  return (
    <>
      <section className="desc-section">
        <div className="desc-title-wrapper">
          <h1 className="desc-title">Deploy TiDB on Kubernetes</h1>
          <a
            href="https://docs.pingcap.com/tidb-in-kubernetes/stable/configure-a-tidb-cluster"
            className="link-to-full-doc"
            rel="noopener"
          >
            see Full Doc
          </a>
        </div>
        <p className="desc-paragraph">
          TiDB can be easily deployed in a Kubernetes environment using TiDB
          Operator. These commands will install the TiDB Operator CRDs into an
          existing Kubernetes cluster and deploy a basic TiDB cluster. Refer to
          the TiDB Operator documentation for more information about how to
          customize a deployment.
        </p>
        <ol>
          <li>
            <h3 className="step-title">Install TiDB Operator</h3>
            <pre className="language-shell">
              <code className="language-shell">
                {`kubectl apply -f https://raw.githubusercontent.com/pingcap/tidb-operator/{tidb-operator version}/manifests/crd.yaml
helm repo add pingcap https://charts.pingcap.org/
helm install tidb-operator pingcap/tidb-operator --version {​tidb-operator version}
`}
              </code>
            </pre>
          </li>
          <li>
            <h3 className="step-title">Deploy TiDB and TiDB Monitor</h3>
            <pre className="language-shell">
              <code className="language-shell">
                {`kubectl apply -f https://raw.githubusercontent.com/pingcap/tidb-operator/master/examples/basic/tidb-cluster.yaml
kubectl apply -f https://raw.githubusercontent.com/pingcap/tidb-operator/master/examples/basic/tidb-monitor.yaml`}
              </code>
            </pre>
          </li>
          <li>
            <h3 className="step-title">Access the database</h3>
            <pre className="language-shell">
              <code className="language-shell">
                {`kubectl port-forward svc/basic-tidb 4000 > pf4000.out &
mysql -h 127.0.0.1 -P 4000 -u root`}
              </code>
            </pre>
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
          <h1 className="desc-title">Deploy TiDB on AWS EKS</h1>
          <a
            href="https://docs.pingcap.com/tidb-in-kubernetes/stable/deploy-on-aws-eks"
            className="link-to-full-doc"
            rel="noopener"
          >
            see Full Doc
          </a>
        </div>
        <p className="desc-paragraph">
          TiDB can be easily deployed to AWS EKS using TiDB Operator and
          included Terraform scripts to manage EKS infrastructure. These
          commands will create a basic EKS cluster, install TiDB Operator, and
          deploy a basic TiDB cluster. Consult the TiDB Operator documentation
          for more information about how to customize your deployment.
        </p>
        <ol>
          <li>
            <h3 className="step-title">
              Deploy EKS, TiDB Operator, and TiDB cluster node pool
            </h3>
            <pre className="language-shell">
              <code className="language-shell">
                {`git clone --depth=1 https://github.com/pingcap/tidb-operator && \
cd tidb-operator/deploy/aws
cp demo.tfvars terraform.tfvars
terraform init
terraform apply
`}
              </code>
            </pre>
          </li>
          <li>
            <h3 className="step-title">Deploy TiDB cluster and monitor</h3>
            <pre className="language-shell">
              <code className="language-shell">
                {`sed "s/CLUSTER_NAME/\${cluster_name}/g" manifests/db.yaml.example > db.yaml
sed "s/CLUSTER_NAME/\${cluster_name}/g" manifests/db-monitor.yaml.example > db-monitor.yaml
kubectl --kubeconfig credentials/kubeconfig_\${eks_name} create -f db.yaml
kubectl --kubeconfig credentials/kubeconfig_\${eks_name} create -f db-monitor.yaml
`}
              </code>
            </pre>
          </li>
          <li>
            <h3 className="step-title">Access the database</h3>
            <pre className="language-shell">
              <code className="language-shell">
                {`ssh -i credentials/\${eks_name}.pem centos@\${bastion_ip}
mysql -h \${tidb_lb} -P 4000 -u root`}
              </code>
            </pre>
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
          <h1 className="desc-title">Deploy TiDB on GCP GKE</h1>
          <a
            href="https://docs.pingcap.com/tidb-in-kubernetes/stable/deploy-on-gcp-gke"
            className="link-to-full-doc"
            rel="noopener"
          >
            see Full Doc
          </a>
        </div>
        <p className="desc-paragraph">
          TiDB can be easily deployed to GCP GKE using TiDB Operator and
          included Terraform scripts to manage GKE infrastructure. These
          commands will create a basic GKE cluster, install TiDB Operator, and
          deploy a basic TiDB cluster. Consult the TiDB Operator documentation
          for more information about how to customize your deployment.
        </p>
        <ol>
          <li>
            <h3 className="step-title">
              Deploy GKE, TiDB Operator, and TiDB cluster node pool
            </h3>
            <pre className="language-shell">
              <code className="language-shell">
                {`git clone --depth=1 https://github.com/pingcap/tidb-operator && \
cd tidb-operator/deploy/gcp
cat small.tfvars >> terraform.tfvars
terraform init
terraform apply
`}
              </code>
            </pre>
          </li>
          <li>
            <h3 className="step-title">Deploy TiDB cluster and monitor</h3>
            <pre className="language-shell">
              <code className="language-shell">
                {`sed "s/CLUSTER_NAME/tidb-cluster/g" manifests/db.yaml.example > db.yaml
sed "s/CLUSTER_NAME/tidb-cluster/g" manifests/db-monitor.yaml.example > db-monitor.yaml
kubectl --kubeconfig credentials/kubeconfig_\${gke_name} create -f db.yaml
kubectl --kubeconfig credentials/kubeconfig_\${gke_name} create -f db-monitor.yaml
`}
              </code>
            </pre>
          </li>
          <li>
            <h3 className="step-title">Access the database</h3>
            <pre className="language-shell">
              <code className="language-shell">
                {`gcloud compute ssh \${gke_cluster_name}-bastion --zone \${zone}
mysql -h \${tidb_lb} -P 4000 -u root`}
              </code>
            </pre>
          </li>
        </ol>
      </section>
    </>
  )
}

export default Download
