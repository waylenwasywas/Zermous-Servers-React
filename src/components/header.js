import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import PrimaryPinkButton from './primary-pink-button'
import './header.css'

const Header = (props) => {
  return (
    <div data-role="Header" className="header-header">
      <nav className="header-nav">
        <div className="header-container">
          <Link to="/" className="header-navlink">
            <img
              alt={props.image_alt1}
              src="/playground_assets/zer2cropped-200h.png"
              className="header-image"
            />
          </Link>
          <div className="header-menu">
            <Link to="/" className="header-navlink1 large">
              Home
            </Link>
            <Link to="/profile" className="header-navlink2 large">
              Features
            </Link>
            <Link to="/profile" className="header-navlink3 large">
              Pricing
            </Link>
            <Link to="/coming-soon" className="header-navlink4 large">
              Client Panel
            </Link>
          </div>
          <div className="header-container1">
            <div className="header-container2">
              <a
                href="https://client.zermous.com"
                target="_blank"
                rel="noreferrer noopener"
                className="header-link"
              >
                <PrimaryPinkButton
                  button="Sign Up"
                  className="header-component"
                ></PrimaryPinkButton>
              </a>
            </div>
            <div data-role="BurgerMenu" className="header-burger-menu">
              <svg viewBox="0 0 1024 1024" className="header-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
        </div>
      </nav>
      <div data-role="MobileMenu" className="header-mobile-menu">
        <div className="header-top">
          <Link to="/" className="header-navlink5 large">
            Soft UI Design System
          </Link>
          <div data-role="CloseMobileMenu" className="header-close-menu">
            <svg viewBox="0 0 1024 1024" className="header-icon2">
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu1">
            <Link to="/" className="header-navlink6 large">
              Home
            </Link>
            <Link to="/profile" className="header-navlink7 large">
              Profile
            </Link>
            <Link to="/coming-soon" className="header-navlink8 large">
              Coming Soon
            </Link>
          </div>
        </div>
        <div className="header-bot">
          <PrimaryPinkButton button="buy now"></PrimaryPinkButton>
        </div>
      </div>
    </div>
  )
}

Header.defaultProps = {
  image_alt1: 'image',
  image_src1: '8ee18818-d16f-4c18-8f21-156f5a06d57a',
}

Header.propTypes = {
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
}

export default Header
