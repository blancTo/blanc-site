import React from 'react'

import Header from '../../../components/Header'
import Layout from '../../../components/Layout'
import Seo from '../../../components/Seo'

export default function index() {
  return (
    <>
        
        <Header />
        <div id="mainimage-sub">
            <h1>SSGサイト制作見積もり依頼フォーム</h1>
            <p>SSG Form</p>
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
                    <a href="https://www.blanc.to/ssg/" itemprop="item">
                        <span itemprop="name">SSGサイト制作</span>
                    </a>
                    <meta itemprop="position" content="2" />
                </li>
                <li>
                    <span>SSGサイト制作見積もり依頼フォーム</span>
                    <meta itemProp="position" content="3" />
                </li>
            </ul>
        </div>
        <Layout>
            <h3>SSGサイト制作見積もり依頼フォーム</h3>
            
            <p>お見積りは、こちらのメールフォームよりお気軽にご相談下さい。<br />
            なお、折り返しご連絡させていただく際に必要になりますので、メールアドレスはお間違えになりませんようご注意下さい。</p>

            <p>英数字は全て半角でご入力ください。</p>
            <p className="mb0"><span className="must">必須</span>は必ずご入力ください。</p>

            <form action="https://ssgform.com/s/u7hKBINWAn7B" method="post">
                <div style={{display: 'none'}}><input type="text" name="wana" /></div>

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
                            <th>電話番号<span className="must">必須</span></th>
                            <td><input type="tel" data-type="tel" name="電話番号" size={30} data-min={9} required="required" /></td>
                        </tr>
                        <tr>
                            <th>ホームページURL<span className="must">必須</span></th>
                            <td><input type="url" data-type="url" name="ホームページURL" size={60} required="required" /></td>
                        </tr>
                        <tr>
                            <th>対策キーワード<span className="must">必須</span><br />
                            ※2～3個まで</th>
                            <td><textarea name="対策キーワード" rows={5} cols={10} required="required" defaultValue={""} /></td>
                        </tr>
                        <tr>
                            <th>備考</th>
                            <td><textarea name="備考" rows={10} cols={10} defaultValue={""} /></td>
                        </tr>
                    </tbody>
                </table>

                <p className="center">
                    <button type="submit" className="bt02">お申込み</button>&nbsp;&nbsp;<button type="reset" className="bt02">リセット</button>
                </p>

            </form>

        </Layout>
      
    </>
  )
}

export const Head = () => (
    <>
        <Seo title="SSGサイト制作見積もり依頼フォーム" />
    </>
)