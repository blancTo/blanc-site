import React, { useState } from 'react';
import { Link } from 'gatsby'
import SearchForm from './SearchForm';

const SearchResult = ({ results }) => {
  return (
    <div>      
      {results.length === 0 ? (
        <p className='center'>検索するキーワードを入力してください</p>
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
      <h2>関連ページを検索する</h2>
      <SearchForm onSearch={handleSearch} />
      <SearchResult results={searchResults} />
    </>
  );
};

export default SearchPage;
