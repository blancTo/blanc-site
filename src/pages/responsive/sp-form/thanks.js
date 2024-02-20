import React from 'react';
import { Link } from 'gatsby';
import Header from '../../../components/Header';
import Layout from '../../../components/Layout';
import Seo from '../../../components/Seo';

const SpFormThanks = () => {
  return (
    <>
      <Header />
      <div id='mainimage-sub'>
        <h1>スマホ対応お見積もり依頼ありがとうございました。</h1>
        <p>Thanks</p>
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
            <Link to='/responsive/' itemprop='item'>
              <span itemprop='name'>スマホ化・レスポンシブ対応</span>
            </Link>
            <meta itemprop='position' content='2' />
          </li>
          <li>
            <Link to='/responsive/sp-form/' itemprop='item'>
              <span>スマホ対応お見積りフォーム</span>
            </Link>
            <meta itemProp='position' content='3' />
          </li>
          <li>
            <span>スマホ対応お見積りフォーム</span>
            <meta itemProp='position' content='4' />
          </li>
        </ul>
      </div>
      <Layout>
        <h3>スマホ対応のお見積もり依頼ありがとうございました。</h3>

        <p className='center'>
          スマホ対応お見積もりフォームより確認メールを送信いたしましたのでご確認ください。
          <br />
          なお、お申し込みに関するお問い合わせがございましたら、
        </p>

        <p className='center'>
          TEL:0833-45-3838　もしくは　<a href='mailto:info@blanc.to'>info@blanc.to</a>
        </p>

        <p className='center'>までお問い合わせください。よろしくお願いいたします。</p>

        <p className='center'>
          <Link to='/'>
            <span className='bt02'>トップページに戻る</span>
          </Link>
        </p>
      </Layout>
    </>
  );
};

export default SpFormThanks;

export const Head = () => (
  <>
    <Seo title='スマホ対応お見積もり依頼ありがとうございました' />
  </>
);
