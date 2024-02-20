import React from 'react';
import Header from '../../../components/Header';
import Layout from '../../../components/Layout';
import Seo from '../../../components/Seo';

import { Link } from 'gatsby';

const EstimatesThanks = () => {
  return (
    <>
      <Header />
      <div id='mainimage-sub'>
        <h1>常時SSL設定のお見積もり依頼ありがとうございました</h1>
        <p>Thanks</p>
      </div>
      <div id='breadcrumb'>
        <ul itemType='https://schema.org/BreadcrumbList'>
          <li className='breadcrumb__item' itemProp='itemListElement' itemType='https://schema.org/ListItem'>
            <Link to='/' itemProp='item'>
              <span itemProp='name'>ホーム</span>
            </Link>
            <meta itemProp='position' content='1' />
          </li>
          <li>
            <Link to='/recommendation-ssl/' itemprop='item'>
              <span itemprop='name'>常時SSL設定</span>
            </Link>
            <meta itemprop='position' content='2' />
          </li>
          <li>
            <Link to='/recommendation-ssl/estimates-ssl/' itemprop='item'>
              <span>常時SSL設定お見積依頼フォーム</span>
            </Link>
            <meta itemProp='position' content='3' />
          </li>
          <li>
            <span>常時SSL設定のお見積もり依頼ありがとうございました</span>
            <meta itemProp='position' content='4' />
          </li>
        </ul>
      </div>
      <Layout>
        <h3>常時SSL設定のお見積もり依頼ありがとうございました</h3>

        <p className='center'>
          お見積り依頼フォームより確認メールを送信いたしましたのでご確認ください。
          <br />
          なお、お見積りに関するお問い合わせがございましたら、
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

export default EstimatesThanks;

export const Head = () => (
  <>
    <Seo title='常時SSL設定のお見積もり依頼ありがとうございました' />
  </>
);
