import './footer.css';
import foterlogo from '../../asset/footer-logo.png';
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";

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
                <div className="heading-footer">Product Category</div>
                  <nav className="quick-link-list">
                    <div className="menu-container">
                      <ul id="menu" className="menu">
                        <li id="menu-item-6743" className=" menu-item-6743"><a href="/product">Firewall</a></li>
                        <li id="menu-item-6741" className=" menu-item-6741"><a href="/product"> Watch</a></li>
                        <li id="menu-item-6739" className=" menu-item-6739"><a href="/product">Switch</a></li>
                        
                        <li id="menu-item-6744" className=" menu-item-6744"><a href="/product">Router</a></li>
                        <li id="menu-item-6747" className=" menu-item-6747"><a href="/product">Camera</a></li>
                        <li id="menu-item-6745" className=" menu-item-6745"><a href="/product">Laptops</a></li>
                      </ul>
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