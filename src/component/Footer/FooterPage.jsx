import './footer.css';
import foterlogo from '../../asset/footer-logo.png';
const Footer = () => {
    return ( 
       <footer className="page-footer">
         <div className="footer-content">
           <div className="container">
           <div className="footer-head-content">
             <div className="footer-logo">
               <img src={foterlogo} alt='footer logo' />
             </div>
             <div className="footer-head-content-block"></div>

            </div>
            <div className="footer-main-content">

            </div>
            </div>
          </div>

       </footer>
     );
}
 
export default Footer;