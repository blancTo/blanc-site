import React from 'react';
import { Link, graphql } from 'gatsby';

const Works = ({ data }) => {
  const portfolios = data.allMicrocmsPortfolio.edges;
  // ランダムな20件のポートフォリオを選択
  const randomPortfolios = [...portfolios].sort(() => 0.5 - Math.random()).slice(0, 8);
  return (
    <>
      <div className='flex-wrap'>
        {randomPortfolios.map(({ node }) => (
          <div className='works_box' key={node.id}>
            <Link href={'/portfolio/' + node.portfolioId + '/'} className='works_img'>
              <img src={node.eyecatch.url + '?fm=webp'} width={370} height={277} alt={node.title + 'サムネイル画像'} loading='lazy' />
            </Link>
            <p>
              <Link href={'/portfolio/' + node.portfolioId + '/'}>{node.title}</Link>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export const query = graphql`
  query {
    allMicrocmsPortfolio {
      edges {
        node {
          eyecatch {
            url
          }
          title
          date(formatString: "YYYY年MM月DD日")
          portfolioId
        }
      }
    }
  }
`;

export default Works;
