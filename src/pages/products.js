import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

const getProducts = graphql`
  query {
    Prod: allDatoCmsProduct {
      totalCount
      edges {
        node {
          id
          name
          slug
          price
          description
          image {
            fluid {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Products = () => {
  const response = useStaticQuery(getProducts)
  const products = response.Prod.edges

  return (
    <Layout>
      <h2>Products</h2>
      <h3>{response.Prod.totalCount}</h3>
      {products.map(({ node }) => (
        <div key={node.id}>
          <h3>
            <Link to={`/products${node.slug}`}>{node.name}</Link>
          </h3>
          <p>{node.price}</p>
          <p>{node.description}</p>
          <Img fluid={node.image.fluid} />
        </div>
      ))}
    </Layout>
  )
}

export default Products
