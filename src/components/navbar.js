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
          <Link to="/page-2">Second Page</Link>
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
