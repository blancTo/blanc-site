import React from 'react'

import Footer from './Footer'
import Contact from './ContactParts'

export default function Layout({ children }) {
  return (
    <>
    <div id='content'>
        <div className='maincontent'>
            
            <section id='subpage'>
                <div className='main-content'>
                    { children }
                </div>
            </section>
            <Contact />
            <Footer />
        </div>
    </div>
    </>
  )
}
