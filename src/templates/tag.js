import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../layout'
import PostListing from '../components/PostListing'
import config from '../../data/SiteConfig'

const TagTemplate = ({ data, pageContext }) => (
  <Layout>
    <main>
      <Helmet
        title={`Posts tagged as "${pageContext.tag}" | ${config.siteTitle}`}
      />
      <PostListing postEdges={data.allMarkdownRemark.edges} />
    </main>
  </Layout>
)
export default TagTemplate

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            categories
          }
        }
      }
    }
  }
`
