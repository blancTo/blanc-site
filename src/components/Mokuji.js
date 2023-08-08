import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Mokuji = () => {
  const [headings, setHeadings] = useState([]);
  const [currentHeading, setCurrentHeading] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const headingElements = document.querySelectorAll('h2'); // h2要素を取得

      const headingsData = Array.from(headingElements).map((element) => {
        return {
          id: element.getAttribute('id'),
          title: element.textContent,
        };
      });

      setHeadings(headingsData);

      let currentHeadingId = null;
      for (let i = headingsData.length - 1; i >= 0; i--) {
        const { id } = headingsData[i];
        const targetElement = document.getElementById(id);
        if (scrollY >= targetElement.offsetTop - 100) {
          currentHeadingId = id;
          break;
        }
      }

      setCurrentHeading(currentHeadingId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!headings || headings.length === 0) {
    return null;
  }

  return (
    <nav className="mokuji_box pc">
      <h3>もくじ</h3>
      <ul>
        
        {headings.map((heading) => {
          const headingClass = heading.id === currentHeading ? 'current h2-class' : 'h2-class';

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
