import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
const PageTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      // 300はスクロール量のしきい値です。適宜変更してください。
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <button className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
        <FontAwesomeIcon icon={faAngleUp} />
      </button>
      <div className={`scroll-line ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
        <a href='https://lin.ee/XRbfoOx'>
          <img src='/images/line_icon.png' alt='友だち追加' height='45' border='0' />
        </a>
      </div>
    </>
  );
};

export default PageTop;
