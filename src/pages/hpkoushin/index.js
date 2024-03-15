import React from 'react';
import Seo from '../../components/Seo';
import Header from '../../components/Header';
import Layout from '../../components/Layout';

import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faUser } from '@fortawesome/free-solid-svg-icons';

const pagemeta = {
  title: `ホームページ修正・更新 | 他社作成HPも対応 - 有限会社blanc`,//このページのタイトルタグに入る情報
  description: `ホームページの修正や更新に困っていませんか？blancはあなたのウェブサイトを最適化し、集客力を高めます。`,//このページのディスクリプション
  subtitle: `ホームページ修正・更新`,//メインイメージ部分のテキスト
  slug: `hpkoushin`,//このページのslug
};

const siteurl = 'https://www.blanc.to/';

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": `${siteurl}`,
          "name": "ホーム"          
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": `${siteurl}${pagemeta.slug}`,
          "name": `${pagemeta.subtitle}`          
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": `${siteurl}${pagemeta.slug}`,
      "url": `${siteurl}${pagemeta.slug}`,
      "name": `${pagemeta.title}`,
      "description": `${pagemeta.description}`,
      "inLanguage": "ja",
      "isPartOf": { "@id": `${siteurl}#website` },
      "breadcrumb": { "@id": `${siteurl}#breadcrumblist` }
    },
    {
      "@type": "WebSite",
      "@id": `${siteurl}#website`,
      "url": `${siteurl}`,
      "name": `ホームページ修正・管理のご依頼は有限会社blancへ！他社作成のHPもご相談下さい。`,
      "description": `地域ナンバーワンのキーワードに特化したSEO対策の実績多数！集客可能なホームページ作成はもちろんホームページリニューアルやスマホ対応もお任せ下さい。`,
      "publisher": {
        "@type": "Organization",
        "name": "有限会社blanc",
        "url": `${siteurl}`
      },
      "inLanguage": "ja"
    }
  ]
};

export const Head = () => (
  <>
    <body className={pagemeta.slug} />  
    <Seo title2={pagemeta.title} description={pagemeta.description} />
    <script type='application/ld+json'>{JSON.stringify(jsonLd)}</script>
  </>
);

const HpkoushinIndex = () => {
  return (
    <>
      <Header />

      <div id='mainimage-sub'>
        <h1>{pagemeta.subtitle}</h1>
        <p>Web site updates</p>
      </div>
      <nav aria-label='Breadcrumb' id='breadcrumb'>
        <ul>
          <li>
            <a href={siteurl}>ホーム</a>
          </li>
          <li>{pagemeta.subtitle}</li>
        </ul>
      </nav>

      <Layout>
        <h2 className='mt0 center'>ホームページ修正・更新代行 ～他社制作サイトもOK～</h2>

        <div className='list03'>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              ホームページを作ってもらった人に連絡がとれない。
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              ホームページ担当者が急にやめてしまった！
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              せっかく作ったホームページなのに、忙しくて更新できない。
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              ホームページ修正作業に手が回らない。
            </li>
          </ul>
        </div>

        <h3>そんなお悩みをお持ちの方へ。</h3>

        <h4>ホームページの情報古くなっていませんか？</h4>

        <p>ホームページを見てくれるお客様は古い情報のままだと敏感に感じ取りすぐに去っていってしまします。そのような状況ではせっかく作ったホームページもあまり意味を持ちません。 ところが、ホームページを修正しようと思うとこんな問題が発生します。</p>

        <ul className='list02'>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            画像の加工などが分からない。
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            金額変更しようと思ったらそこだけ変更出来ない。
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            ホームページを作ってもらった人に連絡が取れない。
          </li>
        </ul>

        <h4>
          そんな時はblancの<strong>ホームページ修正・更新サービスへ！</strong>
        </h4>

        <p className='mtb20'>延べ800社を超えるホームページの制作・更新の経験を持つ私たちに、修正や更新のご要望をお知らせください。もちろん、ワードプレスや楽天などのECサイトも対応可能です。</p>

        <div className='koushin_naiyo'>
          <p className='bold txt30 blue'>こんなお悩みなら、blancへお任せください！</p>
          <p className='larger bold mar-bot0'>
            基本料金<span className='dark-red'>5,500円～</span>でホームページを修正・変更致します。
          </p>
          <p className='mt0'>※テキストの修正は基本料金に含まれています。</p>
          <p className='txt30 bold'>主な作業料金</p>
          <div className='koushin_cont'>
            <div className='koushin_box'>
              <div className='bg_01'>
                <p className='txt160p bold center'>テキスト修正</p>
                <p className='txt160p bold center'>0円</p>
                <p>部分的な文章修正作業を行います。</p>
              </div>
            </div>
            <div className='koushin_box'>
              <div className='bg_02'>
                <p className='txt160p bold center'>写真差し替え</p>
                <p className='txt160p bold center'>550円</p>
                <p>掲載中の写真を新しいものに差し替えます。</p>
              </div>
            </div>
            <div className='koushin_box'>
              <div className='bg_03'>
                <p className='txt160p bold center'>画像の加工</p>
                <p className='txt160p bold center'>2,200円～</p>
                <p>画像の切抜きや合成などの作業を行います。</p>
              </div>
            </div>
            <div className='koushin_box'>
              <div className='bg_04'>
                <p className='txt160p bold center'>バナー作成</p>
                <p className='txt160p bold center'>3,300円～</p>
                <p>画像などを加工してバナーを作成します。</p>
              </div>
            </div>
            <div className='koushin_box'>
              <div className='bg_05'>
                <p className='txt160p bold center'>ページの追加</p>
                <p className='txt160p bold center'>8,800円～</p>
                <p>新しくページを作成します。</p>
              </div>
            </div>
            <div className='koushin_box'>
              <div className='bg_06'>
                <p className='txt160p bold center'>動画設置</p>
                <p className='txt160p bold center'>11,000円～</p>
                <p>ご用意いただいた動画を設置します。</p>
              </div>
            </div>
            <div className='koushin_box'>
              <div className='bg_07'>
                <p className='txt160p bold center'>フォームの設置</p>
                <p className='txt160p bold center'>11,000円～</p>
                <p>お問い合わせフォーム等の設置作業を行います。</p>
              </div>
            </div>
          </div>
        </div>

        <h4>その他のご依頼としては次のような案件も承っております。</h4>

        <ul className='list02'>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            <a href='/renewal/'>ホームページリニューアル</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            <a href='/responsive/'>スマホ対応（レシポンシブ化）</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            <a href='/region-seo/'>SEO対策</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            <a href='/recommendation-ssl/'>常時SSL対応</a>
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            ホームページの引っ越し
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            地図や住所の変更
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            ショッピングカートの設置
          </li>
          <li>
            <FontAwesomeIcon icon={faCheck} />
            ワードプレスなどの更新や調整
          </li>
        </ul>

        <h4>お客様の声</h4>

        <ul className='list_voice'>
          <li>
            <FontAwesomeIcon icon={faUser} />
            以前頼んでいた方に頼めなくなりホームページが修正出来ずにとても困っていました。
            <br />
            素早く対応してくださり本当に助かりました。
            <br />
            東京都　I様
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} />
            ホームページが真っ白になった時はどうしようとかなり焦りましたがすぐに原因を見つけてもらい。
            <br />
            無事に表示出来るようになりました。ありがとうございました。
            <br />
            大阪府　N様
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} />
            ウェブサイトの修正は素人には、どれだけの知識・経験が必要なのかもわかりません。
            <br />
            けれどとてもわかりやすい料金体系で安心して依頼できました。
            <br />
            福岡県　Y様
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} />
            ホームページが安全ではありませんと表示が出ていて、気になりながらもよくわからなくて、そのままにしていたのですが、お願いしてよかったです。
            <br />
            この度は早急に対応をしていただき感謝しております。兵庫県　M様
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} />
            修正頂いた各ページ確認しました。
            <br />
            とても良いです。
            <br />
            ありがとうございます。
            <br />
            今後も動画の埋め込みや細かい修正、ページの新設などお願いすることもあるかと思いますので、その際にも是非お力添えをお願いできましたら幸いです。埼玉県　S様
          </li>
        </ul>

        <p className='center'>
          <img src='/images/img_call.png' alt='' />
        </p>
        <p className='center'>
          <Link to='/hpkoushin/toiawase/'>
            <img src='/images/contact_bt.png' alt='メールでのお申し込みはこちら' width={760} height={114} />
          </Link>
        </p>

        <h4>よくある質問</h4>

        <dl className='faq_box'>
          <dt>修正・更新の依頼をする際の流れは？</dt>
          <dd>まず、お問い合わせフォームまたは電話でご連絡いただき、具体的な修正・更新内容をお知らせください。その後、弊社からお見積もりを提出し、ご了承いただいたら作業を開始いたします。</dd>
          <dt>修正・更新にかかる時間はどれくらいですか？</dt>
          <dd>修正・更新の内容によりますが、一般的にはテキスト修正や写真の差し替えは即日〜数日、ページの追加や大規模な修正は1週間〜となります。</dd>
          <dt>他社で作成したホームページでも修正・更新は可能ですか？</dt>
          <dd>はい、他社で作成されたホームページでも修正・更新は承っております。詳細はお問い合わせください。</dd>
          <dt>修正・更新の料金はどのように決まりますか？</dt>
          <dd>料金は修正・更新の内容や作業時間によって異なります。具体的な料金はお見積もり時にお知らせいたします。</dd>
          <dt>修正・更新後のアフターサポートはありますか？</dt>
          <dd>はい、修正・更新後に発生した問題や不具合に関しては、一定期間無料でサポートいたします。</dd>
          <dt>SEO対策も一緒に依頼することはできますか？</dt>
          <dd>はい、SEO対策も同時に依頼することが可能です。詳しくはお問い合わせください。</dd>
          <dt>ホームページのバックアップは取ってくれますか？</dt>
          <dd>はい、作業前にホームページのバックアップを取ることが一般的です。安心してご依頼ください。</dd>
        </dl>

        <p className='center'>
          <img src='/images/img_call.png' alt='' />
        </p>
        <p className='center'>
          <Link to='/hpkoushin/toiawase/'>
            <img src='/images/contact_bt.png' alt='メールでのお申し込みはこちら' width={760} height={114} />
          </Link>
        </p>
      </Layout>
    </>
  );
};

export default HpkoushinIndex;