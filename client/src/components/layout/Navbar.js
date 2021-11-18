import React, { Fragment, useContext } from 'react'
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

export const Navbar = (props) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, signout, user } = authContext;

  const onSignout = () => {
    signout();
  }

  const authLinks = (
    <div className="main-menu-three__profile">
        <a href="signin.html" class="btn-profile"><img src="img/profile-picture-placeholder-sm.png" alt="" /> <span>{ user && user.email}</span></a>
        <a href="#!" className="btn btn-sign-out" onClick={onSignout}>Sign Out</a>
    </div>
  )

  const guestLinks = (
    <div className="main-menu-three__btn">
      <Link to="/signin" className="btn btn-alt">Sign In</Link>
      <Link to="/signup-org" className="btn">Sign Up</Link>
    </div>
  )

  return (
    <Fragment>
      <header className="main-header-three clearfix">
        <div className="main-header-three__menu-box clearfix">
          <nav className="main-menu main-menu-three clearfix">
            <div className="main-menu-three__container clearfix">
              <div className="main-menu-three__logo">
              <Link to="/">
                  <img src="img/group-22-logo.png" alt="" />
                </Link>
              </div>
              <div className="main-menu-three__inner-upper clearfix">

                <div className="main-menu-three__inner clearfix">
                  <a href="/" className="mobile-nav__toggler"><i className="fa fa-bars"></i></a>
                  <ul className="main-menu__list">
                    <li className="current">
                      <Link to="/">Home</Link>

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
                      <Link to="/about">About</Link>
                    </li>
                    <li><a href="/">Contact</a></li>
                  </ul>
                </div>
              </div>

              <div className="main-menu__right main-menu__right-three">
                <div className="main-menu-three__btn">
                  {isAuthenticated ? authLinks :  guestLinks}
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
