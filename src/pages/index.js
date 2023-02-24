import * as React from "react"
import { Link, graphql } from "gatsby"
import { formatReadingTime } from '../utlis/index'

import Bio from "../components/bio"
import Seo from "../components/seo"
import Footer from "../components/footer"
import Layout from "../components/layout"

const BlogIndex = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Bio />

      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <article
                itemScope
                className="post-list-item"
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>

                  <small>
                    {post.frontmatter.date}
                    {` • ${formatReadingTime(post.timeToRead)}`}
                  </small>
                </header>
              </article>
            </li>
          )
        })}
      </ol>

      <Footer />
    </Layout>
  )
}

export default BlogIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        fields {
          slug
        }
        timeToRead
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
        }
      }
    }
  }
`
