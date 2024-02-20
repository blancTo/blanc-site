import React from 'react';
import Seo from '../../components/Seo';
import Header from '../../components/Header';
import Layout from '../../components/Layout';

const ToiawasePage = () => {
  return (
    <>
      <Header />
      <div id='mainimage-sub'>
        <h1>お問い合わせ</h1>
        <p>Contact</p>
      </div>
      <div id='breadcrumb'>
        <ul itemType='https://schema.org/BreadcrumbList'>
          <li className='breadcrumb__item' itemProp='itemListElement' itemType='https://schema.org/ListItem'>
            <a href='https://www.blanc.to' itemProp='item'>
              <span itemProp='name'>ホーム</span>
            </a>
            <meta itemProp='position' content='1' />
          </li>
          <li>
            <span>お問い合わせ</span>
            <meta itemProp='position' content='2' />
          </li>
        </ul>
      </div>
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

const jsonN = 'ホームページ修正・管理のご依頼は有限会社blanc',
  jsonS = 'toiawase',
  jsonD = '地域ナンバーワンのキーワードに特化したSEO対策の実績多数！集客可能なホームページ作成はもちろんホームページリニューアルやスマホ対応もお任せ下さい。';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      '@id': 'https://www.blanc.to/#breadcrumblist',
      itemListElement: [
        {
          '@type': 'ListItem',
          '@id': 'https://www.blanc.to/#listItem',
          position: 1,
          item: {
            '@type': 'WebPage',
            '@id': 'https://www.blanc.to/',
            name: `${jsonN}`,
            description: `${jsonD}`,
            url: 'https://www.blanc.to/',
          },
          nextItem: `https://www.blanc.to/${jsonS}#listItem`,
        },
        {
          '@type': 'ListItem',
          '@id': `https://www.blanc.to/${jsonS}#listItem`,
          position: 2,
          item: {
            '@type': 'WebPage',
            '@id': `https://www.blanc.to/${jsonS}`,
            name: `お遠い合わせ｜${jsonN}`,
            description: `${jsonD}｜お問い合わせページ`,
            url: `https://www.blanc.to/${jsonS}`,
          },
          nextItem: `https://www.blanc.to/${jsonS}#listItem`,
        },
      ],
    },
    {
      '@type': 'Person',
      '@id': `https://www.blanc.to/${jsonS}#person`,
    },
    {
      '@type': 'WebPage',
      '@id': `https://www.blanc.to/${jsonS}#webpage`,
      url: `https://www.blanc.to/${jsonS}`,
      name: `${jsonN}`,
      description: `${jsonD}`,
      inLanguage: 'ja',
      isPartOf: {
        '@id': `https://www.blanc.to/${jsonS}#website`,
      },
      breadcrumb: {
        '@id': `https://www.blanc.to/${jsonS}#breadcrumblist`,
      },
      datePublished: '2022-10-04T01:06:53+09:00',
      dateModified: '2023-03-18T23:31:17+09:00',
    },
    {
      '@type': 'WebSite',
      '@id': `https://www.blanc.to/${jsonS}#website`,
      url: `https://www.blanc.to/${jsonS}`,
      name: `${jsonN}`,
      description: `${jsonS}`,
      inLanguage: 'ja',
      publisher: {
        '@id': `https://www.blanc.to/${jsonS}#person`,
      },
    },
  ],
};

export const Head = () => (
  <>
    <Seo title='お問い合わせ' />
    <script type='application/ld+json'>{JSON.stringify(jsonLd)}</script>
  </>
);
