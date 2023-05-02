import React from 'react'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'
import Seo from '../../../components/Seo'

import { Link } from "gatsby"

export default function thanks() {
  return (
    <>
      
        <Header />
        
        <div id="mainimage-sub">
            <h1 className="center">SEO対策無料お見積りの<br />
            ご依頼ありがとうございます</h1>
            <p>Thank you for requesting an SEO estimate</p>
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
                    <Link to="/region-seo/" itemProp="item">
                    <span>SEO対策</span>
                    </Link>
                    <meta itemProp="position" content="2" />
                </li>
                <li>
                    <Link to="/region-seo/seo-form/" itemProp="item">
                        <span>SEO対策無料見積りフォーム</span>
                    </Link>
                    <meta itemProp="position" content="3" />
                </li>
                <li>
                    <span>SEO対策無料お見積りのご依頼ありがとうございます</span>
                    <meta itemProp="position" content="4" />
                </li>
            </ul>
        </div>

        <Layout>
            
            <h3 className="center">お見積りのご依頼ありがとうございます</h3>

            <p className="center">お見積り確認メールを送信しました。<br />
            なお、お申し込みに関するお問い合わせがございましたら、</p>

            <p className="center">TEL:0833-45-3838　もしくは　<a href="mailto:info@blanc.to">info@blanc.to</a></p>

            <p className="center">までお問い合わせください。よろしくお願いいたします。</p>

            <p className="center"><Link to="/region-seo/"><span className="bt02">元のページに戻る</span></Link></p>

        </Layout>
        
    </>
  )
}

export const Head = () => (
    <>
        <Seo title="SEO対策無料お見積りのご依頼ありがとうございます" />
    </>
)