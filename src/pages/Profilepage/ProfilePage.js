import delivery from '../../asset/delivery in process.png';
import cancelshop from '../../asset/cancelshop.png';
import whishlist from"../../asset/favorites-list-empty.svg";
import "./profilePage.css";
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from "../../Providers/AuthProvider";
import {AiOutlineShopping, AiOutlineLogout, AiOutlineUser,AiOutlineEdit } from "react-icons/ai";
import { useState } from 'react';
import { IoIosArrowDropright } from "react-icons/io";
import{MDBBadge} from 'mdb-react-ui-kit';

const ProfilePage = ({history}) => {

  const [Logout, setLogout] = useState(true);
  const [Order, setOrder] = useState(true);
  const [UserInfo, setUserInfo] = useState(true);
 


  //  user login data from context
  const userInfo = useAuth();
  const logoutHandler = () => {
    localStorage.removeItem("auth token");
    window.location.reload();
  };
  if (!userInfo)
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <h5 className="text-center animate-charcter">Come Back Soon!</h5>
      <a href='/'>
        <button className="border-0 d-flex justify-content-center align-items-center mt-3 btngoshop animate-charcter fs-1">Visit Home Page </button> 
      </a>
    </div>
  )
    return ( 

      <>
       {/* welcome top text */}
        <div className=" d-flex align-items-center flex-column mt-100">
            <h1 className='btn-shine text-center'> Welcome {userInfo.name}</h1>
      </div>
      
          <div className="profileContainer d-flex flex-row justify-content-center">
            {/* sidebar */}
            <div className="col-md-4 d-flex justify-content-center">
              <div className="info-section d-flex flex-column  ">
                <div className="user-info m-2 d-flex justify-content-between" >
                 <div className="d-flex flex-column">
                  
                    <div className="d-flex">
                      <FaRegUserCircle fontSize="2em" color="#000" className="usericon" />
                      <p className="user-name fs-5 p-2 ">Dear Customer{userInfo.name} </p>
                    </div>

                  <div className="">
                    <p className="emailP">Email : {userInfo.email}</p>
                  </div>

                 </div>
                 <div className='d-flex flex-end'>
                    <AiOutlineEdit fontSize="2em" color="#000" className=''/>
                  </div>
                </div>


                <div className="d-flex flex-column justify-content-center m-2">
                    <div className="d-flex justify-content-between border-bottom border-top pt-lg-3 bghover" onClick={()=>setOrder( !Order)}>
                    <div className='d-flex' >
                      <AiOutlineShopping  fontSize="2em" color="#000" />
                      <p className="pb-3 fs-5 p-1">whishlist</p>
                      </div>
                      <div className="d-flex "  >
                       <IoIosArrowDropright fontSize="2em"/>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between border-bottom pt-lg-3 bghover" onClick={()=>setUserInfo(!UserInfo)}>

                      <div className='d-flex' >
                        <AiOutlineUser fontSize="2em" color="#000"/>
                        <p className="pb-3 fs-5 p-1"> User Info</p>
                      </div>
                      <div className="d-flex "  >
                       <IoIosArrowDropright fontSize="2em"/>
                      </div>
                      
                    </div>
                    <div className="d-flex pt-lg-1 justify-content-between cursor-pointer bghover" onClick={()=>setLogout(!Logout)}>
                      <div className='d-flex'>
                        <AiOutlineLogout fontSize="2em" color="#000"/>
                        <p className="pb-3 fs-5 p-1">Logout</p>
                      </div>
                      <div className="d-flex">
                       <IoIosArrowDropright fontSize="2em"/>
                      </div>
                    </div>
                </div>
              </div>
            </div>


            {/* info of each section */}
            <div className="col-md-8 d-flex flex-column m-3">

              { (<div className="d-flex flex-column border rounded p-2">
                <div className="">
                  <p className='fs-4'>My shopping List</p>
                </div>
                <div className="d-flex flex-1 flex-row flex-1 m-2 mt-20" >
                  
                  <div className="p-2 d-flex">
                    <div className='p-2'>
                      
                    <AiOutlineShopping  fontSize="4em" color="3f9a59"/>
                    </div>
                    
                    <div className=" d-flex flex-column">
                    <span className=" mt-2 fs-5">active orders</span>
                    <div className="fs-6 border rounded text-center bg" >
                      9
                    </div>
                  </div>
                  </div>

                  <div className="p-2 d-flex">
                    <div className='p-2'> 
                     <img src={delivery} alt="delivered icon" className='delivery-img'/>
                    </div>
                    <div className=" d-flex flex-column">
                      <span className='fs-5 mt-2 '> Completed </span>
                      <div className="fs-6 border rounded text-center bg" >
                          3
                      </div>
                    </div>
                  </div>

                  <div className="p-2 d-flex flex-row p-2">
                    <div className='p-2'>
                     <img src={cancelshop} alt='cancleshop' className='cancleshopimg'/>
                    </div>
                    <div className=" d-flex flex-column">
                      <span className=" mt-2 fs-5">Canceled</span>
                      <div className="fs-6 border rounded text-center bg" >
                        0
                      </div>
                    </div>
                  </div>
                </div>
              </div>) }

            {/* User Info left section */}

              { (
                <div className=" flex-column border rounded p-2" style={{ display: UserInfo ? "none" : "flex" }}>
                <div className="">
                  <p className='fs-4'>User Info</p>
                </div>
                <div className="d-flex flex-start justify-content-between m-2 mt-20 flex-wrap" >
                  <div className="p-2 d-flex flex-column border m-2 w-50 h-auto">
                    <span className='fs-5 '>Name:</span>
                    <span className='fs-5'>{userInfo.name || "John Doe"}</span>
                  </div>
                  <div className="p-2 d-flex flex-column border  m-2 w-50 h-auto"> 
                    <span className='fs-5 '>Email:</span>
                    <span className='fs-5'> {userInfo.email || "  JohnDoe@gmail.com"}</span>
                  </div>
                  <div className="p-2 border d-flex flex-column m-2 w-50 h-auto">
                    <span className='fs-5'>Number:</span>
                    <span> {userInfo.number || "+1 NXX-NXX-XXXX"}</span>
                  </div>
                </div>
              </div>
              ) }
              {/* Whish list info left section */}
              { (
                <div className=" flex-column border rounded m-2  p-2" style={{ display: Order ? "none" : "flex" }}>
                <div className="">
                  <p className='fs-4'>Wishlist</p>
                </div>
                <div className="d-flex flex-1 flex-column flex-start align-items-center m-2 mt-20" >
                  
                  <div className="p-2 d-flex">
                    
                    <img src={whishlist} alt="whishlist"/>
                  </div>
                  <div className="p-2 d-flex"> 
                    <span className='fs-5'>  There is nothing yet in your wishlist </span>
                  </div>

                  
                </div>
              </div>
              )}
              {/* log out info lef section */}
              <div className='flex-column border rounded m-2 p-2 align-items-center' style={{ display: Logout ? "none" : "flex" }}>
                
                      {userInfo ? (<>
                        <h5 className="text-center p-2 mt-2">Are you sure you want to Log Out? </h5>
                        
                        <button className="btn-danger rounded-4 p-2 " onClick={logoutHandler}>
                            Logout
                        </button>
                      </>
                  ) : "Come Back Soon!"}
              </div>

            </div>
          </div>
       </>
     );
}
 
export default ProfilePage;