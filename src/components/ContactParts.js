import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function ContactParts() {
  return (
    <>
    <section id='contact'>
        <div className='main-content'>
            
            
            <p>ホームページの作成、更新、SEOに関する<br className='smp' />お問い合わせ・お見積もり依頼は、<br />
            電話・問い合わせフォームでも受け付けております。</p>
            
            <p className='tel mb0'>
                <svg width={70} data-name="フリーダイヤル" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.76 78.81">
                    <path class="b" d="M15.49,45.62c0,10.45,8.22,15.51,14.85,15.51s14.84-5.06,14.84-15.51c0-8.11-8.03-14.58-14.84-18.46-6.82,3.87-14.85,10.35-14.85,18.46ZM0,0V78.81H120.76V0H0ZM120.74,19.16c-7.25,0-16.07,1.36-22.98,4.36,7.46,4.99,14.68,12.55,14.68,22.09,0,12.61-10.58,22.25-22.22,22.25s-21.87-9.63-21.87-22.25c0-9.54,6.86-17.1,14.32-22.09-6.91-3-15.05-4.36-22.3-4.36s-15.4,1.36-22.31,4.36c7.46,4.99,14.32,12.55,14.32,22.09,0,12.61-10.22,22.25-21.87,22.25s-22.39-9.63-22.39-22.25c0-9.54,7.38-17.1,14.84-22.09C16.05,20.52,7.25,19.16,0,19.16v-6.9c12.27,0,23.12,3.06,30.51,6.9,7.38-3.84,17.58-6.9,29.85-6.9s22.46,3.06,29.85,6.9c7.38-3.84,18.26-6.9,30.53-6.9v6.9Zm-44.9,26.28c0,10.44,8.22,15.51,14.84,15.51s14.84-5.06,14.84-15.51c0-8.11-8.02-14.59-14.84-18.46-6.82,3.87-14.84,10.35-14.84,18.46Z"/>
                </svg>
                <a href="tel:0120-781-437">0120-781-437</a>
            </p>
            
            <p>受付時間　平日 9：00～18：00</p>
            
            <p><Link to="/toiawase/" className='bt02'><FontAwesomeIcon icon={faEnvelope} /> メールでのお問い合わせはこちら</Link></p>

            <p className='contact_title'>まずはお気軽にご相談ください。</p>
            
        </div>
    </section>
    </>
  )
}
