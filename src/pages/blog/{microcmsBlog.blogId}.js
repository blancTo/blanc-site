import React from 'react';

import { graphql, Link } from 'gatsby';
import cheerio from 'cheerio';

import Seo from '../../components/Seo';
import Header from '../../components/Header';
import Layout from '../../components/BlogPageLayout';

import Prism from 'prismjs';

import 'prismjs/themes/prism-tomorrow.css';

const BlogPage = ({ data }) => {
  React.useEffect(() => {
    Prism.highlightAll(); // シンタックスハイライトを適用
  }, []);

  const extractHeadings = (body) => {
    const $ = cheerio.load(body);
    const headings = [];

    $('h2, h3, h4').each((index, element) => {
      const $element = $(element);
      headings.push({
        id: $element.attr('id'),
        title: $element.text(),
      });
    });

    return headings;
  };

  const body = data.microcmsBlog.body;
  const headings = extractHeadings(body) || [];
  return (
    <>
      <Header />
      <div id='mainimage-sub'>
        <p className='pagetitle'>ブログ</p>
        <p>Information&amp;Blog</p>
      </div>
      <div id='breadcrumb'>
        <ul itemType='https://schema.org/BreadcrumbList'>
          <li className='breadcrumb__item' itemProp='itemListElement' itemType='https://schema.org/ListItem'>
            <a href='https://www.blanc.to' itemProp='item'>
              <span itemProp='name'>ホーム</span>
            </a>
            <meta itemProp='position' content='1' />
          </li>
          <li className='breadcrumb__item' itemProp='itemListElement' itemType='https://schema.org/ListItem'>
            <Link to='/blog/' itemProp='item'>
              <span itemProp='name'>ブログ</span>
            </Link>
            <meta itemProp='position' content='2' />
          </li>
          <li className='breadcrumb__item' itemProp='itemListElement' itemType='https://schema.org/ListItem'>
            <span itemProp='name'>{data.microcmsBlog.title}</span>
            <meta itemProp='position' content='3' />
          </li>
        </ul>
      </div>

      <Layout headings={headings}>
        <h1 className='title'>
          {data.microcmsBlog.title}
          <br />
          <span className='date'>
            更新日：<time dateTime={data.microcmsBlog.createdAt}>{data.microcmsBlog.updatedAt}</time>
          </span>
        </h1>

        <div className='post_img'>
          <img src={data.microcmsBlog.eyecatch.url} alt='' />
        </div>

        <div dangerouslySetInnerHTML={{ __html: body }} className='post_body' />
      </Layout>
    </>
  );
};

export default BlogPage;

export const Head = ({ data }) => {
  const maxTextLength = 80;

  const body = data.microcmsBlog.body;
  const truncatedBody = body.replace(/<[^>]+>/g, '');
  const limitedBody = truncatedBody.length > maxTextLength ? truncatedBody.slice(0, maxTextLength) + '...' : truncatedBody;

  return (
    <>
      <Seo title2={data.microcmsBlog.title} description={limitedBody} />
    </>
  );
};

export const query = graphql`
  query ($id: String) {
    microcmsBlog(id: { eq: $id }) {
      blogId
      title
      date(formatString: "YYYY年MM月DD日")
      updatedAt(formatString: "YYYY年MM月DD日")
      createdAt(formatString: "YYYY-MM-DDTHH:MM")
      body
      eyecatch {
        url
      }
    }
  }
`;
