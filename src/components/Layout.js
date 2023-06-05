import React from 'react'

import Footer from './Footer'
import Contact from './ContactParts'

export default function Layout({ children }) {
  return (
    <>
    <article id='subpage'>
      <div className='main-content'>
          { children }
      </div>
    </article>
    <Contact />
    <Footer />
        
    </>
  )
}
