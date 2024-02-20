import React from 'react';

import { graphql, Link } from 'gatsby';

import Header from '../components/Header';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const PortfolioPage = ({ data }) => {
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
      <Layout>
        <h2 className='page_title01 mt0'>制作実績</h2>

        <div className='flex-wrap'>
          {data.allMicrocmsPortfolio.edges.map(({ node }) => (
            <>
              <div className='works_box'>
                <Link to={'/portfolio/' + node.portfolioId + '/'} className='works_img'>
                  <img src={node.eyecatch.url + '?fm=webp'} width={370} height={277} alt={node.title + 'サムネイル画像'} loading='lazy' />
                </Link>
                <p>
                  <Link to={'/portfolio/' + node.portfolioId + '/'}>{node.title}</Link>
                </p>
              </div>
            </>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default PortfolioPage;

export const Head = () => (
  <>
    <body id='pagetop' />
    <Seo title='制作実績一覧' />
  </>
);

export const query = graphql`
  query ($skip: Int, $limit: Int) {
    allMicrocmsPortfolio(sort: { date: DESC }, limit: $limit, skip: $skip) {
      totalCount
      edges {
        node {
          id
          portfolioId
          title
          eyecatch {
            url
          }
          date(formatString: "YYYY年MM月DD日")
        }
      }
    }
  }
`;
