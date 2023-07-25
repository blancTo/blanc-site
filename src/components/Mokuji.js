import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Mokuji = ({ headings }) => {
  const [currentHeading, setCurrentHeading] = useState(null);

  useEffect(() => {
    // スクロール時のイベントリスナーを追加
    const handleScroll = () => {
      // 目次内の各要素の位置を取得
      const headingElements = headings.map(heading => {
        const element = document.getElementById(heading.id);
        return { id: heading.id, offsetTop: element.offsetTop };
      });

      // スクロール位置に対してオフセットを設定
      const offset = 100; // オフセットの値を調整

      // 現在のスクロール位置に応じてカレント要素を特定
      const scrollY = window.scrollY + offset;
      const currentElement = headingElements.find(
        heading => scrollY >= heading.offsetTop && scrollY < heading.offsetTop + 100 // カレント要素を特定する範囲を調整
      );

      if (currentElement) {
        setCurrentHeading(currentElement.id);
      } else {
        setCurrentHeading(null);
      }
    };

    // スクロール時のイベントリスナーを追加
    window.addEventListener('scroll', handleScroll);

    // コンポーネントがアンマウントされる際にイベントリスナーを削除
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headings]);

  return (
    <nav className="mokuji_box pc">
      <h3>もくじ</h3>
      <ul>
        {/* 記事トップへのリンクにactiveClassを削除 */}
        <li><Link to="subpage" smooth={true} duration={500} spy={true} offset={-100} activeClass="">記事トップ</Link></li>
        {headings.map(heading => (
          <li key={heading.id}>
            <Link
              to={heading.id}
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
              activeClass="active"
              className={currentHeading === heading.id ? 'current' : ''}
            >
              {heading.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Mokuji;
