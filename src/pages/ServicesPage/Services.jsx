import React from "react";
import Footer from "../../component/Footer/FooterPage";
import "./Services.css";
import { MdPriceCheck, MdLocalShipping, MdSupportAgent } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import {GiReturnArrow} from "react-icons/gi";
const ServicesPage = () => {
  return (
    <>
      {/* our services */}
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
                <i className="">
                  <GiReturnArrow/>
                </i>
                <h4>Free Return</h4>
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
                <i>
                  <MdPriceCheck />
                </i>
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
                <i className="fas fa-tasks">
                  <MdLocalShipping />
                </i>
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
                <i className="">
                  <FaAward />
                </i>
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
                <i className="fas fa-recycle">
                  <BsCurrencyDollar />
                </i>
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
                <i className="fas fa-headset">
                  <MdSupportAgent />
                </i>
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

      {/* Pricing Table */}
      <div id="generic_price_table">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {/* PRICE HEADING START */}
                <div className="price-heading clearfix">
                  <h1>Pricing Table</h1>
                </div>
                {/* PRICE HEADING END */}
              </div>
            </div>
          </div>
          <div className="container">
            {/* BLOCK ROW START */}
            <div className="row">
              <div className="col-md-4">
                {/* PRICE CONTENT START */}
                <div className="generic_content clearfix">
                  {/* HEAD PRICE DETAIL START */}
                  <div className="generic_head_price clearfix">
                    {/* HEAD CONTENT START */}
                    <div className="generic_head_content clearfix">
                      {/* HEAD START */}
                      <div className="head_bg"></div>
                      <div className="head">
                        <span>Basic</span>
                      </div>
                      {/* HEAD END */}
                    </div>
                    {/* HEAD CONTENT END */}

                    {/* PRICE START */}
                    <div className="generic_price_tag clearfix">
                      <span className="price">
                        <span className="sign">$</span>
                        <span className="currency">99</span>
                        <span className="cent">.99</span>
                        <span className="month">/MON</span>
                      </span>
                    </div>
                    {/* PRICE END */}
                  </div>
                  {/* HEAD PRICE DETAIL END */}

                  {/* FEATURE LIST START */}
                  <div className="generic_feature_list">
                    <ul>
                      <li>
                        <span>$ 24</span> Lorem ipsum
                      </li>
                      <li>
                        <span>150</span> Lorem ipsum
                      </li>
                      <li>
                        <span>2</span> Lorem ipsum
                      </li>
                      <li>
                        <span>7</span> Lorem ipsum
                      </li>
                      <li>
                        <span>24/7</span> Lorem ipsum
                      </li>
                    </ul>
                  </div>
                  {/* FEATURE LIST END */}

                  {/* BUTTON START */}
                  <div className="generic_price_btn clearfix">
                    <a className="" href="">
                      Sign up
                    </a>
                  </div>
                  {/* BUTTON END */}
                </div>
                {/* PRICE CONTENT END */}
              </div>

              <div className="col-md-4">
                {/* PRICE CONTENT START */}
                <div className="generic_content active clearfix">
                  {/* HEAD PRICE DETAIL START */}
                  <div className="generic_head_price clearfix">
                    {/* HEAD CONTENT START */}
                    <div className="generic_head_content clearfix">
                      {/* HEAD START */}
                      <div className="head_bg"></div>
                      <div className="head">
                        <span>Standard</span>
                      </div>
                      {/* HEAD END */}
                    </div>
                    {/* HEAD CONTENT END */}

                    {/* PRICE START */}
                    <div className="generic_price_tag clearfix">
                      <span className="price">
                        <span className="sign">$</span>
                        <span className="currency">199</span>
                        <span className="cent">.99</span>
                        <span className="month">/MON</span>
                      </span>
                    </div>
                    {/* PRICE END */}
                  </div>
                  {/* HEAD PRICE DETAIL END */}

                  {/* FEATURE LIST START */}
                  <div className="generic_feature_list">
                    <ul>
                      <li>
                        <span>$ 2</span> Lorem ipsum
                      </li>
                      <li>
                        <span>15</span> Lorem ipsum
                      </li>
                      <li>
                        <span>10</span> Lorem ipsum
                      </li>
                      <li>
                        <span>7</span> Lorem ipsum
                      </li>
                      <li>
                        <span>24/7</span> Lorem ipsum
                      </li>
                    </ul>
                  </div>
                  {/* FEATURE LIST END */}

                  {/* BUTTON START */}
                  <div className="generic_price_btn clearfix">
                    <a className="" href="">
                      Sign up
                    </a>
                  </div>
                  {/* BUTTON END */}
                </div>
                {/* PRICE CONTENT END */}
              </div>
              <div className="col-md-4">
                {/* PRICE CONTENT START */}
                <div className="generic_content clearfix">
                  {/* HEAD PRICE DETAIL START */}
                  <div className="generic_head_price clearfix">
                    {/* HEAD CONTENT START */}
                    <div className="generic_head_content clearfix">
                      {/* HEAD START */}
                      <div className="head_bg"></div>
                      <div className="head">
                        <span>Unlimited</span>
                      </div>
                      {/* HEAD END */}
                    </div>
                    {/* HEAD CONTENT END */}

                    {/* PRICE START */}
                    <div className="generic_price_tag clearfix">
                      <span className="price">
                        <span className="sign">$</span>
                        <span className="currency">299</span>
                        <span className="cent">.99</span>
                        <span className="month">/MON</span>
                      </span>
                    </div>
                    {/* PRICE END */}
                  </div>
                  {/* HEAD PRICE DETAIL END */}

                  {/* FEATURE LIST START */}
                  <div className="generic_feature_list">
                    <ul>
                      <li>
                        <span>2 </span> Lorem ipsum
                      </li>
                      <li>
                        <span>150 </span> Lorem ipsum
                      </li>
                      <li>
                        <span>50</span> Lorem ipsum
                      </li>
                      <li>
                        <span>7</span> Lorem ipsum
                      </li>
                      <li>
                        <span>24/7</span> Support
                      </li>
                    </ul>
                  </div>
                  {/* FEATURE LIST END */}

                  {/* BUTTON START */}
                  <div className="generic_price_btn clearfix">
                    <a className="" href="">
                      Sign up
                    </a>
                  </div>
                  {/* BUTTON END */}
                </div>
                {/* PRICE CONTENT END */}
              </div>
            </div>
            {/* BLOCK ROW END */}
          </div>
        </section>
      </div>

      <div className="footer-div-servicepage">
        <Footer />
      </div>
    </>
  );
};

export default ServicesPage;
