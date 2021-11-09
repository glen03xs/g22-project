import React, { Fragment } from 'react'

export const Home = () => {
  return (
    <Fragment>
      <section className="main-hero-area">
        <div className="main-hero-area--wrap">
          <div className="main-hero-area--left">
            <div className="main-hero-area--left__content">
              <h2>Organization</h2>
              <h4>Projects</h4>
              <p>Do you have a project in mind but has limited budget? Lorem ipsum dolor sit am adipi we help you ensure everyone is in the right jobs sicing elit</p>
              <a href="signup-org.html" className="btn">Sign Up</a>
            </div>
          </div>
          <div className="main-hero-area--right">
            <div className="main-hero-area--right__content">
              <h2>Candidate</h2>
              <h4>Developer</h4>
              <p>Are you a newbie graduate looking for a project to ? Lorem ipsum dolor sit am adipi we help you ensure everyone is in the right jobs sicing elit</p>
              <a href="signup-can.html" className="btn">Sign Up</a>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4">
              
              <div className="feature-one__single feature-one__single-1">
                <div className="feature-one__content">
                  <h3>Post your Project</h3>
                  <p>Lorem ium dolor sit ametad pisicing elit sed do ut.</p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
            
              <div className="feature-one__single feature-one__single-2">
               
                <div className="feature-one__content">
                  <h3>Collaborate</h3>
                  <p>Lorem ium dolor sit ametad pisicing elit sed do ut.</p>

                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4">
             
              <div className="feature-one__single feature-one__single-3">
              
                <div className="feature-one__content">
                  <h3>Add your Profile</h3>
                  <p>Lorem ium dolor sit ametad pisicing elit sed do ut.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="help-them-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="help-them-two__left">
                <div className="help-them-two-bg" ></div>
                <div className="help-them-two__img">
                  <img src="img/home-section-2-img.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="help-them-two__right">
                <div className="section-title text-left">
                  <span className="section-title__tagline">Collaboration is your solution</span>
                  <h2 className="section-title__title">We match organization with developers</h2>
                </div>
                <div className="help-them-two__bottom">
                  <p className="help-them-two__bottom-text">Lorem ipsum dolor sit am adipi we help you ensure
                    everyone is in the right jobs sicing elit, sed do consulting firms Et leggings
                    across the nation simply free text tempor.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-projects">


      </section>

      <section className="become-volunteer">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="become-volunteer__inner">
                <div className="become-volunteer__left">
                  <h2>Lorem ipsum dolor sit am adipi we help you ensure everyone.</h2>
                </div>
                <div className="become-volunteer__btn-box">
                  <a href="/" className="become-volunteer__btn thm-btn">Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-developers">


      </section>

    </Fragment>
  )
}
