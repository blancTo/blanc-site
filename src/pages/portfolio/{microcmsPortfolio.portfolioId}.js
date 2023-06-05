import React from 'react'

import { graphql,Link } from "gatsby"

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
                    <Link to="/portfolio/" itemProp="item">
                        <span>制作実績</span>
                    </Link>
                    <meta itemProp="position" content="2" />
                </li>
                <li>
                    <span>{data.microcmsPortfolio.title}</span>
                    <meta itemProp="position" content="3" />
                </li>
            </ul>
        </div>
        <Layout>

            <h3>{data.microcmsPortfolio.title}</h3>

            <div className="post_img"><img src={data.microcmsPortfolio.eyecatch.url} alt="" /></div>

            <table className="client">
                <tr>
                    <th>構成</th>
                    <td>{data.microcmsPortfolio.config}</td>
                </tr>
                <tr>
                    <th>URL</th>
                    <td><a href={data.microcmsPortfolio.urlSite}>{data.microcmsPortfolio.urlSite}</a></td>
                </tr>
            </table>

            <p className='center'><Link to="/portfolio/" className='bt01'>前のページに戻る</Link></p>
            


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
        config
        urlSite
        eyecatch {
            url
        }
    }
}
`