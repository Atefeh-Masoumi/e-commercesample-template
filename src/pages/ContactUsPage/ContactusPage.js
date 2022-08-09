import Footer from "../../component/Footer/FooterPage.jsx";
import React from "react";
import "./contactus.css";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
const ContactUsPage = () => {
  return (
    <>
      {/* contact us form */}
      <form className="my-form">
        <div className="container">
          <h1>Get in touch!</h1>
          <ul>
            <li>
              <select>
                <option defaultValue disabled>
                  -- Please choose an option --
                </option>
                <option>Customer Service</option>
                <option>Suggestion</option>
                <option>Other</option>
              </select>
            </li>
            <li>
              <div className="grid grid-2">
                <input type="text" placeholder="Name" required />
                <input type="text" placeholder="Surname" required />
              </div>
            </li>
            <li>
              <div className="grid grid-2">
                <input type="email" placeholder="Email" required />
                <input type="tel" placeholder="Phone" />
              </div>
            </li>
            <li>
              <textarea placeholder="Message"></textarea>
            </li>
            <li>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                I have read and agreed with
                <a href="">the terms and conditions.</a>
              </label>
            </li>
            <li>
              <div className="grid grid-3">
                <div className="required-msg">REQUIRED FIELDS</div>
                <button className="btn-grid" type="submit">
                  <span className="back">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg"
                      alt=""
                    />
                  </span>
                  <span className="front">SUBMIT</span>
                </button>
                <button className="btn-grid" type="reset">
                  <span className="back">
                    <img
                      src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg"
                      alt=""
                    />
                  </span>
                  <span className="front">RESET</span>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </form>

      {/* contact info */}
      <div className="d-flex justify-content-center m-4 contactinfo-section">
        <div className="borderanimation">
          <h3>We are at your Service</h3>
          <div class="d-flex flex-column">
            <div>
              <AiOutlinePhone className="icon-contactus" color="#3f9a59"/>
              <span>lorem ipsum</span>
            </div>
            <div>
              <AiOutlineMail className="icon-contactus" color= ""/>
              <span>lorem ipsum</span>
            </div>
            <div>
              <GoLocation className="icon-contactus" color="#ed1d24"/>
              <span>lorem ipsum</span>
            </div>
            <div>
              <FaFacebookF className="icon-contactus" color= "rgb(34, 89, 238)"/>
              <span>lorem ipsum</span>
            </div>
            <div>
              <FaTwitter className="icon-contactus" color="#1da1f2"/>
              <span>lorem ipsum</span>
            </div>
          </div>
        </div>
        {/* google map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15624092.116566982!2d-88.93636968409682!3d36.4918863647972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ssg!4v1657778117750!5m2!1sen!2ssg"
          
          className="googlemap"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </>
  );
};

export default ContactUsPage;
