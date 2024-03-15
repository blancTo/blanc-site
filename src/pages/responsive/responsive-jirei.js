import React from 'react';
import Seo from '../../components/Seo';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
const pagemeta = {
  title: `スマホ化・レスポンシブ対応 | ホームページ修正・管理のご依頼は有限会社blancへ！他社作成のHPもご相談下さい。`,//このページのタイトルタグに入る情報
  description: `スマホ化でアクセスアップ！ スマホ化の流れ 最近のスマートフォン普及にはめざましいものがあります。 今やパソコンと同じようにスマホでネットを見るのが普通になっています。 そのためホームページへのアクセスも業種によっては、スマホ経由の方が多い状況となっています。`,//このページのディスクリプション
  parentSubtitle:`スマホ化・レスポンシブ対応`,//親ページのページ名構造化パンくずのため
  subtitle: `スマホ対応・レスポンシブ化事例`,//メインイメージ部分のテキスト
  parentSlug: `responsive`,//親ページのスラッグ構造化パンくずのため
  slug: `responsive-jirei`,//このページのslug  
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
          "item": {
            "@id": `${siteurl}`,
            "name": "ホーム"
          }
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": {
            "@id": `${siteurl}${pagemeta.parentSlug}/`,
            "name": `${pagemeta.parentSubtitle}`
          }
        },
        {
          "@type": "ListItem",
          "position": 3,
          "item": {
            "@id": `${siteurl}${pagemeta.parentSlug}/${pagemeta.slug}/`,
            "name": `${pagemeta.subtitle}`
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": `${siteurl}${pagemeta.slug}/`,
      "url": `${siteurl}${pagemeta.slug}/`,
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
    <Seo title2={pagemeta.title} description={pagemeta.description} article={true} />
    <script type='application/ld+json'>{JSON.stringify(jsonLd)}</script>
  </>
);

const ResponsiveJirei = () => {
  return (
    <>
      <Header />
      <div id='mainimage-sub'>
        <h1>{pagemeta.subtitle}</h1>
        <p>Responsive Jirei</p>
      </div>
      <nav aria-label='Breadcrumb' id='breadcrumb'>
        <ul>
          <li>
            <a href='https://www.blanc.to/'>ホーム</a>
          </li>
          <li><Link to={siteurl + "/" + pagemeta.parentSlug + "/"}>{pagemeta.parentSubtitle}</Link></li>
          <li>{pagemeta.subtitle}</li>
        </ul>
      </nav>
      
      <Layout>
        <h3>アトリエ　ヴィーナス様</h3>
        <p className='center'>
          <StaticImage src='../../images/sp_jirei/sp_jirei_pic13.jpg' alt='' />
        </p>
        <h3>宮古人形様</h3>
        <p className='center'>
          <StaticImage src='../../images/sp_jirei/sp_jirei_pic12.jpg' alt='' />
        </p>
        <h3>セラピールーム オーブ様</h3>
        <p className='center'>
          <StaticImage src='../../images/sp_jirei/sp_jirei_pic11.jpg' alt='' />
        </p>
        <h3>株式会社ARTISTIC&amp;Co様</h3>
        <p className='center'>
          <StaticImage src='../../images/sp_jirei/sp_jirei_pic01.jpg' alt='' />
        </p>
        <h3>ライセンシードライバーズサポート様</h3>
        <p className='center'>
          <StaticImage src='../../images/sp_jirei/sp_jirei_pic10.jpg' alt='' />
        </p>
        <h3>エステサロンしずく様</h3>
        <p className='center'>
          <StaticImage src='../../images/sp_jirei/sp_jirei_pic09.jpg' alt='' />
        </p>
        <h3>タンドゥース様</h3>
        <p className='center'>
          <StaticImage src='../../images/sp_jirei/sp_jirei_pic08.jpg' alt='' />
        </p>
        <h3>カーフレーム様</h3>
        <p className='center'>
          <StaticImage src='../../images/sp_jirei/sp_jirei_pic07.jpg' alt='' />
        </p>
        <h3>スピリチュアルライフ研究所様</h3>
        <p className='center'>
          <StaticImage src='../../images/sp_jirei/sp_jirei_pic06.jpg' alt='' />
        </p>
        <h3>馬場聖鍼堂様</h3>
        <p className='center'>
          <StaticImage src='../../images/sp_jirei/sp_jirei_pic05.jpg' alt='' />
        </p>
        <h3>ゴルフフィールド様</h3>
        <p className='center'>
          <StaticImage src='../../images/sp_jirei/sp_jirei_pic04.jpg' alt='' />
        </p>
        <h3>コンセプト様</h3>
        <p className='center'>
          <StaticImage src='../../images/sp_jirei/sp_jirei_pic02.jpg' alt='' />
        </p>

        <p className='center'>
          <a href='/responsive/' className='bt01'>
            前のページに戻る
          </a>
        </p>
      </Layout>
    </>
  );
};

export default ResponsiveJirei;
