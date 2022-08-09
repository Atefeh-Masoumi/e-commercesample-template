import Footer from "../../component/Footer/FooterPage.jsx";
import LoginForm from "../../component/Login/login";
import React from "react";
import'./loginpage.css';



const Login = () => {
    return ( 
        <>
        <div className="loginform-container">
        <LoginForm/>
        </div> 
        <div className="footer-loginpage">
        <Footer/>
        </div>        
        </>
    );
}
 
export default Login;