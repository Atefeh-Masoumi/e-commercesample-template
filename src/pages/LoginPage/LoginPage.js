import Footer from "../../component/Footer/FooterPage";
import LoginForm from "../../component/Login/login";
import'./loginpage.css';



const Login = () => {
    return ( 
        <>
        
        <LoginForm/>
        
        <div className="footer-loginpage">
        <Footer/>
        </div>        
        </>
     );
}
 
export default Login;