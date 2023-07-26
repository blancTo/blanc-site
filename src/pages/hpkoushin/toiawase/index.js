import React from 'react'
import Seo from '../../../components/Seo'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'

export default function index() {
  return (
    <>
      
      <Header />
      <div id="mainimage-sub">
            <h1>ホームページ更新・修正サポートのお問い合わせ</h1>
            <p>Update Support Inquiry</p>
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
                    <a href="https://www.blanc.to/hpkoushin/" itemProp="item">
                        <span>ホームページ修正・更新</span>
                    </a>
                    <meta itemProp="position" content="2" />
                </li>
                <li>
                    <span>ホームページ更新・修正サポートのお問い合わせ</span>
                    <meta itemProp="position" content="3" />
                </li>
            </ul>
        </div>
      <Layout>

        <h3>ホームページ更新・修正サポートのお問い合わせフォーム</h3>

        <p>英数字は全て半角でご入力ください。</p>

        <p><span className="must">必須</span>は必ずご入力ください。</p>

        <form action="https://ssgform.com/s/Zkt2CZDUI5nw" method="post">
        <div style={{display: 'none'}}><input type="text" name="wana" /></div>

        <table className="form">
            <tbody>
                <tr>
                    <th>会社名</th>
                    <td><input type="text" name="会社名" size={30} /></td>
                </tr>
                <tr>
                    <th>ご担当者名<span className="must">必須</span></th>
                    <td><input type="text" name="ご担当者名" size={30} required="required" /></td>
                </tr>
                <tr>
                    <th>電話番号<span className="must">必須</span></th>
                    <td><input type="tel" data-type="tel" name="電話番号" size={16} /></td>
                </tr>
                <tr>
                    <th>メールアドレス<span className="must">必須</span></th>
                    <td><input type="email" data-type="email" name="email" size={40} required="required" /></td>
                </tr>
                <tr>
                    <th>確認のためもう一度<span className="must">必須</span></th>
                    <td><input type="email" data-type="email" name="confirm_email" size={40} required="required" /></td>
                </tr>									
                <tr>
                    <th>ホームページURL</th>
                    <td><input type="url" name="ホームページURL" size={30} 　placeholder="https://example.com" /></td>
                </tr>									
                <tr>
                    <th>メッセージ</th>
                    <td><textarea name="メッセージ" rows={10} cols={60} defaultValue={""} /></td>
                </tr>
            </tbody>
        </table>

        <p className="center">
            <button type="submit" className="bt02">送信する</button>　<button type="reset" className="bt02">リセット</button>
        </p>

        </form>

      </Layout>
    </>
  )
}

const jsonN = "ホームページ修正・管理のご依頼は有限会社blanc",
jsonCat = "hpkoushin",
jsonS = "contact",
jsonD = "地域ナンバーワンのキーワードに特化したSEO対策の実績多数！集客可能なホームページ作成はもちろんホームページリニューアルやスマホ対応もお任せ下さい。";

const jsonLd = {
    "@context":"https://schema.org",
    "@graph":[
        {
            "@type":"WebSite",
            "@id":`https://www.blanc.to/${jsonCat}/${jsonS}#website`,
            "url":`https://www.blanc.to/${jsonCat}/${jsonS}`,
            "name":`${jsonN}`,
            "description":`${jsonD}`,
            "inLanguage":"ja",
            "publisher":{
                "@id":`https://www.blanc.to/${jsonCat}/${jsonS}#organization`
            }
        },
        {
            "@type": "Organization",
            "@id":"https://www.blanc.to/#organization",
            "name":`${jsonN}`,
            "description":`${jsonD}`,
            "url":"https://www.blanc.to/",
            "logo":{
              "@type": "ImageObject",
              "url":"https://www.blanc.to/images/logo.png"
            }
        },
        {
            "@type":"ContactPoint",
            "telephone":"+81-0120-781-437",
            "contactType":"customer service"
        },
        {
            "@type":"WebPage",
            "@id":`https://www.blanc.to/${jsonCat}/${jsonS}#webpage`,
            "url":`https://www.blanc.to/${jsonCat}/${jsonS}`,
            "name":`${jsonN}`,
            "description":`${jsonD}`,
            "inLanguage":"ja",
            "datePublished":"2022-10-04T01:06:53+09:00",
            "dateModified":"2023-03-18T23:31:17+09:00"
        },
        {
            "@type":"BreadcrumbList",
            "@id":"https://www.blanc.to/#breadcrumblist",
            "itemListElement":[
                {
                    "@type":"ListItem",
                    "@id":"https://www.blanc.to/#listItem",
                    "position":1,
                    "item":{
                        "@type":"WebPage",
                        "@id":"https://www.blanc.to/",
                        "name":`${jsonN}`,
                        "description":`${jsonD}`,
                        "url":"https://www.blanc.to/"
                    },
                    "nextItem":`https://www.blanc.to/${jsonCat}/#listItem`
                },
                {
                    "@type":"ListItem",
                    "@id":`https://www.blanc.to/${jsonCat}/#listItem`,
                    "position":2,
                    "item":{
                        "@type":"WebPage",
                        "@id":`https://www.blanc.to/${jsonS}`,
                        "name":`ホームページ修正・更新｜${jsonN}`,
                        "description":`ホームページ修正・更新｜${jsonD}`,
                        "url":`https://www.blanc.to/${jsonS}`
                    },
                    "nextItem":`https://www.blanc.to/${jsonCat}/${jsonS}/#listItem`
                },
                {
                    "@type":"ListItem",
                    "@id":`https://www.blanc.to/${jsonCat}/${jsonS}/#listItem`,
                    "position":3,
                    "item":{
                        "@type":"WebPage",
                        "@id":`https://www.blanc.to/${jsonCat}/${jsonS}`,
                        "name":`ホームページ修正・更新｜${jsonN}`,
                        "description":`ホームページ修正・更新｜${jsonD}`,
                        "url":`https://www.blanc.to/${jsonS}`
                    },
                    "prevItem":`https://www.blanc.to/${jsonCat}/#listItem`
                }
            ]
        },
        {
            "@type":"PostalAddress",
            "addressLocality":"下松市",
            "addressRegion":"山口県",
            "postalCode":"744-0013",
            "streetAddress":"栄町3丁目3-14"
        }
        
    ]
}

export const Head = () => (
    <>
      <Seo title="ホームページ修正・更新" />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
)