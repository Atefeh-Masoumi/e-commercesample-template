import Footer from "../../component/Footer/FooterPage";
import "./contactus.css";

const ContactUsPage = () => {
  return (
    <>
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
                <button className="btn-grid" type="reset" >
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
      <Footer/>
    </>
  );
};

export default ContactUsPage;
