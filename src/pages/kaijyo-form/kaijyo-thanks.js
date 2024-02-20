import React from 'react';
import { Link } from 'gatsby';

import Seo from '../../components/Seo';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
const KaijyoFormThanks = () => {
  return (
    <>
      <Header />

      <div id='mainimage-sub'>
        <h1>配信停止手続き完了</h1>
        <p>Unsubscribe Completed</p>
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
            <Link to='/kaijyo-form/' itemProp='item'>
              <span>配信停止手続き</span>
            </Link>
            <meta itemProp='position' content='2' />
          </li>
          <li>
            <span>配信停止手続き完了</span>
            <meta itemProp='position' content='3' />
          </li>
        </ul>
      </div>

      <Layout>
        <h2 className='dark-red bold center'>配信停止手続き完了</h2>

        <p className='center'>配信亭処理を行いました。</p>

        <p className='center'>
          【配信停止手続き後、1週間以上メールが停止されない場合】
          <br />
          お手元に届いているメールを弊社サポートデスク宛（business@blanc.to）に転送してください。
        </p>
      </Layout>
    </>
  );
};

export default KaijyoFormThanks;

export const Head = () => (
  <>
    <Seo title='配信停止手続き' />
  </>
);
