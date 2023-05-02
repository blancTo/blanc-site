import React from 'react'

import Seo from '../../components/Seo'
import Header from '../../components/Header'
import Layout from '../../components/Layout'

import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck,faUser,faCircleExclamation } from "@fortawesome/free-solid-svg-icons"

export default function index() {
  return (
    <>  

        <Header />

        <div id="mainimage-sub">
            <h1>常時SSL設定</h1>
            <p>SSL</p>
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
                    <span>常時SSL設定</span>
                    <meta itemProp="position" content="2" />
                </li>
            </ul>
        </div>

        <Layout>
            <h2>あなたのサイトには鍵がかかってますか？</h2>
            <p>インターネット上で安全な通信を行うには通信の暗号化が必要です。<br />
            ホームページにこの設定を行っていないとブラウザのアドレスバーに次のような表示が出ます。</p>
            <h3>保護されていない</h3>
            <p>目立たないビックリマーク</p>

            <div><img src="/images/page/ssl_no.jpg" alt="" width={348} height={46} /></div>

            <div className="information">
                <FontAwesomeIcon icon={faCircleExclamation} />このページはプライベート接続を使用していません。<br />
                このサイトとの間で送受信される情報は、何者かによって表示または変更される可能性があります。
            </div>

            <h3>危険</h3>
            <p>赤で目立つビックリマーク</p>

            <div><img src="/images/page/ssl_ng.jpg" alt="" width={348} height={46} /></div>

            <div className="information">
                <FontAwesomeIcon icon={faCircleExclamation} />このページでは個人情報や機密情報を入力しないようにしてください。できれば、サイト自体、利用しないことをおすすめします。<br />
                このサイトを利用する場合は十分にご注意ください。<br />
                このサイトへの接続にはプライバシー保護に関して大きな問題があります。<br />
                このサイトとの間で送受信される情報は、何者かに見られる可能性があります。
            </div>

            <h3>安全</h3>
            <p>一方、SSL化を行うと次のように<span className="marker-under">鍵がかかった表示</span>になります。</p>

            <div><img src="/images/page/ssl_green.jpg" alt="" width={348} height={46} /></div>

            <div className="information">
                <FontAwesomeIcon icon={faCircleExclamation} />このサイトとの間で送受信される情報はプライバシーが保護されます。
            </div>

            <h3>常時SSL化</h3>

            <p>以前はこのような常時SSL化は独自SSLの証明書が必要でそれなにり費用が高くなかなか実施が難しくもありました。<br />
            しかし最近は<span className="marker-under">各サーバー会社から無料のSSLサービスがリリースされていますので、それらを利用して安価に常時SSL化が行える環境になっています。</span></p>

            <p>ただ自力でSSL設定が出来なくはないのですが、次のような事から手間取ってしまい常時SSL化が上手く行かない場合もあります。</p>
            
            
            <ul className="list02">
                <li><FontAwesomeIcon icon={faCheck} />サーバーによって設定方法が違う。</li>
                <li><FontAwesomeIcon icon={faCheck} />httpsから始まるアドレスにアクセスするとサイトの表示が崩れてしまう。</li>
                <li><FontAwesomeIcon icon={faCheck} />緑色の鍵がかかった状態にならずその原因が特定出来ない。</li>
            </ul>
            

            <h3>常時SSL化設定サービス</h3>

            <p>そこでお忙しいあなたに変わって私共でSSL設定を代行致します。</p>

            
            <ul className="list02">
                <li><FontAwesomeIcon icon={faCheck} />様々なサイトのSSL化を行い豊富な経験があるので安心。</li>
                <li><FontAwesomeIcon icon={faCheck} />面倒なサーバー側の設定も代行。</li>
                <li><FontAwesomeIcon icon={faCheck} />サイトデザインが崩れる事なくSSL化。</li>
                <li><FontAwesomeIcon icon={faCheck} />ワードプレスなどのCMSにも対応。</li>
                <li><FontAwesomeIcon icon={faCheck} />SEOのリソースを生かしたままの設定。</li>
            </ul>

            <div className="alert">サーバーにより利用出来るSSL証明書が異なります。</div>

            <h4>お客様の声</h4>

            <ul className="list_voice">
                <li><FontAwesomeIcon icon={faUser} />SSL設定完了のご連絡をいただきましてありがとうございます。<br />
                バッチリ鍵がかかっている事を確認できました。<br />
                いろいろと試してみましたがすべてOKでした。</li>
                <li><FontAwesomeIcon icon={faUser} />ssl化は、気になりながらもよくわからなくて<br />
                そのままにしていたのですが、お願いしてよかったです。</li>
                <li><FontAwesomeIcon icon={faUser} />この度は早急に対応をしていただき感謝しております。<br />
                本当にありがとうございました！</li>
            </ul>

            <h3>無料独自SSLが使えるサーバー</h3>

            <p>・<a href="https://px.a8.net/svt/ejp?a8mat=2ZL29T+30YCHE+CO4+609HU" target="_blank" rel="nofollow noopener noreferrer">エックスサーバー</a><img border={0} width={1} height={1} src="https://www15.a8.net/0.gif?a8mat=2ZL29T+30YCHE+CO4+609HU" alt="" />（<a href="https://www.xserver.ne.jp/functions/ssl/freessl.php" target="_blank" rel="nofollow noopener noreferrer">SSL詳細ページ</a>）・<a href="https://px.a8.net/svt/ejp?a8mat=10BL9L+6YNIGI+D8Y+67RK2" target="_blank" rel="nofollow noopener noreferrer">さくらのレンタルサーバ</a><img border={0} width={1} height={1} src="https://www12.a8.net/0.gif?a8mat=10BL9L+6YNIGI+D8Y+67RK2" alt="" />（<a href="https://www.sakura.ne.jp/function/freessl.html" target="_blank" rel="nofollow noopener noreferrer">SSL詳細ページ</a>）・<a href="https://px.a8.net/svt/ejp?a8mat=2ZJ29L+DJM182+50+2HFY7M" target="_blank" rel="nofollow noopener noreferrer">お名前.comレンタルサーバー</a>（<a href="https://www.onamae.com/server/sd/ssl/" target="_blank" rel="nofollow noopener noreferrer">SSL詳細ページ</a>）・<a href="https://px.a8.net/svt/ejp?a8mat=25N2DH+FWR0QA+348+65MEA" target="_blank" rel="nofollow noopener noreferrer">ロリポップ！</a><img border={0} width={1} height={1} src="https://www17.a8.net/0.gif?a8mat=25N2DH+FWR0QA+348+65MEA" alt="" />・<a href="https://t.afi-b.com/visit.php?guid=ON&a=q8305F-b278450D&p=g5424308" target="_blank" rel="nofollow noopener noreferrer">MixHost（ミックスホスト）</a><img src="https://t.afi-b.com/lead/q8305F/g5424308/b278450D" width={1} height={1} style={{border: 'none'}} alt="" />
            <img border={0} width={1} height={1} src="https://www15.a8.net/0.gif?a8mat=2ZJ29L+DJM182+50+2HFY7M" alt="" />
            </p>

            <h4>個別にSSL証明書を取得する必要があるサーバー</h4>

            <p>・<a href="https://www.alpha-web.jp/service/ssl/" target="_blank" rel="nofollow noopener noreferrer">大塚商会 アルファメールプレミア</a>・<a href="https://www.ntt.com/business/services/cloud/rental-server/biz/function/ssl.html" target="_blank" rel="nofollow noopener noreferrer">Bizメール＆ウェブ ビジネス</a>・<a href="https://web.arena.ne.jp/service/ssl.html" target="_blank" rel="nofollow noopener noreferrer">WebARENA</a>・<a href="https://www.cpi.ad.jp/shared/detail/ssl.html" target="_blank" rel="nofollow noopener noreferrer">CPI（シェアードプランACE01）</a>・<a href="https://support.smileserver.ne.jp/ver4/06hp/hp08.html" target="_blank" rel="nofollow noopener noreferrer">スマイルサーバ Ver.4</a></p>

            <h3>常時SSL化設定サービスの流れ</h3>

            <h4>サーバー設定</h4>

            <p>お使いのサーバー側でSSL設定を行います。<br />
            ※サーバーのログイン情報が必要になります。</p>

            <p className='center'><img className="center" src="/images/arrow_orange.jpg" width={50} alt="" /></p>
            
            <h4>トップページ設定</h4>
            
            <p>トップページに鍵がかかった状態に調整します。<br />
            レイアウト崩れなどあれば調整します。</p>
            
            <p className='center'><img className="center" src="/images/arrow_orange.jpg" width={50} alt="" /></p>
            
            <h4>下層ページ設定</h4>
            
            <p>その他のページも鍵がかかった状態に調整します。<br />
            レイアウト崩れなどあれば調整します。<br />
            混在コンテンツ（httpから始まる画像など）のチェックを行い修正します。</p>
            
            <p className='center'><img className="center" src="/images/arrow_orange.jpg" width={50} alt="" /></p>
            
            <h4>リダイレクト設定</h4>
            
            <p>従来のページから転送設定（リダイレクト）を行いSEOのリソースが無くならないよう調整を行います。</p>
            
            <p className='center'><img className="center" src="/images/arrow_orange.jpg" width={50} alt="" /></p>
            
            <h4>完了確認</h4>
            
            <p>全てのページが安全に接続出来る状態になっているか確認して完了です。</p>
            
            <p className="center"><img src="/images/img_call.png" alt="" /></p>
            
            <p className="center"><Link to="/recommendation-ssl/estimates-ssl/"><img src="/images/contact_bt2.png" alt="メールでのお申し込みはこちら" width={760} height={114} /></Link></p>
            
            <h3>今後の動向</h3>
            
            <div className="alert">
                <FontAwesomeIcon icon={faCircleExclamation} />2018年7月リリースのクローム最新版（バージョン68）から、HTTPSではないサイト（HTTPページ）には、ブラウザのアドレスバーに「保護されていません」という警告が表示される仕様になりました。
            </div>

            <p>以前からグーグルはサイト管理者に向けてサイトをHTTPS化（常時SSL化）するようにメッセージを発信していましたが、今後はさらにSSL化を推進していくようです。</p>
            
            <p>また、2018年10月には、クロームのバージョン70がリリースされました。<br />
            クローム70では、<span className="marker-under">「保護されていません」というメッセージラベルが赤で警告</span>されます。</p>
            
            <p>このような表示による警告はサイト訪問ユーザーに不安を与える要因となり、せっかく集客したユーザーの離脱原因になります。</p>
            
            <p>SEO的に見ると、常時SSL化は直接順位アップに繋がるものではありませんが、HTTP接続のマイナス評価は改善されます。また、HTTPSにすることでページスピードもいくらか改善される傾向もあります。</p>
            
            <p>従来どおりのHTTPでの運用をされている方は、この機会にHTPPS（常時SSL）に変更される事を強くおすすめします。</p>
            
            <h3>参考</h3>
            
            <p><a href="http://www.soumu.go.jp/main_sosiki/joho_tsusin/security/basic/structure/03.html" target="_blank" rel="nofollow noopener noreferrer">総務省国民のための情報セキュリティサイト</a></p>
            
            <p className="center"><img src="/images/img_call.png" alt="" /></p>
            
            <p className="center"><Link to="/recommendation-ssl/estimates-ssl/"><img src="/images/contact_bt2.png" alt="メールでのお申し込みはこちら" width={760} height={114} /></Link></p>
            
        </Layout>
      
    </>
  )
}

export const Head = () => (
    <>
        <Seo title="常時SSL設定" />
    </>
)