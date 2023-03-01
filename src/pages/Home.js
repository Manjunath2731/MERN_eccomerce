import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/patanjali-01.jpg"
                  className="img-fluid rounded-3"
                  alt="main-banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>Grocery</h4>
                  <h5>Starts</h5>
                  <p>from 99₹</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between aligh-items-center">
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-01.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="small-banner-content position-absolute">
                      <h4></h4>
                    </div>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="small-banner-content position-absolute">
                      <h4></h4>
                      <h5></h5>
                      <p></p>
                    </div>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="small-banner-content position-absolute">
                      <h4></h4>
                      <h5></h5>
                      <p></p>
                    </div>
                  </div>
                </div>
                <div className="small-banner position-relative">
                  <img
                    src="images/catbanner-02.jpg"
                    className="img-fluid rounded-3"
                    alt="main-banner"
                  />
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="small-banner-content position-absolute">
                      <h4></h4>
                      <h5></h5>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
