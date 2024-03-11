import React from 'react';
import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';

const pagemeta = {
  title: `会社概要 | ホームページ修正・管理のご依頼は有限会社blancへ！他社作成のHPもご相談下さい。`,//このページのタイトルタグに入る情報
  subtitle: `会社概要`,//メインイメージ部分のテキスト
  description: `地域ナンバーワンのキーワードに特化したSEO対策の実績多数！集客可能なホームページ作成はもちろんホームページリニューアルやスマホ対応もお任せ下さい。`,//このページのディスクリプション
  slug: `company`,//このページのslug
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
            "@id": `${siteurl}/${pagemeta.slug}`,
            "name": `${pagemeta.subtitle}`
          }
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": `${siteurl}/${pagemeta.slug}`,
      "url": `${siteurl}/${pagemeta.slug}`,
      "name": `${pagemeta.title}`,
      "description": `${pagemeta.description}`,
      "inLanguage": "ja",
      "isPartOf": { "@id": `${siteurl}#website` },
      "breadcrumb": { "@id": `${siteurl}#breadcrumblist` }
    },
    {
      "@type": "WebSite",
      "@id": `${siteurl}/#website`,
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

const company = () => {
  return (
    <>
      <Header />

      <div id='mainimage-sub'>
        <h1>{pagemeta.title}</h1>
        <p>Company</p>
      </div>
      <nav aria-label='Breadcrumb' id='breadcrumb'>
        <ul>
          <li>
            <a href='https://www.blanc.to/'>ホーム</a>
          </li>
          <li>{pagemeta.subtitle}</li>
        </ul>
      </nav>

      <Layout>
        <h2>会社概要</h2>
        <table summary='会社概要' className='legal_notice'>
          <tbody>
            <tr>
              <th>会社名</th>
              <td>有限会社blanc</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>〒744-0013 山口県下松市栄町3丁目3-14</td>
            </tr>
            <tr>
              <th>設立</th>
              <td>2003年4月</td>
            </tr>
            <tr>
              <th>資本金</th>
              <td>3,000,000円</td>
            </tr>
            <tr>
              <th>役員</th>
              <td>取締役　榮島一博</td>
            </tr>
            <tr>
              <th>事業内容</th>
              <td>ウェブサイト制作・ウェブコンサルティング</td>
            </tr>
            <tr>
              <th>連絡先</th>
              <td>電話 0833-45-3838 FAX 0833-45-3883</td>
            </tr>
            <tr>
              <th>E-mailアドレス</th>
              <td>info@blanc.to</td>
            </tr>
          </tbody>
        </table>

        <h2>特定商取引法に基づく表示</h2>

        <table summary='特定商取引法に基づく表示' className='legal_notice'>
          <tbody>
            <tr>
              <th>販売業者名</th>
              <td>有限会社blanc</td>
            </tr>
            <tr>
              <th>販売責任者名</th>
              <td>榮島一博</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>〒744-0013 山口県下松市栄町3丁目3-14</td>
            </tr>
            <tr>
              <th>連絡先</th>
              <td>
                <a href='mailto:info@blanc.to'>info@blanc.to</a>
              </td>
            </tr>
            <tr>
              <th>申込の有効期限</th>
              <td>お申し込みより1週間</td>
            </tr>
            <tr>
              <th>お支払い期限</th>
              <td>お打ち合わせ後1週間</td>
            </tr>
            <tr>
              <th>商品引渡し時期</th>
              <td>通常約1ヶ月</td>
            </tr>
            <tr>
              <th>返品について</th>
              <td>お客様都合によるキャンセルはできません。</td>
            </tr>
            <tr>
              <th>支払方法</th>
              <td>銀行振込・PayPal決済</td>
            </tr>
            <tr>
              <th>商品代金以外の必要料金</th>
              <td>消費税</td>
            </tr>
          </tbody>
        </table>
      </Layout>
    </>
  );
};

export default company;
