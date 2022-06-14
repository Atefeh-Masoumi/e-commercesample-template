import submenu1 from '../../asset/submenu lenz.jpg';
import submenu2 from '../../asset/saubmenue-mobile.jpg';
import submenu3 from '../../asset/submenu-camera.jpg';
import React, { useState } from 'react';
import logo from "../../asset/footer-logo.png";
import { NavLink } from "react-router-dom";
import { useCart } from '../../Providers/CartProvider';
import { useAuth } from '../../Providers/AuthProvider';
import { BsFillPersonFill, BsCart3 ,BsJustify,BsPersonPlusFill} from "react-icons/bs";
import './navbar.css'

import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink,
    MDBNavbarNav,
  } from 'mdb-react-ui-kit';
const Navbar =()=>{
    const {cart} = useCart();
    
    const userData = useAuth();
   
    const [showNavNoToggler, setShowNavNoToggler] = useState(false);
    return(
        <header className='bg'>
          <div className="container">
            <div className="navbar-content">
                  <div className='content-inner'>
                    <div className='row align-items-center no-gutters'>
                      <div className='col-8 branding-col'>
                        <a href='/'>
                          <img src={logo} alt="logo" width={"57px"} height={"57px"}/>

                        </a>
                        <div className='search'>
                          <div className='d-flex justify-content-start'>
                          <div type="submit" className="sub-search"/>
                          <input name='searchbar' type="text" placeholder='Search...'  className="search-text left-20"/>
                          </div>
                        </div>
                       </div>
                   <div className='col-4 function-col d-flex justify-content-evenly'>
                        {/* login */}
                      <div className='d-flex'>
                        <NavLink to={userData? "/profile" : "/login"} className={(navData)=>navData.isActive ?(""
                          ):""}>{userData? 
                          <MDBNavbarBrand  href='#' className='mt-3'>
                          <MDBDropdown>
                           <MDBDropdownToggle tag='a' className='' style={{width: "70px", height: "70px"}}>
                           <BsFillPersonFill className="profile-icon  w-100"/>
                           </MDBDropdownToggle>
                           <MDBDropdownMenu>
                             <MDBDropdownItem>
                               <MDBDropdownLink href="/profile">My Account</MDBDropdownLink>
                             </MDBDropdownItem>
                             
                             <MDBDropdownItem>
                               <MDBDropdownLink href="/cart">Cart</MDBDropdownLink>
                             </MDBDropdownItem>
                             <MDBDropdownItem>
                               <MDBDropdownLink href="#">log out</MDBDropdownLink>
                             </MDBDropdownItem>
                           </MDBDropdownMenu>
                         </MDBDropdown>                         
                        </MDBNavbarBrand >
                          : <BsPersonPlusFill  className='firstseenprofile mt-4' style={{width: "30px", height: "30px"}}/>}
                        </NavLink>
                        
                    </div>
                        {/*cart */}
                        <div className="cart-profile ">
                          
                            <div className="cartLinkBadge">
                                <NavLink to="/cart">
                                <BsCart3 className="cart-icon" />
                                </NavLink>
                                <span className="cartCount">{cart.length}</span>
                            </div>
                            <div className=''>
                              <p className='mt-4 d-none d-sm-flex'>My Cart</p>
                           </div>
                        </div>

                      </div>

                    </div>
                  </div>

                </div>
                {/* product menu */}
                <div className="top-navbar align-center mt-4">
                    <div className="left">
                      <MDBNavbar expand='lg'  className="p-1" >
                        <MDBContainer fluid className="">
                          <MDBNavbarToggler
                            type='button'
                            data-target='#navbarTogglerDemo02'
                            aria-controls='navbarTogglerDemo02'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            className=''
                            onClick={() => setShowNavNoToggler(!showNavNoToggler)}
                          >
                          <BsJustify icon='bars'/>
                          </MDBNavbarToggler>
                          
                          <MDBCollapse navbar show={showNavNoToggler}>
                            <MDBNavbarNav right className='mr-auto mb-2 mb-lg-0 stroke' >
                              <MDBNavbarItem>
                                {/* <MDBNavbarLink active aria-current='page' cursor='pointer' className='menu1'  href='/product'
                                >
                                    
                                  </MDBNavbarLink> */}
                              
                                {/* submenu show on hover */}
                               
                                   <MDBDropdown>
                                    <MDBDropdownToggle tag='a' className='mt-3'>
                                    Camera
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                      <MDBDropdownItem>
                                        <MDBDropdownLink href="#" className='bg-white border-bottom'>
                                          <div className="d-flex justify-content-between m-2 bg-white">
                                            <img src={submenu1} alt="submenu" className='m-2'/>
                                            <img src={submenu2} alt="submenu-img"/>
                                            <img src={submenu3} alt="submenu-img"/>
                                          </div>
     
                                        </MDBDropdownLink>
                                      </MDBDropdownItem>
                                      <MDBDropdownItem>
                                        <MDBDropdownLink href="/product" className='bg-white'>
                                          <h3 className='text-center'> Also see </h3>
                                          <div className="d-flex justify-content-between flex-row fs-6 ">
                                            <div className="d-flex flex-column p-4">
                                                <a href='/product'> Photography Bags & Cases</a>
                                                <a href='/product'>Memory Cards & Accessories</a>
                                                <a href='/product'>Batteries & Power Accessories</a>
                                                <a href='/product'>Flashes & On Camera Lighting</a>
                                                <a href='/product'>Lens Filters</a>
                                                <a href='/product'>Lens Accessories</a>
                                                <a href='/product'>Photo Accessories</a>
                                            </div>
                                            <div className="d-flex flex-column p-4">
                                              <a href='/product'>Medium & Large Format Accessories</a>
                                              <a href='/product'>Film Cameras</a>
                                              <a href='/product'>Film</a>
                                              <a href='/product'>See All Creator Accessories</a>
                                              <a href='/product'>Lighting & Studio</a>
                                              <a href='/product'>Underwater Photography </a>
                                                                                
                                            </div>
                                          </div>

                                        </MDBDropdownLink>
                                      </MDBDropdownItem>
                                      <MDBDropdownItem>
                                        <MDBDropdownLink href="/product">
                                        
                                        </MDBDropdownLink>
                                      </MDBDropdownItem>
                                      <MDBDropdownItem>
                                        <MDBDropdownLink href="/product">


                                        </MDBDropdownLink>
                                      </MDBDropdownItem>
                                    </MDBDropdownMenu>
                                  </MDBDropdown>
                                  
                                  
                                
                              </MDBNavbarItem>
                              <MDBNavbarItem>
                                <MDBNavbarLink href='/product' className=''>Watch</MDBNavbarLink>
                              </MDBNavbarItem>
                              <MDBNavbarItem>
                                    <MDBNavbarLink href='/product' className=''>Computers</MDBNavbarLink>
                              </MDBNavbarItem>
                              <MDBNavbarItem>
                                    <MDBNavbarLink href='/product' className=''>Mobiles</MDBNavbarLink>
                              </MDBNavbarItem>
                              <MDBNavbarItem>
                                    <MDBNavbarLink href='/product' className=''>Accesories</MDBNavbarLink>
                              </MDBNavbarItem>
                            </MDBNavbarNav>
                          </MDBCollapse>
                        
                        </MDBContainer>

                      </MDBNavbar>
                    </div>
                    <div className='under-nav'>

                    </div>

                </div>
               

          </div>
        </header>
    )
}

export default Navbar;