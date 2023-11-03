import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

const SlideIn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const scrollThreshold = 300; // スクロールしきい値（ピクセル単位）
  const isMobile = typeof window !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > scrollThreshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <>
      {isMobile && (
        <>
          <ul className={`foot-nav ${isVisible ? 'visible' : ''}`}>
            <li className='mail'>
              <Link to='/toiawase/'>
                <FontAwesomeIcon icon={faEnvelope} />
                メールで相談
              </Link>
            </li>
            <li className='tel'>
              <a href='tel:0120-781-437'>
                <FontAwesomeIcon icon={faPhone} />
                電話で相談
              </a>
            </li>
          </ul>
        </>
      )}
    </>
  );
};

export default SlideIn;
