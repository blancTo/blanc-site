import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ContactParts from '../../components/ContactParts'
import Seo from '../../components/Seo'

import { StaticImage } from "gatsby-plugin-image"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function index() {
  return (
    <>    

    <Header />

    <div id="mainimage-sub">
        <h1>スマホ化・レスポンシブ対応</h1>
        <p>Responsive</p>
    </div>
    <div id="breadcrumb">
            <ul itemType="https://schema.org/BreadcrumbList">
                <li className="breadcrumb__item" itemProp="itemListElement" itemType="https://schema.org/ListItem">
                    <a href="https://www.blanc.to" itemProp="item">
                        <span itemProp="name">ホーム</span>
                    </a>
                    <meta itemProp="position" content="1" />
                </li>
                <li>
                    <span>スマホ化・レスポンシブ対応</span>
                    <meta itemProp="position" content="2" />
                </li>
            </ul>
        </div>

    <div id='content'>
        <div className='maincontent'>
            
            <section id='subpage'>
                <div className='main-content'>
                    <h2>スマホ化でアクセスアップ！</h2>
                    <h3>スマホ化の流れ</h3>
                    
                    <p>最近のスマートフォン普及にはめざましいものがあります。<br />
                    今やパソコンと同じようにスマホでネットを見るのが普通になっています。</p>
                    
                    <p>そのためホームページへのアクセスも業種によっては、スマホ経由の方が多い状況となっています。</p>
                    
                    <p>実際に女性向けサービスのでは、アクセス数のほとんどがスマホ経由というケースもあります。</p>
                    
                    <h3>パソコン版ホームページとスマホ版ホームページの違い</h3>
                    <p>このようにスマートフォンを使ってホームページにアクセスする人が増えているわけなのですが、スマホでホームページを見た場合には大きく分けて<span className='bold-red'>２つの見え方</span>があります。</p>
                    <h4>通常のパソコン表示</h4>
                    <p>一つ目は、パソコン用のホームページをそのままスマホに表示する方法。<br />
                    この方法だと、パソコンに比べると随分<span className='bold'>小さく表示</span>されてしまいます。</p>
                    
                    <p>その場合は画面を指で広げて拡大しないと字が読めないし、メニューやボタンをタップするのも一苦労です。<br />
                    この状態だとほとんどページの内容が読まれないまま多くの人が立ち去ってしまうことになります。</p>
                    <h4>レシポンシブ対応</h4>
                    <p>もう一つはパソコン用ホームページとは別にスマートフォンの画面サイズに合わせた見せ方を別に用意するという方法があります。<br />
                    スマホの画面サイズにあわせて１行あたりの文字数を減らして大きな文字を使い、写真のサイズも自動変換することで見えやすいかたちでホームページを表示するのです。</p>
                    
                    <h3>レスポンシブ対応事例</h3>
    
                    <Swiper
                    spaceBetween={0}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    autoHeight>
                        <SwiperSlide>
                            <p><StaticImage src="../../images/sp_jirei/sp_jirei_pic13.jpg" alt='' /></p>
                            <p>アトリエ　ヴィーナス様</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p><StaticImage src="../../images/sp_jirei/sp_jirei_pic12.jpg" alt='' /></p>
                            <p>宮古人形様</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p><StaticImage src="../../images/sp_jirei/sp_jirei_pic11.jpg" alt='' /></p>
                            <p>セラピールーム オーブ様</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p><StaticImage src="../../images/sp_jirei/sp_jirei_pic01.jpg" alt='' /></p>
                            <p>株式会社ARTISTIC&amp;Co様</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p><StaticImage src="../../images/sp_jirei/sp_jirei_pic10.jpg" alt='' /></p>
                            <p>ライセンシードライバーズサポート様</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p><StaticImage src="../../images/sp_jirei/sp_jirei_pic09.jpg" alt='' /></p>
                            <p>エステサロンしずく様</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p><StaticImage src="../../images/sp_jirei/sp_jirei_pic08.jpg" alt='' /></p>
                            <p>タンドゥース様</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p><StaticImage src="../../images/sp_jirei/sp_jirei_pic07.jpg" alt='' /></p>
                            <p>カーフレーム様</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p><StaticImage src="../../images/sp_jirei/sp_jirei_pic06.jpg" alt='' /></p>
                            <p>スピリチュアルライフ研究所様</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p><StaticImage src="../../images/sp_jirei/sp_jirei_pic05.jpg" alt='' /></p>
                            <p>馬場聖鍼堂様</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p><StaticImage src="../../images/sp_jirei/sp_jirei_pic04.jpg" alt='' /></p>
                            <p>ゴルフフィールド様</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p><StaticImage src="../../images/sp_jirei/sp_jirei_pic02.jpg" alt='' /></p>
                            <p>コンセプト様</p>
                        </SwiperSlide>
                    </Swiper>


                    <p className="center"><a href="/responsive/responsive-jirei/" className="bt01">事例をもっと見る</a></p>



                    <h3>スマホ対応のメリット</h3>
                    <h4>視認性、可読性アップ</h4>
                    <p>小さいくて読みにくい文字がスマホサイズに合わせてすっきり見えやすいくなりますので、問い合わせしてくれたり購入してくれる可能性が高くなります。</p>
                    <h4>検索順位アップ</h4>
                    <p>Googleの検索結果もスマホ対応されたページを優先的に表示するようになっています。</p>
                    <h4>SNSでアクセスアップ</h4>
                    <p>FacebookやTwitterなどなどのSNSユーザーのほとんどははスマホなのでスマホ対応しておくこととでシェアやリツイートされやすくなります。</p>
                    <h4>直接電話機能で反応率アップ</h4>
                    <p>電話番号をタップするだけで直接電話がかけれるように出来ますので反応率アップにも繋ります。</p>
                    <h3>お問合せやご相談</h3>
                    <p>このような事から、従来のパソコン版ホームページをそのまま使いつつけることはあまり得策ではありません。<br />
                    またページ数が多すぎて全ページをスマホ対応にするには費用がかかりすぎるといったご相談も頂くのですが、その場合は主要ページのみスマホ対応を行うといった方法もありますので、この機会にぜひご検討下さい。</p>

                    <p className="txt140p">スマホ対応のおおよその料金は次のとおりです。</p>

                    <ul className="list02">
                        <li>スマホ対応基本部分作成　33,000円（税込）～</li>
                        <li>ページ調整（1ページあたり）　5,500円（税込）～</li>
                    </ul>

                    <p className="center"><StaticImage src="../../images/img_call.png" alt='' /></p>
                    <p className="center"><a href="/responsive/sp-form/"><StaticImage src="../../images/contact_bt2.png" alt="メールでのお申し込みはこちら" width={760} height={114} /></a></p>

                    <h3>モバイルフレンドリーテスト</h3>

                    <p>Googleもホームページがスマホ対応しているかどうかを判定するツールを提供しているので確認してみる事をおすすめします。<br />
                    <a href="https://www.google.com/webmasters/tools/mobile-friendly/" target="_blank" rel="noopener noreferrer">モバイルフレンドリーテスト</a></p>

                </div>
            </section>
            <ContactParts />
            
            <Footer />

        </div>
    </div>
    </>
  )
}

export const Head = () => (
    <>
        <Seo
        title="スマホ化・レスポンシブ対応"
        description="スマホ化でアクセスアップ！ スマホ化の流れ 最近のスマートフォン普及にはめざましいものがあります。 今やパソコンと同じようにスマホでネットを見るのが普通になっています。 そのためホームページへのアクセスも業種によっては、スマホ経由の方が多い状況となっています。"
        article={true} />
    </>
)