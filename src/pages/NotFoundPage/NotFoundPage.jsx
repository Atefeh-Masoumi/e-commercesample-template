import './NotFoundPage.css';
import Footer from '../../component/Footer/FooterPage.jsx';
import React from 'react';
const NotFoundPage = () => {
    return ( 
        <div className=''>
        <section class="error-container">
            <span class="four"><span class="screen-reader-text">4</span></span>
            <span class="zero"><span class="screen-reader-text">0</span></span>
            <span class="four"><span class="screen-reader-text">4</span></span>
        </section>
        <div className="text-center font-weight-normal fs-4">
            <p>The Page you requested was not Found !</p>
        </div>
        <div class="link-container">
         <a  href="/" class="more-link">Visit hOME pAGE</a>
        </div>
        <Footer/>
        </div>
     );
}
 
export default NotFoundPage;