import React from 'react';
import { Link } from "gatsby";
import Mokuji from './Mokuji';
import SearchForm from './SearchForm';

const BlogSidebar = ({ headings, data }) => {
  return (
    <aside id='sidebar'>
      <div className='side-inner'>
        <SearchForm />
        <Mokuji headings={headings} />
        <h3>最近の記事</h3>
        <ul className='post_list'>
          {data.allMicrocmsBlog.edges.map(({ node }) => (
            <li key={node.blogId}>
              <Link to={'/blog/' + node.blogId + '/'} className="news_img">
                <img src={node.eyecatch.url + '?fm=webp'} width={80} alt={node.title + 'サムネイル画像'} loading="lazy" />
              </Link>
              <Link to={'/blog/' + node.blogId + '/'} className='news_txt'>
                {node.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default BlogSidebar;