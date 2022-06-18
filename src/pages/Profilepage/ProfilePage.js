import delivery from '../../asset/delivery in process.png';
import cancelshop from '../../asset/cancelshop.png';
import "./profilePage.css";
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from "../../Providers/AuthProvider";
import {AiOutlineShopping, AiOutlineLogout, AiOutlineUser,AiOutlineEdit } from "react-icons/ai";
import { useState } from 'react';
import { IoIosArrowDropright } from "react-icons/io";
import{MDBBadge} from 'mdb-react-ui-kit'

const ProfilePage = ({history}) => {

  const [Info, setInfo] = useState(false);
  const [Order, setOrder] = useState(true);
  const [UserInfo, setUserInfo] = useState(true);
 


  //  user login data from context
  const userInfo = useAuth();
  const logoutHandler = () => {
    localStorage.removeItem("auth token");
    window.location.reload();
  };

    return ( 

      <>
       
        <div className=" d-flex align-items-center flex-column mt-100">
            <h1 className='knockout' >Welcome {userInfo.name}</h1>
            < div>
              <h3 className="fs-4"> </h3> 
            </div>
            
      </div>
      
          <div className="profileContainer d-flex flex-row justify-content-center">
            {/* sidebar */}
            <div className="col-md-4 d-flex justify-content-center">
              <div className="info-section d-flex flex-column  ">
                <div className="user-info m-2 d-flex justify-content-between" >
                 <div className="d-flex flex-column " >
                  
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
                      <p className="pb-3 fs-5 p-1">Orders</p>
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
                    <div className="d-flex pt-lg-1 cursor-pointer bghover">
                      <AiOutlineLogout fontSize="2em" color="#000"/>
                      <p className="pb-3 fs-5 p-1">Logout</p>
                    </div>
                </div>
              </div>
            </div>


            {/* info of each section */}
            <div className="col-md-8 d-flex flex-column ">

              { (<div className="d-flex flex-column border rounded p-2">
                <div className="">
                  <p className='fs-4'>My shopping List</p>
                </div>
                <div className="d-flex flex-1 flex-row flex-start justify-content-around m-2 mt-20" >
                  
                  <div className="p-2 d-flex">
                    <AiOutlineShopping  fontSize="3em" color="3f9a59"/>
                    
                    <div>
                    <span className="p-2  mt-2">active orders</span>
                    <MDBBadge color='success' notification rounded className="fs-6" >
                      9+
                    </MDBBadge>
                  </div>
                  </div>

                  <div className="p-2 d-flex"> 
                    <img src={delivery} alt="delivered icon" className='delivery-img'/>
                    <span className='fs-5'> Completed </span>
                  </div>

                  <div className="p-2">
                    <img src={cancelshop} alt='cancleshop' className='cancleshopimg'/>
                    <span>Canceled</span>
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
              {/* Order info left section */}
              { (
                <div className=" flex-column border rounded p-2" style={{ display: Order ? "none" : "flex" }}>
                <div className="">
                  <p className='fs-4'>List of orders</p>
                </div>
                <div className="d-flex flex-1 flex-column flex-start justify-align-content-between m-2 mt-20" >
                  
                  <div className="p-2 d-flex">
                    
                    <span>History of payment</span>
                  </div>
                  <div className="p-2 d-flex"> 
                    <span className='fs-5'>  On going </span>
                  </div>

                  <div className="p-2">
                    <span>  Completed </span>
                  </div>
                </div>
              </div>
              )}
              <div className='flex-column border rounded m-2 d-flex  align-items-center'>
                <h5 className="text-center mt-5">Are you sure you want to Log Out? </h5>
                      {userInfo ? (
                        <button className="btn-danger rounded-4 p-2 " onClick={logoutHandler}>
                            Logout
                        </button>
                  ) : null}
              </div>

            </div>
          </div>
       </>
     );
}
 
export default ProfilePage;