import React, { Fragment } from 'react'

export const Footer = () => {
  return (
    <Fragment>
      <footer className="site-footer">
      <div className="site-footer-bg"></div>
      <div className="container">
        <div className="site-footer__top">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="100ms">
              <div className="footer-widget__column footer-widget__logo">
                <a href="index.html"><img src="img/group-22-logo-alt.png" alt="" /></a>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="200ms">

            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="300ms">
              <div className="footer-widget__column footer-widget__explore clearfix">
                <ul className="footer-widget__explore-list list-unstyled">
                  <li><a href="/">Find Project</a></li>
                  <li><a href="/">Fing Candidate</a></li>
                  <li><a href="/">Blog</a></li>
                  <li><a href="/">About</a></li>
                  <li><a href="/">Contact</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="400ms">
              <div className="footer-widget__column footer-widget__newsletter">
                <h3 className="footer-widget__title">Follow Us</h3>
                <div className="site-footer__bottom-social">
                  <a href="/"><i className="fab fa-twitter"></i></a>
                  <a href="/"><i className="fab fa-facebook-square"></i></a>
                  <a href="/"><i className="fab fa-dribbble"></i></a>
                  <a href="/"><i className="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer__bottom">
          <div className="row">
            <div className="col-xl-12">
              <div className="site-footer__bottom-inner">
                <div className="site-footer__bottom-copy">
                  <p>© Copyright 2021 by <a href="/">Group 22 Capstone</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

</Fragment>
  )
}
