import React from 'react';

import { graphql, Link } from 'gatsby';

import Seo from '../../components/Seo';
import Header from '../../components/Header';
import Layout from '../../components/Layout';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPen } from '@fortawesome/free-solid-svg-icons';

const pagemeta = {
  title: `ホームページ修正・管理のご依頼は有限会社blancへ！他社作成のHPもご相談下さい。`,//このページのタイトルタグに入る情報
  subtitle: `ホームページ作成やリニューアル`,//メインイメージ部分のテキスト
  description: `地域ナンバーワンのキーワードに特化したSEO対策の実績多数！集客可能なホームページ作成はもちろんホームページリニューアルやスマホ対応もお任せ下さい。`,//このページのディスクリプション
  slug: `renewal`,//このページのslug
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
    <body className='renewal' />  
    <Seo title2={pagemeta.title} description={pagemeta.description} />
    <script type='application/ld+json'>{JSON.stringify(jsonLd)}</script>
  </>
);

const RenewalIndex = ({ data }) => {
  

  const portfolios = data.allMicrocmsPortfolio.edges;
  // ランダムな20件のポートフォリオを選択
  const randomPortfolios = [...portfolios].sort(() => 0.5 - Math.random()).slice(0, 8);
  return (
    <>
      <Header />

      <div id='mainimage-sub'>
        <h1>{pagemeta.subtitle}</h1>
        <p>{pagemeta.slug}</p>
      </div>

      <nav aria-label='Breadcrumb' id='breadcrumb'>
        <ul>
          <li>
            <a href='https://www.blanc.to/'>ホーム</a>
          </li>
          <li>{pagemeta.subtitle}</li>
        </ul>
      </nav>

      <Layout slug='renewal'>
        <h2>ホームページ作成198,000円</h2>
        <h3>スマホ・常時SSL・ワードプレスにも対応</h3>

        <div className='flex-wrap'>
          {randomPortfolios.map(({ node }) => (
            <div className='works_box' key={node.id}>
              <Link href={'/portfolio/' + node.portfolioId + '/'} className='works_img'>
                <img src={node.eyecatch.url + '?fm=webp'} width={370} height={277} alt={node.title + 'サムネイル画像'} loading='lazy' />
              </Link>
              <p>
                <Link href={'/portfolio/' + node.portfolioId + '/'}>{node.title}</Link>
              </p>
            </div>
          ))}
        </div>

        <div className='list_renewal'>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              ホームページを新しく作りたい。
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              ホームページをリニューアルしたい。
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              ホームページを速くしたい。
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              ホームページから集客できるようにしたい。
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              ホームページをスマホ対応にしたい。
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              ホームページをSSL対応にしたい。
            </li>
          </ul>
        </div>

        <h3>
          制作費用　<span className='red bold txt38'>198,000</span>円（税込）（5ページ以内）
        </h3>

        <div className='list03'>
          <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              ご希望のデザインでホームページを新しく作り変えます。
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              ヒアリングを元にお伝え頂いた色味や雰囲気でWEBデザイナーがデザイン案を作成します。
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              デザイン案の修正や変更はご納得頂けるまで行います。
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              5ページを超える場合は別途お見積り。
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} />
              一般的な問い合わせフォーム1個設置。ページ数含みません。
            </li>
          </ul>
        </div>

        <h3>基本的なSEO対策</h3>
        <div className='list01'>
          <ul>
            <li>
              <span className='bg_marker'>
                <FontAwesomeIcon icon={faPen} />
                Googleの仕様に沿ったコーディングでご希望のキーワードで上位表示のお手伝い。
              </span>
              <br />
              <span className='txt14'>
                ※さらに検索上位表示をご希望の場合は<Link to='/region-seo/'>SEO対策</Link>を併せてご検討下さい。
              </span>
            </li>
          </ul>
        </div>

        <h3>スマホ対応</h3>
        <div className='list01'>
          <ul>
            <li>
              <span className='bg_marker'>
                <FontAwesomeIcon icon={faPen} />
                スマホ対応（レスポンシブ）を行います。
              </span>
              <br />
              <span className='txt14'>
                ※<Link to='/responsive/'>スマホ対応の詳しいご説明はこちらから。</Link>
              </span>
            </li>
          </ul>
        </div>

        <h3>常時SSL対応</h3>
        <div className='list01'>
          <ul>
            <li>
              <span className='bg_marker'>
                <FontAwesomeIcon icon={faPen} />
                常時SSL対応でセキュリティも安心。
              </span>
              <br />
              <span className='txt14'>
                ※サーバー会社提供の無料SSLを使用します。
                <br />
                ※ドメイン認証や企業認証については別途ご相談。{' '}
              </span>
            </li>
          </ul>
        </div>

        <h3>Wordpress（ワードプレス）対応</h3>
        <div className='list01'>
          <ul>
            <li>
              <span className='bg_marker'>
                <FontAwesomeIcon icon={faPen} />
                ワードプレスにてサイト作成します。
              </span>
              <br />
              <span className='txt14'>※ワードプレスが不要な場合は168,000円。</span>
            </li>
          </ul>
        </div>

        <h3>blancサポート・ベーシックの割引</h3>
        <div className='list01'>
          <ul>
            <li>
              <span className='bg_marker'>
                <FontAwesomeIcon icon={faPen} />
                面倒なホームページの更新や修正も月3回～ご依頼頂けます。
              </span>
              <br />
              <span className='txt14'>
                ※<Link to='/price/'>blancサポート・ベーシック</Link>が月額5,000円＋税（弊社でホームページ制作を行って頂いた方のみ。） ※blancサポートが不要な場合はそのままの価格でのご提供。
              </span>
            </li>
          </ul>
        </div>

        <h3>ホームページ運用相談</h3>
        <div className='list01'>
          <ul>
            <li>
              <span className='bg_marker'>
                <FontAwesomeIcon icon={faPen} />
                ホームページ作成後もわからいない事や集客方法までサポートします。 blancサポートご加入の方のみ。
              </span>
            </li>
          </ul>
        </div>

        <h2>ホームページ作成・リニューアルの流れ</h2>

        <div className='stepbar'>
          <div className='stepbarwrap'>
            <div className='steptitle'>
              <div className='stepcircle'>
                <span>
                  STEP
                  <br />1
                </span>
              </div>
              <div className='title'>
                <h3>お問い合わせ</h3>
                <p>お電話頂くか、HPからお問い合わせフォームを送って下さい。</p>
              </div>
            </div>
            <span className='stepline' />
          </div>
          <div className='stepbarwrap'>
            <div className='steptitle'>
              <div className='stepcircle'>
                <span>
                  STEP
                  <br />2
                </span>
              </div>
              <div className='title'>
                <h3>要件確認</h3>
                <p>ホームページ作成やリニューアルについてお電話やメールにてご希望を確認させて頂きます。</p>
              </div>
            </div>
            <span className='stepline' />
          </div>
          <div className='stepbarwrap'>
            <div className='steptitle'>
              <div className='stepcircle'>
                <span>
                  STEP
                  <br />3
                </span>
              </div>
              <div className='title'>
                <h3>お見積り</h3>
                <p>ご希望を元にお見積りを差し上げます。</p>
              </div>
            </div>
            <span className='stepline' />
          </div>
          <div className='stepbarwrap'>
            <div className='steptitle'>
              <div className='stepcircle'>
                <span>
                  STEP
                  <br />4
                </span>
              </div>
              <div className='title'>
                <h3>お支払い</h3>
                <p>
                  お見積りの金額でよろしければ制作料金をお支払い頂きます。
                  <br />
                  <span className='txt14'>※お支払い方法は銀行振込またはPayPal利用によるクレジットカード払いからご選択いただけます。</span>
                </p>
              </div>
            </div>
            <span className='stepline' />
          </div>
          <div className='stepbarwrap'>
            <div className='steptitle'>
              <div className='stepcircle'>
                <span>
                  STEP
                  <br />5
                </span>
              </div>
              <div className='title'>
                <h3>原稿提示</h3>
                <p>ホームページ作成に使用する素材（会社ロゴや写真など）をお送り頂きます。</p>
              </div>
            </div>
            <span className='stepline' />
          </div>
          <div className='stepbarwrap'>
            <div className='steptitle'>
              <div className='stepcircle'>
                <span>
                  STEP
                  <br />6
                </span>
              </div>
              <div className='title'>
                <h3>デザイン確認</h3>
                <p>
                  打合せ完了後、約1週間でデザイン案を提示致します。
                  <br />
                  <span className='txt14'>※デザイン案の修正や変更はご納得頂けるまで行います。</span>
                </p>
              </div>
            </div>
            <span className='stepline' />
          </div>
          <div className='stepbarwrap'>
            <div className='steptitle'>
              <div className='stepcircle'>
                <span>
                  STEP
                  <br />7
                </span>
              </div>
              <div className='title'>
                <h3>コーディング</h3>
                <p>
                  デザイン案を基にコーディングを開始します。
                  <br />
                  （コーディング期間約2週間～3週間）
                </p>
              </div>
            </div>
            <span className='stepline' />
          </div>
          <div className='stepbarwrap'>
            <div className='steptitle'>
              <div className='stepcircle'>
                <span>
                  STEP
                  <br />8
                </span>
              </div>
              <div className='title'>
                <h3>サイトアップ</h3>
                <p>ホームページ運用開始</p>
              </div>
            </div>
            <span className='stepline' />
          </div>
        </div>

        <p className='center'>
          <img src='/images/img_call.png' alt='' />
        </p>
        <p className='center'>
          <Link to='/renewal/renewal-order/'>
            <img src='/images/contact_bt3.png' alt='メールでのお申し込みはこちら' width={760} height={114} />
          </Link>
        </p>
      </Layout>
    </>
  );
};

export default RenewalIndex;






export const query = graphql`
  query {
    
    allMicrocmsPortfolio {
      edges {
        node {
          eyecatch {
            url
          }
          title
          date(formatString: "YYYY年MM月DD日")
          portfolioId
        }
      }
    }
  }
`;
