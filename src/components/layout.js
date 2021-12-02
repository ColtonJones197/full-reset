import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div className="home-heading">
        <div><StaticImage src="../images/masthead.png" alt="masthead" /></div>
        <div>
          <StaticImage src="../images/site-logo.png" alt="site logo" />
        </div>
      </div>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        <StaticImage className="header-icon-out-page" src="../images/site-logo.svg" 
        alt="icon"/>{title}
      </Link>
    )
  }

  return (
    <div>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="global-header">{header}</header>
        <main>{children}</main>
      </div>
      <footer className="global-footer">
        <div className="footer-content">
          <div><a href="https://www.buymeacoffee.com/ckjones"><FontAwesomeIcon icon={faCoffee} size="lg" /></a></div>
          <div><a href="https://twitter.com/ckjonesdev"><FontAwesomeIcon icon={faTwitter} size="lg" /></a></div>
          <div><a href="https://github.com/ColtonJones197"><FontAwesomeIcon icon={faGithub} size="lg" /></a></div>
          <div><a href="https://www.linkedin.com/in/colton-jones/"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a></div>
          <div className="col-span-2"><span>&copy; CK Jones 2021</span></div>
        </div>
      </footer>
      
    </div>
  )
}

export default Layout
