import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Service = () => {
  return (
    <>
      <div className='service_box'>
        <div className='service03'>
          <div className='service_img'>
            <h3>
              <Link to='/region-seo/'>
                <StaticImage src='../images/service_img03.png' loading='lazy' alt='もう少し順位を上げたい業種や地域名のSEO対策' />
              </Link>
            </h3>
          </div>
          <div className='service_inner'>
            <p className='center'>検索結果10位以内には入っているものの反応が今一つ。検索順位2ページ目にいるので1ページ以内に入れたい。などなど・・・SEOのご相談はこちらから。</p>
            <p className='center'>
              <Link to='/region-seo/' className='bt01'>
                詳しく見る
              </Link>
            </p>
          </div>
        </div>
        <div className='service01'>
          <div className='service_img'>
            <h3>
              <Link to='/hpkoushin/'>
                <StaticImage src='../images/service_img01.png' loading='lazy' alt='ホームページの困ったを解決します！' />
              </Link>
            </h3>
          </div>
          <div className='service_inner'>
            <p className='center'>延べ500社以上のホームページ作成や更新に携わってきた実績でちょっとしたホームページの修正や変更作業をお気軽にご依頼頂けます。</p>
            <p className='center'>
              <Link to='/hpkoushin/' className='bt01'>
                詳しく見る
              </Link>
            </p>
          </div>
        </div>

        <div className='service02'>
          <div className='service_img'>
            <h3>
              <Link to='/responsive/'>
                <StaticImage src='../images/service_img02.png' loading='lazy' alt='パソコンサイトをスマホ対応にします！' />
              </Link>
            </h3>
          </div>
          <div className='service_inner'>
            <p className='center'>スマホページ作成からレスポンシブ対応まで！パソコン向けのホームページをスマホ対応のレイアウトへ変更します。スマホからのアクセスの視認性をアップします。</p>
            <p className='center'>
              <Link to='/responsive/' className='bt01'>
                詳しく見る
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
