import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

const getPosts = graphql`
  query {
    allPosts: allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            title
          }
          excerpt
        }
      }
    }
  }
`

const Blog = () => {
  const response = useStaticQuery(getPosts)
  const posts = response.allPosts.edges

  return (
    <Layout>
      <h2>Blog</h2>
      <h3>{response.allPosts.totalCount}</h3>
      {posts.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title}
            <span>>- {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  )
}

export default Blog
