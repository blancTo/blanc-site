import React from 'react';
import { Link } from 'react-scroll';

const Mokuji = ({ headings }) => {
  if (!headings || headings.length === 0) {
    return null;
  }

  return (
    <nav className="mokuji_box">
      <h3>もくじ</h3>
      <ul>
        <li><Link to="subpage" smooth={true} duration={500}>記事トップ</Link></li>
        {headings.map((heading) => {
          let headingClass;
          if (heading.depth === 2) {
            headingClass = 'h2-class'; // h2のクラス名
          } else if (heading.depth === 3) {
            headingClass = 'h3-class'; // h3のクラス名
          } else {
            headingClass = 'default-class'; // その他のヘッディングのクラス名
          }

          return (
            <li key={heading.id}>
              <Link to={heading.id} smooth={true} duration={500} className={headingClass}>
                {heading.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Mokuji;
