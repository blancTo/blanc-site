import React from 'react'
import { graphql } from "gatsby"

import Seo from '../../components/Seo'
import Header from '../../components/Header'
import Layout from '../../components/BlogLayout'
import { Pagination } from "../../components/Pagination"

export default function index({data}) {
  return (
    <>
      <Header />
      <div id="mainimage-sub">
            <h1>ブログ</h1>
            <p>Information&amp;Blog</p>
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

        <div className="flex-wrap p15_smp">
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
export const Head = ({data}) => (
  <>
    <body id="pagetop" className="blog-top" />
    <Seo title="Blog" />
  </>
)

export const query = graphql`
query {
  allMicrocmsBlog(sort: {date: DESC}, limit: 10, skip: 0) {
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
    totalCount
  }
}
`