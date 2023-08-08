import React, { useState, useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

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

  useEffect(() => {
    // input要素の取得
    const searchInput = document.querySelector('.search_txt');

    // input要素がクリックされた時のイベントリスナーを追加
    searchInput.addEventListener('click', () => {
      searchInput.removeAttribute('placeholder');
    });

    // input要素がフォーカスを失った時のイベントリスナーを追加
    searchInput.addEventListener('blur', () => {
      if (!searchInput.value) {
        searchInput.setAttribute('placeholder', '例 SEO SSG 等');
      }
    });

    // コンポーネントがアンマウントされる際にイベントリスナーを削除
    return () => {
      searchInput.removeEventListener('click', () => {
        searchInput.removeAttribute('placeholder');
      });
      searchInput.removeEventListener('blur', () => {
        if (!searchInput.value) {
          searchInput.setAttribute('placeholder', '例 SEO SSG 等');
        }
      });
    };
  }, []);

  return (
    <form onSubmit={handleFormSubmit} className='search_form'>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder='例 SEO SSG 等'
        className='search_txt'
      />
      <button type="submit" className='search_bt'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    </form>
  );
};

export default SearchForm;
