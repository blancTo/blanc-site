import React from 'react';
import Seo from '../../components/Seo';
import Header from '../../components/Header';
import Layout from '../../components/Layout';

const pagemeta = {
  title: `お問い合わせ | ホームページ修正・管理のご依頼は有限会社blancへ！他社作成のHPもご相談下さい。`,//このページのタイトルタグに入る情報
  description: `地域ナンバーワンのキーワードに特化したSEO対策の実績多数！集客可能なホームページ作成はもちろんホームページリニューアルやスマホ対応もお任せ下さい。`,//このページのディスクリプション
  subtitle: `お問い合わせ`,//メインイメージ部分のテキスト
  slug: `toiawase`,//このページのslug
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
    <Seo title2={pagemeta.title} description={pagemeta.description} article={true} />
    <script type='application/ld+json'>{JSON.stringify(jsonLd)}</script>
  </>
);

const ToiawasePage = () => {
  return (
    <>
      <Header />
      <div id='mainimage-sub'>
        <h1>{pagemeta.subtitle}</h1>
        <p>Contact</p>
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
        <h2>お問い合わせフォーム</h2>

        <p>
          お問い合わせは、こちらのメールフォームよりお気軽にご相談下さい。
          <br />
          なお、折り返しご連絡させていただく際に必要になりますので、メールアドレスはお間違えになりませんようご注意下さい。
        </p>

        <p>英数字は全て半角でご入力ください。</p>

        <p>
          <span className='must'>必須</span>は必ずご入力ください。
        </p>

        <form action='https://ssgform.com/s/LpEtduJ23DUS' method='post'>
          <div style={{ display: 'none' }}>
            <input type='text' name='wana' />
          </div>

          <table className='form'>
            <tr>
              <th>
                <span className='must'>必須</span>お名前
              </th>
              <td>
                <input type='text' name='お名前' size='45' required='required' />
              </td>
            </tr>
            <tr>
              <th>会社名</th>
              <td>
                <input type='text' name='会社名' size='45' />
              </td>
            </tr>
            <tr>
              <th>
                <span className='must'>必須</span>メールアドレス
              </th>
              <td>
                <input type='email' data-type='email' name='email' size='60' required='required' />
              </td>
            </tr>
            <tr>
              <th>電話番号</th>
              <td>
                <input type='tel' data-type='tel' name='電話番号' size='30' />
              </td>
            </tr>
            <tr>
              <th>お問い合わせ内容</th>
              <td>
                <textarea name='お問い合わせ内容' rows='10' cols='10'></textarea>
              </td>
            </tr>
          </table>

          <p className='center'>
            <button type='submit' className='bt02'>
              送信する
            </button>{' '}
            <button type='reset' className='bt02'>
              リセット
            </button>
          </p>
        </form>
      </Layout>
    </>
  );
};

export default ToiawasePage;

