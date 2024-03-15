import React from 'react';

import Seo from '../components/Seo';
import Header from '../components/Header';
import Layout from '../components/Layout';

const pagemeta = {
  title: `ホームページの修正とメンテナンスに関する費用と月額保守料金｜有限会社blanc`,//このページのタイトルタグに入る情報
  description: `ホームページ修正費用の詳細はこちら。ホームページの維持管理からSEO対策、ドメイン・サーバー管理まで、blancのホームページ修正費用とサービス内容を一覧でご案内。`,//このページのディスクリプション
  subtitle: `ホームページ修正・保守料金表`,//メインイメージ部分のテキスト
  slug: `price`,//このページのslug
};

const siteurl = 'https://www.blanc.to/';

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "item": `${siteurl}`,
          "name": "ホーム"          
        },
        {
          "@type": "ListItem",
          "position": 2,
          "item": `${siteurl}${pagemeta.slug}`,
          "name": `${pagemeta.subtitle}`          
        }
      ]
    },
    {
      "@type": "WebPage",
      "@id": `${siteurl}${pagemeta.slug}`,
      "url": `${siteurl}${pagemeta.slug}`,
      "name": `${pagemeta.title}`,
      "description": `${pagemeta.description}`,
      "inLanguage": "ja",
      "isPartOf": { "@id": `${siteurl}#website` },
      "breadcrumb": { "@id": `${siteurl}#breadcrumblist` }
    },
    {
      "@type": "WebSite",
      "@id": `${siteurl}#website`,
      "url": `${siteurl}`,
      "name": `ホームページ修正・管理のご依頼は有限会社blancへ！他社作成のHPもご相談下さい。`,
      "description": `地域ナンバーワンのキーワードに特化したSEO対策の実績多数！集客可能なホームページ作成はもちろんホームページリニューアルやスマホ対応もお任せ下さい。`,
      "publisher": {
        "@type": "Organization",
        "name": "有限会社blanc",
        "url": `${siteurl}`
      },
      "inLanguage": "ja"
    }
  ]
};

export const Head = () => (
  <>
    <body className={pagemeta.slug} />  

    <Seo title2={pagemeta.title} description={pagemeta.description} article={true} />
    <script type='application/ld+json'>{JSON.stringify(jsonLd)}</script>
  </>
);

const price = () => {
  return (
    <>
      <Header />
      <div id='mainimage-sub'>
        <h1>{pagemeta.title}</h1>
        <p>Price</p>
      </div>
      <nav aria-label='Breadcrumb' id='breadcrumb'>
        <ul>
          <li>
            <a href={siteurl}>ホーム</a>
          </li>
          <li>{pagemeta.subtitle}</li>
        </ul>
      </nav>
      <Layout>
        <h2>blancサポート月額料金表（税抜）</h2>

        <div className='slidetable'>
          <table className='price-list' summary='サポートベーシックプラン'>
            <tbody>
              <tr>
                <th abbr='プラン'>プラン</th>
                <td>
                  <span className='bold'>ベーシックプラン</span>
                </td>
              </tr>
              <tr>
                <th abbr='内容'>内容</th>
                <td>
                  ホームページの維持管理を行います。
                  <br />
                  ・月3回程度の更新作業（テキストや写真差し替えなどが主な作業となります。）
                  <br />
                  ・運用全般についてメールでご相談いただけます。
                </td>
              </tr>
              <tr>
                <th abbr='料金'>1ヶ月あたりの料金</th>
                <td>
                  <span className='dark-red bold'>11,000円（税込）</span>（※最低契約期間3ヶ月）
                  <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>
                    <input type='hidden' name='cmd' defaultValue='_s-xclick' />
                    <input type='hidden' name='hosted_button_id' defaultValue='F9D73UHWZDWB6' />
                    <input type='image' src='/images/btn_subscribeCC_LG.png' border={0} name='submit' alt='PayPal - オンラインでより安全・簡単にお支払い' />
                    <img alt='' border={0} src='https://www.paypalobjects.com/ja_JP/i/scr/pixel.gif' width={1} height={1} />
                  </form>
                </td>
              </tr>
              <tr>
                <th abbr='年額'>年間払い</th>
                <td>
                  <span className='dark-red bold'>121,000円（税込）</span>（1ヶ月分が無料になります。）
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='slidetable'>
          <table id='standard' className='price-list' summary='スタンダードプラン'>
            <tbody>
              <tr>
                <th abbr='プラン'>プラン</th>
                <td>
                  <span className='bold'>スタンダードプラン</span>
                </td>
              </tr>
              <tr>
                <th abbr='内容'>内容</th>
                <td>
                  ホームページの維持管理を行います。
                  <br />
                  ・月5回までの更新作業（テキストや写真差し替えなどに加え画像加工やバナー修正などの作業を行います。）
                  <br />
                  ・上記更新作業の代わりにページを追加したいといったご要望にも対応します。
                  <br />
                  ・サイトバックアップ（更新時にサイトデータのバックアップを行いますので万が一ホームページに不具合が起きた場合などには元の状態まで戻せます。）
                  <br />
                  ・運用全般についてメールやお電話でご相談いただけます。
                </td>
              </tr>
              <tr>
                <th abbr='料金'>1ヶ月あたりの料金</th>
                <td>
                  <span className='dark-red bold'>16,500円（税込）</span>（※最低契約期間3ヶ月）
                  <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>
                    <input type='hidden' name='cmd' defaultValue='_s-xclick' />
                    <input type='hidden' name='hosted_button_id' defaultValue='BESX8B2GW5DQU' />
                    <input type='image' src='/images/btn_subscribeCC_LG.png' border={0} name='submit' alt='PayPal - オンラインでより安全・簡単にお支払い' />
                    <img alt='' border={0} src='https://www.paypalobjects.com/ja_JP/i/scr/pixel.gif' width={1} height={1} />
                  </form>
                </td>
              </tr>
              <tr>
                <th abbr='年額'>年間払い</th>
                <td>
                  <span className='dark-red bold'>181,500円（税込）</span>（1ヶ月分が無料になります。）
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='slidetable'>
          <table className='price-list' summary='スタンダードプラス'>
            <tbody>
              <tr>
                <th abbr='プラン'>プラン</th>
                <td>
                  <span className='bold'>スタンダードプラス</span>
                </td>
              </tr>
              <tr>
                <th abbr='内容'>内容</th>
                <td>
                  ホームページの維持管理を行います。
                  <br />
                  ・月5回までの更新作業（テキストや写真差し替えなどに加え画像加工やバナー修正などの作業を行います。）
                  <br />
                  ・上記更新作業の代わりにページを追加したいといったご要望にも対応します。
                  <br />
                  ・サイトバックアップ（更新時にサイトデータのバックアップを行いますので万が一ホームページに不具合が起きた場合などには元の状態まで戻せます。）
                  <br />
                  ・運用全般についてメールやお電話でご相談いただけます。
                  <br />
                  <span className='bold'>※ご自身でホームページ修正や更新を行いたい場合や操作方法など個別の対応をご希望の方はこちらのプランにご加入下さい。</span>
                </td>
              </tr>
              <tr>
                <th abbr='料金'>1ヶ月あたりの料金料金</th>
                <td>
                  <span className='dark-red bold'>33,000円（税込）</span>（※最低契約期間3ヶ月）
                  <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>
                    <input type='hidden' name='cmd' defaultValue='_s-xclick' />
                    <input type='hidden' name='hosted_button_id' defaultValue='NJ7WAE67DMJTA' />
                    <input type='image' src='/images/btn_subscribeCC_LG.png' border={0} name='submit' alt='PayPal - オンラインでより安全・簡単にお支払い' />
                    <img alt='' border={0} src='https://www.paypalobjects.com/ja_JP/i/scr/pixel.gif' width={1} height={1} />
                  </form>
                </td>
              </tr>
              <tr>
                <th abbr='年額'>年間払い</th>
                <td>
                  <span className='dark-red bold'>363,000円（税込）</span>（1ヶ月分が無料になります。）
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='slidetable'>
          <table className='price-list' summary='SEOプラン'>
            <tbody>
              <tr>
                <th abbr='プラン'>プラン</th>
                <td>
                  <span className='bold'>SEOプラン</span>
                </td>
              </tr>
              <tr>
                <th abbr='内容'>内容</th>
                <td>
                  <a href='/region-seo/'>SEO対策</a>を行います。
                  <br />
                  ・ホームページ内部調整
                  <br />
                  ・弊社関連サイトからの外部リンク
                </td>
              </tr>
              <tr>
                <th abbr='料金'>1ヶ月あたりの料金</th>
                <td>
                  <span className='dark-red bold'>11,000円（税込）</span>（料金は1キーワードあたりの金額です。）
                  <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>
                    <input type='hidden' name='cmd' defaultValue='_s-xclick' />
                    <input type='hidden' name='hosted_button_id' defaultValue='US4Q6H2WUU9FW' />
                    <input type='image' src='/images/btn_subscribeCC_LG.png' border={0} name='submit' alt='PayPal - オンラインでより安全・簡単にお支払い' />
                    <img alt='' border={0} src='https://www.paypalobjects.com/ja_JP/i/scr/pixel.gif' width={1} height={1} />
                  </form>
                </td>
              </tr>
              <tr>
                <th abbr='年額'>年間払い</th>
                <td>
                  <span className='dark-red bold'>121,000円</span>（1ヶ月分が無料になります。）
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='slidetable'>
          <table className='price-list' summary='ドメイン・サーバー管理'>
            <tbody>
              <tr>
                <th abbr='プラン'>プラン</th>
                <td>
                  <span className='bold'>ドメイン・サーバー管理</span>
                </td>
              </tr>
              <tr>
                <th abbr='内容'>内容</th>
                <td>
                  ドメインとサーバーの維持管理を行います。
                  <br />
                  対象ドメインは「.com」や「.net」などのgTLD（分野別トップレベルドメイン）です。
                </td>
              </tr>
              <tr>
                <th abbr='料金'>1ヶ月あたりの料金</th>
                <td>
                  <span className='dark-red bold'>3,300円（税込）</span>
                  <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>
                    <input type='hidden' name='cmd' defaultValue='_s-xclick' />
                    <input type='hidden' name='hosted_button_id' defaultValue='CPSLVX5NKEH38' />
                    <input type='image' src='/images/btn_subscribeCC_LG.png' border={0} name='submit' alt='PayPal - オンラインでより安全・簡単にお支払い' />
                    <img alt='' border={0} src='https://www.paypalobjects.com/ja_JP/i/scr/pixel.gif' width={1} height={1} />
                  </form>
                </td>
              </tr>
              <tr>
                <th abbr='年額'>年間払い</th>
                <td>
                  <span className='dark-red bold'>36,300円（税込）</span>（1ヶ月分が無料になります。）
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          ※お支払い方法は銀行振込またはPayPalによるクレジットカード払いからご選択下さい。
          <br />
          ※解約は申告の1ヶ月後となります。
        </p>

        <h2>個別作業料金表（税抜）</h2>

        <h3>HTML関連</h3>

        <div className='slidetable'>
          <table className='price-list' summary='サポート内での作業'>
            <tbody>
              <tr>
                <th abbr='作業'>作業</th>
                <th abbr='料金'>料金</th>
                <th abbr='備考'>備考</th>
              </tr>
              <tr>
                <td>基本作業料金</td>
                <td>5,500円（税込）</td>
                <td>
                  <span className='smaller'>※簡単なテキスト修正等含みます。</span>
                </td>
              </tr>
              <tr>
                <td>HTML制作</td>
                <td>8,800円（税込）</td>
                <td>
                  <span className='smaller'>※文字原稿A4/2P程度</span>
                </td>
              </tr>
              <tr>
                <td>HTML修正</td>
                <td>5,500円（税込）</td>
                <td>
                  <span className='smaller'>※1ページあたり</span>
                </td>
              </tr>
              <tr>
                <td>HTMLタグ挿入</td>
                <td>1,100円（税込）</td>
                <td>
                  <span className='smaller'>※Googleアナリティクスタグやメタタグなど（1点/1P）</span>
                </td>
              </tr>
              <tr>
                <td>google map設置</td>
                <td>5,500円（税込）</td>
                <td>-</td>
              </tr>
              <tr>
                <td>スライダー設置</td>
                <td>16,500円（税込）～</td>
                <td>-</td>
              </tr>
              <tr>
                <td>レスポンシブ対応（スマホ対応）基本料金</td>
                <td>55,000円（税込）～</td>
                <td>
                  <span className='smaller'>-</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>画像関連</h3>

        <div className='slidetable'>
          <table className='price-list' summary='画像関連'>
            <tbody>
              <tr>
                <th abbr='作業'>作業</th>
                <th abbr='料金'>料金</th>
                <th abbr='備考'>備考</th>
              </tr>
              <tr>
                <td>写真加工</td>
                <td>2,200円（税込） ～枚</td>
                <td>
                  <span className='smaller'>※明るさ調整・トリミングなど（5枚程度～回）</span>
                </td>
              </tr>
              <tr>
                <td>商品写真撮影</td>
                <td>3,300円（税込）</td>
                <td>
                  <span className='smaller'>※商品1点につき（写真加工込み）</span>
                </td>
              </tr>
              <tr>
                <td>写真差し替え</td>
                <td>550円（税込）</td>
                <td>
                  <span className='smaller'>※写真1点につき</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>デザイン</h3>

        <div className='slidetable'>
          <table className='price-list' summary='デザイン'>
            <tbody>
              <tr>
                <th abbr='作業'>作業</th>
                <th abbr='料金'>料金</th>
                <th abbr='備考'>備考</th>
              </tr>
              <tr>
                <td>デザインカンプ作成</td>
                <td>55,000円（税込）</td>
                <td>
                  <span className='smaller'>-</span>
                </td>
              </tr>
              <tr>
                <td>メインイメージ制作</td>
                <td>16,500円（税込）～</td>
                <td>
                  <span className='smaller'>※テンプレートサイト・ブログ用</span>
                </td>
              </tr>
              <tr>
                <td>告知用バナー作成</td>
                <td>5,500円（税込）～</td>
                <td>
                  <span className='smaller'>※サイドバーやフッター等に設置するものです。</span>
                </td>
              </tr>
              <tr>
                <td>地図制作</td>
                <td>11,000円（税込）</td>
                <td>
                  <span className='smaller'>※200px×150pxサイズ程度の目安料金です。</span>
                </td>
              </tr>
              <tr>
                <td>ロゴ制作</td>
                <td>16,500円（税込）～</td>
                <td>-</td>
              </tr>
              <tr>
                <td>似顔絵イラスト制作</td>
                <td>5,500円（税込）～</td>
                <td>
                  <span className='smaller'>※1枚</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>動画関連</h3>

        <div className='slidetable'>
          <table className='price-list' summary='動画関連'>
            <tbody>
              <tr>
                <th abbr='作業'>作業</th>
                <th abbr='料金'>料金</th>
                <th abbr='備考'>備考</th>
              </tr>
              <tr>
                <td>動画設置（wmv?flash）</td>
                <td>11,000円（税込）</td>
                <td>
                  <span className='smaller'>※動画編集作業は含まれません。（mpeg入稿のみ）</span>
                </td>
              </tr>
              <tr>
                <td>動画編集作業</td>
                <td>33,000円（税込）～</td>
                <td>
                  <span className='smaller'>※エフェクトやテロップの追加</span>
                </td>
              </tr>
              <tr>
                <td>GIFアニメーション制作</td>
                <td>16,500円（税込）</td>
                <td>
                  <span className='smaller'>※468px × 60px 10秒程度の制作料金の目安です。</span>
                </td>
              </tr>
              <tr>
                <td>Youtubeタグ挿入</td>
                <td>1,100円（税込）</td>
                <td>
                  <span className='smaller'>※動画のアップロードは含まれません。</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>ドメイン・サーバー関連</h3>

        <div className='slidetable'>
          <table className='price-list' summary='ドメイン・サーバー関連'>
            <tbody>
              <tr>
                <th abbr='作業'>作業</th>
                <th abbr='料金('>料金</th>
                <th abbr='備考'>備考</th>
              </tr>
              <tr>
                <td>サーバー構築・ドメイン取得代行</td>
                <td>33,000円（税込）～</td>
                <td>
                  <span className='smaller'>※ドメイン維持費用は含まれません。</span>
                </td>
              </tr>
              <tr>
                <td>サーバー移転代行</td>
                <td>33,000円（税込）～</td>
                <td>
                  <span className='smaller'>※サーバー維持費用は含まれません。</span>
                </td>
              </tr>
              <tr>
                <td>サーバー移転代行（データベース含む）</td>
                <td>55,000円（税込）～</td>
                <td>
                  <span className='smaller'>※サーバー維持費用は含まれません。</span>
                </td>
              </tr>
              <tr>
                <td>ネームサーバー設定代行</td>
                <td>5,500円（税込）～</td>
                <td>-</td>
              </tr>
              <tr>
                <td>メールアカウント設定代行</td>
                <td>1,100円（税込）～</td>
                <td>-</td>
              </tr>
              <tr>
                <td>サイトデータバックアップ</td>
                <td>11,000円（税込）～</td>
                <td>
                  <span className='smaller'>※FTP接続の場合</span>
                </td>
              </tr>
              <tr>
                <td>サイトデータバックアップ（データベース含む）</td>
                <td>33,000円（税込）～</td>
                <td>
                  <span className='smaller'>※phpMyAdmin利用の場合</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>CGI・ASP関連</h3>

        <div className='slidetable'>
          <table className='price-list' summary='CGI・ASP関連'>
            <tbody>
              <tr>
                <th abbr='作業'>作業</th>
                <th abbr='料金'>料金</th>
                <th abbr='備考'>備考</th>
              </tr>
              <tr>
                <td>CMSカスタマイズ</td>
                <td>110,000円（税込）～</td>
                <td>
                  <span className='smaller'>※WordPress・MovableTypeなど</span>
                </td>
              </tr>
              <tr>
                <td>CMSコンテンツ調整（新着情報・施工事例・ブログなど）</td>
                <td>33,000円（税込）～</td>
                <td>
                  <span className='smaller'>※WordPress・MovableTypeなど</span>
                </td>
              </tr>
              <tr>
                <td>問合せフォーム設置</td>
                <td>11,000円（税込）～</td>
                <td>
                  <span className='smaller'>
                    ※
                    <a href='https://www.synck.com/contents/download/cgi-perl/mailformpro.html' target='_blank' rel='noopener noreferrer'>
                      メールフォームプロCGI
                    </a>
                  </span>
                </td>
              </tr>
              <tr>
                <td>新着情報・お知らせ・ニュース表示プログラム設置</td>
                <td>11,000円（税込）～</td>
                <td>
                  <span className='smaller'>
                    ※
                    <a href='https://www.php-factory.net/news/pkobo-news01.php' target='_blank' rel='noopener noreferrer'>
                      PKOBO-News01
                    </a>
                  </span>
                </td>
              </tr>
              <tr>
                <td>メール配信システム設置</td>
                <td>33,000円（税込）</td>
                <td>
                  <span className='smaller'>
                    ※
                    <a href='https://www.acmailer.jp/' target='_blank' rel='noopener noreferrer'>
                      ACメーラー
                    </a>
                  </span>
                </td>
              </tr>
              <tr>
                <td>ステップメール設置</td>
                <td>16,500円（税込）</td>
                <td>
                  <span className='smaller'>
                    ※
                    <a href='https://autobiz.jp/' target='_blank' rel='noopener noreferrer'>
                      Auto Biz
                    </a>
                  </span>
                </td>
              </tr>
              <tr>
                <td>カートシステム設置及び商品登録代行</td>
                <td>55,000円（税込）～</td>
                <td>
                  <span className='smaller'>※初期商品登録10件まで</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>その他</h3>

        <div className='slidetable'>
          <table className='price-list' summary='その他'>
            <tbody>
              <tr>
                <th abbr='作業'>作業</th>
                <th abbr='料金'>料金</th>
                <th abbr='備考'>備考</th>
              </tr>
              <tr>
                <td>ハッキングによるサイト書き換え復旧作業</td>
                <td>55,000円（税込）～</td>
                <td>-</td>
              </tr>
              <tr>
                <td>PDF作成・修正</td>
                <td>5,500円（税込）～</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>面談・リモート</h3>

        <div className='slidetable'>
          <table className='price-list' summary='面談'>
            <tbody>
              <tr>
                <th abbr='作業'>作業</th>
                <th abbr='料金'>料金</th>
                <th abbr='備考'>備考</th>
              </tr>
              <tr>
                <td>面談（1時間）</td>
                <td>11,000円（税込）</td>
                <td>ご来社頂き打ち合わせを行います。</td>
              </tr>
              <tr>
                <td>訪問面談（1時間）</td>
                <td>11,000円（税込）</td>
                <td>
                  お伺いして打ち合わせを行います。
                  <br />
                  <span className='smaller'>※交通費実費</span>
                </td>
              </tr>
              <tr>
                <td>リモートPCサポート（1時間）</td>
                <td>5,500円（税込）</td>
                <td>
                  クイックアシストによるPCサポート
                  <br />
                  <span className='smaller'>※Windowsのみ</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className='dark-red bold'>※こちらの価格表に無いものについては別途お見積もりとなります。</p>
      </Layout>
    </>
  );
};

export default price;


