import React from 'react'

import Seo from '../../components/Seo'
import Header from '../../components/Header'
import Layout from '../../components/Layout'

export default function index() {
  return (
    <>
      
      <Header />
      <div id="mainimage-sub">
            <h1>SSGサイト制作</h1>
            <p>SSG</p>
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
                    <span>SSGサイト制作</span>
                    <meta itemProp="position" content="2" />
                </li>
            </ul>
        </div>
      <Layout>
        <p className="center">作成中</p>
      </Layout>
    </>
  )
}

export const Head = () => (
    <>
      <Seo title="SSGサイト制作" />
    </>
  )