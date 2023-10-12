import React from "react";
import Seo from "../../components/Seo";
import Header from "../../components/Header";
import Layout from "../../components/Layout";

const Thanks = () => {
  return (
    <>
      <Header />
      <div id="mainimage-sub">
        <h1>お問い合わせありがとうございました</h1>
        <p>Thanks</p>
      </div>
      <div id="breadcrumb">
        <ul itemType="https://schema.org/BreadcrumbList">
          <li
            className="breadcrumb__item"
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
          >
            <a href="https://www.blanc.to" itemProp="item">
              <span itemProp="name">ホーム</span>
            </a>
            <meta itemProp="position" content="1" />
          </li>
          <li>
            <a href="https://www.blanc.to/toiawase/" itemProp="item">
              <span>お問い合わせ</span>
            </a>
            <meta itemProp="position" content="2" />
          </li>
          <li>
            <span>お問い合わせありがとうございました</span>
            <meta itemProp="position" content="3" />
          </li>
        </ul>
      </div>
      <Layout>
        <h2>お問い合わせありがとうございました</h2>

        <p className="center">
          お問い合わせフォームより確認メールを送信いたしましたのでご確認ください。
          <br />
          なお、お申し込みに関するお問い合わせがございましたら、
        </p>

        <p className="center">
          TEL:0833-45-3838　もしくは　
          <a href="mailto:info@blanc.to">info@blanc.to</a>
        </p>

        <p className="center">
          までお問い合わせください。よろしくお願いいたします。
        </p>

        <p className="center">
          <a href="/">
            <span className="bt02">トップページに戻る</span>
          </a>
        </p>
      </Layout>
    </>
  );
};

export const Head = () => (
  <>
    <Seo title="お問い合わせありがとうございました" />
  </>
);

export default Thanks;
