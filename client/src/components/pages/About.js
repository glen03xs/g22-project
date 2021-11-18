import React, { Fragment } from 'react'

export const About = () => {
  return (
    <Fragment>
      <h1>This is the about page</h1>

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

    
    </Fragment>
  )
}
