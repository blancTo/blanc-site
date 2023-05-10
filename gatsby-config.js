/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "ホームページ修正・管理のご依頼は有限会社blancへ！他社作成のHPもご相談下さい。",
    keyword:"ホームページ修正,ホームページ管理,ホームページ更新,SEO対策,ホームページ作成,ームページリニューアル,スマホ対応,レスポンシブ対応,構造化データマークアップ",
    description:
      "地域ナンバーワンのキーワードに特化したSEO対策の実績多数！集客可能なホームページ作成はもちろんホームページリニューアルやスマホ対応もお任せ下さい。",
    image: "/images/blanc_ogp.jpg",
    url: "https://www.blanc.to",
    siteUrl: "https://www.blanc.to",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 75, //デフォルトは50
        },
      },
    },
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: process.env.API_KEY,
        serviceId: 'blanc-site',
        apis: [
          {
            endpoint: 'portfolio',
          },
          {
            endpoint: 'category',
          },
          {
            endpoint: "blog",
          },
        ],
      },
    },
    
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: '/',
        https: true,
        www: true,
        SymLinksIfOwnerMatch: true,
        host: 'www.blanc.to', // if 'www' is set to 'false', be sure to also remove it here!
        ErrorDocument: `          
          ErrorDocument 404 /error_pages/404.html
        `,        
        custom: `            
            RewriteRule ^recommendation_ssl/(.*)$ https://www.blanc.to/recommendation-ssl/$1 [L,R=301]
            RewriteRule ^kaijyo_form/(.*)$ https://www.blanc.to/kaijyo-form/$1 [L,R=301]
        `,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5HTVBFJ",
        includeInDevelopment: false,
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["UA-3373199-1"],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.blanc.to/`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://www.blanc.to`,
        sitemap: `https://www.blanc.to/sitemap-0.xml`,
        policy: [{ userAgent: `*`, allow: `/` }],
      },
    },

  ],
}
