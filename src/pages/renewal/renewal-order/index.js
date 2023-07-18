import React from 'react'

import Header from '../../../components/Header'
import Layout from '../../../components/Layout'
import Seo from '../../../components/Seo'

export default function index() {
  return (
    <>
        <Header />
        <div id="mainimage-sub">
            <h1>「ホームページリニューアル」お申し込みフォーム</h1>
            <p>Renewal Order</p>
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
                    <a href="https://www.blanc.to/renewal/" itemprop="item">
                        <span itemprop="name">ホームページ作成やリニューアル</span>
                    </a>
                    <meta itemprop="position" content="2" />
                </li>
                <li>
                    <span>「ホームページリニューアル」お申し込みフォーム</span>
                    <meta itemProp="position" content="3" />
                </li>
            </ul>
        </div>
        <Layout>
            <h3>お申込みフォーム</h3>
							
            <p>英数字は全て半角でご入力ください。</p>
            <p><span className="must">必須</span>は必ずご入力ください。</p>

            <form action="https://ssgform.com/s/b43Yvx8zUuIK" method="post">
                <div style={{display: 'none'}}><input type="text" name="wana" /></div>

                <table className="form">
                  <tbody>
                    <tr>
                      <th>お名前<span className="must">必須</span></th>
                      <td>
                        <input type="text" name="お名前" size={30} required="required" /></td>
                    </tr>
                    <tr>
                      <th>フリガナ<span className="must">必須</span></th>
                      <td><input type="text" name="フリガナ" size={15} required="required" /></td>
                    </tr>
                    <tr>
                      <th>会社名</th>
                      <td>
                        <input type="text" name="会社名" size={30} /></td>
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
                      <th>郵便番号<span className="must">必須</span></th>
                      <td>
                        <input type="text" name="郵便番号" size={30} required="required" /></td>
                    </tr>
                    <tr>
                      <th>ご住所<span className="must">必須</span></th>
                      <td>
                        <ol style={{listStyle: 'none', padding: 0, margin: 0}}>
                          <li>
                            <span>都道府県</span>
                            <select name="都道府県" required="required">
                              <option value selected="selected">【選択して下さい】</option>
                              <optgroup label="北海道・東北地方">
                                <option value="北海道">北海道</option>
                                <option value="青森県">青森県</option>
                                <option value="岩手県">岩手県</option>
                                <option value="秋田県">秋田県</option>
                                <option value="宮城県">宮城県</option>
                                <option value="山形県">山形県</option>
                                <option value="福島県">福島県</option>
                              </optgroup>
                              <optgroup label="関東地方">
                                <option value="栃木県">栃木県</option>
                                <option value="群馬県">群馬県</option>
                                <option value="茨城県">茨城県</option>
                                <option value="埼玉県">埼玉県</option>
                                <option value="東京都">東京都</option>
                                <option value="千葉県">千葉県</option>
                                <option value="神奈川県">神奈川県</option>
                              </optgroup>
                              <optgroup label="中部地方">
                                <option value="山梨県">山梨県</option>
                                <option value="長野県">長野県</option>
                                <option value="新潟県">新潟県</option>
                                <option value="富山県">富山県</option>
                                <option value="石川県">石川県</option>
                                <option value="福井県">福井県</option>
                                <option value="静岡県">静岡県</option>
                                <option value="岐阜県">岐阜県</option>
                                <option value="愛知県">愛知県</option>
                              </optgroup>
                              <optgroup label="近畿地方">
                                <option value="三重県">三重県</option>
                                <option value="滋賀県">滋賀県</option>
                                <option value="京都府">京都府</option>
                                <option value="大阪府">大阪府</option>
                                <option value="兵庫県">兵庫県</option>
                                <option value="奈良県">奈良県</option>
                                <option value="和歌山県">和歌山県</option>
                              </optgroup>
                              <optgroup label="四国地方">
                                <option value="徳島県">徳島県</option>
                                <option value="香川県">香川県</option>
                                <option value="愛媛県">愛媛県</option>
                                <option value="高知県">高知県</option>
                              </optgroup>
                              <optgroup label="中国地方">
                                <option value="鳥取県">鳥取県</option>
                                <option value="島根県">島根県</option>
                                <option value="岡山県">岡山県</option>
                                <option value="広島県">広島県</option>
                                <option value="山口県">山口県</option>
                              </optgroup>
                              <optgroup label="九州・沖縄地方">
                                <option value="福岡県">福岡県</option>
                                <option value="佐賀県">佐賀県</option>
                                <option value="長崎県">長崎県</option>
                                <option value="大分県">大分県</option>
                                <option value="熊本県">熊本県</option>
                                <option value="宮崎県">宮崎県</option>
                                <option value="鹿児島県">鹿児島県</option>
                                <option value="沖縄県">沖縄県</option>
                              </optgroup>
                            </select>
                          </li>
                          <li><span>市区町村</span> <input type="text" name="市区町村" size={50} required="required" /></li>
                          <li><span>丁目番地</span> <input type="text" name="丁目番地" size={50} required="required" /></li>
                        </ol>
                      </td>
                    </tr>
                    <tr>
                      <th>電話番号<span className="must">必須</span></th>
                      <td><input type="tel" data-type="tel" name="電話番号" size={30} data-min={9} required="required" /></td>
                    </tr>
                    <tr>
                      <th>URL</th>
                      <td><input type="url" data-type="url" name="URL" size={60} /></td>
                    </tr>
                    <tr>
                      <th>メッセージ</th>
                      <td><textarea name="メッセージ" rows={10} cols={10} defaultValue={""} /></td>
                    </tr>
                  </tbody>
                </table>
                <p className="center"><button type="submit" className="bt02">送信する</button>&nbsp;&nbsp;<button type="reset" className="bt02">リセット</button></p>

            </form>

        </Layout>
    </>
  )
}

export const Head = () => (
    <>
      <Seo title="「ホームページリニューアル」お申し込みフォーム" />
    </>
  )