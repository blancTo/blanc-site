import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

export default function Works() {
  return (
    <>
      <section id="works">
			  <div className='main-content'>
          <p className='sub-title'><span>Works</span> 製作実績</p>
			    <div className='flex-wrap'>
          <div className='works_box'>
              <StaticImage src="../images/ikk.jpg" loading="lazy" alt="池田機工" />
              <p><span className='ttl'>池田機工株式会社これからはメンテナンスが重要！各種荷役機械のメンテナンスならおまかせ</span></p>
            </div>
            <div className='works_box'>
              <StaticImage src="../images/its-img.jpg" loading="lazy" alt="イッツポートレートスタジオ" />
              <p><span className='ttl'>成人式前撮り京都｜京都新聞社推薦の写真家・三田村勝利によるロケーション撮影。イッツポートレートスタジオ</span></p>
            </div>
            <div className='works_box'>
              <StaticImage src="../images/ssk-tosou.jpg" loading="lazy" alt="株式会社佐々木塗装" />
              <p><span className='ttl'>広島の外壁塗装なら佐々木塗装 安心施工、保証付きのアフターサービス。</span></p>
            </div>
            <div className='works_box'>
              <StaticImage src="../images/jukujornal.jpg" loading="lazy" alt="マナビネット" />
                <p><span className='ttl'>私立学校の魅力を発信する「マナビネット」 – 塾・学校・家庭を結ぶ 受験情報サイト</span></p>
            </div>
            <div className='works_box'>
              <StaticImage src="../images/Maple-Modulo.jpg" loading="lazy" alt="Maple-Modulo design studio Japan" />
              <p><span className='ttl'>Maple-Modulo design studio Japan</span></p>
            </div>
            <div className='works_box'>
              <StaticImage src="../images/sposi.jpg" loading="lazy" alt="パソコンサポートエスポジション" />
              <p><span className='ttl'>パソコンサポートエスポジション</span></p>
            </div>
            <div className='works_box'>
              <StaticImage src="../images/keitora.jpg" loading="lazy" alt="安芸軽トラ引越センター" />
              <p><span className='ttl'>安芸軽トラ引越センター</span></p>
            </div>
            <div className='works_box'>
              <StaticImage src="../images/sartoriparo.jpg" loading="lazy" alt="サルトリパーロ" />
              <p><span className='ttl'>サルトリパーロ – メンズ・レディース オーダースーツ＆オーダー服の専門店</span></p>
            </div>            
          </div>
			    
				  <p className='center'><Link to="/portfolio/" className='bt01'>もっと見る</Link></p>
				  
			  </div>
		  </section>
    </>
  )
}
