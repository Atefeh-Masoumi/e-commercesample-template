import React, { useState } from 'react';
import logo from "../../asset/footer-logo.png";
import { NavLink } from "react-router-dom";
import { useCart } from '../../Providers/CartProvider';
import { useAuth } from '../../Providers/AuthProvider';
import { BsFillPersonFill, BsCart3 } from "react-icons/bs";
import './navbar.css'
import { MdOutlineAccountCircle } from "react-icons/md";
import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink,
    MDBIcon,
    MDBNavbarNav,
  } from 'mdb-react-ui-kit';
const Navbar =()=>{
    const userData = useAuth();
    
    const [showNavNoToggler, setShowNavNoToggler] = useState(false);
    return(
        <header className='bg'>
            <div className="container ">
                <div className="top-navbar align-center">
                    <div className="left">
                      <MDBNavbar expand='lg'  className="p-1" >
                        <MDBContainer fluid className="col-md-7 ">

                          <MDBNavbarToggler
                            type='button'
                            data-target='#navbarTogglerDemo02'
                            aria-controls='navbarTogglerDemo02'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            className=' '
                            onClick={() => setShowNavNoToggler(!showNavNoToggler)}
                          >
                          <MDBIcon icon='bars' fas />
                          </MDBNavbarToggler>
                          
                          <MDBCollapse navbar show={showNavNoToggler}>
                            <MDBNavbarNav right className='mr-auto mb-2 mb-lg-0 ' >
                              <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page'  cursor='pointer' className=' text-black'>
                                <NavLink to="/" className={(navData)=>navData.isActive ?"activelink":""} >home</NavLink>
                                </MDBNavbarLink>
                              </MDBNavbarItem>
                              <MDBNavbarItem>
                                <MDBNavbarLink href='#About us' className=' '>About US</MDBNavbarLink>
                              </MDBNavbarItem>
                              <MDBNavbarItem>
                                    <MDBNavbarLink href='#Productpage' className='' >Product page</MDBNavbarLink>
                              </MDBNavbarItem>
                              <MDBNavbarItem>
                                    <MDBNavbarLink href='' className=''>viki page</MDBNavbarLink>
                              </MDBNavbarItem>
                              <MDBNavbarItem>
                                    <MDBNavbarLink href='#' className=''>Admin panel</MDBNavbarLink>
                              </MDBNavbarItem>
                            </MDBNavbarNav>
                          </MDBCollapse>

                          <MDBNavbarBrand  href='#' className='mt-2'>
                            <MDBDropdownItem>
                          
                          <NavLink to={userData? "/profile" : "/login"} className={(navData)=>navData.isActive ?"activelink":""}>{userData? <BsFillPersonFill className="profile-icon" />: "login/Signup"}
                        </NavLink>
                        </MDBDropdownItem>
                           <MDBDropdown>
                            <MDBDropdownToggle tag='a' className=''>
                            <MdOutlineAccountCircle width={"40px"} height={"40px"}/> 
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                              <MDBDropdownItem>
                                <MDBDropdownLink href="#">My Account</MDBDropdownLink>
                              </MDBDropdownItem>
                              <MDBDropdownItem>
                                <MDBDropdownLink href="#">Favorite list</MDBDropdownLink>
                              </MDBDropdownItem>
                              <MDBDropdownItem>
                                <MDBDropdownLink href="#">Cart</MDBDropdownLink>
                              </MDBDropdownItem>
                              <MDBDropdownItem>
                                <MDBDropdownLink href="#">log out</MDBDropdownLink>
                              </MDBDropdownItem>
                            </MDBDropdownMenu>
                          </MDBDropdown>

                          
                          
                          </MDBNavbarBrand >
                            
                        
                        </MDBContainer>
                      </MDBNavbar>
                    </div>
                    <div className='right-topnavbar'>

                    </div>

                </div>
                <div className="navbar-content">
                  <div className='content-inner'>
                    <div className='row align-items-center no-gutters'>
                      <div className='col-8 branding-col'>
                        <a href='#'>
                          <img src={logo} alt="logo" width={"57px"} height={"57px"}/>

                        </a>
                      </div>
                      <div className='col-4 function-col'>
                        <nav className='main-nav'>
                          <div>

                          </div>

                        </nav>

                        <div className='search ' >
                          <div className='d-flex justify-content-start'>
                          <div type="submit" className="sub-search"/>
                          <input name='searchbar' type="text" placeholder='search...'  className="search-text"/>
                          
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

            </div>
        </header>
    )
}

export default Navbar;