import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../../components/Seo';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Service from '../../components/Service';

const PortfolioIndex = ({ data }) => {
  const portfolios = data.allMicrocmsPortfolio.edges;
  // ランダムな20件のポートフォリオを選択
  const randomPortfolios = [...portfolios].sort(() => 0.5 - Math.random()).slice(0, 20);

  return (
    <>
      <Header />
      <div id='mainimage-sub'>
        <h1>制作実績</h1>
        <p>Portfolio</p>
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
            <span>制作実績</span>
            <meta itemProp='position' content='2' />
          </li>
        </ul>
      </div>
      <Layout slug='portfolio'>
        <p className='bold center txt20'>
          これまでの制作実績の一部をご紹介します。
          <br />
          その他の実績ついてはお問い合わせください。
        </p>
        <div className='flex-wrap'>
          {randomPortfolios.map(({ node }) => (
            <div className='works_box' key={node.id}>
              <a href={'/portfolio/' + node.portfolioId + '/'} className='works_img'>
                <img src={node.eyecatch.url + '?fm=webp'} width={370} height={277} alt={node.title + 'サムネイル画像'} loading='lazy' />
              </a>
              <p>
                <a href={'/portfolio/' + node.portfolioId + '/'}>{node.title}</a>
              </p>
            </div>
          ))}
        </div>
        <Service />
      </Layout>
    </>
  );
};

export const Head = () => (
  <>
    <body className='portfolio' />
    <Seo title='制作実績' />
  </>
);

export const query = graphql`
  query {
    allMicrocmsPortfolio(sort: { date: DESC }) {
      edges {
        node {
          title
          portfolioId
          date(formatString: "YYYY年MM月DD日")
          eyecatch {
            url
          }
        }
      }
    }
  }
`;

export default PortfolioIndex;
