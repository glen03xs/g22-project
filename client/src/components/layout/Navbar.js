import React from 'react'
import { Fragment } from 'react/cjs/react.production.min'

export const Navbar = () => {
  return (
    <Fragment>
      <header className="main-header-three clearfix">
        <div className="main-header-three__menu-box clearfix">
          <nav className="main-menu main-menu-three clearfix">
            <div className="main-menu-three__container clearfix">
              <div className="main-menu-three__logo">
                <a href="index.html">
                  <img src="img/group-22-logo.png" alt="" />
                </a>
              </div>
              <div className="main-menu-three__inner-upper clearfix">

                <div className="main-menu-three__inner clearfix">
                  <a href="/" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                  <ul className="main-menu__list">
                    <li className="current">
                      <a href="index.html">Home</a>

                    </li>
                    <li>
                      <a href="/">Find Project</a>
                    </li>
                    <li className="dropdown">
                      <a href="/">Find Candidate</a>

                    </li>
                    <li>
                      <a href="/">Blog</a>
                    </li>
                    <li>
                      <a href="/">About</a>
                    </li>
                    <li><a href="/">Contact</a></li>
                  </ul>
                </div>
              </div>

              <div className="main-menu__right main-menu__right-three">
                <div className="main-menu-three__btn">
                    <a href="signin.html" className="btn btn-alt">Sign In</a>
                    <a href="signup-org.html" className="btn">Sign Up</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>

    <div className="stricky-header stricked-menu main-menu main-menu-three">
      <div className="sticky-header__content"></div>
    </div>
    </Fragment>
  )
}
