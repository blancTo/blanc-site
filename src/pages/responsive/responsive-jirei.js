import React from 'react';
import Seo from '../../components/Seo';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
const ResponsiveJirei = () => {
  return (
    <>
      <Header />
      <div id='mainimage-sub'>
        <h1>スマホ対応・レスポンシブ化事例</h1>
        <p>Responsive Jirei</p>
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
            <a href='/responsive/' itemProp='item'>
              <span>スマホ化・レスポンシブ対応</span>
            </a>
            <meta itemProp='position' content='2' />
          </li>
          <li>
            <span>スマホ対応・レスポンシブ化事例</span>
            <meta itemProp='position' content='3' />
          </li>
        </ul>
      </div>
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

export const Head = () => (
  <>
    <Seo title='スマホ対応・レスポンシブ化事例' />
  </>
);
