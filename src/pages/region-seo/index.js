import React from 'react'
import Seo from '../../components/Seo'
import Header from '../../components/Header'
import Layout from '../../components/Layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck,faUser } from "@fortawesome/free-solid-svg-icons"

import { Link } from "gatsby"

export default function index() {
  return (
    <>

    <Header />

    <div id="mainimage-sub">
        <h1>SEO対策</h1>
        <p>SEO Service</p>
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
                <span>SEO対策</span>
                <meta itemProp="position" content="2" />
            </li>
        </ul>
    </div>

    <Layout>

        <h2>結果が出やすいSEO対策</h2>
        <h3>もっと検索順位を上げたい</h3>
        
        <ul className="list02">
            <li><FontAwesomeIcon icon={faCheck} />検索結果10位以内には入っているものの反応が今一つなのでもっと順位を上げたい。</li>
            <li><FontAwesomeIcon icon={faCheck} />ずっと検索順位2ページ目にいるので1ページ以内に入れたい。</li>
        </ul>
        
        <p>実は、こういった場合はホームページ（ソース）の内部調整で直ぐに検索順位が上がる場合があります。<br />
        検索結果の1位～3位に表示されているのと、それ以下ではホームページからの反応が全く違いますので、このちょっとした違いは大きのではないでしょうか？</p>

        <h3>地域名や業種に関連したSEO対策</h3>

        <p>SEO対策のご相談はよく頂くのですが、その中でもすぐに結果がでやすいのが、<strong>「業種」</strong>や<strong>「地域名（県や市）」</strong>に関連したキーワードで上位表示を狙うSEO対策です。</p>
        <p className="center"><img src="/images/page/SEO-bana.png" alt="" width={560} height={315} /></p>
        <p>例えば、飲食店、美容・健康、不動産・建築、保育・教育、サービス、医療・福祉など、様々な業種でこのようなSEO対策は可能なのですが、実際に確認してみるとホームページに手を加えて外部からの評価を上げることで、今より検索上位表示が出来そうなサイトはたくさんあります。</p>
        <p>ただ、こういったキーワードでも専門のSEO業者に依頼すると高額な費用となってしまい費用対効果が出ない場合もありますし、検索順位に全く変化がない場合もあります。</p>
        <p>なぜ、そのような結果になってしまうかと言うと選んだキーワードのライバルが強すぎたり、自社サイトの検索エンジン対策が不十分といった事が要因の場合があります。</p>
        <h3>お客様の声</h3>
        
        <ul className="list_voice">
            <li><FontAwesomeIcon icon={faUser} />検索順位が2ページ目でなかなか順位が安定せずに困っていました。<br />
            今はお願いしたキーワード2つとも3位以内に入っています！<br />
            東京都　S様</li>
            <li><FontAwesomeIcon icon={faUser} />GoogleとYahoo!に広告を出していますが最近費用がかかりすぎるのでSEO対策をお願いしました。<br />
            お願いして3週間で8位から1位になりました。これで広告費が節約できそうです。<br />
            広島県　T様</li>
            <li><FontAwesomeIcon icon={faUser} />近くの対象エリアを含めてキーワード3つで調整してもらいました。<br />
            10位前後だったキーワードが約1ヶ月で3つとも3位以内に入りました。<br />
            おかげさまで問い合わせの電話が増えました。<br />
            福岡県　K様</li>
        </ul>
        
        <h3>コンテンツ重視？</h3>
        <p>SEO対策はGoogleが常に進化しつづけているため、ホームページの内容が充実していないと上位表示が難しいと言われますが、基本的な事が出来ていないばかりにせっかく作ったホームページが上位に表示されずにいるのはとてももったいない事です。</p>
        
        <ul className="list03">
            <li><FontAwesomeIcon icon={faCheck} />地域名や業種に関連したSEO対策は比較的容易</li>
            <li><FontAwesomeIcon icon={faCheck} />ソース変更で検索上位表示の可能性がある</li>
            <li><FontAwesomeIcon icon={faCheck} />サイト内リンクなど内部調整で検索上位表示の可能性がある</li>
            <li><FontAwesomeIcon icon={faCheck} />ライバルサイトとの比較で検索上位表示の可能性がある</li>
        </ul>

        <h4>お知らせ頂いたキーワードをもとにホームページの検索順位チェックを行いSEO対策のお見積をさせて頂きます。</h4>

        <p>キーワードにもよりますがおおよその金額は次のとおりです。</p>

        <table className="legal_notice">
            <tr>
            <th>期調整費</th><td>33,000円（税込）～</td>
            </tr>
            <tr>
                <th>月額費用</th><td>3,300円（税込）～</td>
            </tr>
        </table>

        <ul className="list02">
            <li><FontAwesomeIcon icon={faCheck} />※Googleでのサイト検索順位を毎日計測して対策を行います。</li>
            <li><FontAwesomeIcon icon={faCheck} />※サイト構造の変更をお願いする場合があります。</li>
            <li><FontAwesomeIcon icon={faCheck} />※サイトの内容が不足している場合はコンテツの追加をお願いする場合があります。</li>
            <li><FontAwesomeIcon icon={faCheck} />※施策の内容はホームページの内部調整と外部リンクになります。</li>
            <li><FontAwesomeIcon icon={faCheck} />※内部調整については変更箇所をお伝えする事は出来ません。</li>
            <li><FontAwesomeIcon icon={faCheck} />※対策後すぐに解約も可能ですが3ヶ月以上継続して頂く事をおすすめします。</li>
            <li><FontAwesomeIcon icon={faCheck} />※キーワードやサイトの状況によってはサービスをお断りする場合もあります。</li>
        </ul>
        
        <h3>お見積りはこちら</h3>
        <p>そこで、業種や地域名に関連したキーワードで検索上位表示をご希望の方に、<br />
            狙ったキーワードで検索順位上位表示可能かどうかを無料でお見積もりさせて頂きます。<br />
            下記ボタンより、お見積りください。</p>
        <p className="center"><img src="/images/img_call.png" alt="" /></p>
        <p className="center"><Link to="/region-seo/seo-form/"><img src="/images/contact_bt.png" alt="メールでのお申し込みはこちら" width={760} height={114} /></Link></p>

        

    </Layout>
      
    </>
  )
}

export const Head = () => (
    <>
        <Seo
            title2="地域と業種に特化したSEO対策 | blancのSEOで検索順位を上げる！"
            description="地域と業種に特化したSEO対策で、あなたのビジネスを検索結果の上位に！ホームページ作成からリニューアル、スマホ対応まで、あなたのビジネスをサポートします。"
        />
    </>
  )