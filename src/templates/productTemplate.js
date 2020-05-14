import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"

export const query = graphql`
  query($slug: String!) {
    product: datoCmsProduct(slug: { eq: $slug }) {
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
`

const ProductTemplate = ({ data }) => {
  const { name, price, description, image } = data.product

  return (
    <Layout>
      <h2>{name}</h2>
      <h3>{price}</h3>
      <p>{description}</p>
      <Img fluid={image.fluid} />
    </Layout>
  )
}

export default ProductTemplate
