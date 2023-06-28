import React from 'react'

import { graphql } from "gatsby"

import Header from '../components/Header'
import Layout from "../components/BlogLayout"
import Seo from "../components/Seo"
import { Pagination } from "../components/Pagination"

export default function BlogPage({data}) {
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
                <li>
                    <span>ブログ</span>
                    <meta itemProp="position" content="2" />
                </li>
            </ul>
        </div>
        <Layout>
          <h2 className="page_title01 mt0">ブログ</h2>
          
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

          <Pagination totalCount={data.allMicrocmsBlog.totalCount} />

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
