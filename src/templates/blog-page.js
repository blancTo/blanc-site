import React from 'react'

import { graphql } from "gatsby"

import Header from '../components/Header'
import Layout from "../components/Layout"
import Seo from "../components/Seo"

export default function BlogPage({data}) {
  return (
    <>
      <Header />
        <div id="mainimage-sub">
            <h1>ホームページ修正・保守料金表</h1>
            <p>Price</p>
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
                    <span>ブログ</span>
                    <meta itemProp="position" content="2" />
                </li>
                <li>
                    <span>記事タイトル</span>
                    <meta itemProp="position" content="2" />
                </li>
            </ul>
        </div>
        <Layout>
            <h2 className="page_title01 mt0">ブログ</h2>                
            <div className="kiji_list">
                {data.allMicrocmsBlog.edges.map(({ node }) => (
                <div className="kiji_box">
                    <div className="kiji_thumb">
                    <a href={'/blog/' + node.blogId + '/'}><img src={node.eyecatch.url} alt={node.title + 'サムネイル画像'} /></a>
                    </div>
                    <div className="kiji_txt">					
                    <p className="txt12">{node.date}</p>
                    <p><a href={'/blog/' + node.blogId}>{node.title}</a></p>                    
                    
                    </div>
                </div>
                ))}
            </div>
            
      </Layout>
    </>
  )
}

export const Head = () => (
    <>
      <body id="pagetop" />
      <Seo title="ブログ一覧" />
    </>
)

export const query = graphql`
query ($skip: Int, $limit: Int) {
    allMicrocmsBlog(
        sort: {date: DESC}
        limit: $limit,
        skip: $skip) {
      totalCount
      edges {
        node {
          id
          blogId          
          title
          eyecatch {
            url
          }
          date(formatString: "YYYY年MM月DD日")
        }
      }
    }
  }
`
