import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Page/Page"
import SEO from "../components/Seo/Seo"
import "katex/dist/katex.min.css"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO
        title={ frontmatter.seo.title }
        description={ frontmatter.seo.description }
        keywords={ frontmatter.seo.keywords }
      />
      <h1>{ frontmatter.title }</h1>
      <div className="page-content" dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        seo {
          title
          keywords
          description
        }
      }
    }
  }
`