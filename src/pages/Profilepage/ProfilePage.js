import delivery from "../../asset/deliverycompleted.png";
import cancelshop from "../../asset/cancelshop.png";
import activeorder from "../../asset/inprocess delivery icon.png";
import whishlist from "../../asset/favorites-list-empty.svg";
import "./profilePage.css";
import { FaRegUserCircle } from "react-icons/fa";
import { useAuth } from "../../Providers/AuthProvider";
import {
  AiOutlineLogout,
  AiOutlineUser,
  AiOutlineEdit,
  AiOutlineHistory,
} from "react-icons/ai";
import { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";

const ProfilePage = ({ history }) => {
  // toggling between tab
  const [toggle, setToggle] = useState(1);
  const toggleTab = (index) => {
    setToggle(index);
  };
  //  user login data from context
  const userInfo = useAuth();
  const logoutHandler = () => {
    localStorage.removeItem("auth token");
    window.location.reload();
  };
  // if user logout show this message
  if (!userInfo)
    return (
      <div className="d-flex justify-content-center align-items-center flex-column">
        <h5 className="text-center animate-charcter">Come Back Soon!</h5>
        <a href="/">
          <button className="border-0 d-flex justify-content-center align-items-center mt-3 btngoshop animate-charcter fs-1">
            Visit Home Page
          </button>
        </a>
      </div>
    );

  return (
    <>
      {/* welcome top text */}
      <div className="d-flex align-items-center flex-column mt-100">
        <h1 className="btn-shine text-center"> Welcome {userInfo.name}</h1>
      </div>

      <div className="profileContainer d-flex justify-content-center">
        {/* sidebar */}
        <div className="col-lg-4 col-md-6 d-flex justify-content-center col-sm-12">
          <div className="info-section d-flex flex-column">
            <div className="user-info m-2 d-flex justify-content-between"
             onClick={() => toggleTab(1)}
             
             >
              <div className="d-flex flex-column">
                <div className="d-flex">
                  <FaRegUserCircle
                    fontSize="2em"
                    color="#000"
                    className="usericon"
                  />
                  <p className="user-name fs-5 p-2 ">
                    Dear Customer{userInfo.name}
                  </p>
                </div>
                <div className="">
                  <p className="emailP">Email : {userInfo.email}</p>
                </div>
              </div>
              <div className="d-flex flex-end">
                <AiOutlineEdit fontSize="2em" color="#000" className="" />
              </div>
            </div>

            <div className="d-flex flex-column justify-content-center m-2">
              <div
                className="d-flex justify-content-between border-bottom border-top pt-lg-3 bghover"
                onClick={() => toggleTab(3)}
              >
                <div className="d-flex">
                  <AiOutlineHistory fontSize="2em" color="#000" />
                  <p className="pb-3 fs-5 p-1">Payment History</p>
                </div>
                <div className="d-flex ">
                  <IoIosArrowDropright fontSize="2em" />
                </div>
              </div>
              <div
                className="d-flex justify-content-between border-bottom pt-lg-3 bghover"
                onClick={() => toggleTab(2)}
              >
                <div className="d-flex">
                  <AiOutlineUser fontSize="2em" color="#000" />
                  <p className="pb-3 fs-5 p-1"> User Info</p>
                </div>
                <div className="d-flex ">
                  <IoIosArrowDropright fontSize="2em" />
                </div>
              </div>
              <div
                className="d-flex pt-lg-1 justify-content-between cursor-pointer bghover"
                onClick={() => toggleTab(4)}
              >
                <div className="d-flex">
                  <AiOutlineLogout fontSize="2em" color="#000" />
                  <p className="pb-3 fs-5 p-1">Logout</p>
                </div>
                <div className="d-flex">
                  <IoIosArrowDropright fontSize="2em" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* info of each section */}

        <div className="d-flex flex-column m-3 ">
          <div className="d-flex flex-column border rounded p-2  ">
            <div className=""style={ { display: toggle === 1 ? "flex" : "none" }}>
              <p className="fs-4">My shopping List</p>
            </div>
            <div className="flex-1 m-2 mt-20 shoplist">
              <div className="p-2 d-flex">
                <div className="p-2">
                  <img
                    src={activeorder}
                    alt="activeorder icon"
                    className="shopicon"
                  />
                </div>

                <div className="d-flex flex-column">
                  <span className="mt-2 fs-5">active orders</span>
                  <div className="fs-6 border rounded text-center bg">9</div>
                </div>
              </div>

              <div className="p-2 d-flex">
                <div className="p-2">
                  <img
                    src={delivery}
                    alt="delivered icon"
                    className="shopicon"
                  />
                </div>
                <div className=" d-flex flex-column">
                  <span className="fs-5 mt-2 "> Completed </span>
                  <div className="fs-6 border rounded text-center bg">3</div>
                </div>
              </div>

              <div className="p-2 d-flex flex-row p-2">
                <div className="p-2">
                  <img
                    src={cancelshop}
                    alt="cancleshop"
                    className="cancleshopimg"
                  />
                </div>
                <div className=" d-flex flex-column">
                  <span className=" mt-2 fs-5">Canceled</span>
                  <div className="fs-6 border rounded text-center bg">0</div>
                </div>
              </div>
            </div>
          </div>

          {/* User Info left section */}

          {
            <div
              className=" flex-column border rounded p-2"
              style={ { display: toggle === 2 ? "flex" : "none" }}
            >
              <div className="">
                <p className="fs-4">User Info</p>
              </div>
              <div className="d-flex flex-start justify-content-between m-2 mt-20 flex-wrap">
                <div className="p-2 d-flex flex-column border m-2 w-50 h-auto">
                  <span className="fs-5 ">Name:</span>
                  <span className="fs-5">{userInfo.name || "John Doe"}</span>
                </div>
                <div className="p-2 d-flex flex-column border  m-2 w-50 h-auto">
                  <span className="fs-5 ">Email:</span>
                  <span className="fs-5">
                    
                    {userInfo.email || "  JohnDoe@gmail.com"}
                  </span>
                </div>
                <div className="p-2 border d-flex flex-column m-2 w-50 h-auto">
                  <span className="fs-5">Number:</span>
                  <span> {userInfo.number || "+1 NXX-NXX-XXXX"}</span>
                </div>
              </div>
            </div>
          }
          {/* Payment History info left section */}
          {
            <div
              className=" flex-column border rounded m-2  p-2"
              style={{ display: toggle === 3 ? "flex" : "none" }}
            >
              <div className="">
                <p className="fs-4">Payment History</p>
              </div>
              <div className="d-flex flex-1 flex-column flex-start align-items-center m-2 mt-20">
                <div className="p-2 d-flex">
                  <img src={whishlist} alt="whishlist" />
                </div>
                <div className="p-2 d-flex">
                  <span className="fs-5">
                    
                    Payment History is empty
                  </span>
                </div>
              </div>
            </div>
          }
          {/* log out info lef section */}
          <div
            className="flex-column border rounded m-2 p-2 align-items-center"
            style={{ display: toggle === 4 ? "flex" : "none" }}
          >
            {userInfo && (
              <>
                <h5 className="text-center p-2 mt-2">
                  Are you sure you want to Log Out?{" "}
                </h5>
                <button
                  className="btn rounded-4 p-2"
                  style={{
                    backgroundColor: "#ed1d24",
                    color: "#fff",
                    width: "5rem",
                  }}
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;


