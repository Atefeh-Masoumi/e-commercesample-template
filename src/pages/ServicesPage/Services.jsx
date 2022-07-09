import React from "react";
import Footer from "../../component/Footer/FooterPage";
import "./Services.css";
const ServicesPage = () => {
  return (
    <>
     

        <section className="we-offer-area text-center bg-gray">
          <div className="container">
            <div className="row row-servicespage">
              <div className="col-md-12">
                <div className="site-heading text-center">
                  <h2>
                    What we <span>Offer</span>
                  </h2>
                  <h4>Lorem Ipsum is simply dummy text</h4>
                </div>
              </div>
            </div>
            <div className="row our-offer-items less-carousel">
              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <i className="fas fa-pen-fancy"></i>
                  <h4>Project creation</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              {/* End Single Item  */}

              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <i className="fas fa-dharmachakra"></i>
                  <h4>Discount Offers</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              {/* End Single Item  */}

              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <i className="fas fa-tasks"></i>
                  <h4>Free Shipping</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              {/* End Single Item  */}

              {/* Single Item  */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <i className="fas fa-tachometer-alt"></i>
                  <h4>Warrenty</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              {/* End Single Item */}

              {/* Single Item  */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <i className="fas fa-recycle"></i>
                  <h4>Best Price</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              {/* End Single Item  */}

              {/* Single Item */}
              <div className="col-md-4 col-sm-6 equal-height">
                <div className="item">
                  <i className="fas fa-headset"></i>
                  <h4>24/7 Support</h4>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
              {/* End Single Item  */}
            </div>
          </div>
        </section>
   

      <div className="footer-div-servicepage">
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
