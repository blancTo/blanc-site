import React, { useState } from 'react';
import SearchForm from '../components/SearchForm';

const SearchResult = ({ results }) => {
  return (
    <div>
      <h2>検索結果:</h2>
      {results.length === 0 ? (
        <p>該当する記事はありません。</p>
      ) : (
        <ul>
          {results.map((post) => (
            <li key={post.blogId}>
              <h3><a href={"/blog/" + post.blogId}>{post.title}</a></h3>
            </li>
          ))}
        </ul>
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
    <div>
      <h1>ブログ記事検索</h1>
      <SearchForm onSearch={handleSearch} />
      <SearchResult results={searchResults} />
    </div>
  );
};

export default SearchPage;
