import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import headerStyles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.headerContent}>
      <h1 className={headerStyles.h1}>
        <Link className={headerStyles.homeLink} to="/">
          {siteTitle}
        </Link>
      </h1>
      <div className={headerStyles.headerLinksContainer}>
        <Link className={headerStyles.headerLinks} to="/page-2/">
          Me
        </Link>{" "}
        <br />
        <Link className={headerStyles.headerLinks} to="/using-typescript/">
          Blog
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
