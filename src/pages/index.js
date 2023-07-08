import React from 'react'
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

import Seo from '../components/Seo'
import Header from '../components/Header'
import Service from '../components/Service'
import ContactParts from '../components/ContactParts'
import Footer from '../components/Footer'
import PageTop from '../components/PageTop'

export default function index({data}) {
  const blogs = data.blog.edges;
  const portfolios = data.portfolio.edges;
  return (
    <>
    <PageTop />

    <Header />

    <div id='mainimage'>
      <h1>ホームページ作成<br className='smp' />198,000円から</h1>
      <p className='txt140p'>スマホ・常時SSL・ワードプレスにも対応</p>
      <Link to="/renewal/" className='bt'>詳しく見る</Link>
    </div>
    
    <main role="main">
      <section id='aboutus'>
        <div className='main-content'>
                  
          <div className='about_title'>
            <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 623.62 129.93">
              <rect x="136.42" width="19.49" height="129.92"/>
              <rect x="604.13" y="110.43" width="19.49" height="19.49"/>
              <path d="m48.72,32.48c-10.98,0-21.08,3.68-29.23,9.81l-.05.05V0H.05l-.05,81.15h0v.06c0,26.91,21.81,48.72,48.72,48.72s48.72-21.81,48.72-48.72-21.81-48.72-48.72-48.72h0Zm0,77.94c-16.14,0-29.23-13.09-29.23-29.23s13.09-29.23,29.23-29.23,29.23,13.09,29.23,29.23-13.09,29.23-29.23,29.23Z"/>
              <path d="m272.83,32.48v9.81c-8.15-6.13-18.25-9.81-29.23-9.81-26.91,0-48.72,21.81-48.72,48.72s21.81,48.72,48.72,48.72c10.98,0,21.08-3.68,29.23-9.81v9.81h19.49V32.48h-19.49Zm-29.23,77.95c-16.14,0-29.23-13.09-29.23-29.23s13.09-29.23,29.23-29.23,29.23,13.09,29.23,29.23-13.09,29.23-29.23,29.23Z"/>
              <path d="m543.97,90.95c-4.02,11.35-14.81,19.49-27.53,19.49-16.14,0-29.24-13.09-29.24-29.23s13.09-29.23,29.24-29.23c12.72,0,23.51,8.14,27.53,19.49h20.21c-4.52-22.24-24.17-38.98-47.74-38.98-26.91,0-48.72,21.81-48.72,48.72s21.82,48.72,48.72,48.72c23.57,0,43.23-16.74,47.74-38.98h-20.21Z"/>
              <path d="m380.02,32.48c-26.91,0-48.72,21.81-48.72,48.72v48.72h19.49v-48.72c0-16.14,13.09-29.23,29.24-29.23s29.23,13.09,29.23,29.23v48.72h19.49v-48.72c0-26.91-21.81-48.72-48.72-48.72h0Z"/>
            </svg>について
          </div>

          <div className='flex-wrap'>
            <div className='about_l'>
              <h2>ホームページ制作やHPリニューアル、<br />
              スマホ対応（レスポンシブ化）など。<br />
              HP更新・修正のご相談もお気軽にお問い合わせ下さい!</h2>
                
              <p>ホームページ制作とメンテナンス行なっています。<br />
              定額料金でのホームページ作成やHPリニューアルからホームページの修正などの更新サポート、SEO対策やスマホ対応・レスポンシブ化など承っております。<br />
              2003年の創業以来、ホームページ制作やメンテナンスはインターネット経由のみで打ち合わせや作業が可能という特性を活かし、北海道から沖縄まで全国のお客様から多くのご依頼を頂いております。</p>
            </div>
            <div className='about_r'><StaticImage src='../images/about_img.png' loading="lazy" alt='' /></div>
          </div>

        </div>
      </section>

      <Service />
            
      <section id="works">
        <div className='main-content'>
          <p className='sub-title'><span>Works</span> 製作実績</p>
          <div className='flex-wrap'>
            {portfolios.map(({ node }) => (
              <div className='works_box' key={node.portfolioId}>
                <Link to={'/portfolio/' + node.portfolioId + '/'}>
                  <img src={node.eyecatch.url + '?fm=webp'} width={370} height={277} alt={node.title + 'サムネイル画像'} loading="lazy" />
                </Link>
                <Link to={'/portfolio/' + node.portfolioId + '/'}>
                  <span>{node.title}</span>
                </Link>
              </div>
              
            ))}
          </div>
          <p className='center'><Link to="/portfolio/" className='bt01'>製作実績はこちら</Link></p>
        </div>
      </section>
            
      <section id="news">
        <div className='main-content'>

          <h3 className='sub-title'>Information&amp;Blog</h3>

          <div className="flex-wrap mb60">
            {blogs.map(({ node }) => (
              <div className="news_box" key={node.blogId}>
                <div className="news_img">
                  <img src={node.eyecatch.url + '?fm=webp'} alt={node.title + 'サムネイル画像'} loading="lazy" />
                </div>
                <div className="news_txt">
                  <Link to={node.category.slug + '/' + node.blogId + '/'}>{node.title}</Link>
                </div>
              </div>
            ))}
          </div>        

          <p className="center mtb20"><Link to="/blog/" className="bt01">blogはこちら</Link></p>

        </div>
      </section>

      <ContactParts />

    </main>
    
    <Footer />

    </>
  )
}

const jsonLd = {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BreadcrumbList",
      "@id":"https://www.blanc.to/#breadcrumblist",
      "itemListElement":[
        {
          "@type":"ListItem",
          "@id":"https://www.blanc.to/#listItem",
          "position":1,
          "item":{
            "@type":"WebPage",
            "@id":"https://www.blanc.to/",
            "name":"ホームページ修正・管理のご依頼は有限会社blancへ！他社作成のHPもご相談下さい。",
            "description":"地域ナンバーワンのキーワードに特化したSEO対策の実績多数！集客可能なホームページ作成はもちろんホームページリニューアルやスマホ対応もお任せ下さい。",
            "url":"https://www.blanc.to/"
          },
          "nextItem":"https://www.blanc.to/#listItem"
        }
      ]
    },
    {
      "@type":"Person",
      "@id":"https://www.blanc.to/#person"
    },
    {
      "@type":"WebPage",
      "@id":"https://www.blanc.to/#webpage",
      "url":"https://www.blanc.to/",
      "name":"ホームページ修正・管理のご依頼は有限会社blancへ！他社作成のHPもご相談下さい。",
      "description":"地域ナンバーワンのキーワードに特化したSEO対策の実績多数！集客可能なホームページ作成はもちろんホームページリニューアルやスマホ対応もお任せ下さい。",
      "inLanguage":"ja",
      "isPartOf":{
        "@id":"https://www.blanc.to/#website"
      },
      "breadcrumb":{
        "@id":"https://www.blanc.to/#breadcrumblist"
      },
      "datePublished":"2022-10-04T01:06:53+09:00",
      "dateModified":"2022-12-26T23:31:17+09:00"
    },
    {
      "@type":"WebSite",
      "@id":"https://www.blanc.to/#website",
      "url":"https://www.blanc.to/",
      "name":"ホームページ修正・管理のご依頼は有限会社blancへ！他社作成のHPもご相談下さい。",
      "description":"地域ナンバーワンのキーワードに特化したSEO対策の実績多数！集客可能なホームページ作成はもちろんホームページリニューアルやスマホ対応もお任せ下さい。",
      "inLanguage":"ja",
      "publisher":{
        "@id":"https://www.blanc.to/#person"
      }
    }
  ]
}

export const Head = () => (
  <>
    <Seo
      title2="ホームページ修正・管理のご依頼は有限会社blancへ！他社作成のHPもご相談下さい。"
      keyword="ホームページ修正,ホームページ管理,ホームページ更新,ホームページ作成,ホームページリニューアル,SEO対策,スマホ対応,レスポンシブ対応,構造化データマークアップ"
      description="地域ナンバーワンのキーワードに特化したSEO対策の実績多数！集客可能なホームページ作成はもちろんホームページリニューアルやスマホ対応もお任せ下さい。"
    />
    <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>    
  </>
)

export const query = graphql`
query {

  blog: allMicrocmsBlog(limit: 10, sort: {date: DESC}) {
    edges {
      node {
        title
        blogId
        date(formatString: "YYYY年MM月DD日")
        category {
          slug
          id
        }
        body
        eyecatch {
          url
        }
      }
    }
  }

  portfolio: allMicrocmsPortfolio(limit: 8, sort: {date: DESC}) {
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
`