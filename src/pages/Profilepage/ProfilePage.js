import delivery from '../../asset/delivery in process.png';
import cancelshop from '../../asset/cancelshop.png';
import "./profilePage.css";
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from "../../Providers/AuthProvider";
import {AiOutlineShopping, AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import { useState } from 'react';

const ProfilePage = ({history}) => {
  const [Show, setShow] = useState(true)
    const userInfo = useAuth();
  const logoutHandler = () => {
    localStorage.removeItem("auth token");
    window.location.reload();
  };

    return ( 

      <>
       
        <div className="">
            <h1>Your Profile</h1>
            < div>
                <p className="welcomeMsg"> Welcome {userInfo.name}</p>
                <p className="emailP">Email : {userInfo.email}</p>
                <p>{userInfo.isAdmin ? "You are an admin" : "You are not an admin"}</p>
            </div>
            {userInfo ? (
            <button className="logoutBtn" onClick={logoutHandler}>
                Logout
            </button>
      ) : null}
      </div>
          <div className="profileContainer d-flex flex-row ">
            <div className="col-md-4 d-flex justify-content-center">
              <div className="info-section d-flex flex-column justify-content-center ">
                <div className="user-info m-2 ">
                 <div className="d-flex align-items-center">
                  <FaRegUserCircle fontSize="2em" color="#000" className="usericon" />
                  <p className="user-name fs-5 p-2 pt-4 ">Dear Customer{userInfo.name} </p>
                 </div>
                </div>
                <div className="d-flex flex-column justify-content-center m-2">
                    <div className="position-relative d-flex border-bottom">
                      <AiOutlineShopping  fontSize="2em" color="#000" />
                      <p className="pb-3 fs-5 p-1">Orders</p>
                    </div>
                    <div className="d-flex border-bottom pt-lg-1">
                      <AiOutlineUser fontSize="2em" color="#000"/>
                      <p className="pb-3 fs-5 p-1"> User Info</p>
                    </div>
                    <div className="d-flex pt-lg-1 cursor-pointer">
                      <AiOutlineLogout fontSize="2em" color="#000"/>
                      <p className="pb-3 fs-5 p-1" onClick={logoutHandler}>Logout</p>
                        
                    </div>
                </div>
              </div>

            </div>
            <div className="col-md-8 d-flex flex-column shopinfo">
              <div className="d-flex flex-column border rounded p-2">
                <div className="">
                  <p className='fs-4'>My shopping List</p>
                </div>
                <div className="d-flex flex-1 flex-row flex-start justify-align-content-between m-2 mt-20" onClick={()=>setShow(true)}>
                  
                  <div className="p-2 d-flex">
                    <AiOutlineShopping  fontSize="3em" color="3f9a59"/>
                    <span>active orders</span>
                   
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
              </div>
            </div>
          </div>
       </>
     );
}
 
export default ProfilePage;