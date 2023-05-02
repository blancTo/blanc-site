import React from 'react'

import Seo from '../../../components/Seo'
import Header from '../../../components/Header'
import Layout from '../../../components/Layout'

import { Link } from "gatsby"

export default function index() {
  return (
    <>
        
        <Header />
        <div id="mainimage-sub">
            <h1>SEO対策無料見積りフォーム</h1>
            <p>SEO Estimate</p>
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
                    <span>SEO対策無料見積りフォーム</span>
                    <meta itemProp="position" content="3" />
                </li>
            </ul>
        </div>
        <Layout>

            <h3>SEO対策無料見積りフォーム</h3>
                                
            <p>お見積りは、こちらのメールフォームよりお気軽にご相談下さい。<br />
            なお、折り返しご連絡させていただく際に必要になりますので、メールアドレスはお間違えになりませんようご注意下さい。</p>

            <p>英数字は全て半角でご入力ください。</p>

            <p><span className="must">必須</span>は必ずご入力ください。</p>

            <form action="https://ssgform.com/s/1jvbZMrNzYOB" method="post">

            <table className="form">
                <tbody>
                    <tr>
                        <th>会社名<span className="must">必須</span></th>
                        <td><input type="text" name="会社名" size={45} required="required" /></td>
                    </tr>
                    <tr>
                        <th>ご担当者名<span className="must">必須</span></th>
                        <td><input type="text" name="ご担当者名" size={45} required="required" /></td>
                    </tr>
                    <tr>
                        <th>メールアドレス<span className="must">必須</span></th>
                        <td><input type="email" data-type="email" name="email" size={40} required="required" /></td>
                    </tr>
                    <tr>
                        <th>確認のためもう一度<span className="must">必須</span></th>
                        <td><input type="email" data-type="email" name="confirm_email" data-post-disable={1} size={40} required="required" /></td>
                    </tr>
                    <tr>
                        <th>ホームページURL<span className="must">必須</span></th>
                        <td><input type="url" data-type="url" name="ホームページURL" size={60} required="required" /></td>
                    </tr>
                    <tr>
                        <th>対策キーワード</th>
                        <td><textarea name="対策キーワード" rows={10} cols={10} defaultValue={""} /></td>
                    </tr>
                </tbody>
            </table>

            <p className="center">
                <button type="submit" className="bt02">お申込み</button>　<button type="reset" className="bt02">リセット</button>
            </p>

            </form>

        </Layout>
    </>
  )
}

export const Head = () => (
    <>
        <Seo title="SEO対策無料見積りフォーム" />
    </>
)