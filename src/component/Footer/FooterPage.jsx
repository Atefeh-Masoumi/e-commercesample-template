import './footer.css';
import foterlogo from '../../asset/footer-logo.png';
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import { FaFacebookF,FaTwitter } from "react-icons/fa";
const Footer = () => {
    return ( 
       <footer className="page-footer bg">
         <div className="footer-content">
           <div className="container">
           <div className="footer-head-content">
             <div className="footer-logo">
               <img src={foterlogo} alt='footer logo' />
             </div>
             <div className="footer-head-content-block">
               <div className='row no-gutters align-items-center'>
                 <div className="col-12 col-sm-7 right">
                   <nav className="footer-head-nav">
                    <span> Free Shipping </span>
                    <span>Giftcards</span>
                    <span>Returns</span>
                   </nav>
                 </div>
                 <div className="col-12 col-sm-5 left">
                   <div className="phone">
                   <BsFillTelephoneFill />
                      <span className='lineUp'> Call us </span>
                   </div>
                 </div>

                </div>
             </div>

            </div>
            <div className="footer-main-content">
              <div className='row'>
                <div className="col-12 col-sm-3 col-md-2 ">

                </div>
                <div className="col-12 col-sm-9 col-md-10 col-lg-4 newsletter">
                <h6 className="text-uppercase font-weight-bold mb-4">Newsletter</h6>
                  <p className="text-muted mb-4">SIGN UP FOR NEWS AND SPECIAL OFFERS</p>
                  <div className="p-1 rounded border">
                    <div className="input-group">
                      <input type="email" placeholder="Enter your email address" aria-describedby="button-addon1" className="form-control border-0 shadow-0"/>
                      <div className="input-group-append">
                        <button id="button-addon1" type="submit" className="btn btn-link">
                        <AiOutlineSend className='sendicon' />
                        
                          </button>
                      </div>
                    </div>
                  </div>

              </div>
              <div className="col-6 col-sm-4 col-lg-2 quick-link-col quick-link-col-1">
                <div className="quick-link">
                <div className="heading-footer">Help & Support</div>
                  <nav className="quick-link-list">
                    <div className="menu-container">
                      <ul id="menu" className="menu">
                        <li id="menu-item-6743" className=" menu-item-6743"><a href="/product">Help Center</a></li>
                        <li id="menu-item-6741" className=" menu-item-6741"><a href="/product"> Refund Policy</a></li>
                        <li id="menu-item-6739" className=" menu-item-6739"><a href="/product">Report Spam</a></li>
                        
                        
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="col-6 col-sm-4 col-lg-2 quick-link-col quick-link-col-1">
                <div className="social-media">
                <div className="heading-footer">We are at your service</div>
                  <nav className="social-media-list">
                    <div className="menu-container">
                    <div class='social-links'>
                        <div class='social-btn flex-center' id="twitter">
                          <FaTwitter className='twitter'/>
                          <span>Twiter</span>
                        </div>
                      
                        <div class='social-btn flex-center' id="linkedin">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                          </svg>
                          <span> Linkdin</span>
                        </div>

                        <div class='social-btn flex-center' id="facebook">
                        <FaFacebookF className='facebook'/><span>Facebook</span>
                      </div>
                    </div>
                    </div>
                  </nav>
                </div>
              </div>

            </div>
            </div>
          </div>
        </div>
       </footer>
     );
}
 
export default Footer;