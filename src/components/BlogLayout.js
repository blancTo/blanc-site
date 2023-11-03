import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Footer from './Footer';
import Contact from './ContactParts';

import PageTop from './PageTop';
import SlideIn from './SlideIn';

const BlogLayout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      allMicrocmsBlog(sort: { date: DESC }, limit: 5, skip: 0) {
        edges {
          node {
            title
            date(formatString: "YYYY年MM月DD日")
            eyecatch {
              url
            }
            blogId
          }
        }
        totalCount
      }
    }
  `);
  return (
    <>
      <PageTop />
      <SlideIn />
      <main role='main' id='post'>
        <article id='subpage'>
          <div className='main-content'>{children}</div>
        </article>
        <aside id='sidebar'>
          <div className='side-inner'>
            <h3>最近の記事</h3>
            <ul className='post_list'>
              {data.allMicrocmsBlog.edges.map(({ node }) => (
                <>
                  <li>
                    <Link to={'/blog/' + node.blogId + '/'} className='news_img'>
                      <img src={node.eyecatch.url + '?fm=webp'} width={80} alt={node.title + 'サムネイル画像'} loading='lazy' />
                    </Link>
                    <Link to={'/blog/' + node.blogId + '/'} className='news_txt'>
                      {node.title}
                    </Link>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </aside>
      </main>
      <Contact />
      <Footer />
    </>
  );
};

export default BlogLayout;
