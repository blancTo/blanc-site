import React, { useState } from 'react';
import { Link } from 'gatsby'
import SearchForm from './SearchForm';

const SearchResult = ({ results }) => {
  return (
    <div>      
      {results.length === 0 ? (
        <p className='center'>検索ボックスへキーワードを入力してください</p>
      ) : (
        
        <div className="flex-wrap mb60">
        {results.map((post) => (
          <div className="news_box" key={post.blogId}>
            <div className="news_img">
            <Link to={'/blog/' + post.blogId}><img src={post.eyecatch.url + '?fm=webp'} alt={post.title + 'サムネイル画像'} loading="lazy" /></Link>
            </div>
            <div className="news_txt">
            <Link to={'/blog/' + post.blogId}>{post.title}</Link>
            </div>
          </div>
        ))}
      </div>   
      )}
    </div>
  );
};

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <>
      <div className='flex-center'>
        <div className='ichiran_bt'><Link to="/blog/" className='bt01'>記事一覧へ戻る</Link></div>
        <div className='search_form_box'><SearchForm onSearch={handleSearch} /></div>
      </div>
      <SearchResult results={searchResults} />
    </>
  );
};

export default SearchPage;
