import React from 'react'

import { Link } from "gatsby"

import Seo from '../../components/Seo'
import Header from '../../components/Header'
import Layout from '../../components/Layout'

export default function index() {
  return (
    <>
        <Header />

        <div id="mainimage-sub">
            <h1>配信停止手続き</h1>
            <p>Suspended Delivery</p>
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
                    <span>配信停止手続き</span>
                    <meta itemProp="position" content="2" />
                </li>
            </ul>
        </div>

        <Layout>
            <h3 className="dark-red bold center">配信停止手続き</h3>
            <form action="https://ssgform.com/s/rwPQ9ZobpA0d" method="post">
            <div style={{display: 'none'}}><input type="text" name="wana" /></div>
            <dl className="kaijyo_box">
                <dt><span className="must">必須</span>メールアドレス</dt>
                <dd><input type="email" data-type="email" name="email" required="required" /></dd>
            </dl>

            <p className="center">こちらに配信先のメールアドレスをご入力ください。直ちに配信を停止します。</p>

            <p className="center"><button type="submit" className="bt02">送信する</button> <button type="reset" className="bt02">リセット</button></p>
            </form>
        </Layout>
    </>
  )
}

export const Head = () => (
    <>
        <Seo title="配信停止手続き" />
    </>
)