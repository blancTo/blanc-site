import React from 'react'
import { graphql } from "gatsby"

import Seo from '../../components/Seo'
import Header from '../../components/Header'
import Layout from '../../components/Layout'

export default function index({data}) {
  return (
    <>
      <Header />
      <div id="mainimage-sub">
            <h1>ブログ</h1>
            <p>Blog</p>
        </div>
        <div id="breadcrumb">
            <ul itemType="https://schema.org/BreadcrumbList">
                <li className="breadcrumb__item" itemProp="itemListElement" itemType="https://schema.org/ListItem">
                    <a href="https://www.blanc.to" itemProp="item">
                        <span itemProp="name">ホーム</span>
                    </a>
                    <meta itemProp="position" content="1" />
                </li>
                <li className="breadcrumb__item" itemProp="itemListElement" itemType="https://schema.org/ListItem">
                    <span itemProp="name">ブログ</span>
                    <meta itemProp="position" content="2" />
                </li>             
            </ul>
        </div>
        <Layout>

        <div className="flex-wrap mb60">
          {data.allMicrocmsBlog.edges.map(({ node }) => (
            <>
              <div className="news_box">
                <div className="news_img"><img src={node.eyecatch.url + '?fm=webp'} width={370} height={277} alt={node.title + 'サムネイル画像'} loading="lazy" /></div>
                <div className="news_txt"><a href={'/blog/' + node.blogId + '/'}>{node.title}</a></div>
              </div>
            </>
          ))}
        </div>

        </Layout>
    </>
  )
}
export const Head = ({data}) => (
    <>
        <Seo title={data.allMicrocmsBlog.title} />
    </>
)

export const query = graphql`
query {
    allMicrocmsBlog {
        edges {
          node {
            title
            date(formatString: "YYYY年MM月DD日")
            eyecatch {
              url
            }
            blogId
          }
        }
      }
}
`