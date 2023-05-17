import React from 'react'

import { graphql,Link } from "gatsby"

import Seo from '../../components/Seo'
import Header from '../../components/Header'
import Layout from '../../components/Layout'

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
                <li className="breadcrumb__item" itemProp="itemListElement" itemType="https://schema.org/ListItem">
                    <Link to="/blog/" itemProp="item">
                        <span itemProp="name">ブログ</span>
                    </Link>
                    <meta itemProp="position" content="2" />
                </li>
                <li className="breadcrumb__item" itemProp="itemListElement" itemType="https://schema.org/ListItem">
                <span itemProp="name">{data.microcmsBlog.title}</span>
                    <meta itemProp="position" content="3" />
                </li>
            </ul>
        </div>
        <Layout>

            <h2 className='title'>{data.microcmsBlog.title}<br />
            <span className='date'>更新日：{data.microcmsBlog.updatedAt}</span></h2>

            <div className="post_img"><img src={data.microcmsBlog.eyecatch.url} alt="" /></div>

            <div className="post_body"
                dangerouslySetInnerHTML={{
                    __html: `${data.microcmsBlog.body}`,
                }}
            />

            <p className="center"><Link to="/blog/" className='bt01'>記事一覧へ戻る</Link></p>

        </Layout>
    </>
  )
}

export const Head = ({data}) => (
    <>
        <Seo title={data.microcmsBlog.title} />
    </>
)

export const query = graphql`
query($id: String) {
    microcmsBlog(id: {eq: $id}) {
        blogId
        title
        date(formatString: "YYYY年MM月DD日")
        updatedAt(formatString: "YYYY年MM月DD日")
        body
        eyecatch {
            url
        }
    }
}
`