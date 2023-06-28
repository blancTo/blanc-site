import React from 'react'
import Footer from './Footer'
import Contact from './ContactParts'

export default function Layout({ children }) {
  return (
    <>
    <main role='main' id='page'>
      <article id='subpage'>
        <div className='main-content'>
            { children }
        </div>
      </article>
    </main>
    <Contact />
    <Footer />
        
    </>
  )
}
