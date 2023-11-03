import React from 'react';
import Footer from './Footer';
import Contact from './ContactParts';
import PageTop from './PageTop';
import SlideIn from './SlideIn';

export default function Layout({ children }) {
  return (
    <>
      <PageTop />
      <SlideIn />
      <main role='main' id='page'>
        <article id='subpage'>
          <div className='main-content'>{children}</div>
        </article>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
