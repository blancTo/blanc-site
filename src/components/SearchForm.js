import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const SearchForm = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const data = useStaticQuery(graphql`
    query {
        allMicrocmsBlog {
            nodes {
              title
              body
              blogId
              eyecatch {
                url
              }
            }
        }
    }
  `);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const filteredPosts = data.allMicrocmsBlog.nodes.filter((node) =>
      node.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      node.body.toLowerCase().includes(searchTerm.toLowerCase())  // 本文データとキーワードを比較
    );
    onSearch(filteredPosts);
  };

  return (
    <form onSubmit={handleFormSubmit} className='search_form'>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        className='search_txt'
      />
      <button type="submit" className='search_bt'>検索</button>
    </form>
  );
};

export default SearchForm;