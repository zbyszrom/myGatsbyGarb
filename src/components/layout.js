import React from "react"
import PropTypes from "prop-types"
import Navbar from "./navbar"
import Footer from "./footer"
import "../styles/layout.css"

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
