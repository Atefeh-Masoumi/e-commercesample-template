
import './App.css';

import Homepage from './pages/Home/Homepage';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import CartPage from './pages/Cart/Cart';
import CartProvider from './Providers/CartProvider';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckoutPage from './pages/CheckoutPage';
import Login from './pages/LoginPage';
import SignUp from './pages/SignupPage';
import AuthProvider from './Providers/AuthProvider';
import ProfilePage from './pages/Profilepage/ProfilePage';
import Navbar from './component/Navigation/Navbar';

import ProductPage from './pages/Product/ProductPage';
import DetailProductPage from './pages/DetailProductPage/DetailProductPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ServicesPage from './pages/ServicesPage/Services';
import ContactUsPage from './pages/ContactUsPage/ContactusPage';
import AboutUsPage from './pages/AboutusPage/AboutPage';


function App() {
  return (
    <Router>
      
      <AuthProvider>
      <CartProvider>
        
        <ToastContainer />
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/productdetail' element={<DetailProductPage />} />
          <Route path='/services' element={<ServicesPage/>}/>
          <Route path='/contactus' element={<ContactUsPage/>}/>
          <Route path='/aboutus' element={<AboutUsPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
       
      </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
