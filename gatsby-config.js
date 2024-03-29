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
    keyword: "ホームページ修正,ホームページ管理,ホームページ更新,ホームページ作成,ホームページリニューアル,SEO対策,スマホ対応,レスポンシブ対応,構造化データマークアップ",
    description: "地域ナンバーワンのキーワードに特化したSEO対策の実績多数！集客可能なホームページ作成はもちろんホームページリニューアルやスマホ対応もお任せ下さい。",
    image: "/images/blanc_ogp.jpg",
    siteUrl: "https://www.blanc.to",//スラッシュありだとOGP周りでエラーが出るため「なし」
  },
  plugins: [
    `gatsby-plugin-sass`,
    "gatsby-plugin-smoothscroll",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
            },
          },
        ],
      },
    },

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.API_KEY,
        serviceId: "blanc-site",
        apis: [
          {
            endpoint: "portfolio",
          },
          {
            endpoint: "category",
          },
          {
            endpoint: "blog",
          },
        ],
      },
    },

    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        RewriteBase: "/",
        https: true,
        www: true,
        SymLinksIfOwnerMatch: true,
        host: "www.blanc.to", // if 'www' is set to 'false', be sure to also remove it here!
        ErrorDocument: `          
          ErrorDocument 404 /error_pages/404.html
        `,
        custom: `            
        RewriteRule ^recommendation_ssl/(.*)$ https://www.blanc.to/recommendation-ssl/$1 [L,R=301]
        RewriteRule ^kaijyo_form/(.*)$ https://www.blanc.to/kaijyo-form/$1 [L,R=301]
        RewriteRule ^index.html$ https://www.blanc.to/ [L,R=301]
        RewriteCond %{QUERY_STRING} ^yclid=(.*)$
        RewriteRule ^renewal/$ /renewal/? [R=301,L]
        RewriteRule ^(.*)/$ /$1 [R=301,L]
        RewriteRule ^blog/Right-Click-Hack/$ /blog/right-click-hack/ [R=301,L]
        RewriteRule ^blog/Gmail-SPF/$ /blog/gmail-spf/ [R=301,L]
        RewriteRule ^blog/Server-Change/$ /blog/server-change/ [R=301,L]
        RewriteRule ^blog/Contact-Form-7/$ /blog/contact-form-7/ [R=301,L]
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
        trackingIds: ["G-8NELV8F9BR", "AW-1071175443"],
        pluginConfig: {
          head: true, //head内に設置する設定
        },
        gtagConfig: {
          send_page_view: true, //ユーザが来た時に自動的に送信されるページビューのトラッキングイベント
        },
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.blanc.to/`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        entryLimit: 50000,
        resolveSiteUrl: () => 'https://www.blanc.to/',
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: "https://www.blanc.to/", // サイトのベースURLを指定
        sitemap: "https://www.blanc.to/sitemap-index.xml", // サイトマップのURLを指定
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },

    {
      resolve: "gatsby-plugin-flexsearch",
      options: {
        languages: ["ja"], // 検索対象となる言語を指定します。複数の言語を指定できます。
        type: "allMicrocmsBlog", // 検索対象とするGraphQLの型名を指定します。
        fields: [
          // 検索対象とするフィールドを指定します。
          {
            name: "title", // フィールド名
            indexed: true, // インデックス化するかどうか
            resolver: "frontmatter.title", // フィールドの値を取得するGraphQLリゾルバー
          },
          // 他のフィールドも必要に応じて指定します
        ],
        // インデックス作成時の設定を指定します（オプション）。
        // 詳細な設定は公式ドキュメントを参照してください。
      },
    },
    'gatsby-plugin-netlify',
  ],
};
