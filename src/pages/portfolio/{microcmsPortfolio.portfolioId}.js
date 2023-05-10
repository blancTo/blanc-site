import React from 'react'

import { graphql } from "gatsby"

import Seo from '../../components/Seo'
import Header from '../../components/Header'
import Layout from '../../components/Layout'

export default function PortfolioPage({data}) {
  return (
    <>
      <Header />
        <div id="mainimage-sub">
            <h1>制作実績</h1>
            <p>Portfolio</p>
        </div>
        <div id="breadcrumb">
            <ul itemType="https://schema.org/BreadcrumbList">
                <li className="breadcrumb__item" itemProp="itemListElement" itemType="https://schema.org/ListItem">
                    <a href="https://www.blanc.to" itemProp="item">
                        <span itemProp="name">ホーム</span>
                    </a>
                    <meta itemProp="position" content="1" />
                </li>
                <li>
                    <span>制作実績</span>
                    <meta itemProp="position" content="2" />
                </li>
                <li>
                    <span>{data.microcmsPortfolio.title}</span>
                    <meta itemProp="position" content="2" />
                </li>
            </ul>
        </div>
        <Layout>

            <h3>{data.microcmsPortfolio.title}</h3>

            <div className="post_img"><img src={data.microcmsPortfolio.eyecatch.url} alt="" /></div>
            

        </Layout>
    </>
  )
}

export const Head = ({data}) => (
    <>
        <Seo title={data.microcmsPortfolio.title} />
    </>
)

export const query = graphql`
query($id: String) {
    microcmsPortfolio(id: {eq: $id}) {
        portfolioId
        title
        date(formatString: "YYYY年MM月DD日")
        eyecatch {
            url
        }
    }
}
`