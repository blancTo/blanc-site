import React from 'react'

import Header from '../../../components/Header'
import Layout from '../../../components/Layout'
import Seo from '../../../components/Seo'

export default function index() {
  return (
    <>
        
        <Header />
        <div id="mainimage-sub">
            <h1>スマホ対応お見積りフォーム</h1>
            <p>Responsive Contant</p>
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
                    <a href="https://www.blanc.to/responsive/" itemprop="item">
                        <span itemprop="name">スマホ化・レスポンシブ対応</span>
                    </a>
                    <meta itemprop="position" content="2" />
                </li>
                <li>
                    <span>スマホ対応お見積りフォーム</span>
                    <meta itemProp="position" content="3" />
                </li>
            </ul>
        </div>
        <Layout>
            <h3>スマホ対応お見積りフォーム</h3>
            <p>お見積りは、こちらのメールフォームよりお気軽にご相談下さい。<br />
            なお、折り返しご連絡させていただく際に必要になりますので、メールアドレスはお間違えになりませんようご注意下さい。</p>
            <p>英数字は全て半角でご入力ください。</p>
            <p><span className="must">必須</span>は必ずご入力ください。</p>

            <form action="https://ssgform.com/s/CV9ByQQn6yn1" method="post">
            <div style={{display: 'none'}}><input type="text" name="wana" /></div>
            
                <table className="form">
                    <tbody><tr>
                        <th>お名前<span className="must">必須</span></th>
                        <td><input type="text" name="お名前" size={30} required="required" /></td>
                    </tr>
                    <tr>
                        <th>フリガナ<span className="must">必須</span></th>
                        <td><input type="text" name="フリガナ" size={15} required="required" /></td>
                    </tr>
                    <tr>
                        <th>会社名</th>
                        <td><input type="text" name="会社名" size={30} /></td>
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
                        <th>電話番号</th>
                        <td><input type="tel" data-type="tel" name="電話番号" size={30} data-min={9} /></td>
                    </tr>
                    <tr>
                        <th>URL<span className="must">必須</span></th>
                        <td><input type="url" data-type="url" name="URL" size={60} required="required" /></td>
                    </tr>
                    <tr>
                        <th>メッセージ</th>
                        <td><textarea name="メッセージ" rows={10} cols={10} defaultValue={""} /></td>
                    </tr>
                    </tbody></table>
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
        <Seo title="スマホ対応お見積りフォーム" />
    </>
)