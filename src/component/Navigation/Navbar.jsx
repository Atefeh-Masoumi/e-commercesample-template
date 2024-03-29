import submenu1 from "../../asset/submenu lenz.jpg";
import submenu2 from "../../asset/watchspecialoffer.jpg";
import { useState } from "react";
import React from "react";
import search from "../../asset/search.png";
import logo from "../../asset/dana team logo1-03.png";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../Providers/CartProvider";
import { useAuth } from "../../Providers/AuthProvider";
import {
  BsFillPersonFill,
  BsCart3,
  BsJustify,
  BsPersonPlusFill,
} from "react-icons/bs";
import * as data from "../../data";
import "./navbar.css";
import {RiArrowDropDownLine} from 'react-icons/ri';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBNavbarNav,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBBadge,

} from "mdb-react-ui-kit";

const Navbar = () => {
  // cart contex
  const { cart } = useCart();
  // user contex
  const userData = useAuth();

  //mobile menu state
  const [showNavNoToggler, setShowNavNoToggler] = useState(false);

  //search modal
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  // search function
  const [filter, setFilter] = useState([]);
  const handleSearch = (e) => {
    const searchWord = e.target.value;
    const newFilter = data.products.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    setFilter(newFilter);
  };

//productsubmenu state
  const [show, setShow] = useState(false);
  
  // logout function
  const logoutHandler = () => {
    localStorage.removeItem("auth token");
    window.location.reload();
  };

  return (
    <header className="">
      <div className="container">
        <div className="navbar-content">
          <div className="content-inner">
            <div className="row align-items-center no-gutters">
              <div className="col-8 branding-col">
                <Link to={"/"}>
                  <img src={logo} alt="logo" width={"57px"} height={"57px"} />
                </Link>
                {/* search bar */}
                <div className="search">
                  <div className="d-flex justify-content-start">
                    <div
                      type="submit"
                      className="sub-search"
                      onClick={toggleShow}
                      
                    >
                    <img src={search} style={{marginTop:"10px"}}/>
                    </div>
                    <input
                      name="searchbar"
                      type="text"
                      placeholder="Search..."
                      className="search-text left-20"
                      onChange={handleSearch}
                    />
                  </div>
                </div>
              </div>

              <div className="col-4 function-col d-flex justify-content-evenly">
                {/* login */}
                <div className="d-flex">
                  <NavLink
                    to={userData ? "/profile" : "/login"}
                    className={(navData) => (navData.isActive ? "" : "")}
                  >
                    {userData ? (
                      <MDBNavbarBrand href="#" className="mt-3">
                        <MDBDropdown>
                          <MDBDropdownToggle
                            tag="a"
                            className=""
                            style={{ width: "70px", height: "70px" }}
                          >
                            <BsFillPersonFill className="profile-icon  w-100" />
                          </MDBDropdownToggle>
                          <MDBDropdownMenu>
                            <MDBDropdownItem>
                              <MDBDropdownLink href="/profile">
                                My Account
                              </MDBDropdownLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBDropdownLink href="/profile">
                                History
                              </MDBDropdownLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              {userData ? (
                                <MDBDropdownLink
                                  href="#"
                                  onClick={logoutHandler}
                                >
                                  log out
                                </MDBDropdownLink>
                              ) : null}
                            </MDBDropdownItem>
                          </MDBDropdownMenu>
                        </MDBDropdown>
                      </MDBNavbarBrand>
                    ) : (
                      <BsPersonPlusFill
                        className="firstseenprofile mt-4"
                        style={{ width: "30px", height: "30px" }}
                      />
                    )}
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
                  <div className="">
                    <p className="mt-4 d-none d-sm-flex">My Cart</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* modal for search */}
        {/* if the serachword didnt found any thing */}
        {filter.length == 0 && (
          <div className="d-flex row">
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
              <MDBModalDialog>
                <MDBModalContent>
                  <MDBModalHeader>
                    <MDBModalTitle>Modal title</MDBModalTitle>
                    <MDBBtn
                      className="btn-close"
                      color="none"
                      onClick={toggleShow}
                    ></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody>Nothing Found</MDBModalBody>

                  <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={toggleShow}>
                      Close
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
          </div>
        )}
        {/* search list Modal */}
        {filter.length !== 0 && (
          <div className="d-flex row">
            <MDBModal show={basicModal} setShow={setBasicModal} tabIndex="-1">
              <MDBModalDialog>
                <MDBModalContent>
                  <MDBModalHeader>
                    <MDBModalTitle>Product list</MDBModalTitle>
                    <MDBBtn
                      className="btn-close"
                      color="none"
                      onClick={toggleShow}
                    ></MDBBtn>
                  </MDBModalHeader>
                  <MDBModalBody>
                    {filter.map((value, key) => {
                      return (
                        <MDBCard style={{ maxWidth: "22rem" }} key={value.id}>
                          <MDBRipple
                            rippleColor="light"
                            rippleTag="div"
                            className="bg-image hover-overlay"
                          >
                            <MDBCardImage
                              src={value.image}
                              fluid
                              alt={value.name}
                            />
                            <a>
                              <div
                                className="mask"
                                style={{
                                  backgroundColor: "rgba(251, 251, 251, 0.15)",
                                }}
                              ></div>
                            </a>
                          </MDBRipple>
                          <MDBCardBody className="d-flex justify-content-between">
                            <MDBCardTitle>{value.name} </MDBCardTitle>

                            <MDBBtn href="/productdetail">Detailpage</MDBBtn>
                          </MDBCardBody>
                        </MDBCard>
                      );
                    })}
                  </MDBModalBody>

                  <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={toggleShow}>
                      Close
                    </MDBBtn>
                  </MDBModalFooter>
                </MDBModalContent>
              </MDBModalDialog>
            </MDBModal>
          </div>
        )}
        {/* Main menu */}
        <div className="top-navbar align-center mt-4">
          <div className="left">
            <MDBNavbar expand="lg" className="p-1">
              <MDBContainer fluid className="">
                <MDBNavbarToggler
                  type="button"
                  data-target="#navbarTogglerDemo02"
                  aria-controls="navbarTogglerDemo02"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  className=""
                  onClick={() => setShowNavNoToggler(!showNavNoToggler)}
                >
                  <BsJustify icon="bars" />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showNavNoToggler}>
                  <MDBNavbarNav
                    right
                    className="mr-auto mb-2 mb-lg-0 stroke bg-sm-white"
                  >
                    <MDBNavbarItem>
                      
                        <Link to={"/"} className="text-dark">
                        Home
                        </Link>
                        
                      
                    </MDBNavbarItem>
                    <MDBNavbarItem className="">
                      <MDBNavbarLink
                        active
                        aria-current="page"
                        cursor="pointer"
                        className="productmenu"
                        onClick={() => setShow(!show)}
                      >
                        Product <RiArrowDropDownLine className="dropdown-icon"fontSize={20} />
                      </MDBNavbarLink>

                      {/* submenu */}
                      <div
                        className="submenu bg-white flex-column"
                        style={{ display: show ? "flex" : "none" }}
                      >
                        <div className="d-flex justify-content-evenly mt-4  bg-white img-submenu">
                          <div>
                            <img src={submenu1} alt="submenu" className="m-2 submenu-img" />

                            <MDBBadge
                              color="danger"
                              notification
                              pill
                              className="badge fs-6"
                            >
                              50%
                            </MDBBadge>
                          </div>
                          <div>
                            <img src={submenu2} alt="submenu-img" className="submenu-img" />
                            <MDBBadge
                              color="danger"
                              notification
                              pill
                              className="badge fs-6 "
                            >
                              15%
                            </MDBBadge>
                          </div>
                        </div>
                        <div className="bg-white categories-submenu">
                          <h3 className="text-center d-flex justify-content-center">
                            Visit our Product
                          </h3>
                          <div className="d-flex justify-content-between  fs-6 submenue-info">
                            <div className="d-flex flex-column p-4">
                              <h2>Computer </h2>
                              <Link to={"/products"}>Personal Computer</Link>
                              <Link to={"/products"}>Laptops</Link>
                              <Link to={"/products"}>Tablets</Link>
                            </div>
                            <div className="d-flex flex-column p-4">
                              <h2>Mobile</h2>
                              <Link to={"/products"}>IPhone</Link>
                              <Link to={"/products"}>Other Brands</Link>
                              <Link to={"/products"}>See All Creator</Link>
                            </div>
                            <div className="d-flex flex-column p-4">
                              <h2>Accessories </h2>
                              <Link to={"/products"}>AirPod</Link>
                              <Link to={"/products"}>Digital Watch</Link>
                              <Link to={"/products"}>Camera</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                    <Link to={"/services"} className="text-dark pl-1">
                        Services
                      </Link>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                      
                      <Link to={"/contactus"} className="text-dark mr-1 pr-1">
                        Contact Us
                      </Link>
                    </MDBNavbarItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
          </div>
          <div className="under-nav"></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
