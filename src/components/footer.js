import React from 'react'

import './footer.css'

const Footer = (props) => {
  return (
    <footer className="footer-footer">
      <div className="footer-container">
        <div className="footer-container1">
          <span>Copyright © 2022 Zermous Hosting</span>
        </div>
        <div className="footer-container2">
          <div className="footer-container3">
            <span className="footer-text01 large">Company</span>
            <span className="footer-text02 large">About Us</span>
            <span className="footer-text03 large">Pricing</span>
            <span className="footer-text04 large">Features</span>
          </div>
          <div className="footer-container4">
            <span className="footer-text05 large">Pages</span>
            <span className="footer-text06 large">Login</span>
            <span className="footer-text07 large">Register</span>
            <span className="footer-text08 large">About</span>
          </div>
          <div className="footer-container5">
            <span className="footer-text09 large">Products</span>
            <span className="footer-text10 large">Webservers</span>
            <span className="footer-text11 large">Game Servers</span>
            <span className="footer-text12 large">VPS Servers</span>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/waves-white.svg"
        className="footer-image"
      />
    </footer>
  )
}

export default Footer
