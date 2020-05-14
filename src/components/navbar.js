import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import netlifyIdentity from "netlify-identity-widget"

const Navbar = () => {
  useEffect(() => {
    netlifyIdentity.init()
  }, [])

  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div data-netlify-identity-menu />
    </>
  )
}
export default Navbar
