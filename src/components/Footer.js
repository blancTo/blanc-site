import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <>
        <footer>
            <div id='footer'>
                <p className='center'><Link to="/"><img src="/images/logo.svg" width={225} height={50} alt="blanc" loading="lazy" /></Link></p>
                <ul className='foot_link'>
                    <li><Link to="/">ホーム</Link></li>
                    <li><Link to="/works/">制作実績</Link></li>
                    <li><Link to="/price/">ホームページ修正・保守料金表</Link></li>
                    <li><Link to="/contact/">お問い合わせ</Link></li>
                    <li><Link to="/company/">会社概要</Link></li>
                    <li><Link to="/faq/">よくあるご質問</Link></li>
                </ul>
                <p className="copyright">Copyright &copy; blanc All Rights Reserved.</p>
            </div>
        </footer>
    </>
  )
}

export default Footer
