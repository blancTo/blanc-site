import React from 'react'
import { useStaticQuery,graphql } from "gatsby"
import { useLocation } from "@reach/router"
import PropTypes from "prop-types"

const SEO = ({ title, title2, description, keyword, image, article }) => {
  const { site } = useStaticQuery(query)
  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    defaultKeyword,
  } = site.siteMetadata
  const { pathname } = useLocation()
  
  const seo = {
    title: title ? `${title} | ${defaultTitle}` : title2 ? `${title2}` : defaultTitle,
    keyword: keyword || defaultKeyword,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  }
  
  return (
    <>
      <title>{seo.title}</title>
      <meta name="Keywords" content={seo.keyword} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {seo.url && <meta property="og:url" content={seo.url} />}
      {(article ? true : null) && <meta property="og:type" content="article" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
      <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
    </>
  )
}
  
export default SEO

export const query = graphql`
query {
  site {
    siteMetadata {
      defaultTitle: title
      defaultKeyword: keyword
      defaultDescription: description
      siteUrl: url
      defaultImage: image
    }
  }
}
`
SEO.propTypes = {
    title: PropTypes.string,
    keyword: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    article: PropTypes.bool,
}
