import React from 'react'

import { Link } from "gatsby"

import Header from '../../../components/Header'
import Layout from '../../../components/Layout'
import Seo from '../../../components/Seo'

export default function thanks() {
  return (
    <>
        <Header />
        <div id="mainimage-sub">
            <h1 className="center">ホームページ修正・更新サポートの<br />
            お問い合わせありがとうございました</h1>
            <p>Update Support Inquiry</p>
        </div>
        <div id="breadcrumb">
            <ul itemType="https://schema.org/BreadcrumbList">
                <li className="breadcrumb__item" itemProp="itemListElement" itemType="https://schema.org/ListItem">
                    <Link to="/" itemProp="item">
                        <span itemProp="name">ホーム</span>
                    </Link>
                    <meta itemProp="position" content="1" />
                </li>
                <li>
                    <Link to="/hpkoushin/" itemProp="item">
                        <span>ホームページ修正・更新</span>
                    </Link>
                    <meta itemProp="position" content="2" />
                </li>
                <li>
                    <Link to="/hpkoushin/toiawase/" itemProp="item">
                        <span>ホームページ更新・修正サポートのお問い合わせ</span>
                    </Link>
                    <meta itemProp="position" content="3" />
                </li>
                <li>
                    <span>ホームページ修正・更新サポートのお問い合わせありがとうございました</span>
                    <meta itemProp="position" content="4" />
                </li>
            </ul>
        </div>
        <Layout>
            
            <h3>ホームページ修正・更新サポートのお問い合わせありがとうございました</h3>

            <p className="center">お問い合わせ確認メールを送信いたしましたのでご確認ください。<br />
            なお、ホームページ修正・更新サポートに関するお問い合わせがございましたら、</p>

            <p className="center">TEL:0833-45-3838　もしくは　<a href="mailto:info@blanc.to">info@blanc.to</a></p>

            <p className="center">までお問い合わせください。よろしくお願いいたします。</p>

            <p className="center"><Link to="/"><span className="bt02">トップページに戻る</span></Link></p>

        </Layout>
    </>
  )
}

export const Head = () => (
    <>
        <Seo title="ホームページ修正・更新サポートお問い合わせありがとうございました" />
    </>
)
