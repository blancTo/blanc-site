import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Header = () => {
  const isMobile = typeof window !== 'undefined' && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  return (
    <>
      <header id='header'>
        <div id='header-inner'>
          <div className='logobox'>
            <Link to='/'>
              <img src='/images/logo.svg' width={225} height={50} alt='blanc' loading='lazy' />
            </Link>
          </div>

          <nav className='pc'>
            <ul>
              <li>
                <Link to='/'>ホーム</Link>
              </li>
              <li>
                <Link to='/portfolio/'>制作実績</Link>
              </li>
              <li>
                <Link to='/price/'>料金表</Link>
              </li>
              <li>
                <Link to='/company/'>会社概要</Link>
              </li>
              <li>
                <Link to='/toiawase/'>お問い合わせ</Link>
              </li>
            </ul>
          </nav>

          <div className='telbox pc'>
            <p className='teltxt_t'>まずはお気軽にご相談ください</p>
            <p className='tel'>
              <svg width={70} data-name='フリーダイヤル' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120.76 78.81'>
                <path className='b' d='M15.49,45.62c0,10.45,8.22,15.51,14.85,15.51s14.84-5.06,14.84-15.51c0-8.11-8.03-14.58-14.84-18.46-6.82,3.87-14.85,10.35-14.85,18.46ZM0,0V78.81H120.76V0H0ZM120.74,19.16c-7.25,0-16.07,1.36-22.98,4.36,7.46,4.99,14.68,12.55,14.68,22.09,0,12.61-10.58,22.25-22.22,22.25s-21.87-9.63-21.87-22.25c0-9.54,6.86-17.1,14.32-22.09-6.91-3-15.05-4.36-22.3-4.36s-15.4,1.36-22.31,4.36c7.46,4.99,14.32,12.55,14.32,22.09,0,12.61-10.22,22.25-21.87,22.25s-22.39-9.63-22.39-22.25c0-9.54,7.38-17.1,14.84-22.09C16.05,20.52,7.25,19.16,0,19.16v-6.9c12.27,0,23.12,3.06,30.51,6.9,7.38-3.84,17.58-6.9,29.85-6.9s22.46,3.06,29.85,6.9c7.38-3.84,18.26-6.9,30.53-6.9v6.9Zm-44.9,26.28c0,10.44,8.22,15.51,14.84,15.51s14.84-5.06,14.84-15.51c0-8.11-8.02-14.59-14.84-18.46-6.82,3.87-14.84,10.35-14.84,18.46Z' />
              </svg>
              <a href='tel:0120-781-437'>0120-781-437</a>
            </p>
            <p className='teltxt_b'>受付時間 平日 9：00～18：00（土・日・祝を除く）</p>
          </div>

          <div className='smp'>
            <ul className='h_tool'>
              <li>
                <a href='tel:0120-781-437'>
                  <img src='/images/h_tel.png' loading='lazy' alt='' />
                </a>
              </li>
              <li>
                <Link to='/toiawase/'>
                  <img src='/images/h_mail.png' loading='lazy' alt='' />
                </Link>
              </li>
            </ul>

            <input type='checkbox' id='overlay-input' />
            <label htmlFor='overlay-input' id='overlay-button'>
              <span></span>
            </label>

            <div id='overlay'>
              <ul className='gnav__menu'>
                <li className='gnav__menu__item'>
                  <Link to='/'>ホーム</Link>
                </li>
                <li className='gnav__menu__item'>
                  <Link to='/portfolio/'>制作実績</Link>
                </li>
                <li className='gnav__menu__item'>
                  <Link to='/price/'>料金表</Link>
                </li>
                <li className='gnav__menu__item'>
                  <Link to='/company/'>会社概要</Link>
                </li>
                <li className='gnav__menu__item'>
                  <Link to='/toiawase/'>お問い合わせ</Link>
                </li>
              </ul>

              {isMobile && (
                <div className='smp_nav_cont'>
                  <div className='smp_nav_box koushin'>
                    <Link to='/hpkoushin/' className='flex-wrap'>
                      <div className='smp_nav_img'>
                        <StaticImage src='../images/service_img01.png' loading='lazy' alt='ホームページ修正・更新サポート' />
                      </div>
                      <div className='smp_nav_txt'>ホームページ修正・更新サポート</div>
                    </Link>
                  </div>
                  <div className='smp_nav_box responsive'>
                    <Link to='/responsive/' className='flex-wrap'>
                      <div className='smp_nav_img'>
                        <StaticImage src='../images/service_img02.png' loading='lazy' alt='スマホ対応・レスポンシブ化' />
                      </div>
                      <div className='smp_nav_txt'>スマホ対応・レスポンシブ化</div>
                    </Link>
                  </div>
                  <div className='smp_nav_box seo'>
                    <Link to='/region-seo/' className='flex-wrap'>
                      <div className='smp_nav_img'>
                        <StaticImage src='../images/service_img03.png' loading='lazy' alt='SEO対策' />
                      </div>
                      <div className='smp_nav_txt'>SEO対策</div>
                    </Link>
                  </div>
                  <div className='smp_nav_box ssl'>
                    <Link to='/recommendation-ssl/' className='flex-wrap'>
                      <div className='smp_nav_img'>
                        <img src='/images/service_img04.png' loading='lazy' alt='常時SSL化設定' />
                      </div>
                      <div className='smp_nav_txt'>常時SSL化設定のススメ</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
