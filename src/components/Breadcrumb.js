import React from 'react';

const siteurl = 'https://www.blanc.to';

const Breadcrumb = () => {
  return (
    <>
      <div id='breadcrumb'>
        <ul itemType='https://schema.org/BreadcrumbList'>
          <li className='breadcrumb__item' itemProp='itemListElement' itemType='https://schema.org/ListItem'>
            <a href={siteurl} itemProp='item'>
              <span itemProp='name'>ホーム</span>
            </a>
            <meta itemProp='position' content='1' />
          </li>
          <li className='breadcrumb__item' itemProp='itemListElement' itemType='https://schema.org/ListItem'>
            <span itemProp='name'>{props.title}</span>
            <meta itemProp='position' content='2' />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Breadcrumb;
