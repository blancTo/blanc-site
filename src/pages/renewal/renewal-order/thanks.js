import React from 'react';
import { Link } from 'gatsby';
import Header from '../../../components/Header';
import Layout from '../../../components/Layout';
import Seo from '../../../components/Seo';

const RenewalOrderThanks = () => {
  return (
    <>
      <Header />
      <div id='mainimage-sub'>
        <h1>
          ホームページリニューアルの
          <br />
          お申し込みありがとうございました
        </h1>
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
            <Link to='/renewal/' itemprop='item'>
              <span itemprop='name'>ホームページ作成やリニューアル</span>
            </Link>
            <meta itemprop='position' content='2' />
          </li>
          <li>
            <Link to='/renewal/renewal-order/' itemprop='item'>
              <span>「ホームページリニューアル」お申し込みフォーム</span>
            </Link>
            <meta itemProp='position' content='3' />
          </li>
          <li>
            <span>「ホームページリニューアル」のお申し込みありがとうございました</span>
            <meta itemProp='position' content='4' />
          </li>
        </ul>
      </div>
      <Layout>
        <h3 className='center'>「ホームページリニューアル」のお申し込みありがとうございました</h3>
        <p className='center'>
          「ホームページリニューアル」お申し込み確認メールを送信しました。
          <br />
          なお、お申し込みに関するお問い合わせがございましたら、
        </p>
        <p className='center'>
          TEL:0833-45-3838　もしくは　<a href='mailto:info@blanc.to'>info@blanc.to</a>
        </p>
        <p className='center'>までお問い合わせください。よろしくお願いいたします。</p>
        <p className='center'>
          <Link to='/renewal/'>
            <span className='bt02'>元のページに戻る</span>
          </Link>
        </p>
      </Layout>
    </>
  );
};

export default RenewalOrderThanks;

export const Head = () => (
  <>
    <Seo title='ホームページリニューアルのお申し込みありがとうございました' />
  </>
);
