import React from 'react'

import Seo from '../../components/Seo'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Works from '../../components/Works'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck,faPen } from "@fortawesome/free-solid-svg-icons"

export default function index() {
  return (
    <>
        <Header />

        <div id="mainimage-sub">
            <h1>ホームページ作成やリニューアル</h1>
            <p>Renewal</p>
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
                    <span>ホームページ作成やリニューアル</span>
                    <meta itemProp="position" content="2" />
                </li>
            </ul>
        </div>
        <Layout>

            <h2>ホームページ作成88,000円から<br />
            （スマホ・常時SSL・ワードプレスにも対応）</h2>

            <div className="list03">
                <ul>
                <li><FontAwesomeIcon icon={faCheck} />ホームページを新しく作りたい。</li>
                <li><FontAwesomeIcon icon={faCheck} />ホームページをリニューアルしたい。</li>
                <li><FontAwesomeIcon icon={faCheck} />ホームページをスマホ対応にしたい。</li>
                <li><FontAwesomeIcon icon={faCheck} />ホームページをSSL対応にしたい。</li>
                </ul>
            </div>
            <h3>制作費用　88,000円（税込）～（5ページ以内）</h3>
            <div className="list03">
                <ul>
                <li><FontAwesomeIcon icon={faCheck} />ご希望のデザインでホームページを新しく作り変えます。</li>
                <li><FontAwesomeIcon icon={faCheck} />ヒアリングを元にお伝え頂いた色味や雰囲気でWEBデザイナーがデザイン案を作成します。</li>
                <li><FontAwesomeIcon icon={faCheck} />デザイン案の修正や変更はご納得頂けるまで行います。</li>
                <li><FontAwesomeIcon icon={faCheck} />5ページを超える場合は別途お見積り。</li>
                <li><FontAwesomeIcon icon={faCheck} />標準的な問い合わせフォーム1個設置。</li>
                </ul>
            </div>

            <h4>制作事例</h4>

            <Works />

            <h3>基本的なSEO対策</h3>
            <div className="list01">
                <ul>
                <li><span className='bg_marker'><FontAwesomeIcon icon={faPen} />Googleの仕様に沿ったコーディングでご希望のキーワードで上位表示のお手伝い。</span><br />
                    <span style={{fontSize: '14px'}}>※さらに検索上位表示をご希望の場合は<a href="/region-seo/">SEO対策</a>を併せてご検討下さい。 </span></li>
                </ul>
            </div>
            <h3>常時SSL対応</h3>
            <div className="list01">
                <ul>
                <li><span className='bg_marker'><FontAwesomeIcon icon={faPen} />常時SSL対応でセキュリティも安心。</span><br />
                    <span style={{fontSize: '14px'}}>※サーバー会社提供の無料SSLを使用します。<br />
                    ※ドメイン認証や企業認証については別途ご相談。 </span></li>
                </ul>
            </div>
            <h3>更新サポート（オプション）</h3>
            <div className="list01">
                <ul>
                    <li><span className='bg_marker'><FontAwesomeIcon icon={faPen} />面倒なホームページの更新や修正も月3回～ご依頼頂けます。</span><br />
                        <span style={{fontSize: '14px'}}>※<a href="/price/">blancサポート</a>（サイトの規模や数に応じて3つのプランをご用意しています。）</span></li>
                </ul>
            </div>
            <h3>スマホ対応</h3>
            <div className="list01">
                <ul>
                    <li><span className='bg_marker'><FontAwesomeIcon icon={faPen} />スマホ対応（レスポンシブ）を行います。</span><br />
                        <span style={{fontSize: '14px'}}>※<a href="/responsive/">スマホ対応の詳しいご説明はこちらから。</a></span></li>
                </ul>
            </div>
            <h3>ワードプレス設置（オプション）</h3>
            <div className="list01">
                <ul>
                    <li><span className='bg_marker'><FontAwesomeIcon icon={faPen} />プラス55,000円（税込）～でワードプレスなどのCMS対応を行います。</span><br />
                        <span style={{fontSize: '14px'}}>※更新が簡単なワードプレスなどのCMSを利用してホームページ制作を行います。</span></li>
                </ul>
            </div>
            <h3>ホームページ運用相談</h3>
            <div className="list01">
                <ul>
                    <li><span className='bg_marker'><FontAwesomeIcon icon={faPen} />ホームページ作成後もわからいない事や集客方法までサポートします。</span></li>
                </ul>
            </div>
            <h2>ホームページ作成・リニューアルの流れ</h2>
            <h4>要件確認</h4>
            <p>ホームページ作成やリニューアルについてお電話やメールにてご希望を確認させて頂きます。</p>
            <p className="center"><img src="/images/arrow_orange.jpg" width={50} alt="" /></p>
            <h4>お見積り</h4>
            <p>ご希望を元にお見積りを差し上げます。</p>
            <p className="center"><img src="/images/arrow_orange.jpg" width={50} alt="" /></p>
            <h4>お支払い</h4>
            <p>お見積りの金額でよろしければ制作料金をお支払い頂きます。<br />
                <span className="txt14">※お支払い方法は銀行振込またはPayPal利用によるクレジットカード払いからご選択いただけます。</span></p>
            <p className="center"><img src="/images/arrow_orange.jpg" width={50} alt="" /></p>
            <h4>原稿提示</h4>
            <p>ホームページ作成に使用する素材（会社ロゴや写真など）をお送り頂きます。</p>
            <p className="center"><img src="/images/arrow_orange.jpg" width={50} alt="" /></p>
            <h4>デザイン確認</h4>
            <p>打合せ完了後、約1週間でデザイン案を提示致します。<br />
                <span className="txt14">※デザイン案の修正や変更はご納得頂けるまで行います。</span></p>
            <p className="center"><img src="/images/arrow_orange.jpg" width={50} alt="" /></p>
            <h4>コーディング</h4>
            <p>デザイン案を基にコーディングを開始します。<br />
                （コーディング期間約2週間～3週間）</p>
            <p className="center"><img src="/images/arrow_orange.jpg" width={50} alt="" /></p>
            <h4>サイトアップ</h4>
            <p>ホームページ運用開始</p>
            <p className="center"><img src="/images/img_call.png" alt="" /></p>
            <p className="center"><a href="/renewal/renewal-order/"><img src="/images/contact_bt3.png" alt="メールでのお申し込みはこちら" width={760} height={114} /></a></p>

        </Layout>
      
    </>
  )
}

export const Head = () => (
    <>
        <Seo title="ホームページ作成やリニューアル" />
    </>
)